import Lists from '../Components/Lists.jsx';
import { Link } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import Chart from '../Report/Chart.jsx';
import { motion } from 'framer-motion';
import Stacks from './stacks.jsx';


function Homepage() {
    return (
        <>
            <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
                <Lists />
            </header>
            <div className='container'>
                <div className='py-56 flex flex-col items-center justify-center bg-gradient-to-br from-cyan-700 via-cyan-800 to-cyan-900'>
                    <h1 className='text-4xl font-bold text-center text-white mt-20'>Welcome to ProjectHub</h1>
                    <p className='text-white p-3 font-semibold text-center'>Where your projects come to life and your team becomes one </p>
                    <div className='p-2 rounded-3xl bg-cyan-700  backdrop-blur-lg backdrop-opacity-25  hover:bg-cyan-800 transition duration-200 hover:scale-105'>
                        <Link to={'/Login'} className='text-white '>Start project</Link>
                    </div>
                </div>
                <div className='flex flex-row pr-20  my-4'>


                    <div className='p-0 h-full flex flex-col items-center justify-center text-black my-24 rounded-md mr-80 w-4/6'>
                        <Stacks />
                    </div>







                    <motion.div className='p-10 ml-36 flex flex-col items-center justify-self-end border-2 border-blue-500 text-black h-full my-24 rounded-md w-2/6'
                        whileInView={{ scale: [1, 1, 1, 1], rotate: [0, -15, 0, 0] }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}>
                        <h1 className='text-2xl font-bold text-center'>Our Journey</h1>
                        <p>We have started becoming better as people but never fixing our behaviour</p>

                    </motion.div>
                </div>
                <div className='flex flex-row h-screen px-10'>
                    <div className='p-10 ml-10 flex flex-col items-center justify-center w-4/5'>
                        <div className="relative flex items-center justify-center w-full h-full">
                            <div className="absolute inset-0 z-10 bg-red-500 w-full h-full origin-left transition transform duration-500 hover:scale-x-[1.2]"></div>
                            <div className="absolute inset-0 z-[15] bg-green-500 w-4/6 h-full origin-left transition transform duration-500 hover:scale-x-[1.2]"></div>
                            <div className="absolute inset-0 z-20 bg-cyan-500 w-2/6 h-full origin-left transition transform duration-500 hover:scale-x-[1.25]"></div>
                            <div className="absolute z-[25] inset-0  p-4 bg-blue-500 rounded w-1/6 h-full origin-left transform transition duration-500 hover:scale-x-[1.2] overflow-hidden"></div>
                            <div className='absolute z-[30] inset-0 flex items-center justify-center p-4 pointer-events-none w-3/6'>
                                <p className='text-white'>Explore Various options to Collaborating with teammates</p>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='p-10 flex flex-col items-center justify-center w-3/4'>
                    <Chart />
                </div>
            </div>
        </>
    )
}

export default Homepage;