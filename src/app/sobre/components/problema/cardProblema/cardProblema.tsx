import Image from "next/image";

type CardProblemaProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

export function CardProblema({
  img,
  alt,
  title,
  description,
}: CardProblemaProps) {
  return (
    <div className="gap-10 bg-white rounded-xl border border-gray-200 p-3">
      <div className="bg-[#ff400036] p-1 rounded-full inline-block">
        <Image src={img} alt={alt} width={30} height={30} />
      </div>
      <div>
        <h3 className=" text-lg font-medium pt-3">{title}</h3>
        <p className="text-gray-600 py-4">{description}</p>
      </div>
    </div>
  );
}
