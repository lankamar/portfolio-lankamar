"""Prepare local, reviewable deploy material. Never connects to a remote host.

Usage: python3 scripts/prepare-release.py ../private/releases/RELEASE_ID
The same public scan is mandatory for a rollback candidate.
"""
from pathlib import Path
import shutil, subprocess, sys
repo = Path(__file__).resolve().parents[1]
destination = Path(sys.argv[1]).resolve()
if destination.exists():
    raise SystemExit('Destination must be new; refusing to overwrite a release')
subprocess.run(['python3', str(repo/'scripts/check-public.py'), str(repo/'dist')], check=True)
destination.mkdir(parents=True, mode=0o700)
shutil.copytree(repo/'dist', destination/'frontend')
api = destination/'backend'
api.mkdir()
for name in ['index.php','bootstrap.php','.htaccess']:
    shutil.copy2(repo/'cv-api'/name, api/name)
shutil.copytree(repo/'cv-api/src', api/'src')
shutil.copytree(repo/'cv-api/bin', destination/'cli-bin')
shutil.copy2(repo/'cv-api/config.example.php', destination/'config.example.php')
subprocess.run(['python3', str(repo/'scripts/check-public.py'), str(destination/'frontend')], check=True)
print('PREPARED local release; no config, database, PDFs, tests or QA tokens included:', destination)
