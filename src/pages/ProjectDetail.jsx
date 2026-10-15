import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getProjectById, getNextProject } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import styles from './ProjectDetail.module.css'

function ProjectDetail() {
  const { id } = useParams()
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language
  const project = getProjectById(id, lang)

  // Nome próprio do projeto (ou chave genérica quando não encontrado).
  usePageTitle(project ? project.nome : t('titles.project'), { raw: true })

  if (!project) {
    return (
      <section className={styles.notFound}>
        <h1>{t('projectDetail.notFoundTitle')}</h1>
        <p>{t('projectDetail.notFoundText')}</p>
        <Link to="/projetos" className={styles.back}>
          ← {t('projectDetail.backToProjects')}
        </Link>
      </section>
    )
  }

  const next = getNextProject(id, lang)

  const secoes = [
    { label: t('projectDetail.sectionDescription'), texto: project.detalhes.descricao },
    { label: t('projectDetail.sectionProblem'), texto: project.detalhes.problema },
    { label: t('projectDetail.sectionSolution'), texto: project.detalhes.solucao },
    { label: t('projectDetail.sectionContribution'), texto: project.detalhes.contribuicao },
  ]

  return (
    <article>
      <Link to="/projetos" className={styles.back}>
        ← {t('projectDetail.back')}
      </Link>

      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{t('projectDetail.eyebrow', { year: project.ano })}</p>
          <h1 className={styles.title}>{project.nome}</h1>
          {project.status === 'em-desenvolvimento' && (
            <span className={styles.badge}>{t('projectDetail.inDevelopment')}</span>
          )}
        </div>

        <div className={styles.sidebar}>
          <div>
            <p className={styles.sidebarLabel}>{t('projectDetail.technologies')}</p>
            <div className={styles.techs}>
              {project.tecnologias.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className={styles.sidebarLabel}>{t('projectDetail.links')}</p>
            <div className={styles.links}>
              {project.repo ? (
                <a className={styles.link} href={project.repo} target="_blank" rel="noreferrer">
                  {t('projectDetail.repository')} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={styles.linkDisabled}>{t('projectDetail.repoSoon')}</span>
              )}
              {project.site && (
                <a className={styles.link} href={project.site} target="_blank" rel="noreferrer">
                  {t('projectDetail.seeSite')} <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {project.demo ? (
        <div className={styles.preview}>
          <img src={project.demo} alt={t('projectDetail.demoAlt', { name: project.nome })} />
        </div>
      ) : project.preview ? (
        <div className={styles.preview}>
          <img src={project.preview} alt={t('projectDetail.previewAlt', { name: project.nome })} />
        </div>
      ) : (
        <div className={styles.previewPlaceholder}>
          <img
            className={styles.previewLogo}
            src={project.logo}
            alt={t('projectDetail.logoAlt', { name: project.nome })}
          />
          <span className={styles.previewHint}>{t('projects.previewSoon')}</span>
        </div>
      )}

      <div className={styles.sections}>
        {secoes.map((secao) => (
          <div key={secao.label} className={styles.sectionRow}>
            <span className={styles.sectionLabel}>{secao.label}</span>
            {secao.texto ? (
              <p className={styles.sectionText}>{secao.texto}</p>
            ) : (
              <p className={styles.sectionEmpty}>{t('projectDetail.infoSoon')}</p>
            )}
          </div>
        ))}
      </div>

      {next && (
        <div className={styles.next}>
          <span className={styles.nextLabel}>{t('projectDetail.nextProject')}</span>
          <Link to={`/projetos/${next.id}`} className={styles.nextLink}>
            {next.nome} <span aria-hidden="true">→</span>
          </Link>
        </div>
      )}
    </article>
  )
}

export default ProjectDetail
