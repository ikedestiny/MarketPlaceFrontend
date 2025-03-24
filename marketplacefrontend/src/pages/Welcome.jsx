import React from 'react'
import { ReactTyped } from "react-typed";
import Home from './Home';

const Welcome = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='md:text-8xl sm:text-6xl text-4xl font-bold'>MarketPleis.</h1>
                <div className='flex justify-center items-center flex-col'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast and flexible for</p>
                    <ReactTyped className='md:text-5xl sm:text-4xl p-2 text-xl font-bold text-[#90e0ef]' strings={['CLOTHINGS', 'GADGETS', 'APARTMENTS', 'EVERYTHING']} typeSpeed={120} backSpeed={140} loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-600 my-2'>Seek and You will find</p>
                <button className='bg-[#90e0ef] w-[200px] rounded-md font-medium mx-auto my-6 py-3 text-black'>Get Started</button>
            </div>
            <Home />
        </div>
    )
}

export default Welcome