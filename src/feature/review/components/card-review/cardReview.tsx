import { StarRate } from "../box-star/starReview";
import Image from "next/image";

type dadosProps = {
  avatar: string;
  nome: string;
  comentario: string;
};

export function CardReview({ avatar, nome, comentario }: dadosProps) {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl px-5 pt-5">
      {/* ---------- MOBILE (publicado em fica em cima) ---------- */}
      <div className="flex flex-col">

        <div className="flex items-center gap-3 py-2">
          <Image src={avatar} alt="avatar" width={60} height={60} />

          <div>
            <h3 className="font-medium">{nome}</h3>
            {/* Estrelas */}
            <StarRate />
          </div>
        </div>
      </div>

      {/* Linha */}
      <div>
        <hr />
      </div>

      <div className="py-2 leading-relaxed text-gray-600">
        {/* Comentário */}
        <p>{comentario}</p>
      </div>
    </div>
  );
}
