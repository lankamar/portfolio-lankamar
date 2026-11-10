import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
const shell = readFileSync('dist/index.html', 'utf8');
for (const route of ['', 'trayectoria','proyectos','publicaciones','docencia','repositorios','cv','contacto','simulador-ecg']) {
  const seo = readFileSync(`seo/${route || 'home'}.html`, 'utf8');
  const html = shell.replace(/<title>.*?<\/title>/s, '').replace('</head>', `${seo}\n</head>`);
  const directory = `dist/${route}`;
  mkdirSync(directory, {recursive:true});
  writeFileSync(`${directory}/index.html`, html);
}

const cssTagMatch = shell.match(/<link rel="stylesheet"[^>]*href="\/assets\/[^"]+\.css"[^>]*>/);
if (cssTagMatch) {
  for (const cvRoute of ['solicitar-cv', 'solicitud-cv-recibida', 'privacidad-cv']) {
    const targetPath = `dist/${cvRoute}/index.html`;
    const current = readFileSync(targetPath, 'utf8');
    writeFileSync(targetPath, current.replace('<link rel="stylesheet" href="/styles.css">', cssTagMatch[0]));
  }
}
