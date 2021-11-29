import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Activity.module.css';
import animate from '../../../hooks/animate';
import logo from '../../../public/new_logo.png';
import collaboration from '../../../public/activities/collaboration.jpg';
import articles from '../../../public/activities/articles.jpg';
import webinar from '../../../public/activities/webinar.jpg';
import competition from '../../../public/activities/competition.jpg';
import workshop from '../../../public/activities/workshop.jpg';

export default function Activity() {
    const init = [
        {
            index:0,
            data: {
                image: competition.src,
                title: 'Competitions',
                content:`
                All about fun and learning, competitions by IETE SF MEC include fast-paced quizzes, live circuit design, virtual simulation, coding, hardware assembly and more!
                `
            }
        },{
            index:1,
            data: {
                image: workshop.src,
                title: 'Workshops',
                content:`
                With regular workshops conducted by IETE SF MEC, work with experts and gain hands-on experience with the most relevant and essential skills in your domain.
                `
            }
        },{
            index:2,
            data: {
                image: webinar.src,
                title: 'Webinars and Talks',
                content:`
                Meet some of the industry’s best and brightest, and learn all about the booming opportunities of today's dynamic world of technology through our Webinars and Talks.
                `
            }
        },{
            index:3,
            data: {
                image: articles.src,
                title: 'Articles',
                content:`
                We also have our very own IETE SF MEC Medium Publication, where we invite technology enthusiasts of all ages to write about the newest and most exciting innovations in the world today!
                `
            }
        }
            ,{
                index:4,
                data: {
                    image: collaboration.src,
                    title: 'Collaborations',
                    content:`
                    We join forces with other organizations to bring you quality content, enthralling events to help you conquer higher altitudes!
                    `
                }
        // },{
        //     index:4,
        //     data: {
        //         image: sampleImage.src,
        //         title: 'Re-Engineer Series',
        //         content:`A webinar series with some of the industry’s best and brightest, the Re-Engineer Talk Series introduced students and technology enthusiasts to the booming opportunities of today's dynamic industry.
        //         `
        //     }
        // },{
        //     index:5,
        //     data: {
        //         image: sampleImage.src,
        //         title: 'Technical Writing Competitons!',
        //         content:`With a chance to win exciting prizes and to be featured on the IETE SF MEC Medium Publication, the Technical Writing Competition provided an excellent opportunity for students to showcase writing skills and gain new knowledge on the most talked-about fields of Technology.
        //         `
        //     }
        }
    ];
    
    const [featured, setFeatured] = useState(init[0])
    const el = useRef()
    
    var interval, timeout;

    const forwards = () => {
        clearTimeout(timeout)
        let t = featured.index;
        if(t >=  init.length - 1)   t = -1;
        
        animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
            animate(el.current, 'fadeInRight', 'fast')
        })

        timeout = setTimeout(()=>{
            setFeatured(init[t+1])
            clearTimeout(timeout)
        }, 700)
        
    }
    const backwards = () => {
        clearTimeout(timeout)

        let t = featured.index;
        if(featured.index === 0)   t = init.length;
        
        
        animate(el.current, 'fadeOutRight', 'fast').then(()=>{
            animate(el.current, 'fadeInLeft', 'fast')
        })
        
        timeout = setTimeout(()=>{
            setFeatured(init[t-1])
            clearTimeout(timeout)
        }, 500)
    }
    const handleChange = (i) => e => {
        clearTimeout(timeout)
        if(featured.index === i)    return;
        if(featured.index < i) {
            animate(el.current, 'fadeOutLeft', 'fast').then(()=>{
                animate(el.current, 'fadeInRight', 'fast')
            })
        } else {
            animate(el.current, 'fadeOutRight', 'fast').then(()=>{
                animate(el.current, 'fadeInLeft', 'fast')
            })
        }
        timeout = setTimeout(()=>{
            setFeatured(init[i])
            clearTimeout(timeout)
        }, 500)
    }

    function makeInterval() {
        clearInterval(interval)
        
        if(init.length === 0)   return;
        interval = setInterval(()=>{
            forwards()
        },5000)
    }

    useEffect(() => {
        makeInterval()
        return () => { 
            clearInterval(interval)
            clearTimeout(timeout)
        }
    },[featured])


    let touchstartX = 0;
    let touchendX = 0;


    function handleGesture() {
    if (touchendX < touchstartX) forwards()
    if (touchendX > touchstartX) backwards()
    }

    const handleTouchStart = (e) => {
        touchstartX = e.changedTouches[0].screenX;
    }
    const handleTouchEnd = (e) => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture()
    }

    const imageLoader=({src, width})=>{
        return `${src}?w=${width}`;
    }
    
    return (
        <div className={styles.outer}>
            <h1>Our Activities</h1>
            <main className={styles.container}>
                <div onClick={backwards} disabled={init.length === 0}>
                    <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/5000/svg">
                        <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <main>
                    <div ref={el} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                        <section key={featured.index} className={styles.cover}>
                            <Image loader={imageLoader} priority layout="fill" src={featured.data.image} placeholder="blur" blurDataURL={logo.src}></Image>
                        </section>
                        <section>
                            <h1>{featured.data.title}</h1>
                            <p>{featured.data.content}</p>
                        </section>
                    </div>
                    <ul>
                        {init && init.map((_, i) => {
                            return <li onClick={handleChange(i)} className={ featured.index === i ? styles.active:''} key={i}></li>
                        })}
                    </ul>
                </main>
                <div onClick={forwards} disabled={init.length === 0}>
                    <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/5000/svg">
                        <path d="M1.19995 26.4L14 13.6L1.19995 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                </div>
            </main>
        </div>
    )
}