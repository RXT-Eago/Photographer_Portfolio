import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import { useEffect } from 'react'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CarouselModal from '../components/CarouselModal';

export default function Me() {

  // Remove the useEffect that depends on imageId and all old modal code


  return (
    <div className="font-main">
      <NavBar />
      <div className="py-32 mt-24 md:px-16 px-8" id="hero">
        <div className="max-w-xl mx-auto space-y-8 text-lg">
          <div>
            <div className="font-semibold">Contact:</div>
            <div>
              <a href="mailto:maxime.raspollini@gmail.com" className="text-blue-700 hover:underline block">maxime.raspollini@gmail.com</a>
            </div>
          </div>
          {/* <div>
            <div className="font-semibold">Studio and Print Sales:</div>
            <a href="mailto:studio@jodyrogac.com" className="text-blue-700 hover:underline block">studio@jodyrogac.com</a>
            <div>75 19th St.<br/>Brooklyn, NY<br/>11232</div>
          </div> */}
          <div className="flex items-center space-x-2 pt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9A5.25 5.25 0 0 1 16.5 21.75h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 11.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg>
            <Link href="https://instagram.com/raspollini_m" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline text-xl">Instagram</Link>
          </div>
        </div>
      </div>
       
      <Footer />
    </div>
  )
}
