import React from 'react'

import PostLink from '../components/postLink'

const Home = ({ pages }) => {
  return pages.map(post => <PostLink key={post.href} {...post} />)
}

Home.getInitialProps = function () {
  const pages = (context => {
    return context.keys().map(key => getPage(context, key))
  })(require.context("./", true, /\.mdx$/))

  return { pages: pages.sort((a, b) => a.date > b.date ? -1 : 1) }
}

function getPage (context, key) {
  const { title, date, imageURL, snippetText } = context(key)
  if (!title) {
    throw Error(`${key} is missing required metadata 'title'`)
  }
  if (!date) {
    throw Error(`${key} is missing required metadata 'date'`)
  }
  if (!imageURL) {
    throw Error(`${key} is missing required metadata 'imageURL'`)
  }
  if (!snippetText) {
    throw Error(`${key} is missing required metadata 'snippetText'`)
  }
  const href = key.slice(0, -4)
  return { title, date, imageURL, snippetText, href }
}

export default Home
