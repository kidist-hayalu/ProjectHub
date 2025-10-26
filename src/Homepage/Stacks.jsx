import {motion} from 'framer-motion';

function Stacks() {
    

    return(
        <>
        <motion.div className='relative flex items-start justify-self-start w-96 h-96 '
                                initial={{ scale: 1, opacity: 0 }}
                                whileInView={{ scale: 1.1, opacity: 1 }}
                                viewport={{ amount: 0.15 }}
                                transition={{ duration: 0.65, ease: "easeInOut" }}>
                                    <div className='absolute opacity-50 bg-cyan-600 z-0 inset-0 -translate-x-80 -translate-y-6 transform rotate-45 rounded-lg' ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-10 inset-0 -translate-x-72 translate-y-12 transform rotate-45 rounded-lg' ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-20 inset-0 -translate-x-64 -translate-y-6 transform rotate-45 rounded-lg' ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[22] inset-0 -translate-x-40 translate-y-12 transform rotate-45 rounded-lg' ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[23] inset-0 translate-x-30 translate-y-12 transform rotate-45 rounded-lg'  ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[24] inset-0 translate-x-50 -translate-y-6 transform rotate-45 rounded-lg'  ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[25] inset-0 translate-x-24 translate-y-12 transform rotate-45 rounded-lg' ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[26] inset-0 translate-x-36 -translate-y-6 transform rotate-45 rounded-lg' ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[24] inset-0 -translate-x-24 -translate-y-6 transform rotate-45 rounded-lg'  ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[24] inset-0 translate-x-64 -translate-y-6 transform rotate-45 rounded-lg'  ></div>
                                    <div className='absolute opacity-50 bg-cyan-600 z-[24] inset-0 translate-x-60 translate-y-12 transform rotate-45 rounded-lg'  ></div>
                                    <div className='absolute opacity-60 bg-cyan-600 z-30 inset-0 transform rotate-45 rounded-lg translate-x-72' ></div>
                                </motion.div>
        </>
    )
}
export default Stacks;