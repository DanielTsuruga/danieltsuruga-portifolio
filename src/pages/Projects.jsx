import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLocalizedProjects } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './Projects.module.css'

function Projects() {
  usePageTitle('projects')
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language
  const projects = getLocalizedProjects(lang)

  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section>
      <span className={styles.eyebrow}>{t('projects.eyebrow')}</span>
      <h1 className={styles.title}>{t('projects.title')}</h1>

      <div className={styles.layout}>
        <div className={styles.timeline}>
          <div className={styles.yearMarker}>
            <span className={styles.yearDot} aria-hidden="true" />
            <span className={styles.yearLabel}>2026</span>
          </div>

          <div className={styles.list}>
            {projects.map((project, index) => {
              const numero = String(index + 1).padStart(2, '0')
              const ativo = index === activeIndex

              return (
                <Link
                  key={project.id}
                  to={`/projetos/${project.id}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`${styles.item} ${ativo ? styles.itemActive : ''}`}
                >
                  <span className={styles.number}>{numero}</span>

                  <div className={styles.info}>
                    <h2 className={styles.name}>{project.nome}</h2>
                    <p className={styles.description}>{project.descricao}</p>
                    {project.status === 'em-desenvolvimento' && (
                      <span className={styles.badge}>{t('projects.inDevelopment')}</span>
                    )}
                  </div>

                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </Link>
              )
            })}
          </div>
        </div>

        <div className={styles.previewPane}>
          {activeProject.preview ? (
            <img
              className={styles.previewImage}
              src={activeProject.preview}
              alt={t('projects.previewAlt', { name: activeProject.nome })}
            />
          ) : (
            <div className={styles.previewPlaceholder}>
              <img
                className={styles.previewLogo}
                src={activeProject.logo}
                alt={t('projects.logoAlt', { name: activeProject.nome })}
              />
              <span className={styles.previewStatus}>{t('projects.inDevelopment')}</span>
              <span className={styles.previewHint}>{t('projects.previewSoon')}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
