import Modal from 'react-modal';
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import css from '../ImageModal/ImageModal.module.css'



Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '4px',
    backgroundColor: 'rgb(88 88 109)',
    borderColor: 'rgb(88 88 109)'
  },
   overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
};

export default function ImageModal({ onOpen, onClose, image, like, name, twit, insta }) {
     return (
    <>
      <Modal
        isOpen={onOpen}
        onRequestClose={onClose}
        style={customStyles}>
           <img className={css.img} src={image} />
           <ul className={css.titleImg}>
             <li><TiUser className={ css.iconModal} /> {name}</li>
             <li><FcLike /> {like}</li>
             {twit !== null && <li><BiLogoTwitter className={ css.iconModal}/> {twit}</li>}
             {insta !== null && <li><BiLogoInstagram className={ css.iconModal}/> {insta}</li>}
           </ul>
      </Modal>
    </>
  );
}