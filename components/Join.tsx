"use client"
import { Progress } from "@/interface"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Mousewheel, Keyboard,  Navigation} from 'swiper/modules';
import Image from "next/image";
import Img1 from "@/public/Images/hw1.svg"
import Img2 from "@/public/Images/hw2.svg"
import Img3 from "@/public/Images/hw3.svg"
import Img4 from "@/public/Images/hw4.svg"
import SwiperNavButton from "./SwiperNavButton";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";


const progress: Progress[]  = [
    {
        id: 0,
        icon: Img1,
        title: "Application and Selection",
        text: "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies.",
        text2: "Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application."
    },
    {
        id: 1,
        icon: Img2,
        title: "Alignment Meeting and Proposal Submission",
        text: "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
        text2: "Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies."
    },
    {
        id: 2,
        icon: Img3,
        title: "Negotiation and Agreement",
        text: "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.",
        text2: " Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners."
    },
    {
        id: 3,
        icon: Img4,
        title: "Onboarding and Integration",
        text: "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.",
        text2: "Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration."
    },
    {
        id: 4,
        icon: Img1,
        title: "Regular Check-ins and Evaluations",
        text: "To foster ongoing success, we've established a system for regular check-ins. These sessions will allow us to monitor your progress, gather feedback, and collectively work towards continuous improvement.",
        text2: "We appreciate your interest in joining our EIR program and contributing to the vibrant SINC Partners community. Start your application process today and be a part of our journey in shaping the future of innovation."
    },
]


const Join = () => {
  return (
    <div className="bg-[#F9F9F9] py-12">
      <div className='flex flex-col w-11/12 md:w-10/12 justify-center items-center mx-auto'>
        <div  className='hidden md:flex flex-col justify-center items-center text-center w-11/12 md:w-9/12'>
       <h2 className='text-xl md:text-5xl font-semibold md:w-10/12 text-center pb-8 leading-tight'> How It Works</h2>
       <p className="text-[14px]"> Our EIR program is our structured 3 months un-paid program designed to help us have a pipeline of business and technical cofounders who can run the venture of choice as CEO & CTO owning 20% equity each.</p>
        </div>
        <h2 className='block md:hidden text-xl font-semibold text-centerleading-tight'>Service Incubation Process</h2>
      </div>
      <div className="py-10 md:py-20 w-11/12 md:w-10/12 mx-auto">
          <Swiper
        cssMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Mousewheel, Keyboard, Navigation]}
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
                slidesPerView: 3,
                spaceBetween: 20,
            },
          }}
      >
       
        {progress.map((data) => {
            return (
                <SwiperSlide key={data.id}>
                <div key={data.id} className="bg-[#ffffff] py-8 md:py-0 md:h-[420px] flex flex-col justify-center items-center rounded-xl" >
                    <div className="flex flex-col gap-y-3 items-start px-5">
                    <div>
                    <Image
                src={data.icon}
                height={60}
                width={60}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
                    </div>
                  <div>
                  <h3 className="text-[14px] md:text-[16px] font-semibold">{data.title}</h3>
                  </div>
                 <div className="flex flex-col gap-y-2">
                 <p className="text-[14px] md:text-[16px]">{data.text}</p>
                 <p className="text-[14px] md:text-[16px]">{data.text2}</p>
                 </div>
                    </div>
                </div>
                </SwiperSlide>
            )
        })}
        <div className="hidden md:flex justify-center items-center mx-auto py-3 md:py-10">
        <Link href="/"  className="flex flex-row underline font-semibold text-[14px] md:text-[15px] text-center mx-auto items-center gap-x-1">View All Companies <IoIosArrowRoundForward className="w-5 h-6" /></Link>
        </div>
        <SwiperNavButton />
         </Swiper>
    </div>
    </div>
  )
}

export default Join