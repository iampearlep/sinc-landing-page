import Image from "next/image";
import { useSwiper } from "swiper/react"
import Prev from "@/public/Images/Prev.svg"
import Next from "@/public/Images/Next.svg"

const SwiperNavButton = () => {
    const swiper = useSwiper();

  return (
    <div className="mx-auto flex flex-row justify-center items-center gap-x-16 py-3 md:py-8">
      <button onClick={() => swiper.slidePrev()}> 
        <Image
                src={Prev}
                height={66}
                width={66}
                priority={true}
                alt=""
                className="w-10/12 md:w-auto"
              /></button>
      <button onClick={() => swiper.slideNext()}>
      <Image
                src={Next}
                height={66}
                width={66}
                priority={true}
                alt=""
                className="w-10/12 md:w-auto"
              />
      </button>
    </div>
  )
}

export default SwiperNavButton
