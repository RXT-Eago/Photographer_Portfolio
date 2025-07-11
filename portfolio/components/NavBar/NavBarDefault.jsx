import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useEffect } from 'react'


export default function NavBarDefault() {

    
  return (


    <div>       
        
        <nav className="flex z-[100] py-4 px-8">
            <h1 className="text-[24px] w-2/3 font-normal">
                    MAXIME RASPOLLINI
            </h1>
            <h1 className="text-[24px] w-1/3 font-normal text-right">
                    INDEX
            </h1>        

        </nav>
        
    </div>


  )
}
