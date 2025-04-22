import React from 'react'


type Props = {
    time: string;
    price: string;
}
const PriceCard = ({ time, price }: Props) => {
    return (
        <div className='bg-white rounded-lg p-8 relative border-t-4 border-rose-500'>
            <h1 className='text-sky-500 text-xl font-bold'>{time} Membership</h1>
            <p className='mt-4 text-gray-600 font-medium '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quidem quam aut, veniam dolores commodi!</p>

            <div className='mt-8'>
                <div className='text-gray-700 text-lg font-medium'>
                    <span className='text-4xl font-bold text-black'>{price}</span>
                </div>
            </div>

            <div className='mt-12'>
                <a href="#_" className="px-10 py-2.5 text-base font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-600 ease bg-gradient-to-br from-purple-500 to-pink-500 md:w-auto">
                    Upgrade Now
                </a>
            </div>
        </div>
    )
}

export default PriceCard