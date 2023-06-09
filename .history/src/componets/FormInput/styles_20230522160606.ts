import { styled } from "styled-components";

export const Container = styled.div`
  width: 44.75rem;
`;

export const ContainerText = styled.div`
  margin-bottom: 2rem;

  p {
    font-family: Montserrat;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.563rem;
    letter-spacing: 0.02em;
    text-align: center;

    color: #f0f0f0;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2.5rem;

  input {
    width: 18.75rem;
    height: 2.5rem;

    background: rgba(0, 0, 0, 0.29);
    border: 2px solid #737373;
    backdrop-filter: blur(4px);
    border-radius: 8px;

    padding: 0.5rem 0.75rem;
    font-family: Montserrat;
    font-size: 1rem;
    text-align: left;

    color: ${(props) => props.theme.white};
  }

  input::placeholder {
    font-family: Montserrat;
    font-size: 1rem;
    text-align: left;

    color: ${(props) => props.theme.white};
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 13rem;

  input {
    height: 2.5rem;
    width: 16.25rem;

    background: ${(props) => props.theme["blue-500"]};
    border: none;
    font-family: "Inter";
    font-weight: 600;
    font-size: 1rem;

    letter-spacing: 0.02em;

    color: ${(props) => props.theme.white};
  }
`;
