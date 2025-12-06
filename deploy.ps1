# Script de Deploy - Firebase App Hosting
# Execute este script para fazer o deploy do projeto

Write-Host "🚀 Iniciando processo de deploy..." -ForegroundColor Cyan
Write-Host ""

# Verifica se Firebase CLI está instalado
Write-Host "✓ Verificando Firebase CLI..." -ForegroundColor Yellow
$firebaseVersion = firebase --version
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Firebase CLI instalado: $firebaseVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Firebase CLI não encontrado. Instalando..." -ForegroundColor Red
    npm install -g firebase-tools
}

Write-Host ""

# Verifica se está logado
Write-Host "✓ Verificando login..." -ForegroundColor Yellow
$loginStatus = firebase projects:list 2>&1
if ($loginStatus -like "*not logged in*" -or $LASTEXITCODE -ne 0) {
    Write-Host "🔐 Fazendo login no Firebase..." -ForegroundColor Yellow
    firebase login
} else {
    Write-Host "✅ Já está logado no Firebase" -ForegroundColor Green
}

Write-Host ""

# Verifica se o projeto está configurado
if (-Not (Test-Path ".firebaserc")) {
    Write-Host "⚙️  Configurando projeto Firebase..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Selecione o projeto Firebase:" -ForegroundColor Cyan
    firebase use --add
} else {
    Write-Host "✅ Projeto Firebase já configurado" -ForegroundColor Green
}

Write-Host ""

# Build do projeto
Write-Host "🔨 Fazendo build do projeto..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green
} else {
    Write-Host "❌ Erro no build. Verifique os erros acima." -ForegroundColor Red
    exit 1
}

Write-Host ""

# Deploy
Write-Host "🚀 Fazendo deploy..." -ForegroundColor Yellow
firebase deploy --only hosting

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Deploy concluído com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📱 Acesse o Console do Firebase para ver sua aplicação:" -ForegroundColor Cyan
    Write-Host "https://console.firebase.google.com/" -ForegroundColor Blue
} else {
    Write-Host ""
    Write-Host "❌ Erro no deploy. Verifique os erros acima." -ForegroundColor Red
    exit 1
}
