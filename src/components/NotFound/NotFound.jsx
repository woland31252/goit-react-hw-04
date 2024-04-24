import css from '../NotFound/NotFound.module.css'

export default function NotFound() {
    return (
       <>
        <p className={css.itemNotFound}>Nothing was Found!!!</p>
        <p className={css.itemNotFound}>Please change the request</p>
    </>
   ) 
}