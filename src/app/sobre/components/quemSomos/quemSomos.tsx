import { Breadcrumbs } from "@/feature/layout/bread-crumbs/Breadcrumbs";

export function QuemSomos() {
  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 2. Breadcrumb posicionado antes de todo o conteúdo */}
        <div className="mb-10">
          <Breadcrumbs />
        </div>

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
            Quem Somos
          </h2>

          <div className="text-justify text-lg text-gray-700 leading-relaxed">
            <p className="pb-6">
              A Martins Locações é uma empresa de aluguel de veículos construída
              sobre confiança, transparência e um profundo entendimento das
              necessidades de nossos clientes. Sabemos que a mobilidade é
              essencial — seja para trabalho, lazer ou situações inesperadas que
              exigem um veículo confiável.
            </p>
            <p>
              Nosso propósito é simples: oferecer veículos de alta qualidade com
              um atendimento direto, sem burocracia. Tratamos cada cliente como
              parte da família, porque acreditamos que por trás de cada locação
              existe uma pessoa com planos, sonhos e responsabilidades que
              realmente importam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
