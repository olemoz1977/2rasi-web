from pathlib import Path
from PIL import Image, ImageDraw, ImageFont
import math

W, H = 1200, 627
OUT = Path("assets/social")
OUT.mkdir(parents=True, exist_ok=True)

INK = (7, 27, 46)
SOFT = (85, 110, 125)
DEEP = (31, 103, 130)
AQUA = (96, 190, 211)
BG1 = (240, 249, 251)
BG2 = (190, 220, 229)

SANS = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"
SANS_BOLD = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
SERIF = "/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf"

TOOLS = [
    ("leadership-360", "Leadership 360°"),
    ("mirror", "Mirror"),
    ("multipliers", "Multipliers"),
    ("divergent", "Divergent"),
    ("situational-leadership", "Situational Leadership"),
    ("drama-triangle", "Drama Triangle"),
    ("strategic-thinking", "Strategic Thinking"),
    ("2pair", "2Pair"),
    ("workstyle", "WorkStyle"),
    ("priolens", "PrioLens"),
]

def font(path, size):
    return ImageFont.truetype(path, size)

def gradient_bg():
    im = Image.new("RGB", (W, H), BG1)
    px = im.load()
    for y in range(H):
        t = y / (H - 1)
        for x in range(W):
            u = x / (W - 1)
            k = 0.65 * t + 0.15 * u
            px[x, y] = tuple(int(BG1[i] * (1 - k) + BG2[i] * k) for i in range(3))
    return im

def fit(text, maxw, start=94, minimum=48):
    for size in range(start, minimum - 1, -2):
        f = font(SERIF, size)
        if f.getbbox(text)[2] <= maxw:
            return f
    return font(SERIF, minimum)

def rr(draw, box, radius, fill=None, outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)

def common(draw, title, index):
    draw.text((70, 54), "2rasi", font=font(SANS_BOLD, 38), fill=INK)
    draw.text((70, 112), f"{index:02d}", font=font(SANS, 22), fill=SOFT)
    lines = {
        "Leadership 360°": ["Leadership", "360°"],
        "Situational Leadership": ["Situational", "Leadership"],
        "Drama Triangle": ["Drama", "Triangle"],
        "Strategic Thinking": ["Strategic", "Thinking"],
    }.get(title, [title])
    y = 180
    for line in lines:
        f = fit(line, 600)
        draw.text((70, y), line, font=f, fill=INK)
        y += int(f.size * 0.92)
    draw.line((70, 555, 1130, 555), fill=(255, 255, 255), width=2)
    draw.text((70, 574), "LOOK AGAIN · PAŽVELK DAR KARTĄ", font=font(SANS, 18), fill=SOFT)

def leadership(draw):
    cx, cy = 900, 300
    for dx in (-150, 0, 150):
        rr(draw, (cx+dx-58, cy-105, cx+dx+58, cy+105), 24, (235,247,249), (155,198,210), 2)
        draw.ellipse((cx+dx-17, cy-60, cx+dx+17, cy-26), fill=(91,141,159))
        rr(draw, (cx+dx-28, cy-20, cx+dx+28, cy+72), 16, (91,141,159))
    draw.ellipse((cx-33, cy-32, cx+33, cy+34), fill=INK)
    rr(draw, (cx-45, cy+18, cx+45, cy+132), 18, INK)
    draw.line((730,485,1070,485), fill=(111,168,187), width=3)
    for x, label in ((760,"C1"),(900,"90D"),(1040,"C2")):
        draw.ellipse((x-19,466,x+19,504), fill=(241,252,254), outline=DEEP, width=2)
        draw.text((x-14,511), label, font=font(SANS,17), fill=SOFT)

def mirror(draw):
    x0,y0,x1,y1 = 790,145,1045,500
    rr(draw,(x0,y0,x1,y1),95,(235,247,249),(160,199,211),5)
    rr(draw,(x0+18,y0+18,x1-18,y1-18),78,(212,235,241),(120,174,191),2)
    draw.ellipse((872,230,958,316), fill=(81,131,151))
    rr(draw,(846,300,984,458),48,(81,131,151))
    draw.polygon([(815,170),(865,150),(1012,480),(965,495)], fill=(248,253,254))

def multipliers(draw):
    draw.ellipse((845,150,955,260), fill=(225,243,248), outline=DEEP, width=3)
    draw.ellipse((868,173,932,237), fill=(92,151,171))
    for r in (70,105,145):
        draw.ellipse((900-r,315-r/3,900+r,315+r/3), outline=(70,150,174), width=3)
    for x,y,s in ((760,405,62),(900,455,68),(1035,408,62)):
        draw.ellipse((x-s/2,y-s/2,x+s/2,y+s/2), fill=(197,226,234), outline=(109,170,189), width=2)

