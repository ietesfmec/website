import styles from './Activity.module.css';
import sampleImage from '../../../public/sample.jpg';
import { useState, useEffect, useRef } from 'react';
import animate from '../../../hooks/animate';

export default function Activity() {
    const init = [
        {
            index:0,
            data: {
                image: sampleImage.src,
                title: 'Let’s Talk Etiquette!',
                content:`Let's Talk Etiquette was a Pre-Event of Influx 2.0, conducted by IETE SF MEC in collaboration with IEEE MEC SB.
                With personal anecdotes, tips and tricks, speaker Aravind R Menon, a Senior Marketing Specialist specialized in Tech Marketing, Content and Branding, joined us to explore the essentials of job interview etiquette like never before.
                `
            }
        },{
            index:1,
            data: {
                image: sampleImage.src,
                title: 'TechCon',
                content:`With over 150+ first-year participants in an event that promoted community, fun, and learning, IETE SF MEC conducted TechCon, an event jam-packed with fun ice-breakers, mind-boggling quizzes, and thought-provoking discussions on the latest advancements in the engineering world.
                `
            }
        },{
            index:2,
            data: {
                image: sampleImage.src,
                title: 'GigaHertz',
                content:`A technical competition conducted by IETE SF MEC in collaboration with Excel MEC, GigaHertz was an exploration of problem-solving and designing solutions through quizzes, live circuit design, mentorship, and more! Participants explored domains ranging from Computer Science to basic Electrical and Electronics, and had an interactive, fun and exciting event.`
            }
        },{
            index:3,
            data: {
                image: sampleImage.src,
                title: 'Reverso',
                content:`Delving into the world of debugging, coding and hardware assembly, Reverso is a Reverse Engineering based technical competition conducted by IETE SF MEC in collaboration with Excel MEC. In this exciting team event, participants are implored to dismantle everyday appliances to model, design and implement a new product from its components.`
            }
        },{
            index:4,
            data: {
                image: sampleImage.src,
                title: 'Re-Engineer Series',
                content:`A webinar series with some of the industry’s best and brightest, the Re-Engineer Talk Series introduced students and technology enthusiasts to the booming opportunities of today's dynamic industry.
                `
            }
        },{
            index:5,
            data: {
                image: sampleImage.src,
                title: 'Technical Writing Competitons!',
                content:`With a chance to win exciting prizes and to be featured on the IETE SF MEC Medium Publication, the Technical Writing Competition provided an excellent opportunity for students to showcase writing skills and gain new knowledge on the most talked-about fields of Technology.
                `
            }
        }
    ];
    
    const [featured, setFeatured] = useState(init[0])
    const el = useRef()
    
    var interval, timeout;

    const forwards = () => {
        clearTimeout(timeout)
        let t = featured.index;
        if(t >=  init.length - 1)   t = -1;
        
        animate(el.current, 'fadeOutLeft', 'faster').then(()=>{
            animate(el.current, 'fadeInRight', 'faster')
        })

        timeout = setTimeout(()=>{
            setFeatured(init[t+1])
            clearTimeout(timeout)
        }, 500)
        
    }
    const backwards = () => {
        clearTimeout(timeout)

        let t = featured.index;
        if(featured.index === 0)   t = init.length;
        
        
        animate(el.current, 'fadeOutRight', 'faster').then(()=>{
            animate(el.current, 'fadeInLeft', 'faster')
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
            animate(el.current, 'fadeOutLeft', 'faster').then(()=>{
                animate(el.current, 'fadeInRight', 'faster')
            })
        } else {
            animate(el.current, 'fadeOutRight', 'faster').then(()=>{
                animate(el.current, 'fadeInLeft', 'faster')
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
            clearTimeout(timeout)
            
            animate(el.current, 'fadeOutLeft', '0.1s').then(()=>{
                animate(el.current, 'fadeInRight', '0.5s')
            })

            timeout = setTimeout(()=>{
                setFeatured(f => f.index >= init.length-1 ? init[0] : init[f.index + 1])
                clearTimeout(timeout)
            }, 500)
        },5000)
    }

    useEffect(() => {
        //makeInterval()
        return () => { 
            clearInterval(interval)
            clearTimeout(timeout)
        }
    },[featured])

    
    
    return (
        <div className={styles.outer}>
            <h1>Activities</h1>
            <main className={styles.container}>
                <div onClick={backwards} disabled={init.length === 0}>
                    <svg width="15" height="28" viewBox="0 0 15 28" fill="none" xmlns="http://www.w3.org/5000/svg">
                        <path d="M14 26.4L1.19995 13.6L14 0.800003" stroke="#C3CBCD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <main>
                    <div ref={el}>
                        <section>
                            <img src={featured.data.image}></img>
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