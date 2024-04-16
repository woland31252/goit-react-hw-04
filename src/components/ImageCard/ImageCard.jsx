import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({ card:
    { urls: {
        regular,
        small,
    }
} }) {
    return (
        <div>
            <img src={small} alt={regular} />
        </div>
    )
}