'use client'
import Link from 'next/link'
import { GrTechnology } from 'react-icons/gr'
import { navLinks } from '@/constant/Canstant'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { useEffect, useState } from 'react'


type Props = {
    openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

    const [navbg, setNavbg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) setNavbg(true)
            if (window.scrollY > 90) setNavbg(false)
        }

        window.addEventListener("scroll", handler);

        return () => window.removeEventListener("scroll", handler);
    }, [])
    return (
        <div className={`transition-all ${navbg ? "bg-white shadow-md" : "fixed"} duration-200 h-[12vh] z-[100] fixed w-full`}>
            <div className='flex items-center h-full justify-between w-[90%] xl-[80%] mx-auto'>
                {/* Logo */}
                <div className='flex items-center space-x-2'>
                    <div className='w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center flex-col'>
                        <Link href={"/"}><GrTechnology className='w-6 h-6 text-white' /></Link>
                    </div>
                    <h1 className='text-xl hidden sm:block md:text-2xl text-blue-800 font-bold'>
                        TechDev
                    </h1>
                </div>
                {/* Navlinks  */}
                <div className='hidden lg:flex items-center space-x-8'>
                    {navLinks.map((link) => {
                        return <Link href={link.url} key={link.id} className='text-black hover:text-rose-500 font-semibold transition-all duration-200'>
                            <p>{link.label}</p>
                        </Link>
                    })}
                </div>
                {/* Button  */}

                <div className='flex items-center space-x-4'>
                    <a href="#_" className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none">
                        <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
                        <span className="relative z-20 flex items-center text-sm">
                            <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            Create Account
                        </span>
                    </a>
                    {/* BurgerMenu  */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-black lg:hidden' />
                </div>

            </div>
        </div>
    )
}

export default Navbar