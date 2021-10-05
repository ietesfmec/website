import React from 'react';
import styles from './Featured.module.css';
import sampleImage from '../../../public/sample.jpg';
import clapImage from '../../../public/clap.png';
export default function Featured({featured}) {
    return(
        <div className = {styles.encloser}>
            <main className={styles.main}>
                <section className={`animate__animated animate__fadeInLeft animate__fast`}>
                    <img src={featured[3]}></img>
                    <span>{featured[1]}</span>
                </section>
                <section></section>
                <section className={`animate__animated animate__fadeInRight animate__fast`}>
                    <h1>Article of <br/> the <br/> WEEK!</h1>
                    <div>
                        <span></span>
                        {/* <p>Lorem cillum nua quis ut. Voluptate incididunt ipsum ipsum adipisicing Lorem occaecat fugiat nulla ut magna tempor eu consectetur nulla. Occaecat pariatur enim amet deserunt occaecat.</p>
                         */}
                         <p>{featured[4]}</p>
                    </div>
                    <h2>by {featured[2]}</h2>
                    <div className={styles.share}>
                        <span>
                            <img src={clapImage.src}></img>                           
                        </span>
                        <h3>Clap and Share!</h3>
                    </div>
                </section>
            </main>
        </div>
    )
}