
# Plataforma Temáticos

Plataforma educacional gamificada com integração com Firebase e IA.

## ⚠️ Atenção: Uso da branch `master`

- Este projeto utiliza a **branch `master` como principal**
- A **branch `main` não contém os arquivos atualizados**
- Certifique-se de estar na `master` ao desenvolver ou testar localmente

## ✅ Deploy Vercel

- Para que o deploy funcione corretamente e a rota `/login` esteja disponível:
  - Acesse o painel do projeto na Vercel
  - Vá até Settings → Git
  - Altere a **Production Branch** para: `master`
  - Clique em **Redeploy**

## 🔐 Página de Login com Google

Acesse diretamente:

```
https://tematicos-plataforma.vercel.app/login
```

- A página permite login com conta Google via Firebase
- Exibe nome e imagem do usuário após login

## 📁 Estrutura

- `/pages/login.js`: rota protegida de login
- `/components/LoginButton.js`: botão e lógica de autenticação
- `/lib/firebase.js`: configuração do Firebase
