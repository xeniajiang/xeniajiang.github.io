$projectRoot = Split-Path -Parent $PSScriptRoot
$stdoutPath = Join-Path $projectRoot "vite-dev.log"
$stderrPath = Join-Path $projectRoot "vite-dev.err.log"

$process = Start-Process `
  -FilePath "npm.cmd" `
  -ArgumentList @("run", "dev", "--", "--host", "127.0.0.1") `
  -WorkingDirectory $projectRoot `
  -RedirectStandardOutput $stdoutPath `
  -RedirectStandardError $stderrPath `
  -WindowStyle Hidden `
  -PassThru

Write-Output $process.Id
