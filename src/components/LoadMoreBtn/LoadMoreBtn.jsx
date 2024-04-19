import css from '../LoadMoreBtn/LoadMoreBtn.module.css'
export default function LoadMoreBtn() {
    return (
        <div className={css.loadBtnContainer}>
            <button className={css.loadBtn}>Load more</button>
        </div>
    )
}