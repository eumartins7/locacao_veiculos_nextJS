import { Header } from "@/components/header/header";
import { Carousel } from "@/components/section-carousel/sectionCarousel";
import { WhyService } from "@/components/infos-services/infosServices";
import { CarsSection } from "@/components/section-cars/sectionCars";
import { SectionContact } from "@/components/section-contact/sectionContact";


export default function Home() {
  return (
   <>
      <Header />
      <Carousel />
      <WhyService  />
      <CarsSection />
      <SectionContact />
   </>
  );
}
