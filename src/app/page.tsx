import { Header } from "@/feature/layout/header/header";
import { Carousel } from "@/feature/hero/hero";
import { Service } from "@/feature/serviço/infosServices";
import { CarsSection } from "@/feature/cars/sectionCars";
import { SectionReview } from "@/feature/review/sectionReviews";
import { Footer } from "@/feature/layout/footer/footer";
import { ChatWidget } from "@/feature/layout/chat-widget/chatWidget";
import { SectionFaq } from "@/feature/faq/sectionFAQ";

export default function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <ChatWidget />
      <Service />
      <CarsSection />
      <SectionReview />
      <SectionFaq />
      <Footer />
    </>
  );
}
