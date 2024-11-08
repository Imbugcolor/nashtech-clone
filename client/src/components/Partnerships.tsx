import React from 'react'
import styles from '../styles/partnerships.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Partnerships() {
    return (
        <section className={styles.partnerships}>
            <div className="container">
                <div className="row items-center">
                    <div className="col-12 l-3 m-12 sm-12">
                        <div className={styles.headingTitle}>
                            <h4>Our Partnerships</h4>
                        </div>
                    </div>
                    <div className="col-12 l-9 m-12 sm-12">
                        <div className="sliderPartners">
                            <Swiper
                                spaceBetween={30}
                                slidesPerView={3}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Navigation]}
                            >
                                <SwiperSlide>
                                    <div className={styles.partnerSlide}>
                                        <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/04/hpe.png" alt="partners" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className={styles.partnerSlide}>
                                        <img src="https://www.nashtechglobal.com/wp-content/uploads/2024/10/MS-solutions.png" alt="partners" />
                                    </div>
                                </SwiperSlide>                            
                                <SwiperSlide>
                                    <div className={styles.partnerSlide}>
                                        <img src="https://www.nashtechglobal.com/wp-content/uploads/2024/10/docker.png" alt="partners" />
                                    </div>
                                </SwiperSlide>                           
                                <SwiperSlide>
                                    <div className={styles.partnerSlide}>
                                        <img src="https://www.nashtechglobal.com/wp-content/uploads/2024/10/AWS-public-sector.png" alt="partners" />
                                    </div>
                                </SwiperSlide>                           
                                <SwiperSlide>
                                    <div className={styles.partnerSlide}>
                                        <img src="https://www.nashtechglobal.com/wp-content/uploads/2023/04/hpe.png" alt="partners" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
