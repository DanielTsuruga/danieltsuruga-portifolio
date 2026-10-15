import { useEffect, useRef, useState } from 'react'
import { FiDownload, FiExternalLink, FiZoomIn, FiZoomOut, FiMaximize2 } from 'react-icons/fi'
import { Document, Page, pdfjs } from 'react-pdf'
import { useTranslation, Trans } from 'react-i18next'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import CURRICULO_CONFIG from '../config/curriculo'
import styles from './CurriculoViewer.module.css'

import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl

const { file, downloadName, zoomMin, zoomMax, zoomStep } = CURRICULO_CONFIG

function CurriculoViewer() {
  const { t } = useTranslation()
  const areaRef = useRef(null)
  const [pages, setPages] = useState(0)
  const [zoom, setZoom] = useState(1)
  const [width, setWidth] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const area = areaRef.current
    if (!area) return
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.max(240, Math.floor(entry.contentRect.width))),
    )
    observer.observe(area)
    return () => observer.disconnect()
  }, [])

  const changeZoom = (delta) =>
    setZoom((z) => Math.min(zoomMax, Math.max(zoomMin, +(z + delta).toFixed(2))))

  const pageWidth = width ? Math.round(Math.min(width, 820) * zoom) : undefined
  const loading = !error && pages === 0

  return (
    <div className={styles.viewer}>
      <div className={styles.toolbar}>
        {pages > 0 && (
          <span className={styles.pages}>{t('curriculoViewer.page', { count: pages })}</span>
        )}

        <div className={styles.zoom} role="group" aria-label={t('curriculoViewer.zoomGroup')}>
          <button
            type="button"
            className={styles.zoomButton}
            onClick={() => changeZoom(-zoomStep)}
            disabled={zoom <= zoomMin}
            title={t('curriculoViewer.zoomOut')}
            aria-label={t('curriculoViewer.zoomOut')}
          >
            <FiZoomOut aria-hidden="true" />
          </button>
          <span className={styles.zoomValue} aria-live="polite">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            className={styles.zoomButton}
            onClick={() => changeZoom(zoomStep)}
            disabled={zoom >= zoomMax}
            title={t('curriculoViewer.zoomIn')}
            aria-label={t('curriculoViewer.zoomIn')}
          >
            <FiZoomIn aria-hidden="true" />
          </button>
          <button
            type="button"
            className={styles.zoomButton}
            onClick={() => setZoom(1)}
            disabled={zoom === 1}
            title={t('curriculoViewer.fitWidth')}
            aria-label={t('curriculoViewer.fitWidth')}
          >
            <FiMaximize2 aria-hidden="true" />
          </button>
        </div>

        <div className={styles.actions}>
          <a
            className={`${styles.actionButton} ${styles.actionPrimary}`}
            href={file}
            download={downloadName}
          >
            <FiDownload aria-hidden="true" /> {t('curriculoViewer.downloadPdf')}
          </a>
          <a
            className={styles.actionButton}
            href={file}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink aria-hidden="true" /> {t('curriculoViewer.open')}
          </a>
        </div>
      </div>

      <div className={styles.area} ref={areaRef}>
        {loading && <p className={styles.status}>{t('curriculoViewer.loading')}</p>}

        {error ? (
          <p className={`${styles.status} ${styles.error}`}>
            <Trans i18nKey="curriculoViewer.error">
              Não foi possível exibir o PDF aqui. Use os botões <strong>Baixar PDF</strong> ou{' '}
              <strong>Abrir</strong>.
            </Trans>
          </p>
        ) : (
          <Document
            file={file}
            onLoadSuccess={({ numPages }) => setPages(numPages)}
            onLoadError={(err) => {
              console.error('Currículo: falha ao abrir o PDF', err)
              setError(true)
            }}
            loading={null}
            error={null}
          >
            {pageWidth &&
              Array.from({ length: pages }, (_, i) => (
                <div key={i} className={styles.page}>
                  <Page pageNumber={i + 1} width={pageWidth} loading={null} />
                </div>
              ))}
          </Document>
        )}
      </div>
    </div>
  )
}

export default CurriculoViewer
