const fs = require('fs');
const path = require('path');

const styles = ['wabi-sabi', 'modern'];

styles.forEach(style => {
  const pagePath = path.join(__dirname, `../src/app/${style === 'wabi-sabi' ? 'wabisabi' : style}/page.jsx`);
  if (!fs.existsSync(pagePath)) return;

  let content = fs.readFileSync(pagePath, 'utf8');

  // Find all images in the folder
  const imgDir = path.join(__dirname, `../src/assets/styles_scraped/${style}`);
  const files = fs.readdirSync(imgDir).filter(f => f.startsWith('img_') && !f.endsWith('.svg'));

  // Sort files logically
  files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)[0]);
    const numB = parseInt(b.match(/\d+/)[0]);
    return numA - numB;
  });

  const newHero = files[files.length - 1];

  // Replace the imgHero import
  content = content.replace(/import imgHero from "([^"]+img_1\.(jpg|png))";/, `import imgHero from "../../assets/styles_scraped/${style}/${newHero}";`);

  fs.writeFileSync(pagePath, content);
  console.log(`Updated ${style} hero image to ${newHero}`);
});
