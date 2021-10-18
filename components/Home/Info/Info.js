import React, { useState } from 'react';
import styles from './Info.module.css';
import Tile from './Tile/Tile';

export default function Info() {
    
    const overview = {
        title: 'Overview',
        content:`
        <p>
        The Institution of Electronics and Telecommunication Engineers (IETE) is India's leading recognised professional society devoted to the advancement of Science and Technology of Electronics, Telecommunication & IT. Founded in 1953.
        </p> 
        <br/>          
        <p>
        IETE is the National Apex Professional body of Electronics and Telecommunication, Computer Science and IT Professionals. It serves more than 1,25,000 members (including Corporate, Student and ISF members) through 63 Centres, spread all over India and abroad.
        </p>
        <br/>
        <p>          
        IETE focuses on advancement of the Science and Technology of Electronics, Telecommunication, Computers, Information Technology and related areas. Towards this end the Institution promotes and conducts basic engineering and continuing technical education programmes for human resource development.
        </p>
        `,
        moreInfo:`
        <p>
        The Institution provides leadership in Scientific and Technical areas of direct importance to the national development and economy. Government of India has recognised IETE as a Scientific and Industrial Research Organization (SIRO) and also notified as an educational Institution of national eminence. The objectives of IETE focus on advancing electro-technology. IETE conducts and sponsors technical meetings, conferences, symposia, and exhibitions all over India, publishes technical journals and provides continuing education as well as career advancement opportunities to its members.
        </p>
        <br/>
        <p>
        IETE also plays an important role in Skill India initiative of the Govt. IETE has
        become training partner to number of Skill Sector Council like Telecom Sector
        Skill Council (TSSC); Electronics Sector Skill Council of India (ESSCI), NIELIT,
        etc. Skilling programmes have been conducted in the field of Fibre Optics & Solar Panels, 
        which are being diversified to many more job roles.
        </p>
        <br/>
        <p></p>
        `,
        type:1
    }
    const aim = {
        title: 'Aim',
        content: `
        <p>
        One of the important charter of IETE is to impart continuing engineering education to
        working professionals, in the field of electronics, telecommunication, computer & IT,
        at an affordable cost. Aim being to earn while you learn and targeting students who
        cannot afford engineering education at a regular engineering college.
        </p>
        `,
        moreInfo:``,
        type:2
    }
    const working = {
        title: 'Working',
        content: `
        <p>
        IETE conducts technical activities like, conferences, workshops, exhibitions, 
        technical tours, provides continuing education, guiding classes / laboratory assistance, 
        coordinates IETE Students' Forums, conducts IETE examinations and takes up 
        professional development of its members.
        </p>
        `,
        moreInfo:``,
        type:2
    }
    const info = [ overview, aim, working ];
    return(
        <div className={styles.encloser}>
            <h1>About IETE</h1>
            <main className={styles.main}>
                { info && info.map((inf, i)=>{
                    return (
                        <Tile info={inf} key={i}/>
                    )
                })}
            </main>
      </div>
    )
}