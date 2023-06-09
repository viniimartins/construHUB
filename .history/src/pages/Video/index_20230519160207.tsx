import { ContainerText, ContainerVideo } from "./styles";
import video from "../../assets/teste.png"

export function Video() {
  return (
    <ContainerVideo>
      <ContainerText>
        <h1>A constru.hub</h1>
        <ContainerText>
          <p>
            A contru. hub é uma empresa que nasceu para descomplicar e facilitar
            a vida de investidores que querem entrar para o ramo da construção
            civil. Em outras palavras,{" "}
            <b>“nosso empresa transforma vc em um dono de construtora".</b>
          </p>
          <br />
          <br />
          <p>
            Em nosso time possuímos vários profissionais e parceiros para lhe
            atender em todas as etapas da uma construção, seja ele um
            empreendimento residencial ou comercial.
          </p>
        </ContainerText>

        <div>
            {/* <video src=""></video> */}
            {/* <img src={video} alt="" /> */}
        </div>
      </ContainerText>
    </ContainerVideo>
  );
}
