import Link from "next/link";

export function Precisando() {
  return (
    <section className="py-15 mb-15 md:mb-20 px-5 bg-gray-900">
      <div className="max-w-xl mx-auto">
        <div className="text-white text-center ">
          <h3 className="text-3xl md:text-4xl font-bold ">
            Precisa de um Veículo Confiável?
          </h3>
          <p className="pt-3">
            Entre em contato conosco hoje mesmo e experimente a diferença de um
            atendimento realmente personalizado.
          </p>
        </div>

        <div className="text-center grid md:grid-cols-2 gap-4 text-lg pt-6 font-medium leading-relaxed mb-8">
          <a
            href="https://wa.me/5512982516250"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-[#FF4100] text-white py-3 rounded-xl hover:bg-[#be3000] transition-colors duration-300">
              Contate-nos
            </div>
          </a>

          <Link href="/carros">
            <div className="bg-white py-3 rounded-xl hover:bg-[#d6d6d6] transition-colors duration-300">
              Veja veículos disponíveis
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
