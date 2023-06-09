import { styled } from "styled-components";

export const Container = styled.footer`
  width: 77.746rem;
  height: 135px;

  display: flex;
  justify-content: space-between;

  border: 1px solid red;

  img {
    width: 125px;
    height: 32px;
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
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #f0f0f0;
`;

export const Rights = styled.p`
  border: 1px solid blue;

  font-family: Montserrat;
  font-size: 10px;
  font-weight: 300;
  line-height: 15px;
  letter-spacing: 0.02em;

  color: #f0f0f0;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 210px;
    height: 40px;

    background: #5670bf;
    border: none;
  }
`;
