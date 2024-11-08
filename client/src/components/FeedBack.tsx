import React, { useEffect, useRef } from 'react'
import styles from '../styles/feedback.module.css'
import FeedBackVideoThumbnail from '../images/feedback.png'

export default function FeedBack() {
    const sliderRef = useRef<HTMLDivElement| null>(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Auto-scroll logic
    const scrollInterval = setInterval(() => {
      if (slider) {
        // If the slider scroll position is at the end, reset to the start
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: 200, behavior: 'smooth' });
        }
      }
    }, 3000); // Set scroll interval (in ms)

    // Clear interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

    return (
        <section className={styles.feedback}>
            <div className={`${styles.feedbackContainer} container`}>
                <div className={styles.headingTitle}>
                    <h3>What our customers say</h3>
                </div>
                <div className={styles.feedbackContent}>
                    <div className="row">
                        <div className={`${styles.videoTest} l-6 m-6 col-12`}>
                            <img src={FeedBackVideoThumbnail} width="552" height="378" alt='feedback' />
                        </div>
                        <h5 className='l-6 m-6 col-12'>Working with Vietnam has been a real pleasure and a real experience.
                            Vietnam doesn’t feel like an offshore operation – the team work as one.
                            It’s been comforting to know that when you have your back to the wall,
                            as you do with a project this size, NashTech are standing there beside us
                            not walking away… they are a true partner.
                            <div>
                                <span className="testimonial-name" 
                                    style={{ color: '#4e5761', marginTop: '30px', display: 'block' }}>Jeff Mountford</span>
                                <span className="testimonial-company"
                                    style={{ color: '#4e5761', lineHeight: '24px', display: 'block', fontWeight: 'lighter' }}
                                >Director of Systems Delivery, Atlanta</span>
                            </div>
                        </h5>
                    </div>
                </div>
                <div className={styles.feedbackFooter}>
                    <div className={styles.footerTitle}>
                        <h3>Trusted by enterprises globally</h3>
                    </div>
                    <div className={styles.sliderContainer} ref={sliderRef}>
                        <div className={styles.sliderImage}>
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                            <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/03/NSK_Logo.svg" alt="slider" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-icon" style={{ display: 'flex', justifyContent: 'flex-end'}}>
			<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none"><rect x="32" y="32.0002" width="32" height="32" fill="white"></rect><rect y="0.000244141" width="32" height="32" fill="#C3A5CA"></rect></svg></div>
        </section>
    )
}
