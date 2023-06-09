import HubImg from "../../assets/Hub.svg";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <div>
      <HeaderContainer>
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
      </HeaderContainer>
    </div>
  );
}
