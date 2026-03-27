import { FaqAccordion } from "./components/accordion/accordion";
import { FAQ } from "./components/FAQ-data/dataFAQ";

export function SectionFaq() {
  return (
    <section id="faq" className="py-16 md:py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 1. Mudei de max-w-7xl para max-w-4xl para o texto não ficar muito espalhado no monitor */}

        <div className="text-center text-3xl md:text-4xl font-vehicle mb-12 md:mb-16 font-bold">
          <h2 className="text-gray-900 tracking-tight">
            Perguntas Frequentes (FAQ)
          </h2>
          {/* Um detalhe visual discreto embaixo do título */}
          <div className="w-16 h-1 bg-gray-300 mx-auto mt-4 rounded-full" />
        </div>

        {/* 2. Container dos Accordions:
            Adicionei um gap ou espaço entre eles se o seu componente FaqAccordion 
            não tiver margem interna, para eles não ficarem "colados".
        */}
        <div className="space-y-4">
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
