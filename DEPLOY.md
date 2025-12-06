# Guia de Deploy - illure Website no Firebase

## 🎯 Situação Atual

Seu projeto Next.js usa **Server Actions** (funcionalidade server-side), o que significa que ele **não pode** ser exportado como site estático simples. O Firebase oferece diferentes soluções para isso.

---

## ✅ OPÇÃO 1: Firebase App Hosting (RECOMENDADA)

**Por que escolher esta opção?**
- ✨ Totalmente compatível com Server Actions
- 🚀 Deploy automático via GitHub
- 🔄 CI/CD integrado
- 💪 Suporta todas as funcionalidades do Next.js

### Passos:

#### 1. Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Nome do repositório: `illure-website`
3. **NÃO** marque "Initialize with README"
4. Clique em "Create repository"

#### 2. Fazer Push do Código

Execute no PowerShell:

```powershell
.\deploy-github.ps1
```

Ou manualmente:

```powershell
# Inicializar Git
git init

# Adicionar arquivos
git add .

# Commit inicial
git commit -m "Initial commit - illure website"

# Adicionar remote (substitua SEU_USUARIO)
git remote add origin https://github.com/SEU_USUARIO/illure-website.git

# Push
git branch -M main
git push -u origin main
```

#### 3. Conectar ao Firebase App Hosting

1. Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting
2. Clique em "Get started" ou "Add a backend"
3. Selecione "GitHub" como provedor
4. Autorize o Firebase a acessar seu GitHub
5. Selecione o repositório `illure-website`
6. Branch: `main`
7. Root directory: `/`
8. Clique em "Next"
9. Revise as configurações e clique em "Finish"

#### 4. Deploy Automático

O Firebase detectará automaticamente que é um projeto Next.js e fará o build e deploy. Em cerca de 5-10 minutos, seu site estará online!

#### 5. Configurar Variáveis de Ambiente

No Firebase Console:
1. Vá para App Hosting
2. Clique no seu backend
3. Vá para "Environment variables"
4. Adicione as variáveis do arquivo `.env.local`:
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

## 🔧 OPÇÃO 2: Converter para Site Estático

Se você **não quiser** usar GitHub ou App Hosting, pode converter o projeto para exportação estática.

### Passos:

1. **Remover/Converter Server Actions:** Substituir o arquivo `src/app/actions.ts` por API Routes tradicionais

2. **Configurar Next.js para Export:**
   Já está configurado em `next.config.ts` (precisa descomentar `output: 'export'`)

3. **Deploy:**
   ```powershell
   npm run build
   firebase deploy --only hosting
   ```

**ATENÇÃO:** Isso requer modificações significativas no código para converter Server Actions em API Routes.

---

## 🎨 OPÇÃO 3: Deploy Via Firebase Console Manual

Se você tiver o código em um repositório Git (GitHub, GitLab, Bitbucket):

1. Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting
2. Clique em "Get started"
3. Conecte seu<br/>

---

## 📊 Comparação de Opções

| Característica | App Hosting | Estático |
|----------------|-------------|----------|
| Server Actions | ✅ Sim | ❌ Não |
| CI/CD Automático | ✅ Sim | ❌ Não |
| Requer GitHub | ✅ Sim | ❌ Não |
| Funcionalidades SSR | ✅ Todas | ❌ Limitado |
| Complexidade | 🟢 Baixa | 🟡 Média |
| Custo | 🟡 Médio | 🟢 Baixo |

---

## 🚀 Próximos Passos Recomendados

**Execute agora:**

```powershell
.\deploy-github.ps1
```

Depois siga as instruções para conectar ao Firebase App Hosting no console.

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas ou problemas:
1. Verifique o console do Firebase para logs de erro
2. Confira se todas as variáveis de ambiente estão configuradas
3. Teste o build local com: `npm run build`

---

## 🔗 Links Úteis

- Firebase Console: https://console.firebase.google.com/u/1/project/illure-website
- App Hosting: https://console.firebase.google.com/u/1/project/illure-website/apphosting
- GitHub: https://github.com
- Documentação App Hosting: https://firebase.google.com/docs/app-hosting
- Documentação Next.js: https://nextjs.org/docs
