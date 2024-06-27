import Link from 'next/link'
import React from 'react'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Cofound = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-12">
      <div className='flex flex-col w-10/12 justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center w-9/12'>
            <h2 className='text-5xl font-semibold w-10/12 text-center pb-8 leading-tight'>Co-found With Us</h2>
            <p>We seek to collaborate with visionary individuals who are solving similar problems of helping entrepreneurs succeed</p>
        </div>
        <div>
        <div className="flex flex-row justify-center gap-x-8 py-16 text-[#4E4E4E]">
                <div className="bg-[#ffffff] py-5 px-5 w-1/2 rounded-xl flex flex-col gap-y-5">
               <div className='w-14 h-14 font-semibold rounded-full flex justify-center items-center bg-[#212121] text-[#ffffff] '>
             1
               </div>
               <div>
                <h4 className='text-lg font-semibold'>We Ideate</h4>
               </div>
              <div>
                <p>
                We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.
                </p>
              </div>
                </div>
                <div  className="bg-[#ffffff] py-5 px-5 w-1/2 rounded-xl flex flex-col gap-y-5">
              <div className='w-14 h-14 font-semibold rounded-full flex justify-center items-center bg-[#f47733]  text-[#ffffff] '>
              2
              </div>
              <div>
                <h4 className='text-lg font-semibold'>You Validate</h4>
              </div>
              <div>
                <p>
                You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions 
                </p>
              </div>
                </div>
                <div  className="bg-[#ffffff] py-5 px-5 w-1/2 rounded-xl flex flex-col gap-y-5">
               <div className='bg-[#ff78bf] font-semibold w-14 h-14 rounded-full flex justify-center items-center text-[#ffffff] '>
              3
               </div>
               <div>
               <h4 className='text-lg font-semibold'>You Co-own</h4>
               </div>
               <div>
                <p>
                After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.
                </p>
               </div>
                </div>
            </div>
        </div>
    </div>
    <Link href="/"  className="flex flex-row underline font-semibold text-[15px] text-center mx-auto items-center gap-x-1">Build your dream <IoIosArrowRoundForward className="w-5 h-6" /></Link>
    </div>
  )
}

//

export default Cofound
