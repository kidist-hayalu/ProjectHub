import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Autoplay } from 'swiper/modules';

function Carousel(){

    return(
        <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
                delay:3000,
                disableOnInteraction: false
            }} >
                <SwiperSlide>
                    <div className='flex flex-row items-center justify-center'>
                        <img src="../assets/person-working-html-computer.jpg" alt="Slide 1" className='w-3/5 h-auto rounded-lg shadow-lg' />
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row items-center justify-center'>
                        <img src="../assets/person-working-html-computer.jpg" alt="Slide 2" className='w-3/5 h-auto rounded-lg shadow-lg' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-row items-center justify-center'>
                        <img src="../assets/person-working-html-computer.jpg" alt="Slide 3" className='w-3/5 h-auto rounded-lg shadow-lg' />
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='flex flex-row items-center justify-center'>
                        <img src="../assets/person-working-html-computer.jpg" alt="Slide 4" className='w-3/5 h-auto rounded-lg shadow-lg' />
                    </div>
                    </SwiperSlide>

            </Swiper>
    )
}

export default Carousel;