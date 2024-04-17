import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { fetchImages }  from '../../image_api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import css from './App.module.css'
import Loader from '../Loader/Loader.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);

const notify = () => toast('Please formulate your request.');

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
        {error && <p>Do not find images</p>}
        {images.length > 0 && <ImageGallery collection={images} />} 
        <Toaster toasty={notify} />
      </div>
    </>
    
  );
}
