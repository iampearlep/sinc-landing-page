import Image from "next/image";
import ComapaniesImg from "@/public/Images/Frame 49106.svg"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
const Portfolio = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-20">
      <div className='flex flex-col w-10/12 justify-center items-center'>
      <div className='flex flex-col justify-center items-center text-center w-9/12'>
            <h2 className='text-5xl font-semibold w-10/12 text-center pb-8 leading-tight'>Our Studio Portfolio</h2>
            <p className="text-[#4E4E4E]">Our 2024 Service Incubator Portfolio Companies</p>
        </div>
        <div className="py-14">
        <Image
                src={ComapaniesImg}
                height={1100}
                width={428}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
        </div>
      </div>
      <Link href="/"  className="flex flex-row underline font-semibold text-[15px] text-center mx-auto items-center gap-x-1">View All Companies <IoIosArrowRoundForward className="w-5 h-6" /></Link>
    </div>
  )
}

export default Portfolio
