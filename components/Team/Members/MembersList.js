import React, { useEffect, useState } from 'react';
import styles from './MembersList.module.css';
import sampleImage from '../../../public/sample.jpg';

export default function MembersList() {
    const init = [
        {
            index:0,
            data:[
                [sampleImage.src, 'John Doe'], [sampleImage.src, 'Jane Doe']
            ]
        },
        {
            index:1,
            data:[
                [sampleImage.src, 'Jack Doe'], [sampleImage.src, 'Jill Doe']
            ]
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
        <main className={styles.main} >
            <div onClick={forwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>      
            <section className={styles.cards}>
                {
                    featured.data.map((member , i)=>{
                        return (
                            <main key={i}>
                                <div>
                                    <img src={member[0]}></img>
                                </div>
                                <p>Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur. Sint duis  deserunt elit irure.</p>
                                <h4>{member[1].toUpperCase()}, POSITION</h4>
                            </main>
                        )
                    })
                }
            </section>
            <div onClick={backwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19995 26.4L14 13.6L1.19995 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </main>
    )
}