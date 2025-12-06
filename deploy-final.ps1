# Script Final - Deploy para Firebase App Hosting

Write-Host "🚀 Configurando para Firebase App Hosting..." -ForegroundColor Cyan
Write-Host ""

# 1. Remover workflows de Hosting (não compatíveis com Server Actions)
Write-Host "🗑️  Removendo workflows de Hosting..." -ForegroundColor Yellow
if (Test-Path ".github") {
    Remove-Item -Recurse -Force .github
    Write-Host "✅ Workflows removidos" -ForegroundColor Green
}

Write-Host ""

# 2. Atualizar firebase.json para App Hosting
Write-Host "⚙️  Ajustando firebase.json..." -ForegroundColor Yellow
# O firebase.json atual está OK para App Hosting

# 3. Commit das mudanças
Write-Host "💾 Fazendo commit das configurações..." -ForegroundColor Yellow
git add .
git status --short
git commit -m "Configure for Firebase App Hosting with Server Actions support"

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Commit realizado" -ForegroundColor Green
}
else {
    Write-Host "⚠️  Nenhuma mudança para commitar" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "🎯 PRÓXIMO PASSO: Fazer Push ao GitHub" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

Write-Host "Você tem 2 opções:" -ForegroundColor Yellow
Write-Host ""
Write-Host "OPÇÃO 1 - Push via Token (Automático):" -ForegroundColor Green
Write-Host "  1. Crie um Personal Access Token em:" -ForegroundColor White
Write-Host "     https://github.com/settings/tokens/new" -ForegroundColor Blue
Write-Host "     - Name: Firebase Deploy" -ForegroundColor White
Write-Host "     - Scopes: ✅ repo" -ForegroundColor White
Write-Host "  2. Cole o token quando solicitado abaixo" -ForegroundColor White
Write-Host ""
Write-Host "OPÇÃO 2 - Upload Manual (Mais Fácil):" -ForegroundColor Green
Write-Host "  1. Acesse: https://github.com/sergiodev63-sys/illure-website" -ForegroundColor Blue
Write-Host "  2. Clique em 'Add file' → 'Upload files'" -ForegroundColor White
Write-Host "  3. Arraste TODOS os arquivos (exceto node_modules, .next)" -ForegroundColor White
Write-Host "  4. Commit" -ForegroundColor White
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

$choice = Read-Host "Deseja tentar push automático agora? (s/n)"

if ($choice -eq "s" -or $choice -eq "S") {
    Write-Host ""
    Write-Host "🔐 Cole seu Personal Access Token:" -ForegroundColor Cyan
    $token = Read-Host -AsSecureString
    $tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($token))

    Write-Host ""
    Write-Host "⬆️  Fazendo push..." -ForegroundColor Yellow
    
    $pushUrl = "https://sergiodev63-sys:$tokenPlain@github.com/sergiodev63-sys/illure-website.git"
    git push $pushUrl main --force

    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "✅ PUSH REALIZADO COM SUCESSO!" -ForegroundColor Green
        Write-Host ""
        Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
        Write-Host "🎉 ÚLTIMO PASSO: Conectar ao Firebase App Hosting" -ForegroundColor Green
        Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting" -ForegroundColor Blue
        Write-Host ""
        Write-Host "No console:" -ForegroundColor Yellow
        Write-Host "  1. Clique em 'Get started' ou 'Create backend'" -ForegroundColor White
        Write-Host "  2. Conecte ao GitHub" -ForegroundColor White
        Write-Host "  3. Selecione: sergiodev63-sys/illure-website" -ForegroundColor White
        Write-Host "  4. Branch: main" -ForegroundColor White
        Write-Host "  5. Root: /" -ForegroundColor White
        Write-Host "  6. Clique em Next → Finish" -ForegroundColor White
        Write-Host ""
        Write-Host "🚀 Deploy automático começará em alguns minutos!" -ForegroundColor Green
        Write-Host ""
    }
    else {
        Write-Host ""
        Write-Host "❌ Erro no push" -ForegroundColor Red
        Write-Host "Use a OPÇÃO 2 (upload manual) descrita acima" -ForegroundColor Yellow
    }
}
else {
    Write-Host ""
    Write-Host "✅ OK! Use a OPÇÃO 2 (upload manual)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Depois do upload, acesse:" -ForegroundColor Yellow
    Write-Host "https://console.firebase.google.com/u/1/project/illure-website/apphosting" -ForegroundColor Blue
}

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
