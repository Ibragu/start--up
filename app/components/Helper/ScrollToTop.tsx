'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {

            if (window.scrollY > 300) setIsVisible(true);
            else setIsVisible(false);
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='fixed bottom-4 animate-pulse right-4 '>
            {isVisible && (

                <FaArrowUp onClick={scrollToTop} className='bg-orange-500 text-white rounded-full p-2.5 w-12 h-12 justify-center items-center focus:outline-none' />

            )}
        </div>
    )
}

export default ScrollToTop