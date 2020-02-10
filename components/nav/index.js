import React from 'react'
import Link from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'

const links = [
  {href: "https://soundcloud.com/benmoose", text: "SoundCloud", external: true},
]

export default () => {
  return (
    <nav className={styles.background}>
      <div className={styles.navContainer}>
        <div className={styles.navSection}></div>
        <div className={c(styles.navSection, styles.textCentre)}>
          <Link href="/">
            <a className={styles.brandLink}>
              <h1 className={styles.brandText}>MooseDiggin'</h1>
            </a>
          </Link>
        </div>
        <div className={c(styles.navSection, styles.textRight)}>
          {links.map(getLinkComponent)}
        </div>
      </div>
    </nav>
  )
}

function getLinkComponent (link) {
  if (link.external) {
    return (
      <a
        className={styles.linkItem}
        href={link.href}
        target="_blank"
        key={link.href}
      >{link.text}</a>
    )
  }
  return (
    <Link href={link.href} key={l.href}>
      <a className={styles.linkItem}>{link.text}</a>
    </Link>
  )
}
