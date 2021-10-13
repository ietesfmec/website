import React from 'react';
import styles from './Connect.module.css'

export default function Connect() {
    const handleClick = () => {
        document.getElementById('team').scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className={styles.outer}>
            <div className={styles.encloser}>
                <span></span>
                <main className={styles.main}>
                    <section className={`animate__animated animate__fadeIn`}>
                        <h1>IETE SF MEC</h1>
                        <span></span>
                        <p>Meet our team, the minds behind the curation of the exciting events, webinars, workshops and articles of IETE SF MEC!</p>
                        <div role="button" onClick={handleClick}><h2>LETS CONNECT!</h2></div>
                    </section>
                </main>
            </div>
        </div>
    )
}