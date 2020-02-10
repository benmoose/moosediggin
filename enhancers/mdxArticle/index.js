import React from 'react'

import Layout from '../layout'
import Article from '../../components/article'

export default MDX => ({ title }) => Layout(() => (
  <Article title={title}>
    <MDX />
  </Article>
))
