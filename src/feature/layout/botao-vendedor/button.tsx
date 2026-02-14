export function BotaoVendedor({
  modelo,
  marca,
}: {
  modelo: string;
  marca: string;
}) {
  const href = `https://wa.me/5512988372717?text=${encodeURIComponent(`Olá, gostaria de saber mais sobre o ${marca} ${modelo}`)}`;

  return (
    <div className="w-full py-5">
      {/* Garante que o container ocupe tudo */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white font-bold text-xl md:text-lg bg-[#FF4100] hover:bg-[#FF6000] rounded-lg cursor-pointer py-2 w-full flex items-center justify-center transition-colors"
      >
        Fale com um vendedor
      </a>
    </div>
  );
}
