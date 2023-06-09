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
  position: relative;
  width: 200px;
  height: 200px;
`;

const Icon = styled.div<{ angle: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${props => props.angle}deg);
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
  const icons = Array.from({ length: 9 }, (_, index) => index + 1); // Array de ícones para demonstração

  return (
    <OuterCircle>
      <InnerCircle>
        <CircleContainer>
          <IconWrapper>
            {icons.map((icon, index) => (
              <Icon key={index} angle={(index * 360) / icons.length}>
                {/* Icon {icon} */}
              </Icon>
            ))}
          </IconWrapper>
          <ImageWithBorder src="path/to/image.png" alt="Image" />
        </CircleContainer>
      </InnerCircle>
    </OuterCircle>
  );
};