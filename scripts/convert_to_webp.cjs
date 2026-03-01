const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

try {
  // Use sips on mac to convert image formats
  execSync(`sips -s format webp "${inputPath}" --out "${outputPath}"`);
  console.log(`Successfully converted ${inputPath} to ${outputPath}`);
} catch (error) {
  console.error(`Failed to convert ` + error.message);
}
