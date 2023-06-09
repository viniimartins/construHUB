import { styled } from "styled-components";
import homeImg from "../../assets/image10.svg";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;

  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  /* flex-grow: 1; */
`;

export const ContainerContent = styled.div`
  max-width: 57.625rem;
  margin: 1rem auto;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  text-align: center;

  img {
    width: 125px;
    height: 32px;
  }

  div {
    display: flex;
    gap: 2rem;
  }

  p > a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }

  p:last-child {
    margin-right: 22rem;
  }

  button {
    width: 176px;
    padding: 0.625rem;
    border: none;
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme.white};
    font-family: "inter";

    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.02em;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${homeImg});
  background-size: cover;
  background-position: center;
  flex-grow: 1;
`;

export const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px;
`;

export const Footer = styled.footer`
  color: #fff;
  padding: 20px;
  text-align: center;
`;

export const FooterImages = styled.div`
  justify-content: center;
  margin-top: 50px;
`;

export const FooterImage = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`;
