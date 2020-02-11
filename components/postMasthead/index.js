import React from 'react'
import moment from 'moment'

import styles from './postMasthead.module.css'

export default ({ title, date }) => {
  const postDate = moment(date).format("Do MMM YYYY")
  return (
    <div className={styles.masthead}>
      <h1>{title}</h1>
      <p>{postDate}</p>
    </div>
  )
}