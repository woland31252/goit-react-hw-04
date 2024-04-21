import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({ card:
    { urls: {
        regular,
        small,
    }
} }) {
    return (
        <div className={css.containImg}>
            <img src={small} alt={regular} className={css.cardImg } />
        </div>
    )
}