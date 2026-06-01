const fs = require('fs');

function extractTexts(content) {
    const texts = new Set();
    const regex = />([^<]+)</g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const t = match[1].trim();
        if(t && /[가-힣]/.test(t)) texts.add(t);
    }
    return texts;
}

const html = fs.readFileSync('index.html', 'utf-8');
const boardHtml = fs.readFileSync('board.html', 'utf-8');
const texts = new Set([...extractTexts(html), ...extractTexts(boardHtml)]);

const mainJs = fs.readFileSync('main.js', 'utf-8');
const jsRegex = /[\"\'\`]+([^\"\'\`\n]+[가-힣]+[^\"\'\`\n]+)[\"\'\`]+/g;
let match2;
while ((match2 = jsRegex.exec(mainJs)) !== null) {
  const t = match2[1].trim();
  if(t && /[가-힣]/.test(t)) texts.add(t);
}

fs.writeFileSync('texts.txt', Array.from(texts).join('\n'));
