import styled from "styled-components";
// IMG
import DashedLine from "../images/DashedLine.svg";
import DashedHeader from "../images/DashedHeader.svg";

const Dashed = ({ header, text }) => {
  const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  `;
  const Image = styled.img`
    width: 50%;
  `;
  const Text = styled.span``;
  const Title = styled.h1`
    font-size: ${(props) => props.theme.fontSize.ultra};
  `;
  return (
    <>
      {header ? (
        <Container>
          <Image src={DashedHeader} />
          <Title>{text}</Title>
          <Image src={DashedHeader} />
        </Container>
      ) : (
        <Container>
          <Image src={DashedLine} />
          <Text>{text}</Text>
          <Image src={DashedLine} />
        </Container>
      )}
    </>
  );
};

export default Dashed;
