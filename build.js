// Copies the static site into dist/ and sanity-checks it.
// No dependencies required: works on any Node 18+.
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const src = path.join(root, 'index.html');
const out = path.join(root, 'dist');

if (!fs.existsSync(src)) { console.error('ERROR: index.html not found'); process.exit(1); }
const html = fs.readFileSync(src, 'utf8');

const required = ['<title>', 'id="main"', 'const DATA', 'id="projGrid"', 'id="contact"', '</html>'];
const missing = required.filter(r => !html.includes(r));
if (missing.length) { console.error('ERROR: index.html looks incomplete. Missing:', missing.join(', ')); process.exit(1); }

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });
fs.copyFileSync(src, path.join(out, 'index.html'));

// robots.txt (allow indexing)
fs.writeFileSync(path.join(out, 'robots.txt'), 'User-agent: *\nAllow: /\n');

console.log('Build OK -> dist/index.html (' + Math.round(html.length / 1024) + ' KB)');
