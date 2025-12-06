# ⚙️ Configuração Firebase App Hosting - Passo a Passo Manual

## 🎯 Situação Atual

- ✅ Firebase CLI instalado e logado
- ✅ Arquivos de configuração criados
- ⚠️ Precisamos criar um projeto Firebase no console

---

## 📝 Passos para Criar o Projeto Firebase

### **Passo 1: Criar Projeto no Console**

1. Acesse: **https://console.firebase.google.com/**
2. Clique em **"Adicionar projeto"** ou **"Add project"**
3. Preencha os dados:
   - **Nome do projeto**: `Illure App` (ou o nome que preferir)
   - **Project ID**: Anote esse ID (será algo como `illure-app-xxxxx`)
4. Clique em **Continuar**
5. **Google Analytics**: Pode desabilitar por enquanto (opcional)
6. Clique em **Criar projeto**
7. Aguarde a criação (leva ~30 segundos)

---

### **Passo 2: Habilitar Web App Hosting**

Após criar o projeto:

1. No menu lateral, clique em **"Build"** > **"Hosting"**
2. Clique em **"Get started"** ou **"Primeiros passos"**
3. Siga o assistente de configuração

**OU**

1. No menu lateral, procure por **"App Hosting"** (em preview/beta)
2. Clique em **"Get started"**

---

### **Passo 3: Atualizar o Arquivo .firebaserc**

Após criar o projeto, **copie o Project ID** e rode este comando no terminal:

```powershell
# Substitua SEU-PROJECT-ID pelo ID real do projeto
firebase use --add
```

Ou edite manualmente o arquivo `.firebaserc`:

```json
{
  "projects": {
    "default": "SEU-PROJECT-ID"
  }
}
```

---

### **Passo 4: Deploy**

Depois de configurar o projeto:

```powershell
# Build do projeto
npm run build

# Deploy para Firebase
firebase deploy --only hosting
```

---

## 🚀 Alternativa Mais Rápida: Firebase App Hosting com Git

Se você tiver seu código em um repositório Git (GitHub/GitLab):

1. No Firebase Console, vá para **"App Hosting"**
2. Clique em **"Connect GitHub"** ou **"Conectar GitHub"**
3. Selecione seu repositório
4. Configure os settings:
   - **Framework**: Next.js (detectado automaticamente)
   - **Branch**: main ou master
   - **Build command**: `npm run build`
   - **Output directory**: `.next`
5. Clique em **"Create backend"**

O Firebase fará deploy automático a cada push no Git! 🎉

---

## 💡 Recomendação

Como há limitações para criar projetos via CLI, recomendo:

**Usar o console web do Firebase** para:
1. Criar o projeto
2. Habilitar App Hosting
3. Conectar com Git (deploy automático)

**Benefícios**:
- ✅ Mais fácil e visual
- ✅ Deploy automático via Git
- ✅ Preview de cada branch
- ✅ Rollback fácil

---

## 🔗 Links Úteis

- **Firebase Console**: https://console.firebase.google.com/
- **Documentação App Hosting**: https://firebase.google.com/docs/app-hosting
- **Next.js + Firebase**: https://firebase.google.com/docs/app-hosting/frameworks/nextjs

---

**Próximo passo**: Criar o projeto no console do Firebase e me avisar qual é o Project ID para atualizarmos a configuração! 🚀
