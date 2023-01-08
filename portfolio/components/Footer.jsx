import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'


export default function Footer() {
  return (

    <div className='py-4'>

        <hr className="absolute left-0 w-full h-[3px] bg-black" />

        <div className="py-2 px-1 flex">

         © Maxime Rasponllini 2021 - 2023, <a className="ml-1" href="/legal">Disclaimer & Privacy Policy</a> 

        </div>

    </div>
   
  )
}
