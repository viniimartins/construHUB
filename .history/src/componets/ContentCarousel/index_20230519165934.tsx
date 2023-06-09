import { ContainerContent } from "./styles";
import img from "../../assets/img.svg";

export function ContentCarousel() {
  return (
    <ContainerContent>
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </ContainerContent>
  );
}
