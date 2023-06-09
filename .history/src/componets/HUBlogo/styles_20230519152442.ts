import { styled } from "styled-components";

export const Content = styled.div`
  width: 56.688rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* padding: 50px; */


  margin: 10rem;
  border: 1px solid black;

  p {
    margin-top: 5.313rem;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 125%;
    /* or 60px */

    text-align: center;
    letter-spacing: 0.02em;
    color: ${props => props.theme.white}
  }
`;
