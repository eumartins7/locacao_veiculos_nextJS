import { FaqAccordion } from "./components/accordion/accordion";
import { FAQ } from "./components/FAQ-data/dataFAQ";

export function SectionFaq() {
  return (
    <section id="faq" className="mb-10 pt-10 -mt-px md:px-20 md:py-10 bg-gray-200 lg:mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center text-4xl font-vehicle pb-5 font-bold">
          <h2>Perguntas Frequentes (FAQ)</h2>
        </div>

        <div className="pb-10 lg:p-0">
          {FAQ.map((item) => (
            <FaqAccordion
              key={item.id}
              pergunta={item.pergunta}
              resposta={item.resposta}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
