"use client"
import Image from "next/image";
import { Hero } from "@/interface";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import { Mousewheel, Pagination, Keyboard, Autoplay } from 'swiper/modules';
import HeroImg1 from '@/public/Images/Hero-img-1.svg'
import HeroImg2 from '@/public/Images/hero-2.png'
import HeroImg3 from '@/public/Images/Hero-img-3.svg'
import HHimg from '@/public/Images/hh-img-2.svg'
import Link from "next/link";


const hero: Hero[]  = [
    {
        id: 0,
        title: 'SINC Partners is a service incubation company ',
        text: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
        image: HeroImg1,
    },
    {
        id: 1,
        title: 'Come with an idea, leave with a company.',
        text: "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
        image:  HeroImg3,
    },
    {
        id: 2,
        title: 'We are big on these 3 things;',
        text: "✓ Service Incubation & Ecosystem Advocacy",
        text1: "✓ Building SAAS & Marketing Tech Platforms",
        text2: "✓ Institutional Innovations",
        image: HeroImg2,
        image2: HHimg
    }
]


const Carousel = () => {
  return (
    <div>
        
          <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 12000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Keyboard, Autoplay, Pagination]}
      
      >
        {hero.map((data) => {
            return (
                <SwiperSlide key={data.id}>
                <div key={data.id} className="grid grid-cols-1 md:grid-cols-2 w-full h-auto md:h-[432px] overflow-hidden relative">
                  <div className="flex flex-col w-full py-10 px-6 md:w-9/12 md:py-24 items-start mx-auto">
                    <h2 className="w-12/12 font-semibold text-2xl md:text-3xl leading-normal text-[#212121] ">{data.title}</h2>
                    <div className="w-11/12 pt-2 pb-6 text-[15px] md:text-xl flex flex-col gap-y-1 md:gap-y-4 text-[#4E4E4E]">
                        <p>{data.text}</p>
                        {data.text1 && <p>{data.text1}</p>}
                        {data.text2 && <p>{data.text2}</p>}
                    </div>
                    <button className="bg-[#303030] cursor-pointer flex items-center px-6 py-2 md:py-3  text-white rounded-full">
            <Link href=""> 
            SINC with us
            </Link>
          </button>
                  </div>
                  <div className="hidden md:flex ">
                  <Image src={data.image} height={590} width={703} alt="" priority className="w-full h-full object-cover object-center" />
                  {data.image2 && <Image src={data.image2} height={263} width={167} priority alt="" className="absolute z-10 -ml-20 mt-24" />}
                  </div>
                </div>
                </SwiperSlide>
            )
        })}
         </Swiper>
    </div>
  )
}

export default Carousel
