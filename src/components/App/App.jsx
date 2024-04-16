import { useState, useEffect } from 'react';
import { fetchImages }  from '../../image_api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import css from './App.module.css'
import Loader from '../Loader/Loader.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true)
        const data = await fetchImages("sexy");
        setImages(data);

      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }
    getImages();
  }, []);

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {error && <p>Do not find images</p>}
      {images.length>0 && <ImageGallery collection={ images} />} 
    </div>
  );
}
