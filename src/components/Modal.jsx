import { useEffect } from 'react'
import styles from './Modal.module.css'

function Modal({ title, onClose, children }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        className={styles.content}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  )
}

export default Modal
