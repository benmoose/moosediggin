import React from 'react'

import styles from './article.module.css'

export default ({ title, children }) => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </article>
  )
}
