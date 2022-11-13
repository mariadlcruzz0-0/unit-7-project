import { useState, useEffect } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Photo from "./Photo"
import apiKey from '../config.js'

const Photos = () => {
  const [flickr, setFlickr] = useState([])
  const { searchTerm } = useParams()
  const { pathname } = useLocation()

  useEffect(() => {
    fetchFlickr(searchTerm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  const fetchFlickr = query => {
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&text=${query}&per_page=24&sort=relevance&format=json&nojsoncallback=1`)
    .then(res => res.json())
    .then(data => setFlickr(data.photos.photo))
    .catch(err => console.log(err))
  };

  return (
    <div className="photo-container">
      <h2>{searchTerm}</h2>
      <ul>
        {flickr?.map(photo => <Photo key={photo.id} photo={photo} />)}
      </ul>
    </div>
  )
}

export default Photos