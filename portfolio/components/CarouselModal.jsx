import React, { useCallback, useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function CarouselModal({ images, startIndex = 0, onClose }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    startIndex,
    loop: true,
    skipSnaps: true,
    dragFree: false,
  });
  const modalRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Click outside to close
  const handleBackdropClick = useCallback((e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('mousedown', handleBackdropClick);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('mousedown', handleBackdropClick);
    };
  }, [handleBackdropClick]);

  // Navigation
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div ref={modalRef} className="relative w-full max-w-3xl mx-auto flex flex-col">
        {/* Carousel */}
        <div className="flex-1 flex items-center">
          {/* Left arrow */}
          {/* <button
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
            onClick={scrollPrev}
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeftIcon className="w-8 h-8 text-black" />
          </button> */}
          {/* Embla viewport */}
          <div ref={emblaRef} className="overflow-hidden w-full h-full">
            <div className="flex h-full">
              {images.map((src, idx) => (
                <div
                  className="flex-shrink-0 flex items-center justify-center w-full h-full px-2"
                  style={{ minWidth: '100%' }}
                  key={idx}
                >
                  <img
                    src={src}
                    alt={`carousel-img-${idx}`}
                    className="max-h-[70vh] max-w-full object-contain  shadow-lg mx-auto"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Right arrow */}
          {/* <button
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-80 rounded-full p-2 hover:bg-opacity-100 transition"
            onClick={scrollNext}
            aria-label="Next image"
            type="button"
          >
            <ChevronRightIcon className="w-8 h-8 text-black" />
          </button> */}
        </div>
      </div>
    </div>
  );
} 