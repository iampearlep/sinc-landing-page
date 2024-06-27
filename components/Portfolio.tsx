import Image from "next/image";
import ComapaniesImg from "@/public/Images/Frame 49106.svg"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import CIMobile from "@/public/Images/CIMobile.svg"
const Portfolio = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-20">
      <div className='flex flex-col w-11/12 md:w-10/12 justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center md:w-9/12'>
            <h2 className='text-xl md:text-5xl font-semibold md:w-10/12 text-center pb-4 md:pb-8 leading-tight'>Our Studio Portfolio</h2>
            <p className="text-[#4E4E4E] text-[14px] md:text-[16px]">Our 2024 Service Incubator Portfolio Companies</p>
        </div>
        <div className="py-14">
       <div className="hidden md:block">
       <Image
                src={ComapaniesImg}
                height={1100}
                width={428}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
       </div>
       <div className="block md:hidden">
       <Image
                src={CIMobile}
                height={501.33}
                width={354}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
       </div>
        </div>
      </div>
      <Link href="/"  className="flex flex-row underline font-semibold text-[14px] md:text-[15px] text-center mx-auto items-center gap-x-1">View All Companies <IoIosArrowRoundForward className="w-5 h-6" /></Link>
    </div>
  )
}

export default Portfolio
