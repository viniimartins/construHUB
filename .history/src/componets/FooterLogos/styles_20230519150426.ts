import { styled } from "styled-components";

export const Footer = styled.footer`
  /* color: #fff; */
  /* padding: 20px; */
  text-align: center;

  p {
    margin-bottom: 4.5rem;

    font-weight: 400;
    font-size: 14px;
    line-height: 125%;

    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    color: ${props => props.theme.white};
  }
`;

export const FooterImages = styled.div`
  justify-content: center;
  margin-top: 50px;
`;

export const FooterImage = styled.img`
  /* width: 50px; */
  /* height: 50px; */
  display: flex;
  align-items: center;
  gap: ;
  margin: 0 10px;
`;
