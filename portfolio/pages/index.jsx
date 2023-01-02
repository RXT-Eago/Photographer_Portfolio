import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'

import NavBar from '../components/NavBar'

export default function Home() {

  const Num = [1,2,3,4,5,6,7,8,9,10,11]


  return (

    <div className="font-main px-4 pt-12">
      
      <NavBar />
      <div className="py-12" id="hero">

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {
            Num.map((num) => {

              return(
                <div className="relative flex items-center overflow-hidden">
                  <img className="transition-all duration-500 ease-in-out hover:scale-110" src={`/assets/images/${num}.png`} alt={`img${num}`} />
                </div>
                )
              
            })
          }

          

        </div>
        
      </div>

    </div>

  )
}
