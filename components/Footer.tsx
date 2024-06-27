import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Images/SINC LOGO white outline 1.svg";
import F1Img from "@/public/Images/Frame 49241.svg"
import F2Img from "@/public/Images/Frame 48877.svg"
import F3Img from "@/public/Images/Frame 49248.svg"
const Footer = () => {
  return (
    <div className="bg-[#212121] flex flex-col justify-center items-center mx-auto">
     <div className="flex flex-col justify-start items-start text-[#ffffff] border-b">
        <div className="grid grid-cols-6 w-10/12 mx-auto">
            <div className="flex flex-col gap-y-8 py-10 px-5">
                <div>
                <Link href="/">
                <Image
                src={Logo}
                height={60}
                width={107.76}
                priority={true}
                alt="Logo image"
                className=""
              />
               </Link>
                </div>
           <p className="text-[14px] text-[#a4a4a4]">
           SINC Partners is a service incubation company connecting experts in product development and growth marketing willing to offer their services 
           to amazing startups in exchange for minute equity (usually 0.5% to 2%)
           </p>
            </div>
            <div className="flex flex-col gap-y-8 py-10 px-5">
            <h5 className="font-semibold text-[15px]">Platforms</h5>
        <div className="flex flex-col gap-y-6 text-[14px] text-[#a4a4a4]">
        <Link href=""><p>Kofoundme</p></Link>
           <Link href=""><p>InResidency</p></Link>
           <Link href=""><p>Service Market</p></Link>
           <Link href=""><p>Founders School</p></Link>
           <Link href=""><p>Metty</p></Link>
           <Link href=""><p>Grantty</p></Link>
           <Link href=""><p>Boldtell</p></Link>
           <Link href=""><p>Chekwa</p></Link>

        </div>
            </div>
            <div className="flex flex-col gap-y-8 py-10 px-5">
            <h5 className="font-semibold text-[15px]">Initiatives</h5>
        <div className="flex flex-col gap-y-6 text-[14px] text-[#a4a4a4]">
        <Link href=""><p>Jabi Plains</p></Link>
           <Link href=""><p>Local Pricing Initiative</p></Link>
           <Link href=""><p>Scholarship Program</p></Link>
           <Link href=""><p>SSMN Pricingl</p></Link>
           <Link href=""><p>University STEM </p></Link>
           <Link href=""><p>University InResidency </p></Link>
           <Link href=""><p>1M Nigeria </p></Link>
           <Link href=""><p>Founders Festival </p></Link>
        </div>
            </div>
            <div className="flex flex-col gap-y-8 py-10 px-5">
            <h5 className="font-semibold text-[15px]">About Us</h5>
        <div className="flex flex-col gap-y-6 text-[14px] text-[#a4a4a4]">
        <Link href=""><p>Who We Are</p></Link>
           <Link href=""><p>Our People</p></Link>
           <Link href=""><p>Concept Innovations</p></Link>
           <Link href=""><p>Our Process</p></Link>
           <Link href=""><p>Investors Network</p></Link>
           <Link href=""><p>CSR & Events</p></Link>
           <Link href=""><p>
Career
</p></Link>
           <Link href=""><p>Contact</p></Link>

        </div>
            </div>
            <div className="flex flex-col gap-y-8 py-10 px-5">
            <h5 className="font-semibold text-[15px]">More</h5>
        <div className="flex flex-col gap-y-6 text-[14px] text-[#a4a4a4] ">
        <Link href=""><p>Services</p></Link>
           <Link href=""><p>Equity Jobs</p></Link>
           <Link href=""><p>EIR Program</p></Link>
           <Link href=""><p>Offers</p></Link>
           <Link href=""><p>Innovation News</p></Link>
           <Link href=""><p>FAQ</p></Link>
           <Link href=""><p>Blog & Resources</p></Link>
           <Link href=""><p>Press</p></Link>

        </div>
            </div>
            <div className="flex flex-col gap-y-8 border-l border-[#e9e9e9] py-10 px-5">
                <h5 className="font-semibold text-[15px]">Locations</h5>
              <div className="flex flex-col gap-y-6 text-[14px] text-[#a4a4a4]" >  <p>Abuja, Nigeria </p>
                <p>Lagos, Nigeria </p>
                <p>Philadelphia, USA</p></div>
                <div className="flex flex-row justify-center items-end py-10">
                    <div>
                    <Image
                src={F1Img}
                height={66}
                width={177}
                priority={true}
                alt=""
                className=""
              />
                    </div>
                    <div>
                    <Image
                src={F2Img}
                height={72}
                width={84}
                priority={true}
                alt=""
                className=""
              />
                    </div>
                </div>
            </div>

        </div>
     </div>
     <div className=" text-xs py-8 flex flex-row justify-between items-center w-10/12">
        <div>
            <p className="text-[#a4a4a4]">Guaranteed 2x on your service or cash investment, usually been the first to invest. Get in early and SINC your guaranty!</p>
           <div className="text-[#ffffff] flex flex-row justify-between pt-14">
           <p>&copy; 2023 SINC Partners Ltd. All rights reserved</p>
            <div className="flex flex-row gap-x-8 underline justify-between items-center">
            <Link href=""><p>Privacy policy</p></Link>
           <Link href=""><p>Terms of service</p></Link>
           <Link href=""><p>Security</p></Link>
            </div>
           </div>
        </div>
        <div>
        <Image
                src={F3Img}
                height={92}
                width={346}
                priority={true}
                alt=""
                className=""
              />
        </div>
     </div>
    </div>
  )
}

export default Footer














 





