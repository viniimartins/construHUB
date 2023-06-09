import { styled } from "styled-components";

export const Container = styled.div`
  width: 716px;
`;

export const ContainerText = styled.div`
  p {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0.02em;
    text-align: center;

    color: #f0f0f0;
  }
`;

export const ContainerInputs = styled.div`
  /* height: 176px; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;

  input {
    width: 300px;
    height: 40px;

    background: rgba(0, 0, 0, 0.29);
    border: 2px solid #737373;
    backdrop-filter: blur(4px);
    border-radius: 8px;

    padding: 8px 12px;
    font-family: Montserrat;
    font-size: 16px;
    text-align: left;

    color: ${(props) => props.theme.white};
  }

  input::placeholder {
    font-family: Montserrat;
    font-size: 16px;
    text-align: left;

    color: ${(props) => props.theme.white};
  }
`;

export const ContainerButton = styled.div`
  input {
    height: 40px;
    width: 260px;

    background: #5670bf;
    border: none;
;    font-family: "Inter";
    font-weight: 600;
    font-size: 16px;

    letter-spacing: 0.02em;

    color: #ffffff;
  }
`;
