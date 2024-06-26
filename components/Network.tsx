import Link from "next/link"
import { IoIosArrowRoundForward } from "react-icons/io"


const Network = () => {
  return (
    <div className="bg-[#F9F9F9] flex justify-center items-center mx-auto py-8">
 <div className="flex flex-col w-8/12 justify-center items-center">
 <h2 className="text-5xl font-semibold w-9/12 text-center pb-8 leading-snug"> Network of builders helping startup scale</h2>
<div className="flex flex-row justify-center gap-x-8" >
    <div className="bg-[#ffffff] py-5 px-5 w-1/2 rounded-xl">
        <h3 className="text-xl font-semibold">Work with Service Incubators to expedite your time-to-market</h3>
        <p className="text-[#4E4E4E] text-[15px] py-3">
        Collaborate with our meticulously chosen service partners, each with a vested interest, ensuring a shared commitment to success in the game of venture building.
        </p>
        <p className="text-[#4E4E4E] text-[15px] font-semibold pb-5"> For 7.5% equity, you get a product manager, product designer, frontend engineer, software engineer and growth marketer to build the MVP of your app or web application and validate it.</p>
        <Link href="/"  className="flex flex-row underline font-semibold text-[15px] items-center gap-x-1">Learn More <IoIosArrowRoundForward className="w-5 h-6" /></Link>
    </div>
    <div className="bg-[#ffffff] py-5 px-5 w-1/2  rounded-xl">
    <h3 className="text-xl font-semibold w-9/12">Access funding after your mvp is validated </h3>
    <p className="text-[#4E4E4E] text-[15px] py-3">
    Startups that have built and validated their product can take advantage of the financial resources of the SINC Investors Network, elevating their potential for success in the venture capital landscape.
    </p>
    <p className="text-[#4E4E4E] text-[15px] font-semibold pb-10">Raise $5k, $25k, $50k and $125k in 4 bootstrap deals within 12 months</p>
    <Link href="/"  className="flex flex-row underline font-semibold text-[15px] items-center gap-x-1">Learn More <IoIosArrowRoundForward className="w-5 h-6" /></Link>
    </div>
</div>

 </div>

    </div>
  )
}

export default Network
