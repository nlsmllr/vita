#!/bin/bash

# Set the paths
image_dir="./public/images"
output_file="./src/app/Constants/photos.ts"

# Create or overwrite the output file and start with the export line
echo "export const imageFilenames = [" > $output_file

# Find all files in the image directory and format them as a JavaScript array
find "$image_dir" -type f | while read -r file; do
    # Extract the file name from the path
    filename=$(basename "$file")
    # Append the file name to the output file
    echo "'$filename'," >> $output_file
done

# Close the array
echo "];" >> $output_file

echo "File list updated in $output_file"
code $output_file

