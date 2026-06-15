import { useState, useEffect } from 'react'
import styles from './App.module.css'

function App() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const [logado, setLogado] = useState(false)
  const [tentativa, setTentativa] = useState(0)

  // useEffect observa "tentativa" e verifica as credenciais sempre que ela muda
  useEffect(() => {
    if (tentativa === 0) return

    if (login === 'usuario' && senha === '1234') {
      setErro('')
      setLogado(true)
    } else {
      setErro('Nome de usuário ou senha incorretos.')
      setLogado(false)
    }
  }, [tentativa])

  function handleSubmit(e) {
    e.preventDefault()
    setTentativa(prev => prev + 1)
  }

  function handleLogout() {
    setLogado(false)
    setLogin('')
    setSenha('')
    setTentativa(0)
    setErro('')
  }

  const SpotifyLogo = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 167.2 167.2"
      className={styles.logoImg}
      aria-label="Spotify"
    >
      <path
        fill="#1DB954"
        d="M83.6 0C37.4 0 0 37.4 0 83.6s37.4 83.6 83.6 83.6 83.6-37.4 83.6-83.6S129.8 0 83.6 0zm38.4 120.5c-1.5 2.5-4.7 3.2-7.1 1.7C95.1 112 75 110 51.6 115c-2.9.6-5.8-1.2-6.4-4.1-.6-2.9 1.2-5.8 4.1-6.4 25.7-5.5 47.8-3.1 65.5 8.9 2.4 1.5 3.2 4.7 1.7 7.1zm10.2-22.7c-1.9 3.1-5.9 4-9 2.1-16.2-9.9-40.8-12.8-59.9-7-2.5.8-5.1-.6-5.9-3.1-.8-2.5.6-5.1 3.1-5.9 21.9-6.6 49.1-3.4 67.8 8 3 1.9 4 5.9 2.1 9h-.2zm.9-23.6c-19.4-11.5-51.4-12.6-69.9-7-3 .9-6.1-.7-7-3.7-.9-3 .7-6.1 3.7-7 21.3-6.4 56.7-5.2 79.1 8.1 2.7 1.6 3.6 5.1 2 7.8-1.6 2.7-5.1 3.6-7.8 2h-.1z"
      />
    </svg>
  )

  if (logado) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.logo}>
            <SpotifyLogo />
          </div>
          <h1 className={styles.title}>Bem-vindo ao Spotify!</h1>
          <p className={styles.welcomeText}>
            Você está logado como <strong>{login}</strong>.
          </p>
          <button className={styles.button} onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <SpotifyLogo />
        </div>

        <h1 className={styles.title}>Entrar no Spotify</h1>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label htmlFor="login" className={styles.label}>
              Nome de usuário ou e-mail
            </label>
            <input
              id="login"
              type="text"
              value={login}
              onChange={e => setLogin(e.target.value)}
              className={styles.input}
              placeholder="Nome de usuário ou e-mail"
              autoComplete="username"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="senha" className={styles.label}>
              Senha
            </label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              className={styles.input}
              placeholder="Senha"
              autoComplete="current-password"
            />
          </div>

          {erro && <p className={styles.erro}>{erro}</p>}

          <button type="submit" className={styles.button}>
            Entrar
          </button>
        </form>

        <div className={styles.divider}>
          <hr />
          <span>ou</span>
          <hr />
        </div>

        <p className={styles.signup}>
          Ainda não tem uma conta?{' '}
          <a href="#" className={styles.link}>
            Cadastre-se no Spotify
          </a>
        </p>

        <p className={styles.hint}>
          <small>
            Dica: usuário <strong>usuario</strong> / senha <strong>1234</strong>
          </small>
        </p>
      </div>
    </div>
  )
}

export default App
