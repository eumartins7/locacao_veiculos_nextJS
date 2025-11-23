import { Header } from "@/components/layout/header/header";
import { Carousel } from "@/components/home/section-carousel/sectionCarousel";
import { WhyService } from "@/components/home/infos-services/infosServices";
import { CarsSection } from "@/components/home/section-cars/sectionCars";
import { SectionReview } from "@/components/home/section-reviews/sectionReviews";
import { Footer } from "@/components/layout/footer/footer";
import { ChatWidget } from "@/components/layout/chat-widget/chatWidget";
import { SectionFaq } from "@/components/home/section-FAQ/sectionFAQ";


export default function Home() {
  return (
   <>
      <Header />
      <Carousel />
      <ChatWidget />
      <WhyService  />
      <CarsSection />
      <SectionReview />
      <SectionFaq />
      <Footer />
   </>
  );
}
