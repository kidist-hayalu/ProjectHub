import HomepageNav from './HomepageNav.jsx';
import Chart from '../Report/Chart.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Carousel from './Carousel.jsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import Stacks from './stacks.jsx';
import { Instagram, Linkedin, Facebook, Youtube, Twitter, CopyrightIcon } from 'lucide-react';


function Homepage() {

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, -20]);
    const opacity = useTransform(scrollY, [0, 300], [0, 1]);

    const [cardClick, setCardClick] = useState(false);
    const [teamWork, setTeamWork] = useState(false);

    return (
        <>

            <HomepageNav className='bg-slate-50' />

            <div className='container'>
                <div className='py-60 mb-20 flex flex-col items-center justify-center bg-gradient-to-b from-cyan-700 via-cyan-500 to-slate-50 '>
                    <h1 className='text-5xl font-bold text-center text-slate-50 mt-10'>Welcome to ProjectHub</h1>
                    <p className='text-slate-50 py-3 text-xl font-semibold text-center'>Where your projects come to life and your team becomes one </p>
                    <div className='p-2 rounded-3xl backdrop-blur-lg backdrop-opacity-25  hover:bg-slate-100/30 transition duration-200 hover:scale-105  '>
                        <Link to={'/Login'} className='text-white hover:text-white'>Start project</Link>
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
                <div className='flex flex-row pr-20  my-52'>
                    <div className='relative p-0 h-full flex flex-col items-center justify-center rounded-md mr-52 w-4/6'>
                        <Stacks />
                        <p className='absolute inset-0 z-50 text-slate-50 flex items-center justify-center text-center'>Create your own team and plan together<br />with our intuitive project management tools</p>
                    </div>

                    <section className='w-2/6'>

                        <motion.div className='ml-6 mx-3 flex flex-col items-center justify-self-end border-2 border-cyan-500 text-black h-full rounded-md '
                            initial={{ rotateZ: 0 }}
                            whileInView={{ rotateZ: 5 }}
                            viewport={{ amount: 0.5 }}
                            transition={{ duration: 2, ease: "easeInOut" }}>
                            <motion.div className='z-10 bg-white flex flex-col items-center justify-self-end border-2 border-cyan-500 text-black h-full rounded-md '
                                initial={{ rotateZ: 0 }}
                                whileInView={{ rotateZ: -7 }}
                                viewport={{ amount: 0.5 }}
                                transition={{ duration: 2, ease: "easeInOut" }}>
                                <motion.div className='p-10 z-10 bg-white flex flex-col items-center justify-self-end border-2 border-cyan-500 text-black h-full rounded-md '
                                    initial={{ rotateZ: 0 }}
                                    whileInView={{ rotateZ: -10 }}
                                    viewport={{ amount: 0.5 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}>
                                    <h1 className='text-2xl font-bold text-center mb-4'>Your Journey</h1>
                                    <div className='z-20'>
                                        <p className='text-start pb-1'>Move with vision every step of the way</p>
                                        <p className='text-start pb-1'>Achieve your goals with confidence</p>
                                        <p className='text-start pb-1'>Make a difference in your daily progress</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </section>
                </div>
                <div className='flex flex-col justify-center items-center my-10'>
                    <h1 className='w-1/2 text-center mx-10 mt-10 mb-20 font-heading font-semibold text-2xl'>Our Platform Is Designed to help you manage your projects with ease and efficiency, from initial planning to final delivery.</h1>
                    <motion.div className='flex flex-row justify-center items-center px-12'
                    initial={{ opacity: 0, x:100,y:50 }}
                    whileInView={{ opacity: 1, x:0 ,y:0 }}
                    transition={{ duration: 1 }}>
                    <div className='p-12 flex flex-col justify-start items-start bg-white rounded-lg shadow-lg mx-4 hover:shadow-xl transition-shadow duration-200'>
                        <img src="../assets/circle-check-regular-full.svg" alt="Task Management" className="mb-2 w-10 h-10" />
                        <h1 className='font-semibold py-3 font-heading text-lg'>Task Management</h1>
                        <p>Organize, assign, and Prioritize your tasks with task assignments and overall progress.</p>
                        </div>
                    <div className='p-12 flex flex-col justify-start items-start bg-white rounded-lg shadow-lg mx-4 hover:shadow-xl transition-shadow duration-200'>
                        <img src="../assets/users-line-solid-full.svg" alt="Task Management" className="mb-2 w-12 h-12" />
                        <h1 className='font-semibold py-3 font-heading text-lg'>Real-time Collaboration</h1>
                        <p>Work together with your team in real-time, share updates, and get feedback instantly.</p>
                    </div>
                    <div className='p-12 flex flex-col justify-start items-start bg-white rounded-lg shadow-lg mx-4'>
                        <img src="../assets/chart-simple-solid-full.svg" alt="Task Management" className="mb-2 w-10 h-10" />
                        <h1 className='font-semibold font-heading py-3 text-lg'>Insightful Analytics</h1>
                        <p>Gain valuable insights into your project’s progress with our analytics tools.</p>
                    </div>
                </motion.div>
                </div>
                <div className='flex flex-row h-screen px-6'>
                    <div className='py-10 flex flex-row w-full'>

                        <div className="relative mt-2 flex items-center justify-center w-1/2 overflow-visible">
                            <div className="absolute inset-0 z-10 bg-cyan-900 w-full h-full origin-left shadow-md transition transform duration-700 hover:scale-x-[2]" onMouseEnter={() => setCardClick(true)} onMouseLeave={() => setCardClick(false)}></div>


                            <div className="absolute inset-0 z-[15] bg-cyan-800 w-3/4 h-full origin-left transition transform duration-700 shadow-md hover:scale-x-[2.67]"></div>
                            <div className="absolute inset-0 z-20 bg-cyan-700 w-2/4 h-full origin-left transition transform duration-700 shadow-md hover:scale-x-[4]"></div>
                            <div className="absolute z-[25] inset-0  p-4 bg-cyan-600 w-1/4 h-full origin-left transform transition duration-700  hover:shadow-lg hover:scale-x-[8]" onMouseEnter={() => setTeamWork(true)} onMouseLeave={() => setTeamWork(false)}></div>
                            <div className={`absolute top-8 left-3/4 ml-2 items-center bg-white mr-4 w-full z-30 transition-opacity duration-200 ${cardClick ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                <div className=' h-full rounded shadow p-2'>
                                    <Chart className="h-full text-white" />
                                </div>
                            </div>
                            <div className={`absolute top-8 left-3/4 ml-2 items-center mr-4 bg-white w-full z-40 transition-opacity duration-200 ${teamWork ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                                <div className=' h-full rounded shadow p-2'>
                                    <Chart className="h-full text-white" />
                                </div>
                            </div>

                        </div>
                        <div className='z-0 inset-0 flex items-center justify-center ml-20 p-4 pointer-events-none my-2'>
                            <motion.p className='text-black font-heading font-bold text-xl text-center'
                                initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}>
                                Everything you need to keep your project on track<br />
                                Explore Various options to Collaborating with teammates</motion.p>

                        </div>

                    </div>

                </div>
                <div className='pb-12 px-56 fflex items-center justify-center'>
                    <div className='flex flex-col w-2/3 rounded-xl shadow-md py-4 ml-44 font-bold font-heading text-cyan-900 items-center justify-center bg-white'>
                        <h1 className='my-2'>Ready to streamline your projects?</h1>
                        <p className='mb-2'>Join us today and take your project management to the next level!</p>
                        <div className='p-2 rounded-3xl backdrop-blur-lg backdrop-opacity-35  hover:bg-slate-100/50 transition duration-200 hover:scale-105  '>
                            <Link to={'/Login'} className='text-cyan-900 font-normal hover:text-cyan-900'>Start project</Link>
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