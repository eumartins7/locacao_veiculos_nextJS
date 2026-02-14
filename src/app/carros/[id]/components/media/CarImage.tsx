import Image from "next/image";
import { Car } from "@/feature/cars/types/car";

interface BoxImgProps {
  carro: Car;
}

export function BoxImg({ carro }: BoxImgProps) {
  return (
    <div className="w-full"> {/* Remove o mt-10 daqui, deixa o gap do pai controlar */}
      <div className="overflow-hidden rounded-2xl"> {/* Rounded aqui pra ficar igual à foto */}
        <div className="relative aspect-video w-full"> {/* w-full aqui é obrigatório para o fill funcionar */}
          <Image
            src={carro.image}
            alt={`${carro.marca} ${carro.modelo}`}
            fill
            priority // Adicione isso porque é a imagem principal da página (LCP)
            className="object-cover" // 'cover' deixa preenchido igual ao exemplo
          />
        </div>
      </div>
    </div>
  );
}
