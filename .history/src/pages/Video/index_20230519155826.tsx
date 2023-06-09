import { ContainerVideo } from "./styles";

export function Video() {
  return (
    <ContainerVideo>
      <div>
        <h1>A constru.hub</h1>
        <div>
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
        </div>

        <div>
            <source />
        </div>
      </div>
    </ContainerVideo>
  );
}
