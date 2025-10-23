import { CardAbout } from "../card-services/cardServices";


export function WhyService() {
    return (
        <section className="bg-gray-200 w-full pt-10 pb-10">
            <div className="flex justify-between items-center ml-20 mr-20">
                <div className="font-service text-6xl">
                    <h1>Por que escoher <br /> nossos serviços?
                    </h1>
                </div>

                <div>
                    <div className="flex flex-col gap-8">
                        <CardAbout 
                            title="Facilidade em Contratar"
                            description="Alugue seu carro sem burocracia, com atendimento rápido e direto."
                        />

                        <CardAbout 
                            title="Para Quem Precisa de Mobilidade"
                            description="Atendemos motoristas particulares, profissionais autônomos, turistas e qualquer pessoa que precise de um carro por um ou mais dias."
                        />

                        <CardAbout 
                            title="Assistência 24 Horas"
                            description="Conte com suporte completo durante todo o período de locação, em qualquer imprevisto."
                        />

                        <CardAbout 
                            title="Veículos com Manutenção em Dia"
                            description="Nossa frota é revisada regularmente, garantindo segurança e tranquilidade em cada trajeto."
                        />
                    </div>
                </div>
            </div>
            
            
        </section>
    )
}