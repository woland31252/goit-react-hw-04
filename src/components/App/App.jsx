import { useState } from 'react';
import { fetchImages }  from '../../image_api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import css from './App.module.css'
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);

  const handleSearch = async (query) => {
      try {
        setIsLoading(true)
        const data = await fetchImages(query);
        setImages(data);

      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }
    

  return (
    <>
      <SearchBar onSearch={ handleSearch} />
      <div className={css.container}>
        {isLoading && <Loader />}
        {images.length > 0 && <ImageGallery collection={images} />}
        {error && <ErrorMessage/>}
      </div>
      {images.length > 0 && <LoadMoreBtn />}
    </>
    
  );
}
