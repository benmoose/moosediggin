import React from 'react'

import Layout from '../enhancers/layout'
import PostLink from '../components/postLink'

const pages = [
  {
    href: "/cratedigging/2020-02",
    title: "Cratedigging – Febuary 2020",
    snippetText: "Prepare yourself for a bloody deep journey... this month we decend into cavernous warehouses and experience some truly awe-inspiring techno & dark house before rising on the back of deep emotive electronica. Honestly, this music just makes me feel so connected to the earth. Let's dive in...",
    imageURL: "https://images.sk-static.com/images/media/profile_images/artists/2245195/huge_avatar",
    imageCaption: "Cover – Guy J",
  },
]

const Home = () => {
  return (
    <>
      {pages.map(post => <PostLink key={post.href} {...post} />)}
    </>
  )
}

export default Layout(Home)
