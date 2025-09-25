import Lists from '../Components/Lists.jsx';
import { Link } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import Chart from '../Report/Chart.jsx';
import { motion } from 'framer-motion';
import Stacks from './stacks.jsx';
import { Instagram, Linkedin, Facebook, Youtube, Twitter, CopyrightIcon } from 'lucide-react';


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
                <div className='flex flex-row pr-20  my-44'>


                    <div className='p-0 h-full flex flex-col items-center justify-center text-black  rounded-md mr-52 w-4/6'>
                        <Stacks />
                    </div>

                    <section>
                        <motion.div className='p-10 mx-6 flex flex-col items-center justify-self-end border-2 border-blue-500 text-black h-full rounded-md '
                            initial={{ rotate: 0 }}
                            whileInView={{ scale: [1, 1, 1, 1], rotate: [0, -15, 0, 0] }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 5, ease: "easeInOut" }}>
                            <h1 className='text-2xl font-bold text-center'>Our Journey</h1>
                            <p>We have started becoming better as people but never fixing our behaviour</p>

                        </motion.div>
                    </section>
                </div>
                <div className='flex flex-row h-screen px-10'>
                    <div className='p-10 ml-10 flex flex-col items-center justify-center w-full'>
                        <div className="relative flex items-center justify-center w-full h-full">
                            <div className="absolute inset-0 z-10 bg-blue-900 w-full h-full origin-left transition transform duration-500 hover:scale-x-[1.05]"></div>
                            <div className="absolute inset-0 z-[15] bg-blue-800 w-4/5 h-full origin-left transition transform duration-500 hover:scale-x-[1.2]"></div>
                            <div className="absolute inset-0 z-20 bg-blue-700 w-3/5 h-full origin-left transition transform duration-500 hover:scale-x-[1.25]"></div>
                            <div className="absolute z-[25] inset-0  p-4 bg-blue-600 rounded w-2/5 h-full origin-left transform transition duration-500 hover:scale-x-[1.2] overflow-hidden"></div>
                            <div className='absolute z-[30] inset-0 flex items-center justify-center p-4 pointer-events-none w-2/5'>
                                <p className='text-white'>Explore Various options to Collaborating with teammates</p>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='p-10 flex flex-col items-center justify-center w-3/4'>

                </div>
            </div>
            <footer className="border-t-2 bg-white pb-6 pt-6">
                <div className="flex flex-wrap gap-8 justify-space-between">
                    <div className="min-w-60 flex flex-col gap-5" style={{ flex: '1 1 260px' }}>
                        
                        <div className="flex gap-4 mb-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='text-cyan-950 size-6 transition-colors duration-200 hover:text-blue-400'>
                                <Instagram size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-cyan-950 size-6 transition-colors duration-200 hover:text-blue-400'>
                                <Linkedin size={24} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='text-cyan-950 size-6 transition-colors duration-200 hover:text-blue-400'>
                                <Facebook size={24} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='text-cyan-950 size-6 transition-colors duration-200 hover:text-blue-400'>
                                <Youtube size={24} />
                            </a>
                            <a href="#" className='text-cyan-950 size-6 transition-colors duration-200 hover:text-blue-400'>
                                <Twitter size={24} />
                            </a>
                        </div>

                        <div className="size-6 transition-colors duration-200">
                            <p>We do not sell or share your personal information</p>
                            <a href="#">Cookie settings</a>
                        </div>
                        <div className="flex flex-row items-center justify-center">
                            <CopyrightIcon size={16} /> 2025 ProjectHub, Inc.
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap" style={{ flex: '3 1 600px'}}>
                        <div className='flex flex-col items-start justify-start'>
                            <div className="font-bold mb-2" style={{ color: '#222' }}>Company</div>
                            <a href="#">About us</a>
                            <a href="#">Careers</a>
                            <a href="#">Security</a>
                            <a href="#">Status</a>
                            <a href="#">Terms & privacy</a>
                            <a href="#">Your privacy rights</a>
                        </div>
                        <div className='flex fllex-col items-start '>
                            <div className="font-bold mb-2" style={{ color: '#222' }}>Resources</div>
                            <a href="#">Help center</a>
                            <a href="#">Pricing</a>
                            <a href="#">Blog</a>
                            <a href="#">Community</a>
                            <a href="#">Integrations</a>
                            <a href="#">Affiliates</a>
                        </div>
                        <div className='flex flex-col items-start justify-end'>
                            <div className="font-bold mb-2" style={{ color: '#222' }}>For</div>
                            <a href="#">Enterprise</a>
                            <a href="#">Small business</a>
                            <a href="#">Personal</a>
                            <a href="#" className="mt-4 font-bold">Explore more &rarr;</a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Homepage;