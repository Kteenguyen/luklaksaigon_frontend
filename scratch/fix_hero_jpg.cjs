const fs = require('fs');
const path = require('path');

const styles = ['japandi', 'mid-century', 'farmhouse', 'wabisabi', 'modern'];

styles.forEach(style => {
  const pagePath = path.join(__dirname, `../src/app/${style}/page.jsx`);
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Find all JPG images in the folder
  const imgDir = path.join(__dirname, `../src/assets/styles_scraped/${style === 'wabisabi' ? 'wabi-sabi' : style}`);
  let files = fs.readdirSync(imgDir).filter(f => f.startsWith('img_') && f.endsWith('.jpg'));
  
  // Exclude img_1, img_2, img_3 if possible, just take a random high number JPG
  files.sort((a, b) => parseInt(a.match(/\d+/)[0]) - parseInt(b.match(/\d+/)[0]));
  
  // Pick a file that is definitely a photo. img_8 or something in the middle.
  const newHero = files[Math.floor(files.length / 2)];
  
  // Replace the imgHero import (it could be currently importing img_X.png or img_X.jpg)
  content = content.replace(/import imgHero from "[^"]+";/, `import imgHero from "../../assets/styles_scraped/${style === 'wabisabi' ? 'wabi-sabi' : style}/${newHero}";`);

  fs.writeFileSync(pagePath, content);
  console.log(`Updated ${style} hero image to ${newHero}`);
});
