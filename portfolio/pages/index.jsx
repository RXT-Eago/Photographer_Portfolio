import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

import { useEffect } from 'react'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CarouselModal from '../components/CarouselModal';

export default function Home() {

  const Num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  const imageList = Num.map((num) => `/assets/images/${num}.png`);

  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  function openCarousel(idx) {
    setCarouselIndex(idx);
    setShowCarousel(true);
  }
  function closeCarousel() {
    setShowCarousel(false);
  }

  useEffect(() => {
    // for loop of Num
    for (let i = 0; i < Num.length; i++) {
      const image = document.getElementById(`image${Num[i]}`)
      image.style.animationDelay = `${i * 0.1}s`
      // at  the end of the animation opacity is set to 1
      image.addEventListener('animationend', () => {
        image.style.opacity = 1
      })
    }
  }, [])

  // Remove the useEffect that depends on imageId and all old modal code


  return (
    <div className="font-main">
      <NavBar />
      <div className="py-32 mt-24 md:px-16 px-8" id="hero">
        <div className="grid grid-cols-1 md:gap-24 gap-4">
          {Num.map((num, idx) => {
            let alignment = "justify-center";
            if (idx % 2 === 0) alignment = "justify-end";
            else if (idx % 2 === 1) alignment = "justify-start";
            return (
              <div
                key={num}
                id={`image${num}`}
                className={`flex ${alignment} my-12`}
                onClick={() => openCarousel(idx)}
              >
                <img
                  className="w-full max-w-xl transition-all duration-500 ease-in-out hover:scale-110"
                  src={`/assets/images/${num}.png`}
                  alt={`img${num}`}
                />
              </div>
            );
          })}
        </div>
      </div>
      {showCarousel && (
        <CarouselModal
          images={imageList}
          startIndex={carouselIndex}
          onClose={closeCarousel}
        />
      )}
      <Footer />
    </div>
  )
}
