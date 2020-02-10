import React from 'react'
import Link from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'

const links = [
  {href: "https://soundcloud.com/benmoose", linkText: "SoundCloud", rel: "_blank"},
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
          {
            links.map(l => (
              <Link href={l.href}><a target={l.rel} className={styles.linkItem}>{l.linkText}</a></Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}
