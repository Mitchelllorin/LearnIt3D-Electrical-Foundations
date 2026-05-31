@echo off
setlocal
cd /d "%~dp0"
set PORT=4173

echo Starting LearnIt3D course server on http://127.0.0.1:%PORT%/course/3d/index.html
echo Press Ctrl+C to stop.

py -3 -m http.server %PORT%
if errorlevel 1 (
  python -m http.server %PORT%
)
