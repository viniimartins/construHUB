import { styled } from "styled-components";

export const CircleContainer = styled.div`
  width: 520px;
  height: 520px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  position: relative;
`;

export const CircleDivWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const CircleDiv = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${(props) => props.angle}deg)
    translateX(260px) rotate(-${(props) => props.angle}deg);
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  border: none;
  background: #ffffff;
  box-shadow: 0px 8px 40px -4px rgba(0, 0, 0, 0.08);

  img {
  }
`;

export const TextDiv = styled.div`
  width: 300px;
  height: 300px;

  border: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23D9D9D9FF' stroke-width='1' stroke-dasharray='15' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
  border-radius: 100px;

  img {
    width: 169px;
    height: 48px;
  }
`;
