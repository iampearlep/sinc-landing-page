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

export default function Home() {
  return (
    <main>
      <Carousel />
      <Quote />
      <Network />
      <AOF />
      <Innovations />
      <Service />
      <Portfolio />
      <Cofound />
      <Join />
      <Investors />
      <Jobs />
      <Blog />
      <Featured />
      <CTA />
      <Newsletter />
    </main>
  );
}
