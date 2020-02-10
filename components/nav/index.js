import React from 'react'
import Link from 'next/link'
import c from 'classnames'

import styles from './nav.module.css'

const links = [
  {href: "/", linkText: "Sessions"},
]

export default () => {
  return (
    <nav className={styles.background}>
      <div className={styles.navContainer}>
        <div className={styles.navSection}></div>
        <div className={c(styles.navSection, styles.textCentre)}>
          <h1 className={styles.brandText}>MooseDiggin'</h1>
        </div>
        <div className={c(styles.navSection, styles.textRight)}>
          {
            links.map(l => (
              <Link href={l.href}><a className={styles.linkItem}>{l.linkText}</a></Link>
            ))
          }
        </div>
      </div>
    </nav>
  )
}
