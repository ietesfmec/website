import React, { useEffect, useState } from 'react';
import styles from './MembersSection.module.css';
import MembersList from './Members/MembersList';

import Navnit from '../../public/team/navnit.jpg';
import Nikhil from '../../public/team/nikhil.jpg';
import Joann from '../../public/team/joann.jpg';
import Jerom from '../../public/team/jerom.jpg';
import Sangeeth from '../../public/team/sangeeth.jpg';
import Samyuktha from '../../public/team/samyuktha.jpg';
import Merin from '../../public/team/merin.jpg';
import Fudhail from '../../public/team/fudhail.jpg';
import Jaseem from '../../public/team/jaseem.jpg';
import Anitha from '../../public/team/anitha.jpeg';
import Haripriya from '../../public/team/haripriya.jpg';
import Nayantara from '../../public/sample.jpg';
import Riya from '../../public/team/riya.JPG';
import Abhirami from '../../public/team/abhirami.jpg';
import Unnikrishnan from '../../public/team/unni.png';
import Namitha from '../../public/team/namitha.jpg';
import Ananya from '../../public/team/ananya.jpg';
import Fac_1 from '../../public/team/fac1.jpg';
import Fac_2 from '../../public/team/fac2.jpg';

export default function MembersSection() {
    const team = [
        {
            name: 'Dr M V Rajesh',
            position: 'IETE Kochi Vice Chairman',
            content: 'Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur. Sint duis  deserunt elit irure.',
            pic: Fac_1
        },
        {
            name: 'Sajeesh M',
            position: 'Staff in Charge',
            content: 'Veniam aute  voluptate aute cupidatat. Sint eiusmod ullamco sunt ex. Anim  pariatur aliquip magna duis sunt excepteur. Sint duis  deserunt elit irure.',
            pic: Fac_2
        },
        {
            name: 'Sangeeth S',
            position: 'Chairman',
            content: '',
            pic: Sangeeth
        },
        {
            name: 'Jerom Joseph Joy',
            position: 'Vice Chairman',
            content: '',
            pic: Jerom
        },
        {
            name: 'Unnikrishnamenon M',
            position: 'Secretary',
            content: '',
            pic: Unnikrishnan
        },
        {
            name: 'Haripriya H Nair',
            position: 'Treasurer',
            content: '',
            pic: Haripriya
        },
        {
            name: 'Samyuktha K',
            position: 'General Secretary ',
            content: '',
            pic: Samyuktha
        },
        {
            name: 'Namitha Shaji',
            position: 'Joint Secretary',
            content: '',
            pic: Namitha
        },
        {
            name: 'Mohammed Fudhail P',
            position: 'Tech Head',
            content: '',
            pic: Fudhail
        },
        {
            name: 'Abhirami B M',
            position: 'Tech Head',
            content: '',
            pic: Abhirami
        },
        {
            name: 'A S Muhammed Jaseem',
            position: 'Event coordinator',
            content: '',
            pic: Jaseem
        },
        {
            name: 'Riya Lalu',
            position: 'Design Head',
            content: '',
            pic: Riya
        },
        {
            name: 'Joann Elizabeth',
            position: 'Content Head',
            content: '',
            pic: Joann
        },
        {
            name: 'Nayantara Thomas',
            position: 'Content Head',
            content: '',
            pic: Nayantara
        },
        {
            name: 'Nikhil George Mathew',
            position: 'Web Head',
            content: 'Rome was not built in a day. Neither was this website :)',
            pic: Nikhil
        },
        {
            name: 'Merin Thresia Judy',
            position: 'Communication Coordinator',
            content: '',
            pic: Merin
        },
        {
            name: 'Anitha S Menon',
            position: 'CS Dept Head',
            content: '',
            pic: Anitha
        },
        {
            name: 'Navanit Nandakumar',
            position: 'EC Dept Head',
            content: '',
            pic: Navnit
        },
        {
            name: 'Ananya Ajith Kallungal',
            position: 'EEE Dept Head',
            content: '',
            pic: Ananya
        }
    ]
    const [members, setMembers] = useState([])
    const [type, setType] = useState(1)
    const format = (type) => {
        const x = [];
        let k = 0;
        if(type === 1) {
            for(let i = 0; i < 5; i++) {
                const y = [];
                for(let j = 0; j < 2; j++) {
                    y.push({
                        index: j,
                        data: [team[k++], team[k++]]
                    });
                if(j === 0 && i === 0) break;
                }
                x.push(y);
            }
        } else {
            for(let i = 0; i < 2; i++) {
                const y = [];
                for(let j = 0; j < 2; j++) {
                    if(i === 0) {
                        y.push({
                            index: j,
                            data: [team[k++], team[k++] ]
                        });
                        break;
                    }
                    y.push({
                        index: j,
                        data: [team[k++], team[k++], team[k++], team[k++], team[k++], team[k++]]
                    });
                }
                x.push(y);
            }
        }
        console.log(x)
        setMembers(x)
    }

    const listener = () => {
        if(window.matchMedia('(max-width: 720px)').matches) setType(2)
        else setType(1)
    }
    
    useEffect(()=>{
        format(type)
    },[type])

    // useEffect(()=>{
    //     listener();
    //     window.addEventListener('resize', listener)
    //     return (()=>{
    //         window.removeEventListener('resize', listener)
    //     })
    // }, [])

    return (
        <div>
            <div id="team" className={styles.encloser}>
                <h2>MEET THE TEAM</h2>
                <main className={styles.main}>
                    {
                        members.map((members,i)=> {
                            return (
                                <MembersList key={i} id={i} members={members}/>
                            )
                        })
                    }
            </main>
        </div>
    </div>
)}