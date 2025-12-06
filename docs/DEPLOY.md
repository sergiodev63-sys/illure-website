# 🚀 Guia de Deploy - Firebase App Hosting

Este guia irá ajudá-lo a fazer o deploy do seu projeto Next.js no Firebase App Hosting.

## 📋 Pré-requisitos Completados

✅ Firebase CLI instalado globalmente  
✅ Arquivo `firebase.json` criado  
✅ Arquivo `apphosting.yaml` já existe no projeto  

---

## 🔐 Passo 1: Fazer Login no Firebase

Execute o seguinte comando para fazer login na sua conta Google/Firebase:

```bash
firebase login
```

Isso abrirá uma janela do navegador para você fazer login.

---

## 🏗️ Passo 2: Criar ou Conectar a um Projeto Firebase

### Opção A: Criar um novo projeto Firebase

1. Acesse: https://console.firebase.google.com/
2. Clique em "Adicionar projeto" ou "Add project"
3. Digite um nome para o projeto (exemplo: `illure-app`)
4. Siga os passos do assistente
5. Após criar, copie o **Project ID**

### Opção B: Usar um projeto existente

Se você já tem um projeto Firebase, apenas anote o **Project ID**.

---

## 🔗 Passo 3: Conectar o Projeto Local ao Firebase

Crie o arquivo `.firebaserc` com o seguinte conteúdo (substitua `SEU-PROJECT-ID`):

```json
{
  "projects": {
    "default": "SEU-PROJECT-ID"
  }
}
```

**OU** execute:

```bash
firebase use --add
```

E selecione seu projeto da lista.

---

## 🌐 Passo 4: Habilitar App Hosting no Firebase

1. Acesse: https://console.firebase.google.com/
2. Selecione seu projeto
3. No menu lateral, vá em **"App Hosting"**
4. Clique em **"Get Started"**
5. Siga as instruções para conectar seu repositório Git (GitHub, GitLab, etc.)

---

## 🚀 Passo 5: Fazer o Deploy

### Opção 1: Deploy via Git (Recomendado)

Se você conectou um repositório Git no Passo 4:

1. Faça commit das suas alterações:
   ```bash
   git add .
   git commit -m "Configuração Firebase App Hosting"
   git push
   ```

2. O Firebase automaticamente detectará o push e fará o deploy!

### Opção 2: Deploy Manual

```bash
firebase deploy --only hosting
```

---

## ✅ Passo 6: Verificar o Deploy

Após o deploy, você verá uma URL como:

```
✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/SEU-PROJECT-ID
Hosting URL: https://SEU-PROJECT-ID.web.app
```

Acesse a URL para ver seu site publicado! 🎉

---

## 🔧 Configurações Adicionais

### Variáveis de Ambiente

Se você usa variáveis de ambiente (`.env.local`), configure-as no Firebase:

```bash
firebase functions:config:set app.env="production"
```

### Domínio Personalizado

1. Acesse o Console do Firebase
2. Vá em **App Hosting** > **Custom Domain**
3. Adicione seu domínio e siga as instruções

---

## 📝 Comandos Úteis

```bash
# Ver projetos Firebase
firebase projects:list

# Ver status do hosting
firebase hosting:channel:list

# Deploy para preview
firebase hosting:channel:deploy preview

# Ver logs
firebase deploy --debug
```

---

## 🆘 Problemas Comuns

### Erro: "Firebase CLI not found"
Execute: `npm install -g firebase-tools`

### Erro: "Not authorized"
Execute: `firebase logout` e depois `firebase login`

### Build falha
Verifique se `npm run build` funciona localmente primeiro

---

## 📚 Recursos

- [Documentação Firebase App Hosting](https://firebase.google.com/docs/app-hosting)
- [Next.js no Firebase](https://firebase.google.com/docs/app-hosting/frameworks/nextjs)
- [Configuração apphosting.yaml](https://firebase.google.com/docs/app-hosting/configure)

---

**Criado em:** 05/12/2025  
**Projeto:** Illure - Soluções Interativas
