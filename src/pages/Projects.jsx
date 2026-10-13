import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import styles from './Projects.module.css'

function Projects() {
  return (
    <section>
      <span className={styles.eyebrow}>01 — TRABALHOS SELECIONADOS</span>
      <h1 className={styles.title}>Projetos</h1>
      <div className={styles.list}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects