import React from 'react'
import BoxText from '../../Helper/BoxText'
import Image from 'next/image'

const Team = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center'>
                {/* Text-content  */}
                <div className='lg:col-span-2'>
                    <BoxText>Our Team</BoxText>
                    <h1 className='mt-4 text-xl md:text-2xl font-bold text-gray-800'>Our Team of Exeptional Talent, Innovation and Vision</h1>
                    <p className='mt-4 text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi in et enim beatae odit officia!</p>
                    <div className='mt-8'>
                        <a href="#_" className="relative rounded px-5 py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
                            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                            <span className="relative">Join Our Team</span>
                        </a>
                    </div>
                </div>

                {/* image-content  */}
                <div className='sm:flex items-center space-y-4 sm:space-y-0 sm:space-x-4 overflow-hidden lg:col-span-3'>
                    <div data-aos="fade-rigt" data-aos-anchor-placement="top-center" className='relative overflow-hidden'>
                        <Image src={'/images/t1.jpg'} alt='team' width={300} height={300} className='rounded-lg' />
                        <div className='absolute w-fit h-[5rem] bottom-0 p-4 bg-rose-500 rounded-lg'>
                            <p className='text-lg text-white font-bold'>Obito Uchiha</p>
                            <p className='text-gray-200'>(Founder)</p>
                        </div>
                    </div>
                    <div data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="100" className='relative overflow-hidden'>
                        <Image src={'/images/t2.jpg'} alt='team' width={300} height={300} className='rounded-lg' />
                        <div className='absolute w-fit h-[5rem] bottom-0 p-4 bg-orange-500 rounded-lg'>
                            <p className='text-lg text-white font-bold'>Jessica Doe</p>
                            <p className='text-gray-200'>(Co-Founder)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team