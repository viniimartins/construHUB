import HubImg from "../../assets/Mundo.svg";

import { Content } from "./styles";

export function HUBlogo() {
  return (
    <Content>
      <img src={HubImg} alt="" />
      <p>Conectando investidores a profissionais da construção civil.</p>
    </Content>
  );
}
