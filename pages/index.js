import React from 'react'

import Layout from '../enhancers/layout'
import PostLink from '../components/postLink'

const dummyPosts = [
  {
    title: "Cratedigging – Feb 2020",
    href: "/cratedigging/feb-2020",
    snippetText: "This month we delve into some stunning contempoary breakbeat by Nota, an artist who's flown under the radar for far too long",
    imageURL: "https://www.billboard.com/files/styles/900_wide/public/media/The-Zombies-Odessey-and-Oracle-Album-2017-billboard-1240.jpg"
  },
  {
    title: "Cratedigging – Feb 2020",
    href: "/cratedigging/jan-2020",
    snippetText: "This month we delve into some stunning contempoary breakbeat by Nota, an artist who's flown under the radar for far too long",
    imageURL: "https://images.unsplash.com/profile-fb-1543107505-9c5325b15c35.jpg"
  },
  {
    title: "Cratedigging – Feb 2020",
    href: "/cratedigging/dec-2019",
    snippetText: "This month we delve into some stunning contempoary breakbeat by Nota, an artist who's flown under the radar for far too long",
    imageURL: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=578"
  },
  {
    title: "Cratedigging – Feb 2020",
    href: "/cratedigging/nov-2019",
    snippetText: "This month we delve into some stunning contempoary breakbeat by Nota, an artist who's flown under the radar for far too long",
    imageURL: "https://images.unsplash.com/photo-1535992165812-68d1861aa71e?w=578"
  },
]


const Home = () => {
  return (
    <>
      {dummyPosts.map(post => <PostLink key={post.href} {...post} />)}
    </>
  )
}

export default Layout(Home)
