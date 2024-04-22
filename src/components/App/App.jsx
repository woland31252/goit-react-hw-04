import { useEffect, useState } from 'react';
import { fetchImages }  from '../../image_api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import css from './App.module.css'
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [IsOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgsUrl] = useState([]);

  const [userName, setUserName] = useState(null);
  const [likes, setLikes] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [instagram, setInstagram] = useState(null)


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


  

  function openModal(url, likes, userName, socTwit, socInsta) {
    setIsOpen(true);
    setImgsUrl(url);
    setUserName(userName);
    setLikes(likes);
    setTwitter(socTwit);
    setInstagram(socInsta);
    
  }


  function closeModal() {
    setIsOpen(false);
  }
    

  return (
    <>
      <SearchBar onSearch={ handleSearch} />
      <div className={css.container}>
        {images.length > 0 && <ImageGallery onClick={openModal} collection={images} />}
        {IsOpen && <ImageModal image={imgUrl} like={likes} name={userName} twit={ twitter} insta={instagram} onOpen={openModal} onClose={closeModal} />}
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
      </div>
      {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      
    </>
    
  );
}
