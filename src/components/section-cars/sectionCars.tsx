import { ButtonPage } from "./button-page/buttonPage";
import { CarsCard } from "./card-cars/cardsCar";
import { ImgsCard } from "./card-imgs/imgsCard";



export function CarsSection() {
    return (
        <section id="veiculos" className="bg-gray-200 w-full">
            <div className=" mt-10 pt-20 pb-20 pl-20 pr-20">
                <div className="font-vehicle text-center text-5xl">
                    <h1>Confira alguns veículos!</h1>
                </div>

                <div className=" flex justify-around text-center items-center">
                    <div>
                        <ImgsCard 
                            image="/cars/hb20.webp"
                            detail="Carro HB20"
                        />
                        <CarsCard
                        brand="Hyundai"
                        model="HB20"
                        description="🗸 Design moderno e econômico"
                        description2="🗸 Baixo consumo de combustível"
                        price="R$2.000,00/mês*"
                        plan="plano de 1 mês"
                        />
                    </div>
                    
                    <div>
                        <ImgsCard 
                            image="/cars/kwid.png"
                            detail="Carro kwid"
                        />
                        <CarsCard
                        brand="Renault"
                        model="Kwid"
                        description="🗸 Flex"
                        description2="🗸 Seguro e econômico"
                        price="R$2.000,00/mês*"
                        plan="plano de 1 mês"
                        />
                    </div>

                    <div>
                        <ImgsCard 
                            image="/cars/onix.png"
                            detail="Carro onix"
                        />
                        <CarsCard
                        brand="Chevrolet"
                        model="Onix"
                        description="🗸 Modelo 2022, completo"
                        description2="🗸 Multimídia e câmbio automático"
                        price="R$2.000,00/mês*"
                        plan="plano de 1 mês"
                        />
                    </div>

                    <div>
                        <ImgsCard 
                            image="/cars/gol.png"
                            detail="Carro Gol"
                        />
                        <CarsCard
                        brand="Volkswagen"
                        model="Gol"
                        description="🗸 Ótimo desempenho urbano"
                        description2="🗸 Porta-malas espaçoso"
                        price="R$2.000,00/mês*"
                        plan="plano de 1 mês"
                        />
                    </div>

                    <div>
                        <ImgsCard 
                            image="/cars/uno.png"
                            detail="Carro Uno"
                        />
                        <CarsCard
                        brand="Fiat"
                        model="Uno"
                        description="🗸 Econômico, ideal para cidade"
                        description2="🗸 Ar-condicionado e direção hidráulica"
                        price="R$2.000,00/mês*"
                        plan="plano de 1 mês"
                        />
                    </div>
                </div>

                <div className="flex justify-center text-center mt-10">
                    <ButtonPage />
                </div>
            </div>
        </section>
    )
}