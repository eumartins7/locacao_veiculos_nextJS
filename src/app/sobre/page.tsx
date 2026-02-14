import { Header } from "@/feature/layout/header/header";
import { SobreNos } from "./components/sobreNos/sobreNos";
import { QuemSomos } from "./components/quemSomos/quemSomos";
import { Problema } from "./components/problema/problema";
import { NossosDiferenciais } from "./components/outrosDiferenciais/nossosDiferenciais";
import { Valores } from "./components/valor/valores";
import { Confianca } from "./components/confianca/confianca";
import { Precisando } from "./components/precisando/precisando";
import { Footer } from "@/feature/layout/footer/footer";

export default function PageSobre() {
  return (
    <>
      <Header />
      <SobreNos />
      <QuemSomos />
      <Problema />
      <NossosDiferenciais />
      <Valores />
      <Confianca />
      <Precisando />
      <Footer />
    </>
  );
}
