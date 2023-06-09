import HubImg from "../../assets/image14.svg";
import { Header } from "./styles";

export function Header() {
  return (
    <div>
      <Header>
        <img src={HubImg} alt="" />
        <div>
          <p>
            <a href="">Menu Item</a>
          </p>
          <p>
            <a href="">Menu Item</a>
          </p>
          <p>
            <a href="">Menu Item</a>
          </p>
        </div>

        <button>Entrar Em Contato</button>
      </Header>
    </div>
  );
}
