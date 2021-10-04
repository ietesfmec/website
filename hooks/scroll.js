import { useEffect } from "react";

export default function useScroll(el, listener) {
    useEffect(() => {
        // if(!el || el?.getBoundingClientRect().bottom - 360 <= window.innerHeight) 
        //     window.removeEventListener('scroll', listener)
        // else
            window.addEventListener('scroll', listener)
        return (() => {
            window.removeEventListener('scroll', listener)
        })
    },[])
}