# Script para fazer push inicial ao GitHub
# IMPORTANTE: Substitua SEU_USUARIO pelo seu nome de usuário do GitHub

Write-Host "🚀 Preparando projeto para GitHub..." -ForegroundColor Cyan

# Inicializar repositório Git
Write-Host "`n📁 Inicializando repositório Git..." -ForegroundColor Yellow
git init

# Adicionar todos os arquivos
Write-Host "`n➕ Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Fazer commit inicial
Write-Host "`n💾 Fazendo commit inicial..." -ForegroundColor Yellow
git commit -m "Initial commit - illure website"

# Adicionar remote do GitHub
Write-Host "`n🔗 Conectando ao GitHub..." -ForegroundColor Yellow
Write-Host "Digite seu nome de usuário do GitHub:" -ForegroundColor Cyan
$githubUser = Read-Host

git remote add origin "https://github.com/$githubUser/illure-website.git"

# Fazer push
Write-Host "`n⬆️  Fazendo push para GitHub..." -ForegroundColor Yellow
git branch -M main
git push -u origin main

Write-Host "`n✅ Push concluído!" -ForegroundColor Green
Write-Host "`nAgora você pode conectar o Firebase App Hosting ao seu repositório GitHub." -ForegroundColor Cyan
Write-Host "Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting" -ForegroundColor Blue
