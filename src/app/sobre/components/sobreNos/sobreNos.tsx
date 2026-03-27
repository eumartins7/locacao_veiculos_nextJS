export function SobreNos() {
  return (
    <section className="bg-[#FF4100] w-full -mt-px pb-10 pt-20">
      {/* O -mt-[1px] é um truque para colar se houver linha fantasma */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center border-t border-white/30 pt-8">
          {/* Uma linha sutil fica mais elegante que o espaço branco */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Sobre Martins Locações</h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Conectamos pessoas à liberdade de mobilidade por meio de locações de
            veículos confiáveis, com atendimento personalizado e compromisso com
            a sua tranquilidade.
          </p>
        </div>
      </div>
    </section>
  );
}
