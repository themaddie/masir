// STYLE
import { styled, useTheme } from "styled-components";

const Header = ({ title }) => {
  const { palette, border } = useTheme();

  const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
  const Dashed = styled.div`
    width: 45%;
    height: 100px;
    border-bottom: ${border.size}px dashed ${palette.black};
  `;
  const Title = styled.h1`
    display: block;
    margin-top: 70px;
    cursor: default;
  `;

  return (
    <Wrapper>
      <Dashed />
      <Title>{title}</Title>
      <Dashed />
    </Wrapper>
  );
};

export default Header;
