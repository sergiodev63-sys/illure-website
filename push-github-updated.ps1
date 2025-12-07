# Push Rápido para GitHub
# Atualizado para sergiodev63-sys/illure-website

Write-Host "🚀 Fazendo push para GitHub..." -ForegroundColor Cyan
Write-Host ""

# Verificar se já tem remote configurado
$remote = git remote get-url origin 2>$null

if ($remote) {
    Write-Host "✓ Remote já configurado: $remote" -ForegroundColor Green
}
else {
    Write-Host "⚙️  Configurando remote..." -ForegroundColor Yellow
    git remote add origin https://github.com/sergiodev63-sys/illure-website.git
}

Write-Host ""
Write-Host "📝 Para fazer push, você precisa de autenticação." -ForegroundColor Yellow
Write-Host ""
Write-Host "Opções:" -ForegroundColor Cyan
Write-Host "1. Usar GitHub CLI (gh): gh auth login && git push origin main"
Write-Host "2. Usar Personal Access Token (execute: .\push-to-github.ps1)"
Write-Host "3. Upload manual pelo navegador"
Write-Host ""
Write-Host "💡 RECOMENDAÇÃO: Use a Opção 3 (upload manual) - é mais rápido!" -ForegroundColor Green
Write-Host ""
Write-Host "Passos para upload manual:" -ForegroundColor Cyan
Write-Host "1. Comprima a pasta do projeto em ZIP (exceto node_modules, .next, .git)"
Write-Host "2. Acesse: https://github.com/sergiodev63-sys/illure-website"
Write-Host "3. Clique em 'uploading an existing file'"
Write-Host "4. Arraste o ZIP ou selecione os arquivos"
Write-Host "5. Commit as alterações"
Write-Host ""
Write-Host "Depois de fazer upload, acesse:" -ForegroundColor Yellow
Write-Host "https://console.firebase.google.com/u/1/project/illure-sm/apphosting" -ForegroundColor Blue
Write-Host ""
Write-Host "Para tentar push agora com token, pressione Enter (ou Ctrl+C para cancelar)"
Read-Host

# Tentar push
Write-Host "🔐 Cole seu Personal Access Token do GitHub:" -ForegroundColor Cyan
$token = Read-Host -AsSecureString
$tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($token))

$pushUrl = "https://sergiodev63-sys:$tokenPlain@github.com/sergiodev63-sys/illure-website.git"

git push $pushUrl main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎯 Próximo passo: Conectar ao Firebase App Hosting" -ForegroundColor Cyan
    Write-Host "Acesse: https://console.firebase.google.com/u/1/project/illure-sm/apphosting" -ForegroundColor Blue
}
else {
    Write-Host ""
    Write-Host "❌ Erro no push." -ForegroundColor Red
    Write-Host "Tente a opção de upload manual descrita acima." -ForegroundColor Yellow
}
