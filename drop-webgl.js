(() => {
  const VERTEX_SHADER = `#version 300 es
  precision highp float;
  layout(location = 0) in vec2 a_position;
  out vec2 v_uv;
  void main() {
    v_uv = a_position * 0.5 + 0.5;
    gl_Position = vec4(a_position, 0.0, 1.0);
  }`;

  const FRAGMENT_SHADER = `#version 300 es
  precision highp float;

  in vec2 v_uv;
  out vec4 outColor;

  uniform vec2 u_resolution;
  uniform vec2 u_center;
  uniform float u_radius;
  uniform float u_time;
  uniform float u_heroY0;
  uniform float u_heroYScale;
  uniform float u_glossBoost;
  uniform vec2 u_velocity;
  uniform float u_speed;
  uniform float u_mode2;
  uniform float u_mode3;
  uniform float u_mode4;

  const float WATER_IOR = 1.333;
  const float ETA_AIR_WATER = 1.0 / WATER_IOR;
  const float F0 = 0.02037;

  vec3 heroBackground(vec2 uv) {
    float heroY = clamp(u_heroY0 + uv.y * u_heroYScale, 0.0, 1.0);

    vec3 skyA = vec3(0.871, 0.929, 0.949);
    vec3 skyB = vec3(0.851, 0.914, 0.933);
    vec3 waterA = vec3(0.686, 0.784, 0.816);
    vec3 waterB = vec3(0.471, 0.600, 0.651);

    float waterMix = smoothstep(0.46, 0.98, heroY);
    float skyT = clamp(heroY / 0.5, 0.0, 1.0);
    vec3 color = mix(
      mix(skyA, skyB, skyT),
      mix(waterA, waterB, smoothstep(0.5, 1.0, heroY)),
      waterMix
    );

    vec2 glowP = vec2((uv.x - 0.5) * 0.88, (heroY - 0.36) * 1.12);
    float glow = exp(-dot(glowP, glowP) * 5.1);
    color = mix(color, vec3(0.985, 0.995, 0.998), glow * 0.72);

    float horizon = exp(-pow((heroY - 0.494) / 0.0085, 2.0));
    color += vec3(0.055, 0.070, 0.075) * horizon;
    return color;
  }

  mat2 rot(float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, -s, s, c);
  }

  float capillaryContour(vec2 p, float motionAngle, float stretch) {
    float a = atan(p.y, p.x);
    float c2 = cos(2.0 * (a - motionAngle));
    float c3 = cos(3.0 * a + 0.55);
    float c4 = cos(4.0 * a - 0.35);

    float motionBias = stretch * 0.060 * c2;
    float capillary = u_mode2 * 0.095 * c2
                    + u_mode3 * 0.042 * c3
                    + u_mode4 * 0.020 * c4;

    return 1.0 + motionBias + capillary;
  }

  void main() {
    vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);
    vec2 frag = uv * u_resolution;

    vec2 q = (frag - u_center) / max(u_radius, 1.0);

    float speed = clamp(u_speed, 0.0, 1.0);
    vec2 velocity = u_velocity;
    float vLen = length(velocity);
    vec2 vDir = vLen > 0.001 ? velocity / vLen : vec2(0.0, 1.0);
    float motionAngle = atan(vDir.y, vDir.x);

    vec2 local = rot(-motionAngle) * q;
    float stretch = speed * 0.17 + abs(u_mode2) * 0.045;
    float along = 1.0 + stretch;
    float across = 1.0 / sqrt(max(along, 0.01));
    local.x /= along;
    local.y /= across;
    q = rot(motionAngle) * local;

    float gravityT = smoothstep(-1.0, 1.0, q.y);
    q.x *= mix(1.055, 0.935, gravityT);
    q.y = (q.y + 0.018) * 0.985;

    float contour = capillaryContour(q, motionAngle, speed);
    float r = length(q) / contour;
    float sd = r - 1.0;
    float aa = max(fwidth(sd) * 1.35, 0.00135);
    float dropMask = 1.0 - smoothstep(-aa, aa, sd);

    vec2 shadowQ = (frag - (u_center + vec2(0.0, u_radius * 0.10))) / max(u_radius, 1.0);
    shadowQ.x *= 0.90;
    shadowQ.y *= 1.12;
    float shadowR = length(shadowQ);
    float shadow = (1.0 - smoothstep(0.88, 1.34, shadowR)) * (1.0 - dropMask) * 0.048;
    float causticOutside = exp(-pow(shadowQ.x / 0.62, 2.0) - pow((shadowQ.y - 0.86) / 0.115, 2.0));
    causticOutside *= (1.0 - dropMask) * 0.115 * u_glossBoost;

    if (dropMask < 0.001) {
      vec3 outsideTint = mix(
        vec3(0.055, 0.175, 0.225),
        vec3(0.82, 0.96, 1.0),
        clamp(causticOutside * 6.0, 0.0, 1.0)
      );
      outColor = vec4(outsideTint, shadow + causticOutside);
      return;
    }

    float safeR = min(r, 0.999);
    float z = sqrt(max(0.0, 1.0 - safeR * safeR));
    vec3 normal = normalize(vec3(q.x * 1.05, q.y * 1.05, z * 0.78 + 0.055));
    vec3 viewDir = vec3(0.0, 0.0, -1.0);
    vec3 refracted = refract(viewDir, normal, ETA_AIR_WATER);

    vec2 centerUV = u_center / u_resolution;
    vec2 deltaUV = uv - centerUV;
    vec2 radiusUV = vec2(u_radius) / u_resolution;

    float edgeBend = smoothstep(0.12, 1.0, safeR);
    vec2 snellOffset = refracted.xy * radiusUV * (0.72 + 0.55 * edgeBend);
    vec2 lensCompress = deltaUV * mix(0.88, 0.985, safeR);
    vec2 sampleUV = centerUV + lensCompress + snellOffset;
    sampleUV = clamp(sampleUV, vec2(0.002), vec2(0.998));

    float chroma = smoothstep(0.82, 1.0, safeR) * 0.36;
    vec2 chromaUV = normal.xy / u_resolution * chroma;
    vec3 scene;
    scene.r = heroBackground(clamp(sampleUV + chromaUV, vec2(0.0), vec2(1.0))).r;
    scene.g = heroBackground(sampleUV).g;
    scene.b = heroBackground(clamp(sampleUV - chromaUV, vec2(0.0), vec2(1.0))).b;

    float cosTheta = clamp(z, 0.0, 1.0);
    float fresnel = F0 + (1.0 - F0) * pow(1.0 - cosTheta, 5.0);

    vec3 lightDir = normalize(vec3(-0.52, -0.60, 0.79));
    vec3 halfDir = normalize(lightDir - viewDir);
    float ndh = max(dot(normal, halfDir), 0.0);
    float specular = pow(ndh, 170.0) * 1.18 * u_glossBoost;
    float broadSpecular = pow(ndh, 36.0) * 0.11 * u_glossBoost;

    float drift = sin(u_time * 0.00045) * 0.012;
    vec2 glintQ = vec2((q.x + 0.43 + drift) * 4.4, (q.y + 0.50) * 6.2);
    float glint = exp(-dot(glintQ, glintQ) * 2.2) * dropMask;
    vec2 sparkleQ = vec2((q.x + 0.25) * 9.0, (q.y + 0.70) * 11.0);
    float sparkle = exp(-dot(sparkleQ, sparkleQ) * 2.3) * dropMask;

    vec3 rimTint = vec3(0.78, 0.93, 0.99);
    scene += rimTint * fresnel * (0.36 * u_glossBoost);
    scene += vec3(1.0) * (specular + broadSpecular);
    scene += vec3(1.0, 1.0, 0.995) * glint * (0.52 * u_glossBoost);
    scene += vec3(1.0) * sparkle * (0.28 * u_glossBoost);

    vec2 causticQ = vec2(q.x * 1.35, (q.y - 0.60) * 4.7);
    float caustic = exp(-dot(causticQ, causticQ) * 1.95);
    scene += vec3(0.54, 0.86, 0.95) * caustic * (0.15 * u_glossBoost);

    float edgeOpacity = pow(1.0 - z, 1.10);
    float thinRim = exp(-pow((safeR - 0.975) / 0.021, 2.0));
    float bodyAlpha = 0.020 + 0.52 * edgeOpacity + 0.15 * thinRim;
    float highlightAlpha = glint * 0.13 + sparkle * 0.08 + specular * 0.035;
    float dropAlpha = dropMask * clamp(bodyAlpha + highlightAlpha, 0.0, 0.93);

    vec3 shadowColor = vec3(0.055, 0.175, 0.225);
    float alpha = dropAlpha + shadow * (1.0 - dropAlpha);
    vec3 premul = scene * dropAlpha + shadowColor * shadow * (1.0 - dropAlpha);
    vec3 color = alpha > 0.0001 ? premul / alpha : vec3(0.0);

    outColor = vec4(color, alpha);
  }`;

  function compileShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const error = gl.getShaderInfoLog(shader) || 'Unknown shader error';
      gl.deleteShader(shader);
      throw new Error(error);
    }
    return shader;
  }

  function createProgram(gl) {
    const vertex = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const error = gl.getProgramInfoLog(program) || 'Unknown WebGL link error';
      gl.deleteProgram(program);
      throw new Error(error);
    }
    return program;
  }

  function makeOscillator(frequencyHz, dampingRatio) {
    return { x: 0, v: 0, frequencyHz, dampingRatio };
  }

  function stepOscillator(o, target, dt) {
    const omega = Math.PI * 2 * o.frequencyHz;
    const k = omega * omega;
    const c = 2 * o.dampingRatio * omega;
    const a = k * (target - o.x) - c * o.v;
    o.v += a * dt;
    o.x += o.v * dt;
  }

  window.createWaterDropRenderer = function createWaterDropRenderer({ stage, lens, hero }) {
    if (!stage || !lens || !hero || !window.WebGL2RenderingContext) return null;

    const canvas = document.createElement('canvas');
    canvas.className = 'drop-webgl-canvas';
    canvas.setAttribute('aria-hidden', 'true');

    let gl;
    try {
      gl = canvas.getContext('webgl2', {
        alpha: true,
        antialias: true,
        premultipliedAlpha: false,
        powerPreference: 'high-performance',
        preserveDrawingBuffer: false
      });
    } catch {
      return null;
    }
    if (!gl) return null;

    let program;
    try {
      program = createProgram(gl);
    } catch (error) {
      console.warn('2rasi WebGL drop disabled:', error);
      return null;
    }

    const positions = new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    gl.useProgram(program);
    const positionLocation = 0;
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uniforms = {
      resolution: gl.getUniformLocation(program, 'u_resolution'),
      center: gl.getUniformLocation(program, 'u_center'),
      radius: gl.getUniformLocation(program, 'u_radius'),
      time: gl.getUniformLocation(program, 'u_time'),
      heroY0: gl.getUniformLocation(program, 'u_heroY0'),
      heroYScale: gl.getUniformLocation(program, 'u_heroYScale'),
      glossBoost: gl.getUniformLocation(program, 'u_glossBoost'),
      velocity: gl.getUniformLocation(program, 'u_velocity'),
      speed: gl.getUniformLocation(program, 'u_speed'),
      mode2: gl.getUniformLocation(program, 'u_mode2'),
      mode3: gl.getUniformLocation(program, 'u_mode3'),
      mode4: gl.getUniformLocation(program, 'u_mode4')
    };

    let cssWidth = 0;
    let cssHeight = 0;
    let pixelRatio = 1;
    let disposed = false;
    let rafId = 0;
    let lastTime = 0;
    let previousCenter = null;
    let smoothedVelocity = { x: 0, y: 0 };
    let previousVelocity = { x: 0, y: 0 };

    const mode2 = makeOscillator(3.5, 0.20);
    const mode3 = makeOscillator(5.2, 0.24);
    const mode4 = makeOscillator(7.1, 0.30);

    stage.prepend(canvas);
    stage.classList.add('webgl-active');

    function resizeRenderer() {
      const rect = stage.getBoundingClientRect();
      const nextWidth = Math.max(1, Math.round(rect.width));
      const nextHeight = Math.max(1, Math.round(rect.height));
      const coarse = matchMedia('(pointer: coarse)').matches;
      const maxDpr = coarse ? 1.5 : 1.8;
      const nextRatio = Math.min(window.devicePixelRatio || 1, maxDpr);

      if (nextWidth === cssWidth && nextHeight === cssHeight && Math.abs(nextRatio - pixelRatio) < 0.01) return;

      cssWidth = nextWidth;
      cssHeight = nextHeight;
      pixelRatio = nextRatio;
      canvas.width = Math.max(1, Math.round(cssWidth * pixelRatio));
      canvas.height = Math.max(1, Math.round(cssHeight * pixelRatio));
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    function render(time) {
      if (disposed) return;
      resizeRenderer();

      const stageRect = stage.getBoundingClientRect();
      const lensRect = lens.getBoundingClientRect();
      const heroRect = hero.getBoundingClientRect();
      const centerCssX = lensRect.left + lensRect.width / 2 - stageRect.left;
      const centerCssY = lensRect.top + lensRect.height / 2 - stageRect.top;
      const centerX = centerCssX * pixelRatio;
      const centerY = centerCssY * pixelRatio;
      const radiusCss = Math.max(2, Math.min(lensRect.width, lensRect.height) * 0.5);
      const radius = radiusCss * pixelRatio;
      const heroHeight = Math.max(heroRect.height, 1);
      const heroY0 = (stageRect.top - heroRect.top) / heroHeight;
      const heroYScale = stageRect.height / heroHeight;
      const glossBoost = matchMedia('(pointer: coarse)').matches ? 1.38 : 1.12;

      const now = (time || performance.now()) * 0.001;
      const dt = lastTime > 0 ? Math.min(0.033, Math.max(0.001, now - lastTime)) : 1 / 60;
      lastTime = now;

      if (!previousCenter) previousCenter = { x: centerCssX, y: centerCssY };
      const rawVx = (centerCssX - previousCenter.x) / dt;
      const rawVy = (centerCssY - previousCenter.y) / dt;
      previousCenter.x = centerCssX;
      previousCenter.y = centerCssY;

      const velocityFollow = 1 - Math.exp(-dt * 12.0);
      smoothedVelocity.x += (rawVx - smoothedVelocity.x) * velocityFollow;
      smoothedVelocity.y += (rawVy - smoothedVelocity.y) * velocityFollow;

      const ax = (smoothedVelocity.x - previousVelocity.x) / dt;
      const ay = (smoothedVelocity.y - previousVelocity.y) / dt;
      previousVelocity.x = smoothedVelocity.x;
      previousVelocity.y = smoothedVelocity.y;

      const speedPx = Math.hypot(smoothedVelocity.x, smoothedVelocity.y);
      const speedNorm = Math.min(1, speedPx / Math.max(220, radiusCss * 5.0));
      const accelNorm = Math.min(1, Math.hypot(ax, ay) / Math.max(1200, radiusCss * 26.0));
      const accelSign = Math.sign(ax * 0.65 + ay * 0.35) || 1;

      stepOscillator(mode2, accelSign * accelNorm * 0.72, dt);
      stepOscillator(mode3, -accelSign * accelNorm * 0.36, dt);
      stepOscillator(mode4, accelSign * accelNorm * 0.18, dt);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(positionLocation);
      gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

      gl.uniform2f(uniforms.resolution, canvas.width, canvas.height);
      gl.uniform2f(uniforms.center, centerX, centerY);
      gl.uniform1f(uniforms.radius, radius);
      gl.uniform1f(uniforms.time, time || 0);
      gl.uniform1f(uniforms.heroY0, heroY0);
      gl.uniform1f(uniforms.heroYScale, heroYScale);
      gl.uniform1f(uniforms.glossBoost, glossBoost);
      gl.uniform2f(
        uniforms.velocity,
        smoothedVelocity.x / Math.max(radiusCss, 1),
        smoothedVelocity.y / Math.max(radiusCss, 1)
      );
      gl.uniform1f(uniforms.speed, speedNorm);
      gl.uniform1f(uniforms.mode2, mode2.x);
      gl.uniform1f(uniforms.mode3, mode3.x);
      gl.uniform1f(uniforms.mode4, mode4.x);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafId = requestAnimationFrame(render);
    }

    const resizeObserver = new ResizeObserver(() => {
      cssWidth = 0;
      resizeRenderer();
    });
    resizeObserver.observe(stage);

    canvas.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      disposed = true;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      stage.classList.remove('webgl-active');
      canvas.remove();
    }, { once: true });

    resizeRenderer();
    rafId = requestAnimationFrame(render);

    return {
      active: true,
      setMorph() {},
      resize() {
        cssWidth = 0;
        previousCenter = null;
        resizeRenderer();
      },
      destroy() {
        if (disposed) return;
        disposed = true;
        cancelAnimationFrame(rafId);
        resizeObserver.disconnect();
        stage.classList.remove('webgl-active');
        canvas.remove();
        gl.deleteBuffer(buffer);
        gl.deleteProgram(program);
      }
    };
  };
})();
