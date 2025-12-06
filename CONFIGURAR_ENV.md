# ⚙️ Configurar Variáveis de Ambiente - Firebase App Hosting

## Depois do Deploy Completar

Seu formulário de contato precisa das variáveis de ambiente para funcionar.

---

## 📝 Passos para Configurar:

### 1. Acesse o Backend

No Firebase Console (App Hosting):
- Clique no backend que acabou de criar
- Ou acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting

### 2. Ir para Environment Variables

- Na página do backend, procure a aba **"Environment variables"**
- Ou procure **"Settings"** → **"Environment variables"**

### 3. Adicionar as Variáveis

Copie do arquivo `.env.local` e adicione:

```
GOOGLE_SERVICE_ACCOUNT_EMAIL=seu-valor-aqui
GOOGLE_PRIVATE_KEY=seu-valor-aqui
GOOGLE_SHEET_ID=seu-valor-aqui
GOOGLE_SHEET_NAME=Sheet1
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=seu-email@gmail.com
EMAIL_SERVER_PASSWORD=sua-senha-app
EMAIL_FROM=seu-email@gmail.com
```

### 4. Salvar e Redeploy

- Após adicionar todas as variáveis, clique em **"Save"**
- O Firebase fará um **redeploy automático** com as novas variáveis
- Aguarde 2-3 minutos

---

## ✅ Verificar se Funcionou

Após o redeploy:
1. Acesse seu site (URL fornecida pelo Firebase)
2. Vá até a seção de **Contato**
3. Teste o formulário de contato
4. Verifique se o email chegou

---

## 🔍 Encontrar os Valores das Variáveis

### Google Sheets (opcional, para salvar mensagens):
1. Crie uma planilha no Google Sheets
2. Pegue o ID da URL (entre `/d/` e `/edit`)
3. Configure Service Account no Google Cloud Console

### Email (Gmail):
1. Ative a verificação em 2 etapas
2. Crie uma senha de app: https://myaccount.google.com/apppasswords
3. Use essa senha em `EMAIL_SERVER_PASSWORD`

---

## 🎯 Importante

- **Sem as variáveis de ambiente**, o formulário de contato **não funcionará**
- O resto do site funcionará normalmente
- Você pode adicionar as variáveis mais tarde

---

## 📱 URL do Seu Site

Após o deploy, o Firebase fornecerá uma URL como:
```
https://illure-website--<hash>.web.app
```

Você também pode configurar um **domínio customizado** depois.

---

**Pronto! Seu site estará no ar! 🎉**
