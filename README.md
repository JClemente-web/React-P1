# React P1 — Clone da Página de Login do Spotify

Clone fiel da página de login do Spotify, desenvolvido com **React + Vite** como projeto P1 da disciplina de Desenvolvimento Web com React.

---

## 🎯 Objetivo do Projeto

Demonstrar o uso dos hooks fundamentais do React:

- **`useState`** — gerenciamento de estado local (campos do formulário, erros, loading, visibilidade da senha)
- **`useEffect`** — efeito colateral que observa mudanças na variável `tentativa` para verificar as credenciais do usuário
- **CSS Modules** — estilização com escopo isolado por componente (`App.module.css`)

---

## ✨ Funcionalidades

- Tela de login fiel ao design do Spotify (fundo escuro, verde `#1DB954`, botões pill)
- Botões de login social (Google, Facebook, Apple) — estéticos
- Validação de campos vazios antes de submeter
- Verificação de credenciais via `useEffect` com delay simulado de 600ms
- Exibição de erro com destaque visual nos inputs e mensagem com ícone
- Toggle para mostrar/ocultar senha
- Botão "Entrar" desabilitado durante o loading
- Tela de sucesso com nome do usuário após login
- Botão "Sair" que reseta todos os estados

---

## 🛠️ Tecnologias

| Tecnologia | Versão |
|---|---|
| React | 18.3.1 |
| Vite | 6.0.1 |
| CSS Modules | — |

---

## 📁 Estrutura do Projeto

```
react-p1/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
└── src/
    ├── main.jsx         # Ponto de entrada da aplicação
    ├── index.css        # Reset global e fonte
    ├── App.jsx          # Componente principal (toda a lógica)
    └── App.module.css   # Estilos com CSS Modules
```

---

## 🚀 Como Executar Localmente

**Pré-requisitos:** Node.js instalado (v18+)

```bash
# 1. Clone o repositório
git clone https://github.com/JClemente-web/react-P1.git

# 2. Entre na pasta
cd react-P1

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse **http://localhost:5173** no navegador.

---

## 🔑 Credenciais de Teste

| Campo | Valor |
|---|---|
| E-mail | `usuario@spotify.com` |
| Senha | `1234` |

---

## 💡 Como o `useEffect` é Usado

O hook `useEffect` observa a variável `tentativa` (um contador incrementado a cada clique em "Entrar"). Sempre que `tentativa` muda, o efeito dispara e verifica as credenciais com um delay de 600ms para simular uma requisição:

```jsx
useEffect(() => {
  if (tentativa === 0) return   // ignora o estado inicial

  setLoading(true)

  const timer = setTimeout(() => {
    if (login === USUARIO_VALIDO && senha === SENHA_VALIDA) {
      setLogado(true)
    } else {
      setErro('Nome de usuário ou senha incorretos.')
    }
    setLoading(false)
  }, 600)

  return () => clearTimeout(timer)   // cleanup
}, [tentativa])
```

Essa abordagem garante que a verificação não ocorre no mount inicial — apenas quando o usuário tenta fazer login.

---

## 📸 Preview

| Tela de Login | Login com Erro | Logado |
|---|---|---|
| Formulário com botões sociais e campos de e-mail/senha | Destaque vermelho nos inputs + mensagem de erro | Tela de boas-vindas com o e-mail do usuário |

---

## 👤 Autor

**João Vitor Clemente Ferreira**
GitHub: [@JClemente-web](https://github.com/JClemente-web)
