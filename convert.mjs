import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const dirs = [
  './src/assets',
  './public/depoimentos'
];

async function convert() {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
        const fullPath = path.join(dir, file);
        const nameWithoutExt = path.parse(file).name;
        const webpPath = path.join(dir, `${nameWithoutExt}.webp`);
        console.log(`Converting ${file} -> ${nameWithoutExt}.webp`);
        await sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        fs.unlinkSync(fullPath); // Exclui a original para poupar espaço
      }
    }
  }
}

convert().catch(console.error);
