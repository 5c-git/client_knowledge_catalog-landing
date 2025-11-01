import fs from 'fs';
import path from 'path';

const SRC_DIR = path.resolve('./src');
const importRegex = /^\s*@import\s+['"]src\/utils\/utils['"]\s*;?\s*$/gm;

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      processDir(filePath); // рекурсия
    } else if (file.endsWith('.scss')) {
      let content = fs.readFileSync(filePath, 'utf8');
      const newContent = content.replace(importRegex, '');
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Обновлён: ${filePath}`);
      }
    }
  }
}

processDir(SRC_DIR);
