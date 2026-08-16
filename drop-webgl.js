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

  float dropletRadius(vec2 q) {
    float a = atan(q.y, q.x);
    return 1.0
      + 0.021 * sin(a * 3.0 + 0.72)
      + 0.012 * sin(a * 5.0 - 1.08)
      + 0.006 * sin(a * 7.0 + 1.91);
  }

  void main() {
    vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);
    vec2 frag = uv * u_resolution;

    vec2 q = (frag - u_center) / max(u_radius, 1.0);
    q.x *= 0.985;
    q.y *= 1.018;

    float contour = dropletRadius(q);
    float r = length(q) / contour;
    float sd = r - 1.0;
    float aa = max(fwidth(sd) * 1.45, 0.0015);
    float dropMask = 1.0 - smoothstep(-aa, aa, sd);

    vec2 shadowQ = (frag - (u_center + vec2(2.0, u_radius * 0.13))) / max(u_radius, 1.0);
    shadowQ.x *= 0.94;
    shadowQ.y *= 1.11;
    float shadowR = length(shadowQ);
    float shadow = (1.0 - smoothstep(0.78, 1.34, shadowR)) * (1.0 - dropMask);
    shadow *= 0.14;

    if (dropMask < 0.001) {
      outColor = vec4(vec3(0.055, 0.175, 0.225), shadow);
      return;
    }

    float safeR = min(r, 0.999);
    float z = sqrt(max(0.0, 1.0 - safeR * safeR));
    vec3 normal = normalize(vec3(q.x, q.y, z * 0.82 + 0.12));

    vec2 centerUV = u_center / u_resolution;
    vec2 deltaUV = uv - centerUV;

    float magnification = mix(0.77, 0.955, smoothstep(0.05, 1.0, safeR));
    vec2 sampleUV = centerUV + deltaUV * magnification;
    vec2 radiusUV = vec2(u_radius) / u_resolution;
    float bendStrength = 0.035 + 0.105 * pow(safeR, 2.25);
    sampleUV -= normal.xy * radiusUV * bendStrength;
    sampleUV = clamp(sampleUV, vec2(0.002), vec2(0.998));

    float chroma = smoothstep(0.72, 1.0, safeR) * 0.72;
    vec2 chromaUV = normal.xy / u_resolution * chroma;
    vec3 scene;
    scene.r = heroBackground(clamp(sampleUV + chromaUV, vec2(0.0), vec2(1.0))).r;
    scene.g = heroBackground(sampleUV).g;
    scene.b = heroBackground(clamp(sampleUV - chromaUV, vec2(0.0), vec2(1.0))).b;

    float fresnel = pow(1.0 - z, 2.55);
    vec3 lightDir = normalize(vec3(-0.48, -0.58, 0.72));
    float ndl = max(dot(normal, lightDir), 0.0);
    float specular = pow(ndl, 74.0) * 0.93;
    float broadSpecular = pow(ndl, 16.0) * 0.16;

    vec3 rimTint = vec3(0.79, 0.935, 0.985);
    scene += rimTint * fresnel * 0.29;
    scene += vec3(1.0) * (specular + broadSpecular);

    vec2 causticQ = vec2(q.x * 1.55, (q.y - 0.53) * 3.7);
    float caustic = exp(-dot(causticQ, causticQ) * 2.2);
    scene += vec3(0.44, 0.78, 0.88) * caustic * 0.16;
    scene *= 1.0 - max(q.y, 0.0) * 0.022;

    float shimmer = sin((q.x * 21.0 + q.y * 17.0) + u_time * 0.0014) * 0.5 + 0.5;
    scene += rimTint * fresnel * shimmer * 0.014;

    float dropAlpha = dropMask * (0.46 + 0.50 * (1.0 - z));
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
      heroYScale: gl.getUniformLocation(program, 'u_heroYScale')
    };

    let cssWidth = 0;
    let cssHeight = 0;
    let pixelRatio = 1;
    let disposed = false;
    let rafId = 0;

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
      const centerX = (lensRect.left + lensRect.width / 2 - stageRect.left) * pixelRatio;
      const centerY = (lensRect.top + lensRect.height / 2 - stageRect.top) * pixelRatio;
      const radius = Math.max(2, Math.min(lensRect.width, lensRect.height) * 0.5 * pixelRatio);
      const heroHeight = Math.max(heroRect.height, 1);
      const heroY0 = (stageRect.top - heroRect.top) / heroHeight;
      const heroYScale = stageRect.height / heroHeight;

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
