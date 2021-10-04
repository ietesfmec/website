import React, { useState } from 'react';
import Head from 'next/head';
import { Footer, Navbar, PastEvents, Topbar, UpcomingEvents } from '../components';

export default function Events() {
    const [footer, setFooter] = useState(false)
    const showFooter = () => setFooter(true)
    return(
        <div>
            <Topbar/>
            <UpcomingEvents/>
            <PastEvents showFooter={showFooter}/>
            { footer ? <Footer/> : <></>}
        </div>
    )
}