import React from 'react'
import Link from 'next/link'

import styles from './postLink.module.css'

export default ({ title, snippetText, imageURL, href }) => {
  return (
    <div className={styles.container}>
      <div className={styles.albumContainer}>
        <img className={styles.albumArt} src={imageURL} />
        <img
          src="/img/vinyl.png"
          className={styles.image}
        />
      </div>
      <section className={styles.textContainer}>
        <h4 className={styles.title}>{title}</h4>
        <p>{snippetText}</p>
        <Link href={href}>
          <a className={styles.link}>Open crate →</a>
        </Link>
      </section>
    </div>
  )
}
