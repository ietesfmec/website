import styles from './Activity.module.css';
import sampleImage from '../../public/sample.jpg';
import { useState, useEffect } from 'react';

export default function Activity() {
    const init = [
        {
            index:0,
            data:[sampleImage.src, 'Activity_A']
        },
        {
            index:1,
            data:[sampleImage.src, 'Activity_B']
        },{
            index:2,
            data:[sampleImage.src, 'Activity_C']
        },{
            index:3,
            data:[sampleImage.src, 'Activity_D']
        },{
            index:4,
            data:[sampleImage.src, 'Activity_E']
        },{
            index:5,
            data:[sampleImage.src, 'Activity_F']
        }
    ];
    
    const [featured, setFeatured] = useState(init[0])
    
    var interval;

    const forwards = () => {
        let t = featured.index;
        if(t >=  init.length - 1)   t = -1
        setFeatured(init[t+1])
    }
    const backwards = () => {
        let t = featured.index;
        if(featured.index === 0)   t = init.length;
        setFeatured(init[t-1])
    }
    const handleChange = (i) => e => {
        setFeatured(init[i])
    }

    function makeInterval() {
        clearInterval(interval)
        if(init.length === 0)   return;
        interval = setInterval(()=>{
            setFeatured(f => f.index >= init.length-1 ? init[0] : init[f.index + 1])
        },5000)
    }

    useEffect(() => {
        makeInterval()
        return () => { 
            clearInterval(interval)
        }
    },[featured])

    
    return (
        <div className={styles.outer}>
            <h1>Activities</h1>
            <main className={styles.container}>
                <div onClick={backwards} disabled={init.length === 0}>
                    <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <main>
                    <div>
                        <section>
                            <img src={featured.data[0]}></img>
                        </section>
                        <section>
                            <h1>{featured.data[1]}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </section>
                    </div>
                    <ul>
                        {init && init.map((_, i) => {
                            return <li onClick={handleChange(i)} className={ featured.index === i ? styles.active:''} key={i}></li>
                        })}
                    </ul>
                </main>
                <div onClick={forwards} disabled={init.length === 0}>
                    <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.19995 26.4L14 13.6L1.19995 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
            </main>
        </div>
    )
}