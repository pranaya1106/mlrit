const fs = require('fs');
const https = require('https');
const { createCanvas, loadImage } = require('canvas');

const API_KEY = '24c09cf5d2de7db4b7e37e2b76852a65';

async function removeBlackBackground(inputPath, outputPath) {
  const img = await loadImage(inputPath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  
  ctx.drawImage(img, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  
  // Make black pixels transparent (threshold for near-black)
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    
    // If pixel is dark (near black), make it transparent
    if (r < 30 && g < 30 && b < 30) {
      data[i + 3] = 0; // Set alpha to 0
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  
  // Save as PNG with transparency
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
  return buffer;
}

async function uploadToImgbb(buffer) {
  const base64 = buffer.toString('base64');
  const boundary = '----Boundary' + Date.now();
  
  const body = [
    `--${boundary}`,
    `Content-Disposition: form-data; name="key"`,
    '',
    API_KEY,
    `--${boundary}`,
    `Content-Disposition: form-data; name="image"`,
    '',
    base64,
    `--${boundary}--`,
  ].join('\r\n');
  
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.imgbb.com',
      path: '/1/upload',
      method: 'POST',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${boundary}`,
        'Content-Length': Buffer.byteLength(body),
      },
    };
    
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const json = JSON.parse(data);
        if (json.success) resolve(json.data.url);
        else reject(new Error(json.error?.message || 'Upload failed'));
      });
    });
    
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function main() {
  console.log('Removing black background from logo...');
  const buffer = await removeBlackBackground('assets/logo.svg', 'logo-transparent.png');
  
  console.log('Uploading to imgbb...');
  const url = await uploadToImgbb(buffer);
  
  console.log('SUCCESS:', url);
  fs.writeFileSync('logo-url.txt', url);
}

main().catch(err => console.error('ERROR:', err.message));
