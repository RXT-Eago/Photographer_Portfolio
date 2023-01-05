import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

import { useEffect } from 'react'
import { useState } from 'react'


export default function NavBarMobile() {

  const [showMenu, setShowMenu] = useState(false);

  // if pathname is
  async function ActivationMenu() {
    setShowMenu(!showMenu);
  }

  return (

    <div className="">

      {
        showMenu ? (
          <div className="fixed top-0 left-0 w-screen h-screen bg-gray-200 z-50 ">

            <div className="flex mx-10 h-36 items-center">

              <h1 className="w-3/4 text-[27px]">
                MAXIME RASPOLLINI
              </h1>
              <div className="w-1/4 flex justify-end">

                <button className="space-y-2" onClick={ActivationMenu}>
                  <div className={styles.topBar}></div>
                  <div className={styles.middleBar}></div>
                  <div className={styles.BottomBar}></div>
                </button>

              </div>

            </div>

            <div className="flex items-center  bg-gray-200 h-[50%]">

              <div className="grid grid-flow-row-dense gap-4 grid-cols-1 mx-10 list-none text-[42px]">


                <h2>
                  Home
                </h2>
                <h2>
                  Projects
                </h2>
                <h2>
                  Contact/About
                </h2>


              </div>
            </div>

            <h2 className="flex mx-10 my-4 gap-3 h-[20%] items-end">

              <img className='w-[25px] h-[25px]' src="/insta.svg" alt="" />
              <img className='w-[25px] h-[25px]' src="/mail.svg" alt="" />

            </h2>


          </div>
        ) : null


      }

      <nav className="flex px-8 h-36 items-center">
        <h1 className="text-[27px] w-3/4 font-normal ">
          MAXIME RASPOLLINI
        </h1>
        <h2 className="w-1/4 flex justify-end">

          <button className="space-y-2" onClick={ActivationMenu}>
            <div className="w-4 h-0.5 bg-black ml-4"></div>
            <div className="w-8 h-0.5 bg-black"></div>
            <div className="w-4 h-0.5 bg-black"></div>
          </button>

        </h2>



      </nav>

    </div>


  )
}
