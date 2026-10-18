const fs = require('fs');
const path = require('path');

function removeDirSync(targetDir) {
  if (!fs.existsSync(targetDir)) return;
  const entries = fs.readdirSync(targetDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(targetDir, entry.name);
    if (entry.isDirectory()) {
      removeDirSync(fullPath);
    } else {
      fs.unlinkSync(fullPath);
    }
  }
  try {
    fs.rmdirSync(targetDir);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
}

const distDir = path.join(__dirname, '..', 'dist');
try {
  removeDirSync(distDir);
} catch (err) {
  try {
    fs.rmSync(distDir, { recursive: true, force: true, maxRetries: 3 });
  } catch (e) {
    // ignore
  }
}