def divergent(draw):
    for i,ch in enumerate("OCEAN"):
        draw.text((720+i*78,150), ch, font=font(SANS,24), fill=SOFT)
    for i,offset in enumerate((0,22,44,66,88)):
        pts=[]
        for x in range(720,1110,8):
            y=290+offset*0.2+35*math.sin((x-720)/65+i*0.8)
            pts.append((x,y))
        draw.line(pts, fill=(40+20*i,120+12*i,150+10*i), width=5)
    draw.ellipse((935,320,1070,455), outline=INK, width=9)

def situational(draw):
    draw.line((730,410,1090,410), fill=(255,255,255), width=3)
    draw.polygon([(835,390),(1000,390),(960,430),(865,430)], fill=INK)
    draw.line((915,230,915,395), fill=INK, width=5)
    draw.polygon([(918,240),(918,380),(1020,345)], fill=(242,251,253))
    draw.line((1080,335,1080,420), fill=DEEP, width=5)
    draw.polygon([(1080,335),(1125,345),(1080,360)], fill=(255,255,255))
    for y in (245,285,325):
        draw.line((735,y,825,y-6), fill=(90,156,178), width=4)

def drama(draw):
    pts=[(900,150),(755,455),(1045,455)]
    draw.line([pts[0],pts[1],pts[2],pts[0]], fill=(80,150,170), width=5)
    for x,y in pts:
        draw.ellipse((x-42,y-42,x+42,y+42), fill=(225,243,248), outline=DEEP, width=3)

def strategic(draw):
    for box in ((745,205,845,420),(875,175,960,430),(995,220,1100,415)):
        rr(draw, box, 8, (224,241,246), (150,195,207), 2)
    rr(draw,(840,245,1030,385),8,None,(255,255,255),6)
    draw.text((840,430),"WIDER  ·  DIFFERENT  ·  AGAIN",font=font(SANS,18),fill=SOFT)

def pair(draw):
    rr(draw,(745,205,870,430),24,(239,250,252),(150,198,211),2)
    rr(draw,(990,205,1115,430),24,(239,250,252),(150,198,211),2)
    draw.text((785,270),"A",font=font(SERIF,76),fill=INK)
    draw.text((1030,270),"B",font=font(SERIF,76),fill=INK)
    draw.line((885,318,975,318),fill=DEEP,width=4)
    draw.ellipse((920,303,950,333),outline=DEEP,width=3)

def workstyle(draw):
    top=[(735,320),(800,320),(845,245),(940,245),(1000,320),(1085,320)]
    bottom=[(735,320),(800,320),(845,395),(940,395),(1000,320),(1085,320)]
    draw.line(top,fill=AQUA,width=6,joint="curve")
    draw.line(bottom,fill=DEEP,width=6,joint="curve")
    draw.ellipse((875,265,970,375),fill=(105,125,132))
    draw.ellipse((720,305,750,335),fill=(244,252,254),outline=DEEP,width=2)
    draw.ellipse((1070,305,1100,335),fill=(244,252,254),outline=DEEP,width=2)

def priolens(draw):
    startx=735
    for y in (235,320,405):
        draw.ellipse((startx-12,y-12,startx+12,y+12),fill=(235,249,252),outline=DEEP,width=2)
        draw.line((startx+15,y,930,320),fill=(86,154,175),width=4)
    draw.ellipse((900,245,1025,370),outline=(255,255,255),width=6)
    draw.ellipse((970,285,1095,410),outline=DEEP,width=6)
    draw.ellipse((986,300,1009,323),fill=INK)

MOTIFS = {
    "leadership-360": leadership,
    "mirror": mirror,
    "multipliers": multipliers,
    "divergent": divergent,
    "situational-leadership": situational,
    "drama-triangle": drama,
    "strategic-thinking": strategic,
    "2pair": pair,
    "workstyle": workstyle,
    "priolens": priolens,
}

for index, (slug, title) in enumerate(TOOLS, start=1):
    image = gradient_bg()
    draw = ImageDraw.Draw(image)
    common(draw, title, index)
    MOTIFS[slug](draw)
    image.save(OUT / f"{slug}.jpg", "JPEG", quality=84, optimize=True, progressive=True)
