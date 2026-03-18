import fs from 'fs';
import path from 'path';
import https from 'https';
import sharp from 'sharp';

const urls = {
  java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  springboot: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg'
};

const downloadAndConvert = async (name, url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', async () => {
        try {
          const outputPath = path.join(process.cwd(), 'public', 'images', `${name}.webp`);
          await sharp(Buffer.from(data))
            .resize(512, 512)
            .webp()
            .toFile(outputPath);
          console.log(`Successfully converted ${name}`);
          resolve();
        } catch (e) {
          console.error(`Failed to convert ${name}`, e);
          reject(e);
        }
      });
    }).on('error', reject);
  });
};

(async () => {
  try {
    await downloadAndConvert('java', urls.java);
    await downloadAndConvert('springboot', urls.springboot);
  } catch (e) {
    console.error(e);
  }
})();
