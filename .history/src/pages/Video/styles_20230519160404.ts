import { styled } from "styled-components";

export const ContainerVideo = styled.div`
  max-width: 60rem;
  margin: 8rem auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerText = styled.div`
    margin-bottom: 3rem;
    width: 927px;
    height: 144px;

  h1 {
    color: ${(props) => props.theme.black};

    font-style: normal;
    font-weight: 300;
    font-size: 64px;
    line-height: 125%;

    text-align: center;
    letter-spacing: 0.02em;

    margin-bottom: 2rem;
  }

  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: center;
    color: #333333;
  }
`;
