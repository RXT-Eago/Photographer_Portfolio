import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useEffect } from 'react'


export default function NavBarDefault() {

    
  return (


    <div>       
        
        <nav className="flex py-4 px-8">
            <h1 className="text-[32px] w-1/2 font-normal">
                    MAXIME RASPOLLINI
            </h1>
            <h1 className="text-[32px] w-1/2 font-normal text-right">
                    INDEX
            </h1>        

        </nav>
        
    </div>


  )
}
