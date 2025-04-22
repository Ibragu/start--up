import React from 'react'
import ClientReviewCard from './ClientReviewCard'

const ClientReview = () => {
    return (
        <div className='pt-16 pb-16 bg-gray-100'>
            {/* Heading  */}
            <h1 className='text-center text-2xl text-blue-950 font-bold'>What Our Client Say</h1>
            <p className='mt-3 text-center font-medium text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet inventore natus maxime dolorem.</p>

            {/* grid  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center">
                    <ClientReviewCard image="/images/u1.jpg" name="Jessica Doe" rating="4.7" />
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="100">
                    <ClientReviewCard image="/images/u2.jpg" name="Geoffry White" rating="4.5" />
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="200">
                    <ClientReviewCard image="/images/u3.jpg" name="Sasuke Uchiha" rating="4.3" />
                </div>
                <div data-aos="zoom-in" data-aos-anchor-placement="top-center" data-aos-delay="300">
                    <ClientReviewCard image="/images/u4.jpg" name="Vivian Erick " rating="4.9" />
                </div>
            </div>
        </div>
    )
}

export default ClientReview