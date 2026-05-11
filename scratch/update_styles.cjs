const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'scraped_styles.json'), 'utf-8'));

function parseTraits(textNodes, headingRegex) {
  let inSection = false;
  const traits = [];

  for (const node of textNodes) {
    if (node.tag.match(/^h[1-6]$/)) {
      if (headingRegex.test(node.text)) {
        inSection = true;
        continue;
      } else if (inSection) {
        break; // left the section
      }
    }

    if (inSection && node.tag === 'p') {
      const parts = node.text.split(':');
      if (parts.length >= 2) {
        traits.push({
          title: parts[0].trim(),
          desc: parts.slice(1).join(':').trim()
        });
      }
    }
  }
  return traits;
}

function parsePhilosophy(textNodes) {
  let inSection = false;
  const texts = [];

  for (const node of textNodes) {
    if (node.tag.match(/^h[1-6]$/)) {
      if (node.text.includes('1.') || node.text.toLowerCase().includes('là gì')) {
        inSection = true;
        continue;
      } else if (inSection) {
        if (node.text.includes('2.')) break;
      }
    }

    if (inSection && node.tag === 'p') {
      texts.push(node.text);
    }
  }
  return texts;
}

const map = {
  'japandi': { folder: 'japandi', title: 'Japandi', color: 'text-[#D4A373]', bg: 'bg-[#FAEDCD]/10' },
  'mid-century': { folder: 'mid-century', title: 'Mid-Century', color: 'text-[#BC6C25]', bg: 'bg-[#DDA15E]/10' },
  'farmhouse': { folder: 'farmhouse', title: 'Farmhouse', color: 'text-[#606C38]', bg: 'bg-[#283618]/10' },
  'wabi-sabi': { folder: 'wabisabi', title: 'Wabi-Sabi', color: 'text-[#8A817C]', bg: 'bg-[#463F3A]/10' },
  'modern': { folder: 'modern', title: 'Modern', color: 'text-[#495057]', bg: 'bg-[#212529]/10' }
};

for (const [key, info] of Object.entries(map)) {
  const styleData = data[key];
  if (!styleData) continue;

  const traits = parseTraits(styleData.textNodes, /Đặc trưng|Phong cách.*của Luklak|Farmhouse tại Luklak/i);
  let philosophy = parsePhilosophy(styleData.textNodes);

  if (philosophy.length === 0) {
    philosophy = [styleData.textNodes.find(n => n.tag === 'p')?.text || ''];
  }

  const img1 = styleData.images[0] || '';
  const img2 = styleData.images[1] || img1;
  const galleryImages = styleData.images.slice(2, 6); // take 4 images for gallery

  const imports = [
    `import imgHero from "../../assets/styles_scraped/${key}/${img1}";`,
    `import imgPhil from "../../assets/styles_scraped/${key}/${img2}";`
  ];

  const galleryVars = [];
  galleryImages.forEach((img, i) => {
    imports.push(`import imgGal${i} from "../../assets/styles_scraped/${key}/${img}";`);
    galleryVars.push(`imgGal${i}`);
  });

  const fileContent = `"use client";
import StyleTemplate from "../../components/StyleTemplate";
${imports.join('\n')}

export default function ${info.title.replace('-', '')}Page() {
  return (
    <StyleTemplate 
      title="${info.title}"
      subtitle="${styleData.textNodes.find(n => n.tag === 'p')?.text.substring(0, 100).replace(/"/g, '')}..."
      heroImg={imgHero}
      philosophyTitle="Triết lý thiết kế"
      philosophyText={${JSON.stringify(philosophy, null, 8)}}
      philosophyImg={imgPhil}
      traits={${JSON.stringify(traits.length ? traits : [{ title: 'Thiết kế', desc: 'Đang cập nhật' }], null, 8)}}
      gallery={[${galleryVars.join(', ')}]}
      accentColor="${info.color}"
      accentBg="${info.bg}"
    />
  );
}
`;

  const outPath = path.join(__dirname, `../src/app/${info.folder}/page.jsx`);
  fs.writeFileSync(outPath, fileContent);
  console.log(`Updated ${outPath}`);
}
