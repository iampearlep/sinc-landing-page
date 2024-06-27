import AOF from "@/components/AOF";
import Blog from "@/components/Blog";
import CTA from "@/components/CTA";
import Carousel from "@/components/Carousel";
import Cofound from "@/components/Cofound";
import Featured from "@/components/Featured";
import Innovations from "@/components/Innovations";
import Investors from "@/components/Investors";
import Jobs from "@/components/Jobs";
import Join from "@/components/Join";
import Network from "@/components/Network";
import Newsletter from "@/components/Newsletter";
import Portfolio from "@/components/Portfolio";
import Quote from "@/components/Quote";
import Service from "@/components/Service";
import Vision from "@/components/Vision";

export default function Home() {
  return (
    <main>
      <Carousel />
      <Quote />
      <div className="hidden md:block">
      <Network />
      </div>
      <div className="block md:hidden">
        <Vision />
      </div>
     
       
      <AOF />
       
      <Innovations />
       
      <Service />
      
      <Portfolio />
      
      <Cofound />
     
      <Join />
      
      <Investors />
       
      <Jobs />
      
      <Blog />
     
     <div className="hidden md:block">
     <Featured />
     <CTA />
     </div>
      <Newsletter />
    </main>
  );
}
