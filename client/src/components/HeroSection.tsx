import React from 'react'
import styles from '../styles/hero.module.css'

export default function HeroSection() {
    return (
        <div className={styles.hero}>
            <div className={`${styles.heroContent} col-12 container`}>
                <div className='col-8'>
                    <h2 className='extra_title'>
                        Let us future-proof your digital business
                    </h2>
                    <p className='sub-title'>
                        Combining strategy, technology, automation and people
                    </p>
                </div>
            </div>
        </div>
    )
}
