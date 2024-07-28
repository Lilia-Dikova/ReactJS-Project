import React from 'react';
import styles from './Catalog.module.css'

export default function Catalog() {
    const posts = [
        {
            date: '02 Feb',
            img: 'images/perfe1.jpg',
            title: 'Some Tips for Planning a Perfect Summer Vacation',
            content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
            link: 'perfect.html'
        },
        {
            date: '03 Feb',
            img: 'images/perfe2.jpg',
            title: 'Magic: Things You Can’t Resist',
            content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
            link: 'perfect.html'
        },
        {
            date: '04 Feb',
            img: 'images/perfe3.jpg',
            title: 'Exploring the Beauty of Nature',
            content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
            link: 'perfect.html'
        },
        {
            date: '05 Feb',
            img: 'images/perfe3.jpg',
            title: 'Adventure Awaits: Tips for Your Next Trip',
            content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
            link: 'perfect.html'
        },
        {
            date: '06 Feb',
            img: 'images/perfe3.jpg',
            title: 'Discovering Hidden Gems Around the World',
            content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
            link: 'perfect.html'
        },
        {
            date: '07 Feb',
            img: 'images/perfe3.jpg',
            title: 'Travel Hacks: Save Money and Time',
            content: 'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary...',
            link: 'perfect.html'
        }
    ];

    return (
        <div className="full_custom">
            <div className="details">
                <div className="row d-flex">
                    {posts.map((post, index) => (
                        <div key={index} className="col-lg-4 col-md-6 mb-4">
                            <div className={styles['card']}>
                                <div className={styles["perfect"]}>
                                    <figure>
                                        <span>hello</span>
                                        <img src={post.img} alt="#" className={styles['card-img']} />
                                    </figure>
                                </div>
                                <div className={styles['body']}>
                                    <h3 className={styles['title']}>{post.title}</h3>
                                    <p>{post.content}</p>
                                    <a className={styles['read_more']} href={post.link}>Read More</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
