import { Link } from 'react-router-dom'

import styles from './PostOwnedItem.module.css'

export default function PostOwnedItem({
    _id,
    nickName,
    imageUrl,
    title,
    content

}) {
    return (
        <div className="col-lg-4 col-md-6 mb-4">
            <div className={styles['card']}>
                <div className={styles["perfect"]}>
                    <figure>
                        <span>nickname: {nickName}</span>
                        <img src={imageUrl} alt="#" className={styles['card-img']} />
                    </figure>
                </div>
                <div className={styles['body']}>
                    <h3 className={styles['title']}>{title}</h3>
                    <p>{content}</p>
                    <Link
                        className={styles['read_more']}
                        to={`/catalog/details/${_id}`}
                    >
                        Details
                    </Link>
                </div>
            </div>
        </div>
    )
}