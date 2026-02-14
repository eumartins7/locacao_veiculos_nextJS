import Image from "next/image";

type CardConfiancaProps = {
  img: string;
  alt: string;
  text: string;
};

export function CardConfianca({ img, alt, text }: CardConfiancaProps) {
  return (
    <div className="flex text-sm">
      <div>
        <Image src={img} alt={alt} width={24} height={24} />
      </div>
      <div>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
}
