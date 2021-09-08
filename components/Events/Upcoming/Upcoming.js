import React from 'react';
import styles from './Upcoming.module.css';
import sampleImage from '../../../public/sample.jpg';

export default function Upcoming() {
    const upcoming = [1,2]
    return (
        <div className={styles.encloser}>
            <main className={styles.main}>
                    <h1>Upcoming Events</h1>
                    {upcoming && upcoming.map((_, i) => {
                        return (
                            <div className={styles.upcoming} key={i}>
                        <section className={styles.cover}>
                            <img src={sampleImage.src}></img>
                        </section>
                        <section className={styles.details}>
                            <span>
                                <h3>JAN '21</h3>
                                <h1>01</h1>
                            </span>
                            <div>
                                <p>Labore mollit id non culpa id labore esse cupidatat exercitation. Occaecat eu elit ipsum aute deserunt ea officia velit nulla magna aliquip nulla anim magna. Commodo exercitation sunt sint sit irure anim nostrud laborum.</p>
                                <span>REGISTER</span>
                            </div>
                        </section>
                    </div>
                        )
                    })}
            </main>
        </div>
    )
}