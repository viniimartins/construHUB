import { styled } from "styled-components";

export const Container = styled.footer`
  width: 77.746rem;
  height: 8.438rem;

  display: flex;
  justify-content: space-between;

  border: 1px solid red;

  img {
    width: 7.813rem;
    height: 2rem;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
`;

export const Text = styled.p`
  border: 1px solid red;

  font-family: Montserrat;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5rem;
  letter-spacing: 0.02em;
  color: #f0f0f0;
`;

export const Rights = styled.p`
  border: 1px solid blue;

  font-family: Montserrat;
  font-size: 0.625rem;
  font-weight: 300;
  line-height: 0.938rem;
  letter-spacing: 0.02em;

  color: #f0f0f0;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    width: 13.125rem;
    height: 2.5rem;

    background: #5670bf;
    border: none;

    font-family: Inter;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0.02em;
    text-align: center;
    cursor: pointer;

    color: ${(props) => props.theme.white};
  }

  p {
    font-family: Montserrat;
    font-size: 1px;
    font-weight: 400;
    line-height: 1.5rem;
    letter-spacing: 0.02em;

    display: flex;
    align-items: center;
    gap: 1rem;
    color: #f0f0f0;
  }
`;
