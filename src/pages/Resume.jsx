import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { usePageTitle } from '../hooks/usePageTitle'
import Modal from '../components/Modal'
import CurriculoViewer from '../components/CurriculoViewer'
import { getCurriculoFile, getCurriculoDownloadName } from '../config/curriculo'
import styles from './Resume.module.css'

const conhecimentos = ['JavaScript', 'Java', 'Python', 'HTML', 'CSS', 'React', 'Git']

function Resume() {
  usePageTitle('resume')
  const { t, i18n } = useTranslation()
  const lang = i18n.resolvedLanguage || i18n.language

  const [viewerAberto, setViewerAberto] = useState(false)

  const experiencias = t('resume.experiences', { returnObjects: true })

  return (
    <section>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>{t('resume.eyebrow')}</p>
          <h1 className={styles.title}>{t('resume.title')}</h1>
        </div>

        <div className={styles.docActions}>
          <button
            type="button"
            className={styles.docButton}
            onClick={() => setViewerAberto(true)}
          >
            {t('resume.viewResume')} <span aria-hidden="true">↗</span>
          </button>
          <a
            className={styles.docButton}
            href={getCurriculoFile(lang)}
            download={getCurriculoDownloadName(lang)}
          >
            {t('resume.downloadPdf')} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className={styles.sections}>
        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>{t('resume.educationLabel')}</span>
          <div className={styles.item}>
            <span className={styles.itemTitle}>{t('resume.course')}</span>
            <span className={styles.itemSubtitle}>{t('resume.institution')}</span>
            <span className={styles.itemStatus}>{t('resume.educationStatus')}</span>
          </div>
        </div>

        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>{t('resume.knowledgeLabel')}</span>
          {conhecimentos.length > 0 ? (
            <div className={styles.skills}>
              {conhecimentos.map((skill) => (
                <span key={skill} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>{t('resume.empty')}</p>
          )}
        </div>

        <div className={styles.sectionRow}>
          <span className={styles.sectionLabel}>{t('resume.experienceLabel')}</span>
          {experiencias.length > 0 ? (
            <div className={styles.experienceList}>
              {experiencias.map((exp, i) => (
                <div key={i} className={styles.experience}>
                  <span className={styles.experiencePeriod}>{exp.periodo}</span>
                  <span className={styles.experienceRole}>{exp.cargo}</span>
                  <span className={styles.experienceOrg}>{exp.organizacao}</span>
                  <p className={styles.experienceDesc}>{exp.descricao}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className={styles.empty}>{t('resume.empty')}</p>
          )}
        </div>
      </div>

      {viewerAberto && (
        <Modal title={t('resume.modalTitle')} onClose={() => setViewerAberto(false)}>
          <CurriculoViewer />
        </Modal>
      )}
    </section>
  )
}

export default Resume
