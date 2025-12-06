# Script para fazer push ao GitHub com autenticação

Write-Host "🔐 Configurando autenticação do GitHub" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para fazer push ao GitHub, você precisa de um Personal Access Token." -ForegroundColor Yellow
Write-Host ""
Write-Host "📝 Passos:" -ForegroundColor Cyan
Write-Host "1. Pressione qualquer tecla para abrir o GitHub no navegador"
Write-Host "2. Clique em 'Generate new token (classic)'"
Write-Host "3. Nome: 'Firebase Deploy'"
Write-Host "4. Marcar: 'repo' (acesso total aos repositórios)"
Write-Host "5. Clique em 'Generate token' no final da página"
Write-Host "6. COPIE o token gerado (você não verá novamente!)"
Write-Host ""
Read-Host "Pressione Enter para abrir o navegador"

# Abrir página de criação de token
Start-Process "https://github.com/settings/tokens/new?description=Firebase%20Deploy&scopes=repo"

Write-Host ""
Write-Host "✅ Navegador aberto!" -ForegroundColor Green
Write-Host ""
Write-Host "Cole o token que você copiou abaixo:" -ForegroundColor Cyan
$token = Read-Host -AsSecureString
$tokenPlain = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($token))

Write-Host ""
Write-Host "🚀 Fazendo push para o GitHub..." -ForegroundColor Yellow

# Configurar credential helper temporário
$env:GIT_ASKPASS = "echo"
$env:GIT_USERNAME = "sergiodev63-sys"
$env:GIT_PASSWORD = $tokenPlain

# Fazer push usando o token
$pushUrl = "https://sergiodev63-sys:$tokenPlain@github.com/sergiodev63-sys/illure-website.git"
git push $pushUrl main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 Código enviado ao GitHub!" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📍 Próximo passo: Conectar ao Firebase App Hosting" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting" -ForegroundColor Blue
    Write-Host ""
    Write-Host "No console:" -ForegroundColor Cyan
    Write-Host "1. Clique em 'Get started' ou 'Create backend'"
    Write-Host "2. Selecione 'GitHub'"
    Write-Host "3. Autorize o Firebase"
    Write-Host "4. Selecione o repositório 'illure-website'"
    Write-Host "5. Branch: 'main'"
    Write-Host "6. Root directory: '/'"
    Write-Host "7. Clique em 'Next' e depois 'Finish'"
    Write-Host ""
    Write-Host "🎊 Seu site será publicado automaticamente em alguns minutos!" -ForegroundColor Green
}
else {
    Write-Host ""
    Write-Host "❌ Erro no push. Verifique se:" -ForegroundColor Red
    Write-Host "- O token está correto"
    Write-Host "- O repositório existe: https://github.com/sergiodev63-sys/illure-website"
    Write-Host "- O token tem permissão 'repo'"
}
