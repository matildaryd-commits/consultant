export function setMetaTag(selector, attributes) {
  let element = document.head.querySelector(selector)
  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes).forEach(([key, value]) => {
      if (key !== 'content') element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }
  if (attributes.content !== undefined) {
    element.setAttribute('content', attributes.content)
  }
}

export function setLinkTag(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function setHreflangLinks(links = []) {
  const existing = document.head.querySelectorAll('link[rel="alternate"][hreflang]')
  existing.forEach(node => node.remove())

  links.forEach(({ lang, href }) => {
    if (!lang || !href) return
    const el = document.createElement('link')
    el.setAttribute('rel', 'alternate')
    el.setAttribute('hreflang', lang)
    el.setAttribute('href', href)
    document.head.appendChild(el)
  })
}

export function applyPageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogType = 'website',
  ogImage,
  locale,
  canonical,
  twitterCard = 'summary_large_image',
}) {
  if (title) document.title = title
  if (description) {
    setMetaTag('meta[name="description"]', {
      name: 'description',
      content: description,
    })
  }

  setMetaTag('meta[property="og:title"]', {
    property: 'og:title',
    content: ogTitle || title || '',
  })
  setMetaTag('meta[property="og:description"]', {
    property: 'og:description',
    content: ogDescription || description || '',
  })
  setMetaTag('meta[property="og:type"]', {
    property: 'og:type',
    content: ogType,
  })
  if (locale) {
    setMetaTag('meta[property="og:locale"]', {
      property: 'og:locale',
      content: locale,
    })
  }
  if (ogImage) {
    setMetaTag('meta[property="og:image"]', {
      property: 'og:image',
      content: ogImage,
    })
  }
  if (canonical) {
    setMetaTag('meta[property="og:url"]', {
      property: 'og:url',
      content: canonical,
    })
  }

  setMetaTag('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: twitterCard,
  })
  if (ogTitle || title) {
    setMetaTag('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: ogTitle || title,
    })
  }
  if (ogDescription || description) {
    setMetaTag('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: ogDescription || description,
    })
  }
  if (ogImage) {
    setMetaTag('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: ogImage,
    })
  }
  if (canonical) {
    setMetaTag('meta[name="twitter:url"]', {
      name: 'twitter:url',
      content: canonical,
    })
  }

  if (canonical) {
    setLinkTag('canonical', canonical)
  }
}
