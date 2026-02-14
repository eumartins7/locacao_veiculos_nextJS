import { BotaoVendedor } from "@/feature/layout/botao-vendedor/button";

interface BoxAboutCarProps {
  carro: {
    id: string;
    marca: string;
    modelo: string;
    subInfo: string;
    price: string;
  };
}

export function BoxAboutCar({ carro }: BoxAboutCarProps) {
  return (
    <section className="w-full">
      {/* Container das informações com margem */}
      <div className="grid md:grid-cols-2 mx-5 mt-5 font-aboutCompany font-bold">
        <div>
          <div className="font-normal text-3xl">
            <h1>
              {carro.marca} <b>{carro.modelo}</b>
            </h1>
          </div>
          <div className="text-stone-700 text-base">
            <p>{carro.subInfo}</p>
          </div>
        </div>

        {/* HR visível apenas no mobile se necessário, ou ajuste o grid */}
        <div className="md:hidden mt-3 mb-3">
          <hr className="text-gray-400" />
        </div>

        <div className="md:text-right">
          {" "}
          {/* Alinhado à direita no desktop para combinar com a foto */}
          <div className="text-stone-600">
            <p>A partir de:</p>
          </div>
          <div className="text-xl">{carro.price}</div>
          <div className="text-stone-600 md:text-lg">
            <p>no plano de 1 mês</p>
          </div>
        </div>
      </div>

      {/* CONTAINER DO BOTÃO: Sem justify-center e com w-full */}
      <div className="w-full ">
        {/* O px-5 aqui alinha o botão com o grid acima que tem mx-5 */}
        <BotaoVendedor
          modelo={carro.id}
          marca={carro.marca}
        />
      </div>
    </section>
  );
}
