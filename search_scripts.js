const fs = require('fs');
const html = fs.readFileSync('C:\\Users\\TechnoKraft\\.gemini\\antigravity-ide\\brain\\81e2fb30-9154-45a7-b9e2-741e485887d1\\scratch\\jee_clean.html', 'utf8');

const s4 = html.indexOf('id="S:4"');
if (s4 !== -1) {
  console.log('Characters preceding S:4:');
  console.log(html.substring(s4 - 100, s4));
}
