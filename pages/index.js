import React from 'react'

import PostLink from '../components/postLink'

const Home = ({ pages }) => {
  return pages.map(post => <PostLink key={post.href} {...post} />)
}

Home.getInitialProps = function () {
  const pages = (context => {
    const keys = context.keys()
    const pages = keys.map(key => {
      const { title, date, imageURL, snippetText } = context(key)
      const href = key.slice(0, -4)
      return { title, date, imageURL, snippetText, href }
    })
    return pages
  })(require.context("./", false, /\.mdx$/))

  return { pages: pages.sort((a, b) => a.date > b.date ? -1 : 1) }
}

export default Home
