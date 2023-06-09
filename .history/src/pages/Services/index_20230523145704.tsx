import { styled } from "styled-components";

const OuterCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InnerCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #f0f0f0;
`;

const ImageWithBorder = styled.img`
  width: 160px;
  height: 160px;
  border: 4px solid #000000;
  border-radius: 50%;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Services: React.FC = () => {
  return (
    <OuterCircle>
      <InnerCircle>
        <CircleContainer>
          <IconWrapper>
            <Icon>Icon 1</Icon>
            <Icon>Icon 2</Icon>
            <Icon>Icon 3</Icon>
            <Icon>Icon 4</Icon>
            <Icon>Icon 5</Icon>
            <Icon>Icon 6</Icon>
            <Icon>Icon 7</Icon>
            <Icon>Icon 8</Icon>
            <Icon>Icon 9</Icon>
          </IconWrapper>
          <ImageWithBorder src="path/to/image.png" alt="Image" />
        </CircleContainer>
      </InnerCircle>
    </OuterCircle>
  );
};