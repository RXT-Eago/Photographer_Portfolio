import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'


export default function Footer() {
  return (

    <div className='py-4 z-[100] fixed bottom-0 w-full'>

        <hr className="absolute left-0 w-full h-[3px] bg-black" />

        <div className="py-2 px-8 flex text-lg">

         © <a href="https://www.maximeraspollini.fr" className='mx-1'>Maxime Raspollini </a> {new Date().getFullYear()}

        </div>

    </div>
   
  )
}
