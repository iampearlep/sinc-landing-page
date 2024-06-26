import React from 'react'
import { PiNumberCircleFiveLight } from 'react-icons/pi'

const AOF = () => {
  return (
    <div className='bg-[#F9F9F9] flex justify-center items-center mx-auto py-12'>
    <div className='flex flex-col w-10/12 justify-center items-center'>
   <div className='flex flex-col justify-center items-center text-center w-8/12'>
    <h2 className='text-5xl font-semibold w-9/12 text-center pb-8 leading-tight'>Our Area of Focus</h2>
  <p className='flex flex-row'>In our quest to help make success available to everyone, we have initial strategic </p>
 <span className='flex flex-row gap-x-1'>direction to focus on these five <PiNumberCircleFiveLight /> key areas at the lab</span>
   </div>
        <div className='grid grid-cols-5 capitalize text-white py-16'>
            <div className='bg-[#303030] flex flex-col gap-y-8 px-4 py-4 text-lg'>
                <p>01</p>
                <p>Business Support  &  Incubation</p>
            </div>
            <div className='bg-[#f47733] flex flex-col gap-y-8 px-4 py-4 text-lg'>
                <p>02</p>
                <p>On-demand & as a-service</p>
            </div>
            <div className='bg-[#ff78bf] flex flex-col gap-y-8 px-4 py-4 text-lg'>
                <p>03</p>
                <p>Marketing & crowdsourcing</p>
            </div>
            <div className='bg-[#20888f] flex flex-col gap-y-8 px-4 py-4 text-lg'>
                <p>04</p>
                <p>Aggregration & shared economy</p>
            </div>
            <div className='bg-[#ff78bf] flex flex-col gap-y-8 px-4 py-4 text-lg'>
                <p>05</p>
                <p>Decentralized economy & digital assets</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default AOF
