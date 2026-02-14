import Image from "next/image";

type DiferenciaisCardProps = {
  img: string;
  alt: string;
  title: string;
  description: string;
};

export function DiferenciaisCard({
  img,
  alt,
  title,
  description,
}: DiferenciaisCardProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="inline-block rounded-xl p-3 bg-[#FF4100]">
        <Image src={img} alt={alt} width={64} height={64} />
      </div>

      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-gray-700 pt-2">{description}</p>
      </div>
    </div>
  );
}
