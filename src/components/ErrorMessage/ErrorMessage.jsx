import css from '../ErrorMessage/ErrorMessage.module.css'

export default function ErrorMessage() {
    return (
        <div>
            <p className={css.errorItem}>Oops, something went wrong. Please try again later</p>
        </div>
    )
}