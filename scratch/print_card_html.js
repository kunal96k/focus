const fs = require('fs');

const blogsHtmlPath = 'C:\\\\Users\\\\TechnoKraft\\\\.gemini\\\\antigravity-ide\\\\brain\\\\81e2fb30-9154-45a7-b9e2-741e485887d1\\\\.system_generated\\\\steps\\\\815\\\\content.md';

if (fs.existsSync(blogsHtmlPath)) {
  const html = fs.readFileSync(blogsHtmlPath, 'utf8');
  // Find all cards by searching for /blogs/ links and pulling the surrounding HTML
  const regex = /href="\/blogs\/([^"]+)"/g;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null && count < 3) {
    const startIdx = Math.max(0, match.index - 500);
    const endIdx = Math.min(html.length, match.index + 500);
    console.log(`\n--- Match ${count + 1} (Slug: ${match[1]}) ---`);
    console.log(html.substring(startIdx, endIdx));
    count++;
  }
}
