import React from 'react'

const Photo = ({photo}) => {
  console.dir(photo)
  return (
    <li>
      <a href={`https://www.flickr.com/photo.gne?id=${photo.id}`} target="_blank" rel="noopener noreferrer">
        <img alt={photo.title} src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_n.jpg`} />
      </a>
    </li>
  )
}

export default Photo