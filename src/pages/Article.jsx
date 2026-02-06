import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { articles } from '../data/articles'

function formatDate(dateStr, lang) {
  const date = new Date(dateStr)
  return date.toLocaleDateString(lang === 'sv' ? 'sv-SE' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function parseMarkdown(text) {
  const lines = text.trim().split('\n')
  const elements = []
  let currentList = null

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()

    if (!line) {
      if (currentList) {
        elements.push(currentList)
        currentList = null
      }
      continue
    }

    if (line.startsWith('## ')) {
      if (currentList) {
        elements.push(currentList)
        currentList = null
      }
      elements.push({ type: 'h2', content: line.slice(3) })
    } else if (line.startsWith('**') && line.endsWith('**')) {
      if (currentList) {
        elements.push(currentList)
        currentList = null
      }
      elements.push({ type: 'strong-p', content: line.slice(2, -2) })
    } else if (line.startsWith('> ')) {
      if (currentList) {
        elements.push(currentList)
        currentList = null
      }
      elements.push({ type: 'blockquote', content: line.slice(2) })
    } else if (line.startsWith('- ')) {
      if (!currentList) {
        currentList = { type: 'ul', items: [] }
      }
      currentList.items.push(line.slice(2))
    } else if (/^\d+\. /.test(line)) {
      if (!currentList) {
        currentList = { type: 'ol', items: [] }
      }
      currentList.items.push(line.replace(/^\d+\. /, ''))
    } else {
      if (currentList) {
        elements.push(currentList)
        currentList = null
      }
      // Handle inline formatting
      const processedLine = line
        .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
        .replace(/\*([^*]+)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
      elements.push({ type: 'p', content: processedLine })
    }
  }

  if (currentList) {
    elements.push(currentList)
  }

  return elements
}

function renderContent(content) {
  const elements = parseMarkdown(content)

  return elements.map((el, i) => {
    if (el.type === 'h2') {
      return <h2 key={i}>{el.content}</h2>
    }
    if (el.type === 'strong-p') {
      return <p key={i}><strong>{el.content}</strong></p>
    }
    if (el.type === 'blockquote') {
      return <blockquote key={i}>{el.content}</blockquote>
    }
    if (el.type === 'ul') {
      return (
        <ul key={i}>
          {el.items.map((item, j) => <li key={j}>{item}</li>)}
        </ul>
      )
    }
    if (el.type === 'ol') {
      return (
        <ol key={i}>
          {el.items.map((item, j) => <li key={j}>{item}</li>)}
        </ol>
      )
    }
    return <p key={i} dangerouslySetInnerHTML={{ __html: el.content }} />
  })
}

export default function Article() {
  const { slug } = useParams()
  const { lang } = useLanguage()

  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return <Navigate to="/skrivande" replace />
  }

  const localizedArticle = article[lang]
  const backLabel = lang === 'sv' ? 'Tillbaka' : 'Back'
  const readingTime = lang === 'sv' ? 'min läsning' : 'min read'
  const wordCount = localizedArticle.content.split(/\s+/).length
  const minutes = Math.ceil(wordCount / 200)

  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/skrivande"
            className="btn btn--ghost"
            style={{ marginBottom: 'var(--space-8)' }}
          >
            <ArrowLeft size={16} />
            {backLabel}
          </Link>

          <article className="article">
            <header className="article__header">
              <div className="article__meta">
                <span>{formatDate(article.date, lang)}</span>
                <span>&middot;</span>
                <span>{minutes} {readingTime}</span>
              </div>
              <h1 className="article__title">{localizedArticle.title}</h1>
              <p className="article__lead">{localizedArticle.excerpt}</p>
            </header>

            <div className="article__content">
              {renderContent(localizedArticle.content)}
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  )
}
