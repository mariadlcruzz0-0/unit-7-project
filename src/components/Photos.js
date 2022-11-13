import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Photo from "./Photo"
import apiKey from '../config'

const Photos = () => {
  const [flickr, setFlickr] = useState([])
  const [searchTerm, setSearchTerm] = useState()
  const params = useParams()

  useEffect(() => {
    const getFlickrData = async () => {
      try {
        const flickrData = await fetchFlickr(searchTerm)
        await setFlickr(flickrData)
      } catch(error) {
        console.error("Error fetching data: ", error)
      }
  }
    getFlickrData()
  }, [searchTerm])

  const fetchFlickr = async () => {
  try{
    setSearchTerm(params.searchTerm)
    if (typeof searchTerm === 'undefined') return
        const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&text=${searchTerm}&per_page=16&sort=relevance&content_type=1&format=json&nojsoncallback=1`
        const response = await fetch(url)
        const data = await response.json()
        return data.photos.photo 
  } catch(error) {
    console.error(error);
  }
}
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {flickr?.map(photo => <Photo key={photo.id} photo={photo} /> )}
      </ul>
    </div>
  )
}

export default Photos