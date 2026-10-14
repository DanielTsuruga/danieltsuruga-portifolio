import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import styles from './Contact.module.css'

const contatos = [
  {
    icon: FaGithub,
    label: 'GitHub',
    value: '@DanielTsuruga',
    href: 'https://github.com/DanielTsuruga',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'Daniel Eiji Tsuruga',
    href: 'https://www.linkedin.com/in/daniel-eiji-tsuruga-b6983b443/',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: '(31) 99705-4476',
    href: 'https://wa.me/5531997054476',
  },
  {
    icon: FaEnvelope,
    label: 'E-mail',
    value: 'daniel.tsuruga@gmail.com',
    href: 'mailto:daniel.tsuruga@gmail.com',
  },
]

const MAX_NOME = 100
const MAX_EMAIL = 254
const MAX_MENSAGEM = 2000

function Contact() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [erros, setErros] = useState({})
  const [status, setStatus] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((atual) => ({ ...atual, [name]: value }))
  }

  function validar() {
    const novosErros = {}
    if (!form.nome.trim()) novosErros.nome = 'Informe seu nome.'
    if (!form.email.trim()) {
      novosErros.email = 'Informe seu e-mail.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      novosErros.email = 'E-mail inválido.'
    }
    if (!form.mensagem.trim()) novosErros.mensagem = 'Escreva uma mensagem.'
    return novosErros
  }

  async function handleSubmit(e) {
    e.preventDefault()

    if (e.currentTarget.website.value) {
      setStatus('sucesso')
      return
    }

    const novosErros = validar()
    setErros(novosErros)
    if (Object.keys(novosErros).length > 0) return

    setStatus('enviando')

    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setStatus('sucesso')
      setForm({ nome: '', email: '', mensagem: '' })
    } catch {
      setStatus('erro')
    }
  }

  return (
    <section>
      <p className={styles.eyebrow}>VAMOS CONVERSAR</p>
      <h1 className={styles.title}>Contato</h1>
      <p className={styles.subtitle}>
        Daniel Tsuruga · Engenharia de Software · PUC Minas
      </p>

      <div className={styles.layout}>
        <div className={styles.links}>
          {contatos.map((c) => {
            const Icon = c.icon
            return (
              <a
                key={c.label}
                className={styles.linkItem}
                href={c.href}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className={styles.linkIcon} aria-hidden="true" />
                <span className={styles.linkText}>
                  <span className={styles.linkLabel}>{c.label}</span>
                  <span className={styles.linkValue}>{c.value}</span>
                </span>
              </a>
            )
          })}
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.honeypot} aria-hidden="true">
            <label>
              Não preencha este campo
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="nome">
              Nome
            </label>
            <input
              className={`${styles.input} ${erros.nome ? styles.inputError : ''}`}
              id="nome"
              name="nome"
              type="text"
              maxLength={MAX_NOME}
              value={form.nome}
              onChange={handleChange}
              placeholder="Seu nome"
            />
            {erros.nome && <span className={styles.errorMsg}>{erros.nome}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              E-mail
            </label>
            <input
              className={`${styles.input} ${erros.email ? styles.inputError : ''}`}
              id="email"
              name="email"
              type="email"
              maxLength={MAX_EMAIL}
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
            />
            {erros.email && <span className={styles.errorMsg}>{erros.email}</span>}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="mensagem">
              Mensagem
            </label>
            <textarea
              className={`${styles.textarea} ${erros.mensagem ? styles.inputError : ''}`}
              id="mensagem"
              name="mensagem"
              maxLength={MAX_MENSAGEM}
              value={form.mensagem}
              onChange={handleChange}
              placeholder="Escreva sua mensagem..."
            />
            {erros.mensagem && <span className={styles.errorMsg}>{erros.mensagem}</span>}
          </div>

          <button className={styles.submit} type="submit" disabled={status === 'enviando'}>
            {status === 'enviando' ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {status === 'sucesso' && (
            <p className={`${styles.status} ${styles.statusSuccess}`}>
              Mensagem enviada! Em breve retornarei o contato. ✅
            </p>
          )}
          {status === 'erro' && (
            <p className={`${styles.status} ${styles.statusError}`}>
              Ops, algo deu errado. Tente novamente ou use um dos links ao lado.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
