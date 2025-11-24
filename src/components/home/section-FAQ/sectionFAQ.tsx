import { Accordion } from "./accordion/accordion";
import { FAQ } from "./FAQ-data/dataFAQ";

export function SectionFaq() {
    return (
        <section id="faq" className="md:px-20 md:py-10 bg-gray-200 w-full lg:mt-10">

            <div className="text-center text-4xl font-vehicle pb-5 font-bold">
                <h1>Perguntas Frequentes (FAQ)</h1>
            </div>

            <div>
                {FAQ.map((item, index) => (
                    <Accordion 
                        key={index}
                        pergunta={item.pergunta}
                        resposta={item.resposta}
                    />
                ))}
            </div>
        </section>
    )
}