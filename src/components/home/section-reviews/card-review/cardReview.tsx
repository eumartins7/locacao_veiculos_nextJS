import { StarRate } from "../box-star/starReview"
import Image from "next/image"

type dadosProps = {
    avatar:string,
    nome:string,
    dia:string,
    comentario:string
}

export function CardReview({avatar,nome,dia,comentario}:dadosProps) {
    return (
        <div className="bg-white w-56 md:w-[50%] rounded-2xl px-5 pt-5">

            {/* ---------- MOBILE (publicado em fica em cima) ---------- */}
            <div className="flex flex-col md:hidden">
                <span className="text-gray-500 text-sm mb-1">
                    Publicado em: {dia}
                </span>

                <div className="flex items-center gap-3">
                    <Image 
                        src={avatar}
                        alt="avatar"
                        width={60}
                        height={60}
                    />

                    <h1>{nome}</h1>
                </div>
            </div>

            {/* ---------- DESKTOP/TABLET (justify-between) ---------- */}
            <div className="hidden md:flex md:justify-between md:items-center">
                <div className="flex items-center gap-3">
                    <Image 
                        src={avatar}
                        alt="avatar"
                        width={60}
                        height={60}
                    />

                    <h1>{nome}</h1>
                </div>

                <span className="text-gray-500 text-sm">
                    Publicado em: {dia}
                </span>
            </div>

            {/* Linha */}
            <div className="lg:w-2/3">
                <hr />               
            </div>

            {/* Comentário */}
            <p>{comentario}</p>

            {/* Estrelas */}
            <StarRate />
        </div>
    )
}
