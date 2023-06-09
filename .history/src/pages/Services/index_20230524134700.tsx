import {
  CircleContainer,
  CircleDivWrapper,
  CircleDiv,
  TextDiv,
} from "./styles";

import icon from "../../assets/icon.png";
import HubImg from "../../assets/LogoProvisoria.svg";
import { WheelServices } from "../../componets/WheelService";

export const Services: React.FC = () => {
  const divAngles = [0, 40, 80, 120, 160, 200, 240, 280, 320];

  return (
        <WheelServices />
  );
};
