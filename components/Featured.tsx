"use client"
import Image from "next/image";
import { Hero } from "@/interface"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Pimg1 from "@/public/Images/PImg.svg"
import Pimg2 from "@/public/Images/punch-newspaper-logo.svg"
import Oimg1 from "@/public/Images/OImg.svg"
import Oimg2 from "@/public/Images/Ontecx-Logo.svg"
import Bimg1 from "@/public/Images/BImg.svg"
import Bimg2 from "@/public/Images/bujnews green.svg"
import Gimg1 from "@/public/Images/GImg.svg"
import Gimg2 from "@/public/Images/Guardian 1.svg"

const featured: Hero[]  = [
    {
        id: 0,
        title: 'SINC Partners invests  over 200 million naira in 5 startups',
        text: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
        text1: "REPORTED BY:",
        text2: "Rema Viel",
        image: Pimg1,
        image2: Pimg2
    },
    {
        id: 1,
        title: 'SINC Partners invests  over 200 million naira in 5 startups',
        text: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
        text1: "REPORTED BY:",
        text2: "Rema Viel",
        image:  Oimg1,
        image2: Oimg2
    },
    {
        id: 2,
        title: 'SINC Partners invests  over 200 million naira in 5 startups',
        text: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
        text1: "REPORTED BY:",
        text2: "Rema Viel",
        image: Bimg1,
        image2: Bimg2
    },
    {
        id: 3,
        title: 'SINC Partners invests  over 200 million naira in 5 startups',
        text: "SINC Partners invests  over 200 million naira in 5 startups. SINC Partners invests  over 200 million naira in 5 startups SINC Partners invests  over 200 million naira in ....",
        text1: "REPORTED BY:",
        text2: "Rema Viel",
        image: Gimg1,
        image2: Gimg2
    }
]


const Featured = () => {
  return (
   <div className="bg-[#F9F9F9] mx-auto py-12">
    <h2 className='text-xl font-semibold text-center pb-8 leading-tight'>As Featured In</h2>
     <div>
        
        <Swiper
      cssMode={true}
      mousewheel={true}
      keyboard={true}
      slidesPerView={2}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      modules={[Mousewheel, Keyboard, Autoplay]}
    
    >
      {featured.map((data) => {
          return (
              <SwiperSlide key={data.id}>
              <div key={data.id} className="bg-[#F9F9F9]">
               <div className="grid grid-cols-3">
                <div className="col-span-2">
                <Image src={data.image} height={393} width={622} alt="" priority className="w-full h-full object-cover object-center" />
                </div>
                <div className="col-span-1 bg-[#ffffff] px-3 py-2">
               <div className="w-20 h-20"> <Image src={data.image2} height={40} width={179} alt="" priority /></div>
                    <div className="text-xs flex flex-col gap-y-4">
                    <h4 className="font-semibold">{data.title}</h4>
                    <p>{data.text}</p>
                  <div className="flex flex-col gap-2">
                    <p>{data.text1}</p>
                    <p>{data.text2}</p></div>
                    </div>
                </div>
               </div>
              </div>
              </SwiperSlide>
          )
      })}
       </Swiper>
    </div>
   </div>
  )
}

export default Featured
