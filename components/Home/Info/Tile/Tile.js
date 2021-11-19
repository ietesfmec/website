import React, { useRef } from 'react';
import styles from './Tile.module.css';

export default function Tile({info}) {

    const el = useRef()

    const handleScroll = () => {
        el.current.scrollBy({
            top: 234,
            left: 0,
            behavior: 'smooth'
          })
    }
    return (
        <section>
            <h1>{info.title}</h1>
            <div ref={el} dangerouslySetInnerHTML={{__html: info.content}}></div>
            {
            info.type === 1 ? 
                (<button onClick={handleScroll}>Read More!</button>)
            :
            (<span onClick={handleScroll}>
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50011 0.394714L9.18397 5.84984H14.633L10.2247 9.2213L11.9085 14.6764L7.50011 11.305L3.09173 14.6764L4.77554 9.2213L0.367188 5.84984H5.81626L7.50011 0.394714Z" fill="white"/>
                </svg>

            </span>)}
        </section>
    )
}