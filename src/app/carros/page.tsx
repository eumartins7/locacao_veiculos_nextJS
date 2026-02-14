import { ChatWidget } from "@/feature/layout/chat-widget/chatWidget";
import { AllCars } from "./components/pagina-carros/todos-carros/allCars";
import { Footer } from "@/feature/layout/footer/footer";
import { HeaderCars } from "./components/pagina-carros/header-cars/headerCar";

export default function Cars() {
  return (
    <>
      <HeaderCars />
      <AllCars />
      <Footer />
      <ChatWidget />
    </>
  );
}
