import React, { useState } from 'react';
import { Footer, PastEvents, Topbar, UpcomingEvents } from '../components';
import Papa from 'papaparse';

export async function getStaticProps() {
    const result = await fetch('https://docs.google.com/spreadsheets/d/1gSegn_4w5oJr5X-MpABiti5i-xzv2e_SHEGfTp6XW5g/gviz/tq?tqx=out:csv', {
        method: 'GET',
    });
    const text = await result.text();
    let data = Papa.parse(text).data.slice(1);
    data.forEach((_,i)=>{
        data[i] = data[i].filter(el=>{
            return el!='';
        });
        if(data[i].length<6) {
            while(data[i].length!=6) {
                data[i].push('<none>');
            }
        }
    });

    data = data.reverse();
    
    const upcoming = data.slice(0, 2);
    const events = data;

    return {
        props: {
            upcoming, events
        },
        revalidate:5
    }
}

export default function Events({upcoming, events}) {
    const [footer, setFooter] = useState(false)
    const showFooter = () => setFooter(true)
    return(
        <div>
            <Topbar/>
            {/* <UpcomingEvents upcoming={upcoming}/> */}
            <PastEvents events={events} showFooter={showFooter}/>
            <Footer/> 
        </div>
    )
}