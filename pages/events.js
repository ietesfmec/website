import React from 'react';
import Head from 'next/head';
import { Footer, Navbar, PastEvents, Topbar, UpcomingEvents } from '../components';

export default function Events() {
    return(
        <div>
            <Topbar/>
            <UpcomingEvents/>
            <PastEvents/>
            <Footer/>
            
        </div>
    )
}