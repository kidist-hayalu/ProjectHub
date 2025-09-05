import Lists from '../Components/Lists.jsx';
import { Link } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'


function Homepage() {
    return (
        <>
            <header>
                <Lists />
            </header>
            <div className='container'>
                <div className='pb-10 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-900'>
                    <h1 className='text-4xl font-bold text-center text-white mt-20'>Welcome to ProjectHub</h1>
                    <p className='text-white p-3 font-semibold text-center'>Where your projects come to life and your team becomes one </p>
                    <div className='p-2 rounded-3xl bg-cyan-700  backdrop-blur-lg backdrop-opacity-25  hover:bg-cyan-800 transition duration-200 hover:scale-105'>
                        <Link to={'/Login'} className='text-white '>Start project</Link>
                    </div>
                </div>
                <div className='p-10 flex flex-col items-start justify-start'>
                    <div className="relative flex items-center justify-start w-1/2 h-80 bg-gray-200 shadow-md p-8">
                        <div className="absolute inset-0 z-10 bg-red-500 w-full h-full origin-left transition transform duration-500 hover:scale-x-[2] "></div>
                        <div className="absolute inset-0 z-[15] bg-green-500 w-5/6 h-full origin-left transition transform duration-500 hover:scale-x-[2.4] "></div>
                        <div className="absolute inset-0 z-20 bg-cyan-500 w-4/6 h-full origin-left transition transform duration-500 hover:scale-x-[3]"></div>
                        <div className="absolute z-[25] inset-0  p-4 bg-blue-500 rounded w-2/6 h-full origin-left transform transition duration-500 hover:scale-x-[2] overflow-hidden"></div>
                            <div className='absolute z-[30] inset-0 flex items-center justify-center p-4 pointer-events-none w-2/6'>
                                <p className='text-white'>Explore Various options to Collaborating with teammates</p>
                                
                            </div>
                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default Homepage;