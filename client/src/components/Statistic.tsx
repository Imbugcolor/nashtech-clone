import React from 'react'
import styles from '../styles/statistic.module.css'
import HomepageCounterImage from '../images/homepage-counter-image-1.png';

export default function Statistic() {
  return (
    <section className={styles.statistic}>
      <div className='row'>
        <div className="l-4 m-4 col-12">
          <div className={styles.thumbnail}>
              <img src={HomepageCounterImage} alt='statistic'/>
          </div>
        </div>
        <div className={`${styles.statisticContainer} l-8 m-8 col-12`}>
          <div className={styles.statisticDetail}>
              <div className="row">
                <div className="col-6">
                  <div className={styles.statisticItem}>
                      <div className={styles.statisticNumber}>24+</div>
                      <div className={styles.statisticDescription}>years of experience</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.statisticItem}>
                      <div className={styles.statisticNumber}>14</div>
                      <div className={styles.statisticDescription}>offices</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.statisticItem}>
                      <div className={styles.statisticNumber}>5</div>
                      <div className={styles.statisticDescription}>delivery centres</div>
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.statisticItem}>
                      <div className={styles.statisticNumber}>1,900+</div>
                      <div className={styles.statisticDescription}>skilled engineers</div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}
