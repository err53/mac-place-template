from PIL import Image
import argparse
import os


def main(input_file):
    input = Image.open(input_file)
    input.show()
    pixel_map = input.load()
    width, height = input.size

    new_width = width * 3
    new_height = height * 3
    output = Image.new(mode="RGBA", size=(new_width, new_height))
    output_pixel_map = output.load()

    for h in range(height):
        for w in range(width):
            r,g,b,a = input.getpixel((w,h))
            #print(input.getpixel((w,h)))
            w2,h2 = w*3,h*3
            color_w, color_h = w2 + 1, h2+1
            
            output_pixel_map[color_w, color_h] = (r,g,b,a)

            #Set to purple for testing
            #output_pixel_map[color_w, color_h] = (int(144),int(0),int(255),a)

    output_file = os.path.join(os.path.dirname(input_file), "dotted-place-template-mac.png")
    output.save(output_file, format="png")
    output.show()

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('filename', help="Input path of 1:1 ratio pixel file")

    args = parser.parse_args()

    main(os.path.join(args.filename))