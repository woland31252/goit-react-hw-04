import { DNA } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css'

export default function Loader () {
    return (
       <>
            <p className={css.loader}><DNA/></p>
        </>
   ) 
}