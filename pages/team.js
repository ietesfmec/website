import React from 'react';
import { Connect, Footer, Members } from '../components';

export default function Team() {
    return (
        <div>
           <Connect/>
           <Members/> 
           <Footer secondary="true"/>
        </div>
    )
}