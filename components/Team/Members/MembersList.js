import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './MembersList.module.css';
import logo from '../../../public/logo.png';
import animate from '../../../hooks/animate';

// import Navnit from '../../../public/team/navnit.jpg';
// import Nikhil from '../../../public/team/nikhil.jpg';
// import Joann from '../../../public/team/joann.jpg';
// import Jerom from '../../../public/team/jerom.jpg';
// import Sangeeth from '../../../public/team/sangeeth.jpg';
// import Samyuktha from '../../../public/team/samyuktha.jpg';
// import Merin from '../../../public/team/merin.jpg';
// import Fudhail from '../../../public/team/fudhail.jpg';
// import Jaseem from '../../../public/team/jaseem.jpg';
// import Anitha from '../../../public/team/anitha.jpeg';
// import Haripriya from '../../../public/team/haripriya.jpg';
// import Nayantara from '../../../public/team/nayantara.jpg';
// import Riya from '../../../public/team/riya.JPG';
// import Abhirami from '../../../public/team/abhirami.jpg';
// import Unnikrishnan from '../../../public/team/unni.png';
// import Namitha from '../../../public/team/namitha.jpeg';
// import Ananya from '../../../public/team/ananya.jpg';
// import Fac_1 from '../../../public/team/fac1.jpg';
// import Fac_2 from '../../../public/team/fac2.jpg';

export default function MembersList({id, members}) {
    
    const init = members;

    // const mapping = {
    //     'Navnit':Navnit,
    //     'Nikhil':Nikhil,
    //     'Joann':Joann,
    //     'Jerom':Jerom,
    //     'Sangeeth':Sangeeth,
    //     'Samyuktha':Samyuktha,
    //     'Merin':Merin,
    //     'Fudhail':Fudhail,
    //     'Jaseem':Jaseem,
    //     'Anitha':Anitha,
    //     'Haripriya':Haripriya,
    //     'Nayantara':Nayantara,
    //     'Riya':Riya,
    //     'Abhirami':Abhirami,
    //     'Unnikrishnan':Unnikrishnan,
    //     'Namitha':Namitha,
    //     'Ananya':Ananya,
    //     'Fac_1':Fac_1,
    //     'Fac_2':Fac_2
    // }
    
    const [featured, setFeatured] = useState(init[0])
    
    var interval, timeout;

    const e1 = useRef();
    const e2 = useRef();

    const findRef = (r1, r2) => {
        if(window.matchMedia('(max-width: 720px)').matches) return r2;
        return r1;
    }

    const forwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
            animate(el.current, 'fadeInRight', 'medium')
        })
        timeout = setTimeout(()=>{
            setFeatured(f => f.index >= init.length-1 ? init[0] : init[f.index + 1])
            clearTimeout(timeout)
        }, 1000)
    }
    const backwards = () => {
        const el = findRef(e1, e2);
        animate(el.current, 'fadeOutRight', 'fast').then(()=>{
            animate(el.current, 'fadeInLeft', 'medium')
        })
        
        timeout = setTimeout(()=>{
            setFeatured(f => f.index === 0 ? init[init.length - 1] : init[f.index - 1])
            clearTimeout(timeout)
        }, 1000)
    }
    const handleChange = (i, j) => e => {

        if(featured.index === j)    return;

        const el = findRef(e1, e2);

        if(featured.index < j) {
            animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
                animate(el.current, 'fadeInRight', 'medium')
            })
        } else {
            animate(el.current, 'fadeOutRight', 'fast').then(()=>{
                animate(el.current, 'fadeInLeft', 'medium')
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
            if(init.length === 1) return;
            if(id%2 === 0)
                forwards();
            else 
                backwards();
        },8700 //+ (id*500)
        )
    }

    useEffect(() => {
    
            makeInterval()
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
                                <div className={styles.cover} key={member.pic.src}>
                                    <Image src={member.pic} blurDataURL={logo.src} placeholder="blur" layout="fill"></Image>
                                </div>
                                <p>{member.content ? member.content : `${member.position.toUpperCase()}`}</p>
                                <h4>{member.name.toUpperCase()}</h4>
                                <ul>
                                {members.map((_, j) => {
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