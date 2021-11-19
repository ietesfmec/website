import React, { useRef, useState } from 'react';
import Link from 'next/link';
import styles from './Topbar.module.css';
import sampleImage from '../../public/sample.jpg';
import animate from '../../hooks/animate';
import logo from '../../public/logo.png';
import { useRouter } from 'next/router';

export default function Topbar() {

    const router = useRouter()

    const [sidebarOpen, setSidebarOpen] = useState(false)
    const sidebar = useRef()
    const hamburger = useRef()
    const close = useRef()

    const handleSidebar = () => {
        if(sidebarOpen) {
            animate(sidebar.current, 'fadeOutRight').then(()=>{
                sidebar.current.style.width = '0px';
                sidebar.current.style.display = 'none';
                close.current.style.display = 'none';
                hamburger.current.style.display = 'block';
            })
        } else {
                if(window.matchMedia('(max-width: 600px)').matches)
                    sidebar.current.style.width = '300px';
                else
                    sidebar.current.style.width = '346px';
                
                sidebar.current.style.display = 'flex';
                animate(sidebar.current, 'fadeInRight', 'faster').then(()=>{
                    close.current.style.display = 'block';
                })
                
                hamburger.current.style.display = 'none';
            
        }
        setSidebarOpen(!sidebarOpen)
    }

    const handleLink = (page) => () => {
        router.push(page);
    }

    return (
        <div>
            <main className={styles.topbar}>
                <img src={logo.src}/>
                <h3>IETE SF MEC</h3>
                <span ref={hamburger} onClick={handleSidebar}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.75 22.5H26.25V20H3.75V22.5ZM3.75 16.25H26.25V13.75H3.75V16.25ZM3.75 7.5V10H26.25V7.5H3.75Z" fill="#F1F1F1"/>
                    </svg>
                </span>
            </main>
            <div className={styles.sidebar} ref={sidebar}>
                <span onClick={handleSidebar} ref={close}>
                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 6.07954L17.59 4.77295L12 9.95296L6.41 4.77295L5 6.07954L10.59 11.2596L5 16.4396L6.41 17.7462L12 12.5661L17.59 17.7462L19 16.4396L13.41 11.2596L19 6.07954Z" fill="#F1F1F1"/>
                    </svg>
                </span>
                <ul>
                    <li onClick={handleLink('https://medium.com/iete-sf-mec')} className={`animate__animated animate__fadeInRight animate__faster`}>
                        <h5>MEDIUM</h5>
                        <span>
                        <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.23052 0C6.56698 0 8.4609 4.01284 8.4609 8.96257C8.4609 13.9123 6.56684 17.9248 4.23052 17.9248C1.89421 17.9248 0 13.9123 0 8.96257C0 4.01284 1.89406 0 4.23052 0ZM10.9864 0.525004C12.1546 0.525004 13.1016 4.30225 13.1016 8.96257H13.1018C13.1018 13.6217 12.1547 17.4001 10.9865 17.4001C9.81828 17.4001 8.87125 13.6217 8.87125 8.96257C8.87125 4.30346 9.81813 0.525004 10.9864 0.525004ZM14.2561 1.40384C14.6668 1.40384 15 4.78794 15 8.96257C15 13.136 14.667 16.5213 14.2561 16.5213C13.8451 16.5213 13.5123 13.1369 13.5123 8.96257C13.5123 4.78824 13.8453 1.40384 14.2561 1.40384Z" fill="#535353"/>
                        </svg>

                        </span>
                    </li>
                    <li onClick={handleLink('https://www.instagram.com/ietemec/?hl=en')} className={`animate__animated animate__fadeInRight animate__fast`}>
                        <h5>INSTAGRAM</h5>
                        <span>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.625 0H12.375C15.4811 0 18 2.33413 18 5.21245V11.4674C18 14.3457 15.4811 16.6798 12.375 16.6798H5.625C2.51888 16.6798 0 14.3457 0 11.4674V5.21245C0 2.33413 2.51888 0 5.625 0ZM12.3752 15.1161C14.5465 15.1161 16.3127 13.4793 16.3127 11.4673V5.21241C16.3127 3.20041 14.5465 1.5637 12.3752 1.5637H5.62521C3.45396 1.5637 1.68771 3.20041 1.68771 5.21241V11.4673C1.68771 13.4793 3.45396 15.1161 5.62521 15.1161H12.3752ZM4.50018 8.33987C4.50018 6.03701 6.51506 4.16991 9.00018 4.16991C11.4853 4.16991 13.5002 6.03701 13.5002 8.33987C13.5002 10.6427 11.4853 12.5098 9.00018 12.5098C6.51506 12.5098 4.50018 10.6427 4.50018 8.33987ZM6.18777 8.3399C6.18777 9.77645 7.45002 10.9461 9.00027 10.9461C10.5505 10.9461 11.8128 9.77645 11.8128 8.3399C11.8128 6.90231 10.5505 5.73368 9.00027 5.73368C7.45002 5.73368 6.18777 6.90231 6.18777 8.3399ZM14.4374 3.85716C14.4374 4.16404 14.169 4.41281 13.8378 4.41281C13.5066 4.41281 13.2382 4.16404 13.2382 3.85716C13.2382 3.55029 13.5066 3.30151 13.8378 3.30151C14.169 3.30151 14.4374 3.55029 14.4374 3.85716Z" fill="#535353"/>
                            </svg>
                        </span>
                    </li>
                   
                    <li onClick={handleLink('https://www.linkedin.com/company/iete-sf-mec')} className={`animate__animated animate__fadeInRight animate__medium`}>
                        <h5>LINKEDIN</h5>
                        <span>
                            <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.9375 1.82435C3.9375 2.83192 3.05606 3.64871 1.96875 3.64871C0.881439 3.64871 0 2.83192 0 1.82435C0 0.816791 0.881439 0 1.96875 0C3.05606 0 3.9375 0.816791 3.9375 1.82435ZM0.000119358 5.2124H4.02537V16.6798H0.000119358V5.2124ZM14.9475 5.33416L14.9474 5.33414C14.9194 5.32557 14.8914 5.317 14.8614 5.30936C14.8074 5.29789 14.7534 5.28851 14.6983 5.28017C14.4845 5.24055 14.2505 5.2124 13.976 5.2124C11.6293 5.2124 10.1409 6.79386 9.65042 7.40476V5.2124H5.62517V16.6798H9.65042V10.4248C9.65042 10.4248 12.6924 6.49883 13.976 9.38236V16.6798H18.0002V8.94138C18.0002 7.20877 16.7188 5.76492 14.9897 5.34688C14.9754 5.34272 14.9615 5.33844 14.9475 5.33416Z" fill="#535353"/>
                            </svg>
                        </span>
                    </li>
                </ul>
                <button className={`animate__animated animate__fadeIn animate__slower`}><Link href="/gallery">GALLERY</Link></button>
            </div>
        </div>
    )
}