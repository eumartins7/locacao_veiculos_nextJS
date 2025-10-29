import { ChatWidget } from "@/components/chat-widget/chatWidget"
import { AllCars } from "@/components/page-cars/all-cars/allCars"
import { FooterCars } from "@/components/page-cars/footer-cars/footerCars"
import { HeaderCars } from "@/components/page-cars/header-cars/headerCar"


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