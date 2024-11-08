import React from 'react'
import styles from '../styles/insights.module.css'
import { FaArrowRight } from "react-icons/fa";

export default function Insights() {
    return (
        <section className={styles.insights}>
            <div className="container">
                <div className={`${styles.headingInsight} flex justify-between items-center`}>
                    <div className={styles.headingTitle}>
                        <h3>Insights & resources</h3>
                    </div>
                    <div className={styles.exploreMore}>
                        <a href='#explore' className="flex justify-between items-center">
                            <h4>Explore more</h4>
                            <div className="arrowIcon">
                                <FaArrowRight />
                            </div>
                        </a>
                    </div>
                </div>
                <div className="insightListContainer">
                    <div className="row gutters">
                        <div className={`${styles.insightItem} col-6 l-4 m-6 sm-12`}>
                            <a href='#insight'>
                                <div className={styles.insightImage}>
                                    <img src="https://www.nashtechglobal.com/wp-content/uploads/2024/11/Banner-Supply-chain-resilience-2-768x288.png"
                                        alt="insight" />
                                </div>
                                <div className={styles.insightDetail}>
                                    <div className={styles.insightTag}>
                                        Insights
                                    </div>
                                    <div className={styles.insightDescription}>
                                        <p>Building supply chain resilience</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.insightItem} col-6 l-4 m-6 sm-12`}>
                            <a href="#insight">
                                <div className={styles.insightImage}>
                                    <img src="https://www.nashtechglobal.com/wp-content/uploads/2024/10/AI-for-driving-customer-experience-in-insuranc-2-1024x384.jpg"
                                        alt="insight" />
                                </div>
                                <div className={styles.insightDetail}>
                                    <div className={styles.insightTag}>
                                        Insights
                                    </div>
                                    <div className={styles.insightDescription}>
                                        <p>AI for driving customer experience in insurance</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className={`${styles.insightItem} col-6 l-4 m-6 sm-12`}>
                            <a href="#insight">
                                <div className={styles.insightImage}>
                                    <img src="https://www.nashtechglobal.com/wp-content/uploads/2024/10/NashTech-connect-September.png"
                                        alt="insight" />
                                    <div className={styles.newsTag}>
                                        <div className={styles.tagText}>Newsletters</div>
                                    </div>
                                </div>
                                <div className={styles.insightDetail}>
                                    <div className={styles.insightTag}>
                                        Newsletters
                                    </div>
                                    <div className={styles.insightDescription}>
                                        <p>Lessons from our GenAI trial</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
