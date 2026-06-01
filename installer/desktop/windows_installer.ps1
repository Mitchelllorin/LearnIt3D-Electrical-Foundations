$ErrorActionPreference = "Stop"

$AppName = "LearnIt3D Electrical Foundations"
$SourceDir = Join-Path $PSScriptRoot "../../dist/desktop"
$OutputDir = Join-Path $PSScriptRoot "../../dist/installers/windows"

Write-Host "Preparing Windows installer package for $AppName..."
New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null

if (-not (Test-Path $SourceDir)) {
    throw "Desktop build output not found at $SourceDir. Run npm run package:dir first."
}

Copy-Item -Path (Join-Path $SourceDir "*") -Destination $OutputDir -Recurse -Force
Write-Host "Windows installer assets staged at $OutputDir"
