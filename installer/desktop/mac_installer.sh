#!/usr/bin/env bash
set -euo pipefail

APP_NAME="LearnIt3D Electrical Foundations"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="${SCRIPT_DIR}/../../dist/desktop"
OUTPUT_DIR="${SCRIPT_DIR}/../../dist/installers/mac"

echo "Preparing macOS installer package for ${APP_NAME}..."
mkdir -p "${OUTPUT_DIR}"

if [[ ! -d "${SOURCE_DIR}" ]]; then
  echo "Desktop build output not found at ${SOURCE_DIR}. Run package:dir first." >&2
  exit 1
fi

cp -R "${SOURCE_DIR}/." "${OUTPUT_DIR}/"
echo "macOS installer assets staged at ${OUTPUT_DIR}"
