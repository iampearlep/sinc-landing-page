import AOF from "@/components/AOF";
import Carousel from "@/components/Carousel";
import Innovations from "@/components/Innovations";
import Network from "@/components/Network";
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
    </main>
  );
}
