import React from 'react'
import styles from '../styles/footer.module.css'
import Logo from './Logo'

export default function Footer() {
  return (
    <section className={styles.footer}>
        <div className={`${styles.footerContainer} container`}>
            <div className="row">
                <div className="contact col-12 l-9 m-8 sm-12">
                    <div className="row">
                        <div className="col-12 l-3 m-3 sm-12">
                            <div className={styles.footerLogo}>
                                <Logo />
                            </div>
                        </div>
                        <div className="col-12 l-8 m-8 sm-12">
                            <div className="row">
                                <div className="col-12 l-3 m-6 sm-6">
                                    <div className="inforList">
                                        <h4 className='labelInfor'>NashTech</h4>
                                        <ul>
                                            <li><a href="#contact">Contact us</a></li>
                                            <li><a href="#contact">Careers</a></li>
                                            <li><a href="#contact">Our locations</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 l-3 m-6 sm-6">
                                    <div className="inforList">
                                        <h4 className='labelInfor'>NashTech</h4>
                                        <ul>
                                            <li><a href="#contact">Contact us</a></li>
                                            <li><a href="#contact">Careers</a></li>
                                            <li><a href="#contact">Our locations</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 l-3 m-6 sm-6">
                                    <div className="inforList">
                                        <h4 className='labelInfor'>NashTech</h4>
                                        <ul>
                                            <li><a href="#contact">Contact us</a></li>
                                            <li><a href="#contact">Careers</a></li>
                                            <li><a href="#contact">Our locations</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-12 l-3 m-6 sm-6">
                                    <div className="inforList">
                                        <h4 className='labelInfor'>NashTech</h4>
                                        <ul>
                                            <li><a href="#contact">Contact us</a></li>
                                            <li><a href="#contact">Careers</a></li>
                                            <li><a href="#contact">Our locations</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact col-12 l-3 m-4 sm-12">
                    <div className={styles.newsletters}>
                        <h3 className="h3">Stay in the know with our newsletter</h3>
                        <form>
                            <input type="email" name="" id="" placeholder='Your email' />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
