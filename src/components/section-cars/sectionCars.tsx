import { CarsCard } from "./card-cars/cardsCar";
import { ImgsCard } from "./card-imgs/imgsCard";



export function CarsSection() {
    return (
        <section id="veiculos">
            <div className="bg-gray-200 w-full mt-10 pt-20 pb-20 pl-20 pr-20">
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
                        model="Hyundai HB20"
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
                        model="Renault Kwid"
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
                        model="Chevrolet Onix"
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
                        model="Volkswagen Gol"
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
                        model="Fiat Uno"
                        description="🗸 Econômico, ideal para cidade"
                        description2="🗸 Ar-condicionado e direção hidráulica"
                        price="R$2.000,00/mês*"
                        plan="plano de 1 mês"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}