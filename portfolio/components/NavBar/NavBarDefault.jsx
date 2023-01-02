import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useEffect } from 'react'


export default function NavBarDefault() {

    
  return (


    <div>       
        
        <nav className="flex">
            <div className="text-[27px] w-5/12 font-normal">
                    MAXIME RASPOLLINI
            </div>
            <ul className="flex justify-end gap-8 pl-12 pt-2 w-7/12 float-right text-lg ">
                <li ><a href="#0">Home</a></li>
                <li ><a href="#0">Projects</a></li>
                <li ><a href="#0">About/Contact</a></li>
                <li className="pl-4">Insta&Mail</li>
            </ul>           

        </nav>
        
    </div>


  )
}
