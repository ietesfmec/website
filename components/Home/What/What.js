import React from 'react'
import styles from './What.module.css'
import sampleImage from "../../../public/sample.jpg"
import Topbar from '../../Topbar/Topbar'

export default function What() {
    return (
        <div>
            <main className = {styles.container}>
                <section className = {styles.half}>
                    <img src={sampleImage.src}></img>
                </section>
                <section className = {styles.half}>
                    <Topbar/>
                    <div className = {styles.sectionWhat}>
                        <h1>What is <br/> IETE SF MEC?</h1>
                        <p className = { `animate__animated animate__fadeInRight` }>
                            {/* The Institution of Electronics and Telecommunication Engineers (IETE) is a leading recognized professional society focused on the growth, development and empowerment of youth through technical education and skill development in all disciplines of engineering. */}
                            
                            IETE SF MEC is the official student’s forum of IETE at Government Model Engineering College, Kochi. With articles, webinars, training and many other interesting activities, IETE SF MEC is growing rapidly and is slowly turning into one of the most recognized institutes in the state.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}

