import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './Projects.module.css'

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projects[activeIndex]

  return (
    <section>
      <span className={styles.eyebrow}>TRABALHOS SELECIONADOS</span>
      <h1 className={styles.title}>Projetos</h1>

      <div className={styles.layout}>
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
                <div className={styles.meta}>
                  <span className={styles.number}>{numero}</span>
                  <span className={styles.year}>{project.ano}</span>
                </div>

                <div className={styles.info}>
                  <h2 className={styles.name}>{project.nome}</h2>
                  <p className={styles.description}>{project.descricao}</p>
                  {project.status === 'em-desenvolvimento' && (
                    <span className={styles.badge}>Em desenvolvimento</span>
                  )}
                </div>

                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </Link>
            )
          })}
        </div>

        <div className={styles.previewPane}>
          {activeProject.preview ? (
            <img
              className={styles.previewImage}
              src={activeProject.preview}
              alt={`Pré-visualização do ${activeProject.nome}`}
            />
          ) : (
            <div className={styles.previewPlaceholder}>
              <img
                className={styles.previewLogo}
                src={activeProject.logo}
                alt={`Logo do ${activeProject.nome}`}
              />
              <span className={styles.previewStatus}>Em desenvolvimento</span>
              <span className={styles.previewHint}>Pré-visualização em breve</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
