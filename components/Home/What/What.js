import React from 'react'
import styles from './What.module.css'
import sampleImage from "../../../public/sample.jpg"
import Topbar from '../../Topbar/Topbar'

export default function What() {
    return (
        <div>
            <main className = {styles.container}>
                <section className = {'half' + ' ' + styles.half}>
                    <img src={sampleImage.src}></img>
                </section>
                <section className = {'half' + ' ' + styles.half}>
                    <Topbar/>
                    <div className = {styles.sectionWhat}>
                        <h1>What <br/> is <br/> IETE SF MEC?</h1>
                        <p className = { `animate__animated animate__fadeInRight` }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
                    </div>
                </section>
            </main>
        </div>
    )
}

