"""Package the approved CV backend with private storage outside public_html.
The resulting ZIP contains credentials: upload ONLY at the domain root, never in public_html.
"""
from pathlib import Path
from zipfile import ZipFile, ZipInfo, ZIP_DEFLATED
from datetime import datetime
import json,base64,secrets,shutil,os
repo=Path(__file__).resolve().parents[1]; private=repo.parent/'private'
stamp=datetime.now().strftime('%Y%m%d_%H%M%S')
release=private/'releases'/('hostinger_activation_'+stamp);release.mkdir(mode=0o700)
domain='/home/u935559754/domains/teal-gnat-607186.hostingersite.com'
config={'mail_transport':'smtp','environment':'production','public_root':domain+'/public_html','app_url':'https://teal-gnat-607186.hostingersite.com/cv-api','frontend_url':'https://lankamar.github.io/solicitar-cv/','allowed_origins':['https://lankamar.github.io','https://teal-gnat-607186.hostingersite.com'],'db_dsn':'sqlite:'+domain+'/cv-private/cv.sqlite','db_user':None,'db_pass':None,'private_dir':domain+'/cv-private/documentos','log_path':domain+'/cv-private/cv-api.log','hash_key':secrets.token_hex(32),'token_ttl':1800,'privacy_version':'2026-11-01','retention_days':30,'rate_ip_per_hour':5,'rate_email_per_day':3,'documents':{v:{'filename':'cv-'+v+'.pdf','label':label} for v,label in [('tech','Tecnología e IA aplicada'),('salud','Salud y gestión'),('academico','Académico')]}}
config.update(json.loads((private/'gmail-smtp.json').read_text()))
app=release/'cv-private/app';app.mkdir(parents=True,mode=0o700)
for name in ['src','bin']:shutil.copytree(repo/'cv-api'/name,app/name)
boot=(repo/'cv-api/bootstrap.php').read_text().replace("    getenv('CV_CONFIG_PATH') ?: null,", "    getenv('CV_CONFIG_PATH') ?: null,\n    __DIR__ . '/../config.php',")
(app/'bootstrap.php').write_text(boot)
encoded=base64.b64encode(json.dumps(config).encode()).decode()
(release/'cv-private/config.php').write_text("<?php return json_decode(base64_decode('"+encoded+"'),true);\n")
shutil.copytree(private/'documentos',release/'cv-private/documentos')
web=release/'public_html';web.mkdir()
for route in ['', 'trayectoria','proyectos','publicaciones','docencia','repositorios','cv','contacto','simulador-ecg','solicitar-cv','privacidad-cv','solicitud-cv-recibida']:
 dest=web/route;dest.mkdir(parents=True,exist_ok=True);shutil.copy2(repo/'dist'/route/'index.html',dest/'index.html')
shutil.copytree(repo/'dist/assets',web/'assets')
shutil.copy2(repo/'public/.htaccess',web/'.htaccess')
api=web/'cv-api';api.mkdir()
shutil.copy2(repo/'cv-api/.htaccess',api/'.htaccess')
(api/'index.php').write_text('''<?php
declare(strict_types=1);
umask(0077);
ini_set('display_errors','0');
try {
    if (PHP_VERSION_ID < 80300) { throw new RuntimeException('Runtime'); }
    foreach (['pdo_sqlite','mbstring','openssl'] as $extension) {
        if (!extension_loaded($extension)) { throw new RuntimeException('Extension'); }
    }
    $private = dirname(__DIR__,2) . '/cv-private';
    foreach ([$private, $private.'/documentos'] as $directory) {
        if (!chmod($directory,0700)) { throw new RuntimeException('Permissions'); }
    }
    foreach (array_merge([$private.'/config.php'],glob($private.'/documentos/*.pdf') ?: []) as $file) {
        if (!chmod($file,0600)) { throw new RuntimeException('Permissions'); }
    }
    $container = require $private . '/app/bootstrap.php';
    foreach (['tech','salud','academico'] as $version) { $container['documents']->resolve($version); }
    $container['logger']->event('runtime_verified',['php'=>PHP_VERSION]);
    $container['app']->run();
} catch (Throwable) {
    http_response_code(503);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo '{"ok":false,"error":"service_unavailable"}';
}
''')
for p in (release/'cv-private').rglob('*'):p.chmod(0o700 if p.is_dir() else 0o600)
(release/'cv-private').chmod(0o700)
archive=release.with_suffix('.zip')
with ZipFile(archive,'w',ZIP_DEFLATED) as z:
 for p in sorted(release.rglob('*')):
  if p.is_file():
   info=ZipInfo(str(p.relative_to(release)));info.create_system=3
   info.external_attr=(0o100600 if 'cv-private' in p.relative_to(release).parts else 0o100644)<<16
   info.compress_type=ZIP_DEFLATED;z.writestr(info,p.read_bytes())
archive.chmod(0o600)
(private/'active-hostinger-release.txt').write_text(str(release))
(private/'active-hostinger-release.txt').chmod(0o600)
print('PRIVATE ARCHIVE:',archive)
print('Upload at domain root, outside public_html; frontend remains disabled.')
