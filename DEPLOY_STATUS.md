# Guia Rápido - Deploy do illure-website

## ✅ STATUS: Configuração Concluída!

- ✅ Conta correta logada: sergio.dev63@gmail.com
- ✅ Projeto ativo: illure-website
- ✅ Código pronto para deploy

---

## 🚀 OPÇÃO 1: Firebase App Hosting via GitHub (RECOMENDADA)

### Passo 1: Fazer Push do Código ao GitHub

Você criou o repositório: https://github.com/sergiodev63-sys/illure-website

**Método A - Com Personal Access Token:**
```powershell
.\push-github-updated.ps1
```

**Método B - Upload Manual (MAIS FÁCIL):**
1. Acesse: https://github.com/sergiodev63-sys/illure-website
2. Clique em "Add file" → "Upload files"
3. Arraste todos os arquivos do projeto (EXCETO: node_modules, .next, .git, .firebase)
4. Commit

### Passo 2: Conectar ao Firebase App Hosting

1. Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting
2. Clique em "Get started" ou "Create backend"
3. Selecione **GitHub**
4. Autorize o Firebase
5. Selecione o repositório: **sergiodev63-sys/illure-website**
6. Branch: **main**
7. Root directory: **/** (deixe vazio ou use `/`)
8. Clique em **Next**
9. Revise e clique em **Finish**

### Passo 3: Aguardar Deploy

O Firebase fará automaticamente:
- ✅ Detectar Next.js
- ✅ Instalar dependências
- ✅ Build do projeto
- ✅ Deploy

**Tempo estimado:** 5-10 minutos

### Passo 4: Configurar Variáveis de Ambiente

No Firebase Console (após deploy):
1. Vá para App Hosting
2. Selecione seu backend
3. Clique em "Environment variables"
4. Adicione as variáveis do `.env.local`:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_SHEET_NAME`
   - `EMAIL_SERVER_HOST`
   - `EMAIL_SERVER_PORT`
   - `EMAIL_SERVER_USER`
   - `EMAIL_SERVER_PASSWORD`
   - `EMAIL_FROM`

---

## 🔧 OPÇÃO 2: Deploy via Firebase Hosting + Functions

Se App Hosting não funcionar, podemos converter para Hosting tradicional, mas isso requer modificar o código para remover Server Actions.

---

## 📝 Resumo do Que Foi Feito

1. ✅ Identificado que o projeto `illure-website` estava em conta diferente
2. ✅ Adicionado login para `sergio.dev63@gmail.com`
3. ✅ Configurado projeto `illure-website` como ativo
4. ✅ Criado repositório GitHub
5. ✅ Código commitado localmente
6. ⏳ Aguardando push ao GitHub
7. ⏳ Aguardando conexão com App Hosting

---

## 🎯 PRÓXIMO PASSO AGORA:

Execute um dos comandos:

```powershell
# Opção A: Script automático
.\push-github-updated.ps1

# Opção B: Comandos manuais (se tiver Personal Access Token)
git push https://github.com/sergiodev63-sys/illure-website.git main
```

Ou faça upload manual pelo navegador conforme instruções acima.

---

## ❓ Precisa de Ajuda?

- Repositório GitHub: https://github.com/sergiodev63-sys/illure-website
- Firebase Console: https://console.firebase.google.com/u/1/project/illure-website
- App Hosting: https://console.firebase.google.com/u/1/project/illure-website/apphosting

---

**Está quase lá! 🎉**
