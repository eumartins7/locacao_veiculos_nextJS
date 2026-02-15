import { ChatWidget } from "@/feature/layout/chat-widget/chatWidget";
import { AllCars } from "./components/pagina-carros/todos-carros/allCars";
import { Footer } from "@/feature/layout/footer/footer";
import { Header } from "@/feature/layout/header/header";

export default function Cars() {
  return (
    <>
      <Header />
      <AllCars />
      <Footer />
      <ChatWidget />
    </>
  );
}
