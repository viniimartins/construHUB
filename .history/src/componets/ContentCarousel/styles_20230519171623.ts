import { styled } from "styled-components";

export const ContainerContent = styled.div`
  width: 54.063rem;
  height: 13.75rem;

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  border: 1px solid black;

  div {
    /* margin-left: 3.5rem; */
  }

  div > p {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 150%;

    letter-spacing: 0.02em;

    color: #1a1a1a;
  }

  div > div > p {
    color: red;
  }
`;

export const ContentName = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: 0.02em;

  color: #4e4e4e;
`;


