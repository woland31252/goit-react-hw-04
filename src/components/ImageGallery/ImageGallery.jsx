import ImageCard from '../ImageCard/ImageCard.jsx'
import css from '../ImageGallery/ImageGallery.module.css'

export default function ImageGallery({ collection, onClick}) {
    return (
        <ul className={css.gallery}>
            {collection.map(collElem => (<li className={css.galleryItem} key={collElem.id}>
            <ImageCard onClick={onClick} card={collElem} /></li>))}
        </ul>
    
   ) 
    
}