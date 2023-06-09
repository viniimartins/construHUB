import { styled } from "styled-components";

export const Footer = styled.footer`
  text-align: center;

  p {
    /* margin-bottom: 4.5rem; */

    font-weight: 400;
    font-size: 0.875rem;
    line-height: 125%;

    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    opacity: 0.75;

    color: ${(props) => props.theme.white};
  }
`;

export const FooterImages = styled.div`
  display: flex;
  justify-content: center;
  gap: 4.688rem;
`;

export const FooterImage = styled.img`
  display: flex;
  align-items: center;
`;
