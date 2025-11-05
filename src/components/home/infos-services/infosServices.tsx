import { CardAbout } from "./card-services/cardServices";


export function WhyService() {
    return (
        <section id="sobre" className="bg-gray-200 w-full mt-10 pt-10 pb-10">
            <div className=" lg:flex justify-between items-center lg:ml-20 lg:mr-20">
                <div className="flex justify-center gap-2 font-service text-3xl lg:text-6xl">
                    <span>Por que escolher <br className="invisible lg:flex" /> nossos serviços?</span>
                </div>

                <div className="flex pl-3 pr-3 mt-4">
                    <div className="flex flex-col gap-2 min-w-[300px] w-[100%] lg:flex lg:flex-col lg:gap-8 lg:flex-1 lg:max-w-lg">
                        <CardAbout 
                            image="/icons/doc.svg"
                            title="Facilidade em contratar"
                            description="Alugue seu carro sem burocracia, com atendimento rápido e direto."
                        />

                        <CardAbout 
                            image="/icons/car.svg"
                            title="Quem precisa de mobilidade"
                            description="Atendemos motoristas particulares ou profissionais autônomos."
                        />

                        <CardAbout 
                            image="/icons/call.svg"
                            title="Assistência 24 horas"
                            description="Conte com suporte completo durante todo o período de locação, em qualquer imprevisto."
                        />

                        <CardAbout 
                            image="/icons/build.svg"
                            title="Manutenção em dia"
                            description="Nossa frota é revisada regularmente, garantindo segurança e tranquilidade."
                        />
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}