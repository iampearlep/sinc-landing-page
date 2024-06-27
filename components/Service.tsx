import Image from "next/image";
import Triangle from "@/public/Images/Triangle.svg"
import Cube from "@/public/Images/Cube.svg"
import Pentagon from "@/public/Images/Pentagon.svg"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const Service = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-12">
      <div className='flex flex-col w-11/12 md:w-10/12 justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center md:w-9/12'>
            <h2 className='text-xl md:text-5xl font-semibold md:w-10/12 text-center pb-8 leading-tight'>Our Service Incubation Model</h2>
            <p className="text-[14px] md:text-[16px]">The Service Incubation model is an alternate funding model for startup that allows professionals to offer their services to startups in return for a minute equity (usually between 0.5% to 1.5%) in the startup. As a service incubator, you will see your share grow as much as 1000% in 12 - 24 months as been first to invest.</p>
        </div>
        {/* Hypothesis */}
        <div className="pt-7 md:pt-14">
            <div className="flex flex-col justify-center items-center text-center md:text-left md:justify-start md:items-start">
                <h3 className="font-semibold text-xl md:text-3xl pb-3">Hypothesis</h3>
                <p className="text-[14px] md:text-[16px] ">Just a few reasons we know its time for this model within the ecosystem</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-y-4 gap-x-8 py-8 md:py-16 text-[#4E4E4E]">
                <div className="bg-[#ffffff] py-5 px-5 md:w-1/2 rounded-xl flex flex-col gap-y-5">
               <div>
               <Image
                src={Triangle}
                height={40}
                width={40}
                priority={true}
                alt=""
                
              />
               </div>
              <div>
                <p  className="text-[14px] md:text-[16px]">
                Most early-stage companies and pre-product startups cannot afford professional services especially those who don’t have family and friends’ network that can support
                </p>
              </div>
                </div>
                <div  className="bg-[#ffffff] py-5 px-5 md:w-1/2 rounded-xl flex flex-col gap-y-5">
              <div>
              <Image
                src={Cube}
                height={40}
                width={40}
                priority={true}
                alt=""
                
              />
              </div>
              <div>
                <p  className="text-[14px] md:text-[16px]">
                If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment
                </p>
              </div>
                </div>
                <div  className="bg-[#ffffff] py-5 px-5 md:w-1/2 rounded-xl flex flex-col gap-y-5">
               <div>
               <Image
                src={Pentagon}
                height={40}
                width={40}
                priority={true}
                alt=""
                
              />
               </div>
               <div>
                <p  className="text-[14px] md:text-[16px]">
                Young professionals who don’t have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return
                </p>
               </div>
                </div>
            </div>
        </div>
      </div>
       {/* Case study */}

       <div className=" flex flex-col w-11/12 md:w-10/12">
            <div className="text-center md:text-left">
                <h3 className="font-semibold text-xl md:text-3xl pb-3">Case Study</h3>
                <p className="text-[14px] md:text-[16px]">See what Service Incubators get, the maths behind Service Equity (SEEQ) and what the value of your share equity can be over time</p>
            </div>
            <div className="flex flex-col gap-y-6 md:flex-row gap-x-6 py-6 md:py-12 text-[#4E4E4E]">
            <button className="bg-[#ffffff] rounded-full px-8 py-2 text-[14px] md:text-lg font-medium border border-[#a4a4a4]">Service Incubator Equity</button>
                <button className="bg-[#ffffff] rounded-full px-8 py-2 text-[14px] md:text-lg font-medium border border-[#4E4E4E]">SEEQ Maths Equation</button>
                <button className="bg-[#ffffff] rounded-full px-8 py-2 text-[14px] md:text-lg font-medium border border-[#a4a4a4]">Value of my Equity Over Time</button>
            </div>
        </div>
        <Link href="/"  className="flex flex-row underline font-semibold text-[14px] md:text-[15px] text-center mx-auto items-center gap-x-1">Become A Service Incubator <IoIosArrowRoundForward className="w-5 h-6" /></Link>
    </div>
  )
}

export default Service