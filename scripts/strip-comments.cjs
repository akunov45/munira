const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const IGNORED_DIRS = ['node_modules', '.git', 'dist', 'build', 'certbot', 'logs'];
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss', '.sass', '.html', '.md', '.yml', '.yaml', '.sh', '.conf', '.env'];

function shouldIgnore(filePath) {
  return IGNORED_DIRS.some(d => filePath.split(path.sep).includes(d));
}

function stripComments(content) {
  content = content.replace(/\{\/\*[\s\S]*?\*\//g, '');
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');
  content = content.replace(/<!--([\s\S]*?)-->/g, '');
  content = content.replace(/^\s*#.*$/gm, '');
  content = content.replace(/(?<!:)\/\/.*/g, '');
  return content;
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (shouldIgnore(full)) continue;
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (!EXTENSIONS.includes(ext)) continue;
    try {
      let content = fs.readFileSync(full, 'utf8');
      const stripped = stripComments(content);
      if (stripped !== content) {
        fs.writeFileSync(full, stripped, 'utf8');
        console.log('Updated:', path.relative(ROOT, full));
      }
    } catch (err) {
      console.error('Failed:', full, err.message);
    }
  }
}

console.log('Starting comment removal (CJS)...');
walk(ROOT);
console.log('Done.');
