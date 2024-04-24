import { useEffect, useState } from 'react';
import { fetchImages }  from '../../image_api.js';
import SearchBar from '../SearchBar/SearchBar.jsx';
import ImageGallery from '../ImageGallery/ImageGallery.jsx';
import css from './App.module.css'
import Loader from '../Loader/Loader.jsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage.jsx';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn.jsx';
import ImageModal from '../ImageModal/ImageModal.jsx';
import NotFound from '../NotFound/NotFound.jsx';

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [IsOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgsUrl] = useState([]);
  const [showBtn, setShowBtn] = useState(false)
  const [userName, setUserName] = useState(null);
  const [likes, setLikes] = useState(null);
  const [twitter, setTwitter] = useState(null);
  const [instagram, setInstagram] = useState(null);
  const [notFound, setNotFound] = useState(false);
  

  

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
         const curentImages = data.results;
         setImages((prevImages) => { return [...prevImages, ...curentImages] });
         const totalPages = data.total_pages;
         setShowBtn(totalPages && totalPages !== page);
         setNotFound(curentImages.length === 0)
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
        {error && <ErrorMessage />}
        {isLoading && <Loader />}
        {notFound && <NotFound />}
      </div>
      {images.length>0 && showBtn && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal image={imgUrl} like={likes} name={userName} twit={ twitter} insta={instagram} onOpen={IsOpen} onClose={closeModal} />
    </>
    
  );
}
