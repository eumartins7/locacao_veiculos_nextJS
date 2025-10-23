import { Header } from "@/components/header/header";
import { Carousel } from "@/components/section-carousel/sectionCarousel";
import { WhyService } from "@/components/infos-services/infosServices";


export default function Home() {
  return (
   <>
      <Header />
      <Carousel />
      <WhyService  />
   </>
  );
}
