#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"
PORT=4173

echo "Starting LearnIt3D course server on http://127.0.0.1:${PORT}/course/3d/index.html"
echo "Press Ctrl+C to stop."

if command -v python3 >/dev/null 2>&1; then
  python3 -m http.server "${PORT}"
elif command -v python >/dev/null 2>&1; then
  python -m http.server "${PORT}"
else
  echo "Python was not found. Install Python 3 and rerun this script."
  exit 1
fi
