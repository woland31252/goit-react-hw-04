import css from '../ImageCard/ImageCard.module.css'

export default function ImageCard({ card:
    {   alt_description,
        urls: {
        regular,
        small,
    },
    likes,
    user: { name,
        social: {
            instagram_username,
            twitter_username,
        }
    },
    },
    onClick
}) {
    return (
        <div className={css.containImg}>
            <img src={small} alt={alt_description} onClick={ ()=>onClick(regular, likes, name, instagram_username, twitter_username)} className={css.cardImg } />
        </div>
    )
}