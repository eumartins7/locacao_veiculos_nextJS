import { FaWhatsapp } from "react-icons/fa"; // Ou use um SVG se preferir

export function ChatWidget() {
  return (
    <a
      href="https://wa.me/5512982516250"
      target="_blank"
      rel="noopener noreferrer"
      // bottom-24 ou bottom-28 garante que ele fique acima da última div do footer
      // z-50 para ficar acima de tudo, mas abaixo de modais se houver
      className="fixed bottom-24 right-6 z-50 flex items-center justify-center 
                 w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl 
                 hover:bg-[#20ba5a] hover:scale-110 transition-all duration-300
                 group"
      aria-label="Chamar no WhatsApp"
    >
      {/* Ícone principal */}
      <FaWhatsapp size={32} />

      {/* Tooltip opcional que aparece no hover (apenas PC) */}
      <span
        className="absolute right-16 bg-white text-gray-800 text-xs font-bold 
                       px-3 py-2 rounded-lg shadow-md opacity-0 group-hover:opacity-100 
                       transition-opacity pointer-events-none hidden md:block whitespace-nowrap"
      >
        Falar com consultor
      </span>

      {/* Ping de animação para chamar atenção (opcional) */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
    </a>
  );
}
