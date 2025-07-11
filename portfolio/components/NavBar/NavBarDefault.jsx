import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useEffect } from 'react'
import Link from 'next/link'

export default function NavBarDefault() {

    
  return (


    <div>       
        
        <nav className="flex z-[100] py-4 px-8 md:px-16">
            <div className="text-[24px] w-2/3 font-normal flex justify-start items-center">
                  <Link href="/" className="hover:underline">MAXIME RASPOLLINI</Link>
            </div>
            <div className="text-[24px] w-1/3 font-normal text-right flex justify-end items-center">
                  <Link href="/me" className="hover:underline">INDEX</Link>
            </div>        

        </nav>
        
    </div>


  )
}
