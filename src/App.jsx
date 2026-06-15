import { useState, useEffect } from 'react'
import styles from './App.module.css'

export default function App() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [tentativa, setTentativa] = useState(0)
  const [erro, setErro] = useState('')
  const [logado, setLogado] = useState(false)
  const [senhaVisivel, setSenhaVisivel] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (tentativa === 0) return

    setLoading(true)
    setErro('')

    const timer = setTimeout(() => {
      if (login === 'usuario@spotify.com' && senha === '1234') {
        setLogado(true)
      } else {
        setErro('E-mail ou senha incorretos.')
      }
      setLoading(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [tentativa])

  function handleSubmit(e) {
    e.preventDefault()
    if (!login.trim() || !senha.trim()) {
      setErro('Preencha o e-mail e a senha.')
      return
    }
    setTentativa(prev => prev + 1)
  }

  if (logado) {
    return (
      <div className={styles.successPage}>
        <SpotifyLogo />
        <h1 className={styles.successTitle}>Bem-vindo ao Spotify!</h1>
        <p className={styles.successSub}>
          Conectado como <strong>{login}</strong>
        </p>
        <button
          className={styles.logoutBtn}
          onClick={() => {
            setLogado(false)
            setLogin('')
            setSenha('')
            setErro('')
            setTentativa(0)
          }}
        >
          Sair
        </button>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <div className={styles.logo}>
          <SpotifyLogo />
        </div>

        <h1 className={styles.title}>Entrar no Spotify</h1>

        <div className={styles.socialButtons}>
          <button type="button" className={styles.socialBtn}>
            <GoogleIcon />
            Continuar com o Google
          </button>
          <button type="button" className={styles.socialBtn}>
            <FacebookIcon />
            Continuar com o Facebook
          </button>
          <button type="button" className={styles.socialBtn}>
            <AppleIcon />
            Continuar com a Apple
          </button>
        </div>

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerText}>ou</span>
          <span className={styles.dividerLine} />
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="login">
              Endereço de e-mail ou nome de usuário
            </label>
            <input
              id="login"
              className={`${styles.input} ${erro ? styles.inputError : ''}`}
              type="email"
              placeholder="E-mail ou nome de usuário"
              value={login}
              onChange={e => setLogin(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="senha">
              Senha
            </label>
            <div className={styles.passwordWrapper}>
              <input
                id="senha"
                className={`${styles.input} ${styles.inputPassword} ${erro ? styles.inputError : ''}`}
                type={senhaVisivel ? 'text' : 'password'}
                placeholder="Senha"
                value={senha}
                onChange={e => setSenha(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className={styles.eyeBtn}
                onClick={() => setSenhaVisivel(v => !v)}
                aria-label={senhaVisivel ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {senhaVisivel ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          {erro && <p className={styles.errorBox}>{erro}</p>}

          <button
            className={styles.loginBtn}
            type="submit"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <a className={styles.forgotLink} href="#">
          Esqueceu sua senha?
        </a>

        <hr className={styles.hr} />

        <p className={styles.signup}>
          Não tem uma conta?{' '}
          <a className={styles.signupLink} href="#">
            Cadastre-se no Spotify
          </a>
        </p>
      </div>
    </div>
  )
}

function SpotifyLogo() {
  return (
    <svg viewBox="0 0 168 168" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#ffffff"
        d="M84 0C37.6 0 0 37.6 0 84s37.6 84 84 84 84-37.6 84-84S130.4 0 84 0zm38.6 121.2c-1.5 2.5-4.8 3.3-7.3 1.7-20-12.2-45.2-15-74.9-8.2-2.9.7-5.7-1.1-6.4-4-.7-2.9 1.1-5.7 4-6.4 32.5-7.4 60.4-4.2 82.9 9.5 2.5 1.6 3.3 4.9 1.7 7.4zm10.3-22.9c-1.9 3.1-6 4.1-9.1 2.2-22.9-14.1-57.8-18.2-84.9-9.9-3.4 1-7-.9-8-4.3s.9-7 4.3-8c31-9.4 69.5-4.8 95.8 11.3 3.1 1.9 4.1 6 2.2 9.1l-.3-.4zm.9-23.8c-27.5-16.3-72.9-17.8-99.2-9.8-4.1 1.2-8.4-1.1-9.6-5.2s1.1-8.4 5.2-9.6c30.1-9.2 80.2-7.4 111.8 11.4 3.7 2.2 4.9 7 2.7 10.7-2.2 3.7-7.1 4.9-10.7 2.7l-.2-.2z"
      />
    </svg>
  )
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#ffffff" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  )
}
