import { useState, useEffect } from 'react';
// import axios from 'axios';
import { fetchImages } from '/src/image_api.js';
import './App.module.css'

function App() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCollectionOfImage() {
      try {
        const data = await fetchImages("dog");
        setImages(data)
      } catch (error) {
        setError(true)
      }
    }
    fetchCollectionOfImage();
    console.log({ images })
  })

  return (
    <div>
      {error && <p>Do not find images</p>}
      <p>{ images}</p>
    </div>
  )
}

export default App
