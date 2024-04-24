import Modal from 'react-modal';
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { TiUser } from "react-icons/ti";
import { FcLike } from "react-icons/fc";
import clsx from 'clsx';
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
    borderColor: 'rgb(88 88 109)',
    width: '600px',
    maxHeight: '600px'
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
const twitColor = clsx(css.iconModal, css.iconTwitColor)
const instColor = clsx(css.iconModal, css.iconInstColor)
     return (
    <>
      <Modal
        isOpen={onOpen}
        onRequestClose={onClose}
           style={customStyles}>
           <div className={css.modalBox}>
             <img className={css.imgModal} src={image} />
              <ul className={css.titleImg}>
                <li className={css.itemImg}><TiUser className={ css.iconModal} /> {name}</li>
                <li className={css.itemImg}><FcLike /> {like}</li>
                {twit !== null && <li className={css.itemImg}><BiLogoTwitter className={twitColor}/> {twit}</li>}
                {insta !== null && <li className={css.itemImg}><BiLogoInstagram className={instColor}/> {insta}</li>}
              </ul>
           </div>
           
      </Modal>
    </>
  );
}