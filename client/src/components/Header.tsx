import React, { ReactElement, useEffect, useState } from 'react'
import styles from '../styles/header.module.css'
import { IoIosArrowDown } from "react-icons/io"
import { IoEarth } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import Solutions from './Solutions';
import Industries from './Industries';
import OurThinking from './OurThinking';
import AboutUs from './AboutUs';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useModal } from '../GlobalState';
import GetInTouch from './GetInTouch';
import Logo from './Logo';

export default function Header() {
    const [menuDropdown, setMenuDropdown] = useState<ReactElement | null>(null)
    const [openNavMobile, setOpenNavMobile] = useState(false)
    const [headerCollapse, setHeaderCollapse] = useState(false);
    const [searchValue, setSearchValue] = useState('')
    const { setModalState } = useModal();

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setHeaderCollapse(true);
          } else {
            setHeaderCollapse(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.header} ${headerCollapse && styles.collapse}`}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.headerLogo}>
                    <Logo />
                </div>
                <nav className={styles.headerNav}>
                    <a className={styles.navLink} 
                        href="#about" 
                        onMouseEnter={() => setMenuDropdown(<Solutions />)} 
                    >Solutions <IoIosArrowDown /></a>
                    <a className={styles.navLink} href="#services"
                    onMouseEnter={() => setMenuDropdown(<Industries />)} 
                    >Industries <IoIosArrowDown /></a>
                    <a className={styles.navLink} href="#contact" 
                    onMouseEnter={() => setMenuDropdown(<OurThinking />)} 
                    >Our thinking <IoIosArrowDown /></a>
                    <a className={styles.navLink} href="#contact"
                    onMouseEnter={() => setMenuDropdown(null)}>Case studies</a>
                    <a className={styles.navLink} href="#contact" 
                    onMouseEnter={() => setMenuDropdown(<AboutUs />)} 
                    >About us <IoIosArrowDown /></a>
                    <a className={`${styles.navLink} ${styles.lang}`} href='#language'><IoEarth /></a>
                </nav>
                <div className={`${styles['get-in-touch']} col-l-3 m-3 col-6`}>
                    <a href='#search'className={styles.search}><IoSearchSharp /></a>
                    <a href='#contact-us-form' className={`getInTouchBtn btn`} 
                    onClick={() => setModalState({ modal: <GetInTouch/> })}
                    >Get in touch</a>
                    <a href='#search'className={styles.hamburger} onClick={() => setOpenNavMobile(true)}><RxHamburgerMenu /></a>
                </div>
            </div>
            {   
                menuDropdown && <div onMouseLeave={() => setMenuDropdown(null) }>{menuDropdown}</div>
            }
            <div className={`${styles.navMobile} ${openNavMobile && styles.active}`}>
                <div className='container'>
                    <div className={styles.navHeader}>
                        <div className={styles.headerMobileLogo}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="50" viewBox="0 0 80 80" fill="none"><path d="M0 0H80V80H0V0ZM76.3179 76.3252V3.6821H3.67481V76.3252H76.3179ZM19.8979 30.7474H16.5512V40.9041H13.5764V30.7474H10.2297V27.8892H19.8979V30.7474ZM29.5005 36.2523C29.5027 35.1795 29.8558 34.137 30.506 33.2837C31.1561 32.4304 32.0676 31.8133 33.1013 31.5266C34.135 31.2398 35.2342 31.2992 36.231 31.6957C37.2278 32.0921 38.0675 32.8038 38.6219 33.7222L36.1867 35.1367C36.0132 34.8146 35.7519 34.5484 35.4331 34.369C35.1142 34.1896 34.7511 34.1043 34.3857 34.1232C33.8788 34.212 33.4193 34.4768 33.0883 34.8708C32.7572 35.2649 32.5758 35.7631 32.5758 36.2778C32.5758 36.7925 32.7572 37.2907 33.0883 37.6848C33.4193 38.0788 33.8788 38.3436 34.3857 38.4324C34.7539 38.4529 35.1202 38.3659 35.4399 38.1821C35.7596 37.9983 36.0191 37.7255 36.1867 37.397L38.6219 38.7896C38.0719 39.7119 37.2346 40.4282 36.2383 40.8288C35.2421 41.2294 34.1419 41.2922 33.1065 41.0075C32.0712 40.7228 31.1578 40.1063 30.5064 39.2526C29.8551 38.399 29.5017 37.3552 29.5005 36.2814V36.2523ZM37.1199 13.6493C35.1805 13.6493 33.4743 14.6701 33.4743 16.6971C33.4743 19.9125 38.0459 19.1396 38.0459 20.3937C38.0459 20.7656 37.7105 21.0208 37.0397 21.0208C36.685 20.9947 36.341 20.8878 36.0339 20.7084C35.7268 20.5289 35.4648 20.2816 35.268 19.9854L33.0806 21.2468C33.4557 21.964 34.0344 22.5543 34.7441 22.9434C35.4537 23.3326 36.2625 23.5034 37.0689 23.4342C39.0813 23.4342 40.9333 22.5228 40.9333 20.3864C40.9333 16.9522 36.3616 17.8564 36.3616 16.6023C36.3616 16.1065 37.623 15.5742 38.6292 16.77L40.7729 15.6179C40.3888 15.0036 39.8478 14.5027 39.2057 14.1669C38.5636 13.8311 37.8437 13.6726 37.1199 13.7076V13.6493ZM51.1848 17.4918V23.2155H48.3996V17.9366C48.4222 17.7154 48.3965 17.492 48.3241 17.2818C48.2517 17.0717 48.1344 16.8798 47.9804 16.7195C47.8263 16.5592 47.6392 16.4344 47.4321 16.3537C47.225 16.273 47.0028 16.2384 46.7809 16.2523C45.7601 16.2523 45.0602 16.8429 45.0602 18.1626V23.2665H42.2676V10.2297H45.082V14.8159C45.4035 14.4382 45.8092 14.1412 46.2663 13.9487C46.7234 13.7563 47.2193 13.6737 47.7142 13.7076C49.588 13.7076 51.1848 15.0201 51.1848 17.5283V17.4918ZM48.6548 35.1877V40.9041H45.8695V35.5815C45.892 35.36 45.8662 35.1363 45.7939 34.9258C45.7215 34.7153 45.6044 34.523 45.4505 34.3622C45.2966 34.2014 45.1096 34.0759 44.9025 33.9943C44.6954 33.9128 44.473 33.8772 44.2508 33.8899C43.23 33.8899 42.5228 34.4878 42.5228 35.8075V40.9114H39.7375V27.8892H42.5228V32.4754C42.8444 32.0902 43.2524 31.7864 43.7136 31.5888C44.1748 31.3911 44.6761 31.3052 45.1768 31.3379C47.058 31.3379 48.6548 32.665 48.6548 35.1877ZM31.8848 13.868V23.2519H29.1214V22.377C28.7728 22.7602 28.3434 23.061 27.8642 23.2578C27.385 23.4545 26.868 23.5422 26.3507 23.5144C23.9154 23.5144 21.9103 21.3708 21.9103 18.6001C21.9103 15.8294 23.9373 13.7076 26.3507 13.7076C26.868 13.6799 27.385 13.7675 27.8642 13.9643C28.3434 14.161 28.7728 14.4619 29.1214 14.8451V13.8899L31.8848 13.868ZM29.0922 18.6001C29.0765 18.1712 28.935 17.7565 28.6852 17.4075C28.4355 17.0584 28.0887 16.7906 27.6878 16.6373C27.287 16.4839 26.85 16.4519 26.4311 16.5451C26.0122 16.6384 25.63 16.8528 25.332 17.1617C25.0341 17.4705 24.8336 17.8602 24.7555 18.2822C24.6774 18.7042 24.7251 19.1398 24.8928 19.5348C25.0604 19.9299 25.3406 20.2669 25.6983 20.5039C26.0561 20.7409 26.4757 20.8674 26.9048 20.8677C27.2041 20.8818 27.5029 20.8324 27.7816 20.7227C28.0604 20.613 28.3127 20.4456 28.5221 20.2314C28.7315 20.0172 28.8931 19.7611 28.9964 19.4799C29.0997 19.1987 29.1423 18.8989 29.1214 18.6001H29.0922ZM20.4594 10.2297V23.2519H18.272L13.241 16.1648V23.2519H10.2297V10.2297H12.4608L17.4845 17.2803V10.2297H20.4594ZM28.4214 36.2523C28.4228 36.5751 28.3935 36.8974 28.3339 37.2147H21.6624C21.7962 37.7091 22.0944 38.1432 22.5079 38.4454C22.9215 38.7476 23.4256 38.8999 23.9373 38.8771C24.2455 38.8775 24.5504 38.8128 24.8319 38.6872C25.1133 38.5615 25.365 38.3778 25.5705 38.148L27.8017 39.424C27.3359 39.9923 26.7442 40.4443 26.0735 40.7442C25.4027 41.0442 24.6714 41.1838 23.9373 41.152C20.7583 41.152 18.7896 39.0157 18.7896 36.2523C18.7691 35.5992 18.8833 34.9489 19.1249 34.3419C19.3666 33.7348 19.7306 33.184 20.1943 32.7238C20.658 32.2635 21.2115 31.9035 21.8203 31.6664C22.4291 31.4292 23.0803 31.3199 23.7331 31.3452C24.3677 31.3446 24.9957 31.4727 25.5793 31.7218C26.1628 31.971 26.6897 32.336 27.1281 32.7948C27.5664 33.2536 27.907 33.7966 28.1294 34.3909C28.3517 34.9852 28.451 35.6185 28.4214 36.2523ZM21.6916 35.1805H25.6216C25.471 34.781 25.2023 34.4369 24.8513 34.194C24.5002 33.9512 24.0835 33.8211 23.6566 33.8211C23.2297 33.8211 22.8129 33.9512 22.4619 34.194C22.1108 34.4369 21.8421 34.781 21.6916 35.1805ZM50.689 40.9041H53.9336V37.6595H50.689V40.9041Z" fill="#D6001C"></path></svg>
                        </div> 
                        <div className="close-nav">
                            <IoMdClose style={{ cursor: 'pointer', fontSize: '22px' }} onClick={() => setOpenNavMobile(false)}/>
                        </div>
                    </div>
                    <div className={styles.searchBarContainer}>
                        <div className={styles.searchBar}>
                            <div className={styles.searchBtn}>
                                <IoIosSearch />
                            </div>
                            <input type="text" 
                            value={searchValue} 
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder='Search keywords'
                            />
                        </div>
                    </div>
                    <div className={styles.navMenu}>
                    <a className={styles.navLink} 
                        href="#about" 
                    >Solutions <IoIosArrowDown /></a>
                    <a className={styles.navLink} href="#services"
                    >Industries <IoIosArrowDown /></a>
                    <a className={styles.navLink} href="#contact" 
                    >Our thinking <IoIosArrowDown /></a>
                    <a className={styles.navLink} href="#contact">Case studies</a>
                    <a className={styles.navLink} href="#contact" 
                    >About us <IoIosArrowDown /></a>
                    <a className={`${styles.navLink} ${styles.lang}`} href='#language'><IoEarth /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
