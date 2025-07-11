import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import { useEffect } from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'

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

    if (imageId > 1) {
      setImageId(imageId - 1)
    } else {
      setImageId(11)
    }

  }

  function closeCarousel() {
    setShowCarousel(false)
  }

  function handleImageClick(e) {
    e.stopPropagation()
  }

  function handleChevronClick(e, action) {
    e.stopPropagation()
    action()
  }

  useEffect(() => {

    // for loop of Num

    for (let i = 0; i < Num.length; i++) {

        const image = document.getElementById(`image${Num[i]}`)
      image.style.animationDelay = `${i * 0.1}s`
      // at  the end of the animation opacity is set to 1
        image.addEventListener('animationend', () => {
            image.style.opacity = 1
        }
        )
       
       }



      


  }, [])

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



    <div className="font-main">

      {
        showCarousel ? (

          <div className="fixed top-0 left-0 w-screen h-screen bg-white z-50 flex justify-center" onClick={closeCarousel}>

            <button className="absolute right-8 top-2 text-[32px] z-10" onClick={(e) => handleChevronClick(e, SetCarouselView)}>
              <XMarkIcon className="w-8 h-8" />
            </button>

            <div className="my-16 mx-4 sm:mx-8 md:mx-12 w-full flex" onClick={handleImageClick}>

              <div className="w-1/6 sm:w-1/12 h-full flex justify-center items-center cursor-pointer transition-colors duration-200" onClick={(e) => handleChevronClick(e, MinusImageId)}>

                <div className="flex justify-center items-center p-4">
                  <ChevronLeftIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-700 hover:text-black transition-colors duration-200" />
                </div>

              </div>

              <div className="w-4/6 sm:w-10/12 h-full flex justify-center items-center">

                <div className="flex justify-center items-center max-w-full max-h-full">
                  
                    
                      <img id="carousel" className={`${styles.fadeinimage} max-w-full max-h-full object-contain`} src={`/assets/images/${imageId}.png`} alt="IMAGE" />
                    
                  
                </div>

              </div>

              <div className="w-1/6 sm:w-1/12 h-full flex justify-center items-center cursor-pointer transition-colors duration-200" onClick={(e) => handleChevronClick(e, PlusImageId)}>
                <div className="flex justify-center items-center p-4">
                  <ChevronRightIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-gray-700 hover:text-black transition-colors duration-200" />
                </div>
              </div>

            </div>

          </div>
        ) : null

      }

      <NavBar />



      <div className="py-12 mt-12 px-8" id="hero">

        <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            Num.map((num) => {

              return (
                <div key={num} id={`image${num}`} className={styles.ImageCardDisplay} onClick={() => SetCarouselView(num)}>

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
