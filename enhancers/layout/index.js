import React from 'react'
import Nav from '../../components/nav'
import styles from './layout.module.css'

/**
 * Wraps the page in a layout with navigation and footer.
 */
export default Page => props => (
  <>
    <div className={styles.navContainer}>
      <div className={styles.navInner}>
        <Nav />
      </div>
    </div>
    <main className={styles.main}>
      <Page {...props} />
    </main>
  </>
)
