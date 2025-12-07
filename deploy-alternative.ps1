# Script de Deploy Experimental - Firebase Functions + Next.js
# Este script configura e faz deploy do Next.js usando Firebase Functions

Write-Host "🚀 Iniciando deploy do Next.js no Firebase..." -ForegroundColor Cyan
Write-Host ""

# Verificar se Firebase CLI está instalado
Write-Host "✓ Verificando Firebase CLI..." -ForegroundColor Yellow
$firebaseVersion = firebase --version 2>$null
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Firebase CLI instalado: $firebaseVersion" -ForegroundColor Green
}
else {
    Write-Host "❌ Firebase CLI não encontrado. Instalando..." -ForegroundColor Red
    npm install -g firebase-tools
}

Write-Host ""

# Verificar login
Write-Host "✓ Verificando login..." -ForegroundColor Yellow
$loginCheck = firebase login:list 2>&1
if ($loginCheck -like "*No authorized accounts*" -or $LASTEXITCODE -ne 0) {
    Write-Host "🔐 Fazendo login no Firebase..." -ForegroundColor Yellow
    firebase login
}
else {
    Write-Host "✅ Já está logado no Firebase" -ForegroundColor Green
}

Write-Host ""

# Configurar projeto
Write-Host "⚙️  Verificando configuração do projeto..." -ForegroundColor Yellow
firebase use illure-sm

Write-Host ""

# Instalar dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Yellow
npm install

Write-Host ""

# Build do projeto
Write-Host "🔨 Fazendo build do Next.js..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Erro no build. Verifique os erros acima." -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 DICA: Este projeto usa Server Actions que não funcionam com exportação estática." -ForegroundColor Yellow
    Write-Host "   Para fazer deploy, você precisa usar uma das seguintes opções:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "   1. Firebase App Hosting (recomendado):" -ForegroundColor Cyan
    Write-Host "      - Execute: .\deploy-github.ps1" -ForegroundColor White
    Write-Host "      - Conecte ao GitHub e depois ao Firebase Console" -ForegroundColor White
    Write-Host ""
    Write-Host "   2. Ou acesse direto o Firebase Console:" -ForegroundColor Cyan
    Write-Host "      https://console.firebase.google.com/u/1/project/illure-sm/apphosting" -ForegroundColor Blue
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "✅ Build concluído!" -ForegroundColor Green

Write-Host ""
Write-Host "⚠️  ATENÇÃO: Deploy direto via Firebase Hosting requer exportação estática." -ForegroundColor Yellow
Write-Host "   Este projeto usa Server Actions, que não são compatíveis." -ForegroundColor Yellow
Write-Host ""
Write-Host "🔧 Soluções disponíveis:" -ForegroundColor Cyan
Write-Host ""
Write-Host "   1. RECOMENDADO - Firebase App Hosting:" -ForegroundColor Green
Write-Host "      Execute: .\deploy-github.ps1" -ForegroundColor White
Write-Host ""
Write-Host "   2. OU converta Server Actions para API Routes:" -ForegroundColor Yellow
Write-Host "      Isso permitiria exportação estática." -ForegroundColor White
Write-Host ""
Write-Host "Qual opção você prefere? (App Hosting é mais fácil e moderno)" -ForegroundColor Cyan
