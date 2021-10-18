import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './MembersList.module.css';
import sampleImage from '../../../public/sample.jpg';
import animate from '../../../hooks/animate';

export default function MembersList({id, members}) {
    const init = [
        {
            index:0,
            data: [...members.slice(0, 2)]
        },
        {
            index:1,
            data:[...members.slice(2, 4)]
        }
    ];
    
    const [featured, setFeatured] = useState(init[0])
    
    var interval, timeout;

    const e1 = useRef();
    const e2 = useRef();

    const findRef = (r1, r2) => {
        if(window.matchMedia('(max-width: 720px)').matches) return r1; //r2;
        return r1;
    }

    const forwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
            animate(el.current, 'fadeInRight', 'fast')
        })
        timeout = setTimeout(()=>{
            setFeatured(f => f.index >= init.length-1 ? init[0] : init[f.index + 1])
            clearTimeout(timeout)
        }, 1000)
    }
    const backwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutRight', 'fast').then(()=>{
            animate(el.current, 'fadeInLeft', 'fast')
        })
        
        timeout = setTimeout(()=>{
            setFeatured(f => f.index === 0 ? init[init.length - 1] : init[f.index - 1])
            clearTimeout(timeout)
        }, 1000)
    }
    const handleChange = (i, j) => e => {
        console.log(i+1, j+1)
        if(featured.index === j)    return;

        const el = findRef(e1, e2);

        if(featured.index < j) {
            animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
                animate(el.current, 'fadeInRight', 'fast')
            })
        } else {
            animate(el.current, 'fadeOutRight', 'fast').then(()=>{
                animate(el.current, 'fadeInLeft', 'fast')
            })
        }
        timeout = setTimeout(()=>{
            setFeatured(init[j])
            clearTimeout(timeout)
        }, 1000)
    }

    function makeInterval() {
        clearInterval(interval)
        if(init.length === 0)   return;
        interval = setInterval(()=>{
            forwards();
        },5700 //+ (id*500)
        )
    }

    useEffect(() => {
        console.log(members)
        if(id > 0)
            //makeInterval()
        return () => { 
            clearInterval(interval)
            clearTimeout(timeout)
        }
    },[])

    return (
        <main className={styles.main} >
            <div onClick={backwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>      
            <section className={styles.cards} ref={e1}>
                {
                    featured && featured.data && featured.data.map((member , i)=>{
                    
                        return (
                            <main key={i} ref={e2}>
                                <div className={styles.cover}>
                                    <Image src={member.pic} loading="eager" blurDataURL={sampleImage.src} placeholder="blur" layout="fill"></Image>
                                </div>
                                <p>Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur - {member.position.toUpperCase()}</p>
                                <h4>{member.name.toUpperCase()}</h4>
                                <ul>
                                {id && i && featured.data.map((_, j) => {
                                    return <li onClick={handleChange(i, j)} className={ featured.index === j ? styles.active:''} key={j}></li>
                                })}
                                </ul>
                            </main>
                        )
                    })
                }
            </section>
            <div onClick={forwards}>
                <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.19995 26.4L14 13.6L1.19995 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
        </main>
    )
}