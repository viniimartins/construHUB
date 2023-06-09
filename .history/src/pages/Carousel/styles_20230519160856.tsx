import { styled } from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  transition: transform 0.3s;
  transform: translateX(${(props) => props.translate}px);
`;