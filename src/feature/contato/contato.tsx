import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export function Contato() {
  return (
    <section id="contato" className="py-16 md:py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título da Seção */}
        <div className="text-center mb-16">
          <h2 className="font-vehicle text-3xl md:text-5xl font-bold text-gray-900">
            Fale Conosco
          </h2>
          <div className="w-20 h-1 bg-[#FF4100] mx-auto mt-4 rounded-full" />
          <p className="text-gray-600 mt-6 max-w-xl mx-auto text-lg">
            Precisa de um carro agora? Chame nossa equipe no WhatsApp e resolva
            tudo em poucos minutos.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Card Principal de Chamada */}
          <div className="bg-white p-8 md:p-12 shadow-xl border-t-8 border-[#FF4100] text-center space-y-8 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Atendimento Imediato e sem burocracia
            </h3>

            <p className="text-gray-600 text-lg">
              Nossos consultores estão online para verificar disponibilidade e
              fechar sua reserva agora mesmo.
            </p>

            <a
              href="https://wa.me/5512999999999" // Link direto caso ele não queira preencher o form
              target="_blank"
              className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20ba5a] transition-all transform hover:scale-105 shadow-xl shadow-green-200"
            >
              <FaWhatsapp size={24} />
              CHAMAR NO WHATSAPP
            </a>
          </div>

          {/* Grid de Informações Secundárias */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
              <div className="bg-orange-100 p-4 rounded-xl text-[#FF4100]">
                <FaEnvelope size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-black tracking-widest">
                  E-mail
                </p>
                <p className="text-base font-bold text-gray-800">
                  gabrielmartins8802@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 bg-white p-6 rounded-2xl shadow-sm border border-gray-50">
              <div className="bg-orange-100 p-4 rounded-xl text-[#FF4100]">
                <FaMapMarkerAlt size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-black tracking-widest">
                  Localização
                </p>
                <p className="text-base font-bold text-gray-800">
                  São José dos Campos, SP
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
