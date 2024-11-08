import React, { useEffect, useState } from 'react'
import styles from '../styles/introduction.module.css'

export default function Introduction() {
    const carouselItems = ['competitive advantage', 'innovation', 'modernisation', 'security'];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 2000); // 2 seconds for each item
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [carouselItems.length]);

    return (
        <section className={`${styles.introduction} container`}>
            <div className="row">
                <div className={`${styles.providingContent} l-6 m-6 col-12`}>
                    <div className="providing">
                        <div className={styles.headingContainer}>
                            <h3 className={styles["heading-title"]}>
                                We bring
                            </h3>
                            <div className={styles.headingWidget}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path opacity="0.4" d="M23.814 8.18605L23.814 32L1.14441e-05 32L1.04032e-05 8.18605L23.814 8.18605Z" fill="#6A1F7A"></path><path opacity="0.4" d="M32 -2.28882e-05L32 16.3721L15.6279 16.3721L15.6279 -2.21725e-05L32 -2.28882e-05Z" fill="#D6001C"></path></svg>
                            </div>
                        </div>
                        <div className={styles.carouselTextContainer}>
                            <ul className={styles['carousel-list']} style={{ transform: `translateY(-${currentIndex * 25}%)` }}>
                                {carouselItems.map((item, index) => (
                                    <li key={index} className="carousel-item">
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className={`${styles.descriptionContent} l-6 m-6 col-12`}>
                    <div className="description">
                        <div className="description-content">
                            <p className='section-paragraph m-b-20'>Extensive IT solutions delivered by highly capable augmented software teams around the world.</p>
                            <p className='section-paragraph'>Our teams know how to harness the power of data, artificial intelligence, modernising core, optimising and automating operations to achieve your business goals.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
