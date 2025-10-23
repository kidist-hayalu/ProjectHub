import HomepageNav from './HomepageNav.jsx';
import Chart from '../Report/Chart.jsx'
import { Link } from 'react-router-dom';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from './Carousel.jsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import Stacks from './stacks.jsx';
import { Instagram, Linkedin, Facebook, Youtube, Twitter, CopyrightIcon } from 'lucide-react';


function Homepage() {

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -20]);
    const opacity = useTransform(scrollY, [0, 300], [0, 1]);

    return (
        <>

            <HomepageNav className='bg-slate-50' />

            <div className='container'>
                <div className='py-60 flex flex-col items-center justify-center bg-gradient-to-b from-cyan-700 to-slate-0 rounded-b-2xl'>
                    <h1 className='text-5xl font-bold text-center text-slate-50 mt-10'>Welcome to ProjectHub</h1>
                    <p className='text-slate-50 py-3 text-xl font-semibold text-center'>Where your projects come to life and your team becomes one </p>
                    <div className='p-2 rounded-3xl backdrop-blur-lg backdrop-opacity-25  hover:bg-slate-100 transition duration-200 hover:scale-105'>
                        <Link to={'/Login'} className='text-white hover:text-current'>Start project</Link>
                    </div>
                </div>

                {/*
                <motion.div className='h-full flex flex-col items-center justify-center my-8'
                style={{ y, opacity }}
                >
                    <p className='font-semibold text-xl'>Explore and navigate with your team</p>
                    <div className='relative overflow-hidden w-full h-full py-6'>
                        <Carousel />
                        

                    </div>
                </motion.div>*/}
                <div className='flex flex-row pr-20  my-44'>
                    <div className='p-0 h-full flex flex-col items-center justify-center text-black  rounded-md mr-52 w-4/6'>
                        <Stacks />
                    </div>

                    <section>
                        <motion.div className='p-10 mx-6 flex flex-col items-center justify-self-end border-2 border-cyan-500 text-black h-full rounded-md '
                            initial={{ rotateZ: 0 }}
                            whileInView={{ rotateZ: -10 }}
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 2, ease: "easeInOut" }}>
                            <h1 className='text-2xl font-bold text-center'>Our Journey</h1>
                            <p>We have started becoming better as people but never fixing our behaviour</p>

                        </motion.div>
                    </section>
                </div>
                <div className='flex flex-row h-screen px-10'>
                    <div className='p-10 ml-10 flex flex-col items-center justify-center w-full'>
                        <div className="relative flex items-center justify-center w-full h-full">
                            <div className="absolute inset-0 z-10 bg-cyan-900 w-full h-full origin-left transition transform duration-500 hover:scale-x-[1.05]">
                                {/*<p>Explore Progress Charting</p>
                                <Chart />*/}
                            </div>
                            <div className="absolute inset-0 z-[15] bg-cyan-800 w-4/5 h-full origin-left transition transform duration-500 hover:scale-x-[1.2]"></div>
                            <div className="absolute inset-0 z-20 bg-cyan-700 w-3/5 h-full origin-left transition transform duration-500 hover:scale-x-[1.25]"></div>
                            <div className="absolute z-[25] inset-0  p-4 bg-cyan-600 rounded w-2/5 h-full origin-left transform transition duration-500 hover:scale-x-[1.2] overflow-hidden"></div>
                            <div className='absolute z-[30] inset-0 flex items-center justify-center p-4 pointer-events-none w-2/5'>
                                <p className='text-white'>Explore Various options to Collaborating with teammates</p>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <footer className="border-t-2 bg-slate-50 pb-6 pt-6">
                <div className="flex flex-wrap gap-8 justify-space-between">
                    <div className="min-w-60 flex flex-col ml-36 gap-5" style={{ flex: '1 1 300px' }}>

                        <div className="flex gap-4 mb-2 mt-12">
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

                        <div className='text-gray-700'>
                            <p className='mb-2'>We do not sell or share your personal information</p>
                            <a href="#" className="size-6 transition-colors duration-200" >Cookie settings</a>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-4">
                            <p className='flex flex-row items-center' style={{ color: '#888' }}><CopyrightIcon size={16} /> 2025 ProjectHub, Inc.</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap mb-10 ml-56" style={{ flex: '3 1 600px' }}>
                        <div className='flex flex-col items-start justify-start mx-10'>
                            <div className="font-bold mb-2" style={{ color: '#222' }}>Company</div>
                            <a href="#">About us</a>
                            <a href="#">Careers</a>
                            <a href="#">Security</a>
                            <a href="#">Status</a>
                            <a href="#">Terms & privacy</a>
                            <a href="#">Your privacy rights</a>
                        </div>
                        <div className='flex flex-col items-start justify-start mx-10'>
                            <div className="font-bold mb-2" style={{ color: '#222' }}>Resources</div>
                            <a href="#">Help center</a>
                            <a href="#">Pricing</a>
                            <a href="#">Blog</a>
                            <a href="#">Community</a>
                            <a href="#">Integrations</a>
                            <a href="#">Affiliates</a>
                        </div>
                        <div className='flex flex-col items-start justify-start mx-12'>
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