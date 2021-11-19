import React, { useEffect, useRef } from 'react';
import styles from './Footer.module.css';
import filledLogo from '../../public/new_logo_filled.png';
import logo from '../../public/logo.png';
import useScroll from '../../hooks/scroll';
import { useRouter } from 'next/dist/client/router';

export default function Footer({secondary}) {
    const c1 = "#191826"
    const c2 = "#f1f1f1";

    const el = useRef()
    const router = useRouter()

    const handleLink = (page) => () => {
        router.push(page);
    }

    const listener = () => {
        if(el.current?.getBoundingClientRect().bottom - 360 <= window.innerHeight) { 
            //animate(el.current, 'slideInLeft', '0.1s')
            window.removeEventListener('scroll', listener)
        }
    }

    useScroll(el.current, listener)
    
    return(
        <div ref={el} className={styles.encloser} style={secondary ? { backgroundColor: c2, color: c1 } : { backgroundColor: c1, color: c2 }}>
            <main>
                <section className={styles.social}>
                    <div>
                        <img src={secondary ? filledLogo.src : logo.src}></img>
                        <h4>@2021 IETE-SF-MEC</h4>
                    </div>
                    <div>
                    
                    <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.76884 0C10.5072 0 13.5374 3.34403 13.5374 7.46881C13.5374 11.5936 10.5069 14.9374 6.76884 14.9374C3.03073 14.9374 0 11.5936 0 7.46881C0 3.34403 3.0305 0 6.76884 0ZM17.5782 0.437504C19.4474 0.437504 20.9626 3.58521 20.9626 7.46881H20.9628C20.9628 11.3514 19.4476 14.5001 17.5784 14.5001C15.7092 14.5001 14.194 11.3514 14.194 7.46881C14.194 3.58622 15.709 0.437504 17.5782 0.437504ZM22.8097 1.16987C23.4669 1.16987 24 3.98995 24 7.46881C24 10.9467 23.4672 13.7678 22.8097 13.7678C22.1522 13.7678 21.6196 10.9474 21.6196 7.46881C21.6196 3.9902 22.1524 1.16987 22.8097 1.16987Z" fill={secondary ? c1 : c2}/>
                    </svg>

                    <svg onClick={handleLink('https://www.linkedin.com/company/iete-sf-mec')} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M3.99678 1.59116C3.99678 2.46974 3.28456 3.18196 2.40598 3.18196C1.52741 3.18196 0.815186 2.46974 0.815186 1.59116C0.815186 0.712591 1.52741 0.000366211 2.40598 0.000366211C3.28456 0.000366211 3.99678 0.712591 3.99678 1.59116ZM0.815305 4.54547H4.06781V14.5448H0.815305V4.54547ZM12.9144 4.65865C12.9073 4.65632 12.9002 4.65397 12.8931 4.65162C12.8704 4.64415 12.8478 4.63668 12.8236 4.63001C12.7799 4.62001 12.7363 4.61183 12.6918 4.60456C12.519 4.57001 12.33 4.54547 12.1082 4.54547C10.2119 4.54547 9.00928 5.92447 8.61295 6.45716V4.54547H5.36044V14.5448H8.61295V9.09061C8.61295 9.09061 11.071 5.66721 12.1082 8.18158V14.5448H15.3597V7.79706C15.3597 6.28626 14.3244 5.02725 12.9272 4.66273C12.9229 4.66138 12.9187 4.66002 12.9144 4.65865Z" fill={secondary ? c1 : c2}/>
                    </svg>

                    <svg onClick={handleLink('https://www.instagram.com/ietemec/?hl=en')} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.01096 0.0808105H10.4651C12.975 0.0808105 15.0103 2.11612 15.0103 4.62595V10.0801C15.0103 12.5899 12.975 14.6253 10.4651 14.6253H5.01096C2.50113 14.6253 0.46582 12.5899 0.46582 10.0801V4.62595C0.46582 2.11612 2.50113 0.0808105 5.01096 0.0808105ZM10.4653 13.2617C12.2197 13.2617 13.6469 11.8345 13.6469 10.0801V4.62591C13.6469 2.87149 12.2197 1.44432 10.4653 1.44432H5.01111C3.25669 1.44432 1.82951 2.87149 1.82951 4.62591V10.0801C1.82951 11.8345 3.25669 13.2617 5.01111 13.2617H10.4653ZM4.10208 7.353C4.10208 5.34495 5.73015 3.71689 7.73819 3.71689C9.74624 3.71689 11.3743 5.34495 11.3743 7.353C11.3743 9.36104 9.74624 10.9891 7.73819 10.9891C5.73015 10.9891 4.10208 9.36104 4.10208 7.353ZM5.46566 7.35303C5.46566 8.60567 6.48559 9.6256 7.73823 9.6256C8.99087 9.6256 10.0108 8.60567 10.0108 7.35303C10.0108 6.09948 8.99087 5.08046 7.73823 5.08046C6.48559 5.08046 5.46566 6.09948 5.46566 7.35303ZM12.1316 3.44417C12.1316 3.71176 11.9147 3.92868 11.6471 3.92868C11.3795 3.92868 11.1626 3.71176 11.1626 3.44417C11.1626 3.17658 11.3795 2.95966 11.6471 2.95966C11.9147 2.95966 12.1316 3.17658 12.1316 3.44417Z" fill={secondary ? c1 : c2}/>
                    </svg>

                    </div>
                </section>
                <div style={secondary ? { backgroundColor: c1 } : { backgroundColor: c2 }}></div>
                <section className={styles.details}>
                    <div>
                        <h4>Contact:</h4>
                        <div>
                            <h4>Sangeeth S <br/> Chairman</h4>
                            <h4 className={styles.underline}><a href="tel:+919962983325">+91 9962983325</a></h4>
                        </div>
                        <div>
                            <h4>Jerom Joseph Joy <br/> Vice Chairman</h4>
                            <h4 className={styles.underline}><a href="tel:+919846745061">+91 9846745061</a></h4>
                        </div>
                    </div>
                    <div>
                    <h4>Location:</h4>
                        <div>
                            <h4>Government Model Engineering College</h4>
                            <h4>Thrikkakara <br/> Kochi</h4>
                        </div>
                    </div>
                    <div>
                    <h4>Email:</h4>
                        <div className={styles.underline}>
                            <h4><a href="mailto:ietestudentsforum.mec2019@gmail.com">ietestudentsforum.mec2019@gmail.com</a></h4>
                        </div>
                    </div>
                    <span style={secondary ? { backgroundColor: c1 } : { backgroundColor: c2 }}></span>
                </section>
                
            </main>
        </div>
    )
}