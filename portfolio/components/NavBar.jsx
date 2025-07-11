import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'
import { useState } from 'react'

import Header from './Header'

import NavBarMobile from './NavBar/NavBarMobile'
import NavBarDefault from './NavBar/NavBarDefault'


export default function NavBar() {

    const [showMobile, setShowMobile] = useState(false)
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setShowMobile(true);
            } else {
                setShowMobile(false);
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


  return (


    <div className='fixed top-0 left-0 w-full z-50 bg-transparent'>
        <Header />

        {showMobile ? (
            <NavBarDefault />
        ) : (
            <NavBarDefault />
        )
            }
        

        
    </div>


  )
}
