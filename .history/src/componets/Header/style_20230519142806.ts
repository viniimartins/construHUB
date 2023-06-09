import { styled } from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  text-align: center;

  img {
    width: 125px;
    height: 32px;
  }

  div {
    display: flex;
    gap: 2rem;
    margin: 0 10rem 0 5rem;

  }

  p > a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
  }

  button {
    width: 176px;
    padding: 0.625rem;
    border: none;
    background: ${(props) => props.theme["blue-500"]};
    color: ${(props) => props.theme.white};
    font-family: "inter";

    font-weight: 600;
    font-size: 16px;
    line-height: 125%;
    letter-spacing: 0.02em;
  }
`;