import { ChatWidget } from "@/components/layout/chat-widget/chatWidget"
import { AllCars } from "@/components/pagina-carros/todos-carros/allCars"
import { FooterCars } from "@/components/pagina-carros/footer-cars/footerCars"
import { HeaderCars } from "@/components/pagina-carros/header-cars/headerCar"


export default function Cars() {
    return (
        <>
            <HeaderCars />
            <AllCars />
            <FooterCars />
            <ChatWidget />
        </>
    )
}