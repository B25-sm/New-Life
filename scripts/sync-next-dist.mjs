import fs from 'fs';
import path from 'path';

const rootDir = path.resolve(process.cwd());
const clientDist = path.join(rootDir, 'client', '.next');
const rootDist = path.join(rootDir, '.next');

if (!fs.existsSync(clientDist)) {
  console.error('Expected build output at client/.next but none was found. Did the Next.js build succeed?');
  process.exit(1);
}

if (fs.existsSync(rootDist)) {
  fs.rmSync(rootDist, { recursive: true, force: true });
}

fs.cpSync(clientDist, rootDist, { recursive: true });

console.log('Copied Next.js build artifacts from client/.next to .next for Vercel.');

