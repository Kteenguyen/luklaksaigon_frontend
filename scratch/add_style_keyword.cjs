const fs = require('fs');
const path = require('path');

const map = {
  'japandi': 'Japandi',
  'mid-century': 'Mid-Century',
  'farmhouse': 'Farmhouse',
  'wabisabi': 'Wabi-sabi',
  'modern': 'Modern Luxury'
};

for (const [folder, styleKeyword] of Object.entries(map)) {
  const pagePath = path.join(__dirname, `../src/app/${folder}/page.jsx`);
  if (!fs.existsSync(pagePath)) continue;

  let content = fs.readFileSync(pagePath, 'utf8');
  
  if (!content.includes('styleKeyword=')) {
    content = content.replace(/<StyleTemplate/, `<StyleTemplate\n      styleKeyword="${styleKeyword}"`);
    fs.writeFileSync(pagePath, content);
    console.log(`Added styleKeyword="${styleKeyword}" to ${folder}`);
  }
}
