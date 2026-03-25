import sys
import os
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

image_path = r"C:\Users\jolly\.gemini\antigravity\brain\5a3f51c6-41d9-4e36-bf89-225b16fbfcd0\media__1774475175007.jpg"
out_dir = r"C:\Users\jolly\OneDrive\Desktop\Projects\DripLab\src\assets\items"

if not os.path.exists(out_dir):
    os.makedirs(out_dir)

img = Image.open(image_path)
W, H = img.size

names = [
    ["s1_nosugar", "s2_honey", "s3_stevia", "s4_sugar"],
    ["t1_chia", "t2_whey", "t3_cocoa", "t4_none"]
]

cell_w = W / 4
cell_h = H / 2
crop_size = min(cell_w, cell_h) * 0.70

for r in range(2):
    for c in range(4):
        left = c * cell_w
        top = r * cell_h
        
        # Calculate square crop bounds within the cell to avoid top headers and bottom text
        c_left = left + (cell_w - crop_size) / 2
        
        # Offset top calculation differently for row 0 and row 1 if needed,
        # but generally the objects are centered with a slight upward bias
        if r == 0:
            c_top = top + cell_h * 0.35 # Header "3. Sweetness" is at the top
        else:
            c_top = top + cell_h * 0.35 # Header "4. Add Toppings" is at the top
            
        c_right = c_left + crop_size
        c_bottom = c_top + crop_size
        
        # Fine-tune the box to avoid text
        box = (int(c_left), int(c_top), int(c_right), int(c_bottom))
        
        cropped = img.crop(box)
        
        # Save high quality PNG
        out_name = os.path.join(out_dir, f"{names[r][c]}.png")
        cropped.save(out_name, "PNG")
        print(f"Saved {out_name}")

print("Successfully sliced and dispatched all 8 assets!")
