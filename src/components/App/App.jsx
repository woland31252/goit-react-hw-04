import { useEffect, useState } from 'react';
import { fetchImages }  from '../../image_api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import css from './App.module.css'
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }
     
  
  
  const handleLoadMore = () => {
      setPage(page+1)
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
       try {
        setIsLoading(true)
        const data = await fetchImages(query, page);
         setImages((prevImages) => { return [...prevImages, ...data ]});

      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false)
      }
    }
    getImages()
  }, [page, query])
    

  return (
    <>
      <SearchBar onSearch={ handleSearch} />
      <div className={css.container}>
        {images.length > 0 && <ImageGallery collection={images} />}
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
      </div>
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={ handleLoadMore} />}
    </>
    
  );
}
