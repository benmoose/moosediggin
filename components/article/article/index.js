import React from 'react'

import styles from './article.module.css'

export default ({ title, ...props }) => {
  return (
    <article className={styles.article}>
      <h1 className={styles.title}>{title}</h1>
      <div {...props} className={styles.body} />
    </article>
  )
}
