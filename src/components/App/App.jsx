import { useState, useEffect } from 'react';
import { fetchImages } from '../../image_api.js';
import './App.module.css'

export default function App() {
  // const [images, setImages] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCollectionOfImage() {
      try {
        const data = await fetchImages();
        console.log({data});
        // setImages(data);

      } catch (error) {
        setError(true);
      }
    }
    fetchCollectionOfImage();
    console.log({ images });
  }, [images]);

  return (
    <div>
      {error && <p>Do not find images</p>}
      <p>{images}</p>
    </div>
  );
}
