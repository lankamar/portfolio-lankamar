"""Fail closed on publishable trees, independently of any server rewrite rules."""
from pathlib import Path
import re, sys
root = Path(sys.argv[1]).resolve()
assert root.is_dir(), root
errors = []
for p in root.rglob('*'):
    if p.is_symlink():
        errors.append(f'symlink: {p.relative_to(root)}')
    if not p.is_file() or '.git' in p.relative_to(root).parts:
        continue
    data = p.read_bytes()
    if data.startswith(b'%PDF') or p.suffix.lower() in ['.pdf','.sqlite','.sqlite3','.db','.php']:
        errors.append(f'private artifact: {p.relative_to(root)}')
    if p.suffix.lower() in ['.js','.html','.tsx','.ts','.map']:
        text = data.decode('utf-8', errors='replace')
        if re.search(r'cv-(?:tech|salud|academico)\.pdf|formsubmit\.co', text, re.I):
            errors.append(f'legacy direct link: {p.relative_to(root)}')
if errors:
    print('\n'.join(errors)); sys.exit(1)
print('PASS public artifact scan:', root)
