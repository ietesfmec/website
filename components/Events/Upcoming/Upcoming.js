import React from 'react';
import styles from './Upcoming.module.css';
import sampleImage from '../../../public/sample.jpg';

export default function Upcoming({upcoming}) {
    return (
        <div className={styles.encloser}>
            <main className={styles.main}>
                    <h1>Upcoming Events</h1>
                    {upcoming && upcoming.map((_, i) => {
                        return (
                            <div className={styles.upcoming + ` animate__animated animate__slow animate__fadeIn` + (i%2==0 ? 'Left' : 'Right')} key={i}>
                        <section className={styles.cover}>
                            <img src={sampleImage.src}></img>
                            <span>01 JAN '21</span>
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