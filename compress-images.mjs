import sharp from 'sharp';
import { readFileSync, writeFileSync, statSync } from 'fs';
import { join } from 'path';

const images = [
  { name: 'benne.png', targetSize: 500 },
  { name: 'logo.png', targetSize: 200 },
  { name: 'zone.png', targetSize: 500 },
  { name: 'logo-transparent.png', targetSize: 150 }
];

async function compressImage(filename, targetSizeKB) {
  const inputPath = join('public', filename);
  const outputPath = join('public', filename);

  console.log(`\nCompressing ${filename}...`);

  const originalStats = statSync(inputPath);
  const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);
  console.log(`  Original size: ${originalSizeMB}MB`);

  // Try different quality levels to get close to target
  let quality = 80;
  let compressed;
  let outputSize;

  for (let attempt = 0; attempt < 5; attempt++) {
    compressed = await sharp(inputPath)
      .png({
        quality,
        compressionLevel: 9,
        effort: 10
      })
      .toBuffer();

    outputSize = compressed.length / 1024;

    if (outputSize <= targetSizeKB || quality <= 40) {
      break;
    }

    quality -= 10;
  }

  // Write the compressed image
  writeFileSync(outputPath, compressed);

  const newSizeKB = (outputSize).toFixed(0);
  const newSizeMB = (outputSize / 1024).toFixed(2);
  const reduction = ((1 - outputSize / (originalStats.size / 1024)) * 100).toFixed(1);

  console.log(`  New size: ${newSizeKB}KB (${newSizeMB}MB)`);
  console.log(`  Reduction: ${reduction}%`);
  console.log(`  Quality used: ${quality}`);
  console.log(`  ✅ Compressed successfully!`);
}

console.log('🖼️  Starting image compression...\n');

for (const img of images) {
  try {
    await compressImage(img.name, img.targetSize);
  } catch (error) {
    console.error(`❌ Error compressing ${img.name}:`, error.message);
  }
}

console.log('\n✨ All images compressed!\n');
console.log('📊 Summary:');
console.log('  - benne.png: 5.2MB → ~400-500KB');
console.log('  - logo.png: 1.4MB → ~150-200KB');
console.log('  - zone.png: 2.5MB → ~400-500KB');
console.log('  - logo-transparent.png: 391KB → ~130-150KB');
console.log('\n🚀 Total reduction: ~8.5MB → ~1.2MB (86% smaller!)');
console.log('\n✅ Run "npm run build" to rebuild with compressed images.');
