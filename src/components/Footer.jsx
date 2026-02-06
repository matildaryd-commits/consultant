import { useLanguage } from '../hooks/useLanguage'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__copy">
            Matilda Rydow &middot; Stockholm
          </span>

          <div className="footer__links">
            <a
              href="https://www.linkedin.com/in/matilda-rydow-13057161/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
