import AOF from "@/components/AOF";
import Carousel from "@/components/Carousel";
import Cofound from "@/components/Cofound";
import Innovations from "@/components/Innovations";
import Investors from "@/components/Investors";
import Join from "@/components/Join";
import Network from "@/components/Network";
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
    </main>
  );
}
