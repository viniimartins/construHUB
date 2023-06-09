import { styled } from "styled-components";

export const Content = styled.div`
  width: 56.688rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  /* padding: 50px; */


  /* margin-top: 14.063rem; */
  margin-bottom: 10rem;

  p {
    margin-top: 5.313rem;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    line-height: 125%;

    text-align: center;
    letter-spacing: 0.02em;
    color: ${props => props.theme.white}
  }
`;
