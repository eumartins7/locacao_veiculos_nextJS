import Image from "next/image";

type ValorItem = {
  id: string;
  title: string;
  description: string;
};

type ValorData = {
  img: string;
  alt: string;
  title: string;
  description?: string;
  items?: ValorItem[];
};

type Props = {
  data: ValorData;
};

export function ValorCard({ data }: Props) {
  return (
    <div className="rounded-2xl bg-white px-5 py-7">
      <div className="bg-[#FF4100] inline-block p-2 rounded-xl">
        <Image src={data.img} alt={data.alt} width={34} height={34} />
      </div>

      <h3 className=" font-bold text-xl py-2">{data.title}</h3>

      {data.description && <p className="text-gray-700">{data.description}</p>}

      {data.items && (
        <ul className="mt-4 space-y-2">
          {data.items.map((item) => (
            <li key={item.id}>
              <strong className="text-gray-800">{item.title}:</strong>
              <span className="text-zinc-700 text-sm">{item.description}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
