import React from 'react';
import { Connect, Footer, Members, Topbar } from '../components';

export default function Team() {
    return (
        <div>
            <Topbar/>
           <Connect/>
           <Members/> 
           <Footer secondary="true"/>
        </div>
    )
}