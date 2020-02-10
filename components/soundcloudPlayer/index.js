import React from 'react'
import url from 'url'

export default ({ soundcloudLink }) => {
  return (
    <iframe
      style={{
        width: "100%",
        height: "166px",
        margin: "25px 0 30px",
      }}
      scrolling="no"
      frameBorder="no"
      src={generateSoundcloudSRC(soundcloudLink)}
    />
  )
}

function generateSoundcloudSRC (soundcloudLink) {
  const parts = url.parse(soundcloudLink)
  const cleanLink = encodeURIComponent(`https://${parts.host}${parts.pathname}`)
  return `https://w.soundcloud.com/player/?url=${cleanLink}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=true&show_teaser=true`
}
