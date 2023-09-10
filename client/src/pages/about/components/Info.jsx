// STYLE
import { styled, useTheme } from "styled-components";
import { Add } from "@mui/icons-material";

const Info = ({ title, desc }) => {
  const { palette, fontSize, breakpoint, border } = useTheme();

  const Wrapper = styled.div`
    width: 60%;
    height: 300px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    margin: 3% 0 3% 0;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 80%;
      margin: 5% 0 5% 0;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 90%;
      margin: 7% 0 7% 0;
    }
  `;
  const Title = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 5% 0 5%;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-top-left-radius: ${border.radius}px;
    border-top-right-radius: ${border.radius}px;
    border-bottom: ${border.size}px dashed ${palette.black};
    background-color: ${palette.secondary};
  `;
  const Text = styled.h2`
    cursor: default;
    font-size: ${fontSize.regular}rem;
    font-weight: 600;
  `;
  const Content = styled.div`
    width: 100%;
    max-height: calc(100% - 80px);
    margin: 10px 0 5px 0;
    overflow: scroll;
    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const Description = styled.p`
    cursor: default;
    width: 95%;
    font-size: ${fontSize.light}rem;
  `;
  return (
    <Wrapper>
      <Title>
        <Text>{title}</Text>
      </Title>
      <Content>
        <Description>{desc}</Description>
      </Content>
    </Wrapper>
  );
};

export default Info;
