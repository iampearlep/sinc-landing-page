"use client"
import Image from "next/image";
import { Job } from "@/interface"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import Logo1 from '@/public/Images/logo1.svg'
import Logo2 from '@/public/Images/logo2.svg'
import Logo3 from '@/public/Images/logo3.svg'
import Logo4 from '@/public/Images/logo4.svg'
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";



const job: Job[]  = [
    {
        id: 0,
        logo: Logo1,
        about: "This company is a SAAS Startup that builds AI copy generator...",
        role: "Chief Executive Officer",
        location: "Abuja, Nigeria",
        industry: "On-demand print",
        equity: "1.2%",
        stipend: "NGN 200,000/mth",
        deadline: "24th, January 2024",
        type: "Full-time",
    },
    {
        id: 1,
        logo: Logo2,
        about: "This company is a SAAS Startup that builds AI copy generator...",
        role: "UX Strategist",
        location: "Abuja, Nigeria",
        industry: "E-commerce",
        equity: "1.2%",
        stipend: "NGN 200,000/mth ",
        deadline: "24th, January 2024",
        type: "Full-time",
    },
    {
        id: 2,
        logo: Logo3,
        about: "This company is a SAAS Startup that builds AI copy generator...",
        role: "CTO & Head of innovations",
        location: "Abuja, Nigeria",
        industry: "Fintech",
        equity: "1.2%",
        stipend: "NGN 200,000/mth ",
        deadline: "24th, January 2024",
        type: "Full-time",
    },
    {
        id: 3,
        logo: Logo4,
        about: "This company is a SAAS Startup that builds AI copy generator...",
        role: "Backend Developer",
        location: "Abuja, Nigeria",
        industry: "Transportation",
        equity: "1.2%",
        stipend: "NGN 200,000/mth ",
        deadline: "24th, January 2024",
        type: "Full-time",
    },
    {
        id: 4,
        logo: Logo2,
        about: "This company is a SAAS Startup that builds AI copy generator...",
        role: "Backend Developer",
        location: "Abuja, Nigeria",
        industry: "Real Estate",
        equity: "1.2%",
        stipend: "NGN 200,000/mth ",
        deadline: "24th, January 2024",
        type: "Full-time",
    },
    {
        id: 5,
        logo: Logo3,
        about: "This company is a SAAS Startup that builds AI copy generator...",
        role: "Fullstack Developer",
        location: "Abuja, Nigeria",
        industry: "Healthcare",
        equity: "1.2%",
        stipend: "NGN 200,000/mth ",
        deadline: "24th, January 2024",
        type: "Full-time",
    },
  
]

const JobCard = () => {
  return (
    <div>
    <Swiper
  cssMode={true}
  mousewheel={true}
  keyboard={true}
  autoplay={{
    delay: 6000,
    disableOnInteraction: false,
  }}
  modules={[Mousewheel, Keyboard, Autoplay]}
  breakpoints={{
      200: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      300: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
          slidesPerView: 4,
          spaceBetween: 20,
      },
    }}
>
 
  {job.map((data) => {
      return (
          <SwiperSlide key={data.id}>
          <div key={data.id} className="bg-[#ffffff] h-[430px] flex flex-col justify-center items-center gap-y-4 rounded-xl">
             <div className="flex flex-col gap-y-3 items-start px-6">
                <div>
                <Image
                src={data.logo}
                height={64}
                width={118.52}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
                </div>
                <p className="text-[13px] font-medium">{data.about}</p>
              <h4 className="text-[16px] font-semibold">{data.role}</h4>
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-y-3">
                   <div>
                   <h5 className="uppercase text-[#a4a4a4] text-[15px]">Location</h5>
                   <p className="text-[14px] font-medium">{data.location}</p>
                   </div>
                   <div>
                    <h5 className="uppercase text-[#a4a4a4] text-[15px]">Equity</h5>
                    <p className="text-[14px] font-medium">{data.equity}</p>
                   </div>
                   <div>
                    <h5 className="uppercase text-[#a4a4a4] text-[15px]">Deadline</h5>
                    <p className="text-[14px] font-medium">{data.deadline}</p>
                   </div>
                </div>
                <div className="text-end">
                   <div>
                   <h5 className="uppercase text-[#a4a4a4] text-[15px]">Industry</h5>
                   <p className="text-[14px] font-medium">{data.industry}</p>
                   </div>
                   <div>
                    <h5 className="uppercase text-[#a4a4a4] text-[15px]">Stipend</h5>
                    <p className="text-[14px] font-medium">{data.stipend}</p>
                   </div>
                   <div>
                    <h5 className="uppercase text-[#a4a4a4] text-[15px]">Role Type</h5>
                    <p className="text-[14px] font-medium">{data.type}</p>
                   </div>
                </div>
              </div>
              <button className="bg-[#303030] text-[#ffffff]  px-2 py-2 rounded-full w-9/12 text-[15px]">View Details</button>
             </div>
          </div>
          
          </SwiperSlide>
      )
  })}
  <div className="flex justify-center items-center mx-auto py-10">
        <Link href="/"  className="flex flex-row underline font-semibold text-[15px] text-center mx-auto items-center gap-x-1">See More Equity Jobs <IoIosArrowRoundForward className="w-5 h-6" /></Link>
        </div>
   </Swiper>
      
    </div>
  )
}

export default JobCard
