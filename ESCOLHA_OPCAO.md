# ⚠️ ATENÇÃO: Decisão Necessária

## Situação Atual

Você executou `firebase init hosting:github` que criou configuração para **Firebase Hosting** (sites estáticos).

**PROBLEMA:** Seu projeto usa **Server Actions** no arquivo `src/app/actions.ts` (formulário de contato com envio de email), que **NÃO FUNCIONAM** com exportação estática.

---

## 🎯 Escolha Uma Opção:

### **Opção 1: Firebase App Hosting** (RECOMENDADA) ✅

**Vantagens:**
- ✅ Suporta Server Actions (formulário funcionará)
- ✅ SSR completo do Next.js
- ✅ Todas as funcionalidades

**Desvantagens:**
- Precisa conectar via Console (não CLI)
- Requer repositório GitHub

**Como fazer:**
1. Deletar os workflows criados
2. Fazer push do código ao GitHub
3. Conectar via: https://console.firebase.google.com/u/1/project/illure-website/apphosting

---

### **Opção 2: Firebase Hosting** (Atual) ⚠️

**Vantagens:**
- ✅ Deploy via CLI
- ✅ Workflows GitHub Actions prontos

**Desvantagens:**
- ❌ Formulário de contato NÃO funcionará
- ❌ Precisa remover Server Actions manualmente
- ❌ Funcionalidades limitadas

**Como fazer:**
1. Remover/Converter `src/app/actions.ts` para API Routes
2. Adicionar `output: 'export'` no `next.config.ts`
3. Fazer push e deploy automático

---

### **Opção 3: Firebase Hosting + Functions** 🔧

**Vantagens:**
- ✅ Suporta SSR
- ✅ Funcionalidades completas

**Desvantagens:**
- 🟡 Configuração complexa
- 🟡 Requer mais tempo

**Como fazer:**
1. Instalar `firebase-functions`
2. Configurar Next.js com Functions
3. Deploy via CLI

---

## 💡 Minha Recomendação

**Use App Hosting (Opção 1)**

É a solução moderna do Firebase especificamente para frameworks como Next.js.

---

## 🚀 Próximos Passos (se escolher App Hosting):

```powershell
# 1. Deletar workflows que não serão usados
Remove-Item -Recurse -Force .github

# 2. Adicionar mudanças ao git
git add .
git commit -m "Configure for App Hosting"

# 3. Push ao GitHub (use o script ou manual)
.\push-github-updated.ps1

# 4. Conectar via Console
# Acesse: https://console.firebase.google.com/u/1/project/illure-website/apphosting
```

---

## ❓ Qual opção você prefere?

Responda e eu configuro tudo para você!
