import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import { useEffect } from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { useState } from 'react'

export default function Home() {

  const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  const [showCarousel, setShowCarousel] = useState(false)

  const [imageId, setImageId] = useState(1)

  async function SetCarouselView(num) {

    setImageId(num)

    if (!showCarousel) {
      setShowCarousel(true)
    } else {
      setShowCarousel(false)
    }

  }
  async function PlusImageId() {

    if (imageId < 11) {
      setImageId(imageId + 1)
    } else {
      setImageId(1)
    }

  }

  async function MinusImageId() {

    if (imageId > 2) {
      setImageId(imageId - 1)
    } else {
      setImageId(11)
    }

  }

  useEffect(() => {

    // restart the fadeinimage animation when the image changes

    try {

    const image = document.getElementById('carousel')
    image.classList.remove(styles.fadeinimage)
    void image.offsetWidth
    image.classList.add(styles.fadeinimage)

    } catch (error) {
      console.log(error)
    }



  }, [imageId])



  return (



    <div className="font-main px-8 pt-20">

      {
        showCarousel ? (

          <div className="fixed top-0 left-0 w-screen h-screen bg-white bg-opacity-80 z-50 flex justify-center">

            <button className="absolute right-8 top-2 text-[32px]" onClick={SetCarouselView}>
              x
            </button>

            <div className="my-16 mx-12 w-full flex">

              <div className="w-1/12 h-full  flex justify-items-center">

                <button className=" flex justify-center justify-self-center m-auto" onClick={MinusImageId}>
                  <img className="w-full rotate-180 px-2" src="/assets/images/Arrow.png" alt="precedent" />
                </button>

              </div>

              <div className="w-10/12 h-full flex justify-center justify-self-center">

                <div className="flex justify-center justify-self-center m-auto">
                  
                    
                      <img id="carousel" className={styles.fadeinimage} src={`/assets/images/${imageId}.png`} alt="IMAGE" />
                    
                  
                </div>

              </div>

              <div className="w-1/12 h-full  flex justify-items-center">
                <button className=" flex justify-center justify-self-center m-auto" onClick={PlusImageId}>
                  <img className="w-full px-2" src="/assets/images/Arrow.png" alt="suivant" />
                </button>
              </div>

            </div>

          </div>
        ) : null

      }

      <NavBar />



      <div className="py-12" id="hero">

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            Num.map((num) => {

              return (
                <div className="relative flex items-center overflow-hidden" onClick={() => SetCarouselView(num)}>

                  <img className="w-full transition-all duration-500 ease-in-out hover:scale-110" src={`/assets/images/${num}.png`} alt={`img${num}`} />

                </div>
              )

            })
          }



        </div>

      </div>

      <Footer />

    </div>

  )
}
