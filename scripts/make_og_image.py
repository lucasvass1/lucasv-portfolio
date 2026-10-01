"""Gera a imagem de compartilhamento (Open Graph) 1200x630 do portfólio.

Rode com: python scripts/make_og_image.py
Saída: public/og-image.png
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630

# Paleta do site (tema escuro)
BG = (7, 9, 13)           # --background #07090d
CARD = (12, 16, 22)       # --card #0c1016
FG = (245, 247, 250)      # --foreground
MUTED = (164, 173, 186)   # --muted-foreground
ACCENT = (97, 165, 255)   # --accent #61a5ff
SUCCESS = (46, 190, 130)

FONT = "C:/Windows/Fonts/segoeui.ttf"
FONT_B = "C:/Windows/Fonts/segoeuib.ttf"
FONT_SB = "C:/Windows/Fonts/segoeuisb.ttf"


def font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except OSError:
        return ImageFont.truetype(FONT, size)


# --- base + glows de accent (igual ao fundo do site) ---
img = Image.new("RGB", (W, H), BG)

glow = Image.new("RGB", (W, H), BG)
gd = ImageDraw.Draw(glow)
gd.ellipse([-200, -260, 520, 460], fill=(20, 40, 78))      # glow esquerda/topo
gd.ellipse([760, -320, 1500, 400], fill=(16, 32, 64))      # glow direita/topo
glow = glow.filter(ImageFilter.GaussianBlur(190))
img = Image.blend(img, glow, 0.9)

draw = ImageDraw.Draw(img)

# --- grid sutil de pontos ---
dot = (255, 255, 255)
dots = Image.new("RGBA", (W, H), (0, 0, 0, 0))
dd = ImageDraw.Draw(dots)
step = 52
for x in range(0, W, step):
    for y in range(0, H, step):
        dd.ellipse([x, y, x + 2, y + 2], fill=(*dot, 10))
img.paste(Image.alpha_composite(img.convert("RGBA"), dots).convert("RGB"), (0, 0))
draw = ImageDraw.Draw(img)

PAD = 80

# --- pill "Disponível para oportunidades" ---
pill_font = font(FONT_SB, 22)
pill_text = "Disponível para novas oportunidades"
tb = draw.textbbox((0, 0), pill_text, font=pill_font)
tw = tb[2] - tb[0]
pill_h = 48
pill_w = tw + 72
px, py = PAD, 70
draw.rounded_rectangle([px, py, px + pill_w, py + pill_h], radius=pill_h // 2,
                       fill=(16, 22, 32), outline=(40, 52, 70), width=1)
draw.ellipse([px + 26, py + pill_h // 2 - 6, px + 38, py + pill_h // 2 + 6], fill=SUCCESS)
draw.text((px + 52, py + pill_h / 2), pill_text, font=pill_font, fill=MUTED, anchor="lm")

# --- role (uppercase, tracking) com barra de accent ---
role_font = font(FONT_B, 26)
ry = 190
draw.rectangle([PAD, ry - 2, PAD + 4, ry + 26], fill=ACCENT)
draw.text((PAD + 22, ry), "D E S E N V O L V E D O R   F U L L   S T A C K",
          font=role_font, fill=ACCENT)

# --- nome ---
name_font = font(FONT_B, 82)
draw.text((PAD - 2, 240), "Lucas", font=name_font, fill=FG)
draw.text((PAD - 2, 330), "Vasconcelos", font=name_font, fill=FG)

# --- tagline ---
tag_font = font(FONT, 28)
tagline = [
    "React · Node.js · TypeScript · APIs REST",
    "Cloud (AWS/GCP) e boas práticas de Clean Code.",
]
ty = 450
for line in tagline:
    draw.text((PAD, ty), line, font=tag_font, fill=MUTED)
    ty += 42

# --- avatar em card arredondado (direita) ---
AV = 360
ax = W - PAD - AV
ay = (H - AV) // 2

# glow atrás do avatar
agl = Image.new("RGBA", (W, H), (0, 0, 0, 0))
agd = ImageDraw.Draw(agl)
agd.ellipse([ax - 30, ay - 30, ax + AV + 30, ay + AV + 30], fill=(*ACCENT, 60))
agl = agl.filter(ImageFilter.GaussianBlur(70))
img = Image.alpha_composite(img.convert("RGBA"), agl).convert("RGB")
draw = ImageDraw.Draw(img)

# card
pad = 14
draw.rounded_rectangle([ax - pad, ay - pad, ax + AV + pad, ay + AV + pad],
                       radius=40, fill=CARD, outline=(42, 54, 72), width=1)

# avatar com cantos arredondados
avatar = Image.open("public/Avatar.png").convert("RGBA").resize((AV, AV), Image.LANCZOS)
mask = Image.new("L", (AV, AV), 0)
ImageDraw.Draw(mask).rounded_rectangle([0, 0, AV, AV], radius=28, fill=255)
img.paste(avatar, (ax, ay), mask)

img.save("public/og-image.png", "PNG", optimize=True)
print("OK -> public/og-image.png", img.size)
