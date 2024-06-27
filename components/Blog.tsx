"use client"
import Image from "next/image";
import { BlogData} from "@/interface";
import BImg1 from "@/public/Images/BImg-1.svg"
import BImg2 from "@/public/Images/BImg-2.svg"
import BrImg1 from "@/public/Images/Br1.svg"
import BrImg2 from "@/public/Images/Br2.svg"
import BrImg3 from "@/public/Images/Br3.svg"
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

const blog: BlogData[]  = [
    {
        id: 0,
        title: 'Top Ten Most Powerful Startup',
        text: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
        image: BImg1,
        image2: BrImg1,
    },
    {
        id: 1,
        title: 'Top Ten Most Powerful Startup',
        text: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
        image:  BImg2,
        image2: BrImg2,
    },
    {
        id: 2,
        title: 'Top Ten Most Powerful Startup',
        text: "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
        image: BImg2,
        image2: BrImg3
    }
]

const Blog = () => {
  return (
    <div  className="bg-[#F9F9F9] flex flex-col justify-center items-center mx-auto py-12">
      <div className='flex flex-col w-11/12 md:w-10/12 justify-center items-center'>
        <div className='flex flex-col justify-center items-center text-center w-9/12'>
            <h2 className='text-xl md:text-5xl font-semibold w-10/12 text-center pb-8 leading-tight'>Blogs & Resources</h2>
        </div>
        <div className="py-7 md:py-14 flex flex-col md:flex-row gap-y-6 justify-center items-center gap-x-9">
{blog.map((data) => {
    return(
        <div key={data.id} className="flex flex-col justify-center">
            <div className="flex flex-col gap-y-7 md:gap-y-14">
                <div>
                <Image
                src={data.image}
                height={235}
                width={378}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
                </div>
                <div className="flex flex-row">
                   <div className="w-10/12 flex flex-col gap-y-2"> 
                    <h4 className="font-semibold">{data.title}</h4>
                   <p className="text-[13px]">{data.text}</p>
                   </div>
                   <div className="flex justify-center items-center">
                   <Image
                src={data.image2}
                height={79}
                width={85}
                priority={true}
                alt=""
                    className="w-auto h-auto"
              />
                   </div>
                </div>
            </div>
        </div>
    )
})}
        </div>
        <div className="flex justify-center items-center mx-auto py-5">
        <Link href="/"  className="flex flex-row underline font-semibold text-[14px] md:text-[15px] text-center mx-auto items-center gap-x-1">See More Blogs & Resources<IoIosArrowRoundForward className="w-5 h-6" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Blog