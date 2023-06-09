import { ContainerContent } from "./styles";
import img from "../../assets/img.svg";

export function ContentCarousel() {
  return (
    <ContainerContent>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>
          "A hub foi um divisor de aguas para ORO, lancei um prédio com uma
          ótima assessoria, os profissionais envolvidos foram muito bons,
          vendemos 30% em 9 dias. Foi realmente muito bom”
        </p>
        <p>Douglas Medeiros Westphal
</p>
        <p>Construtura Vital atual ORO construções</p>
      </div>
    </ContainerContent>
  );
}
