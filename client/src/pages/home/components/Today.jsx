// STYLE
import { styled, useTheme } from "styled-components";
import { Add } from "@mui/icons-material";

const Today = () => {
  const { palette, fontSize, breakpoint } = useTheme();

  const Wrapper = styled.div`
    width: 50%;
    height: 85vh;
    border: 2px solid ${palette.black};
    border-radius: 10px;
    @media (max-width: ${breakpoint.tablet}px) {
      width: 90%;
      height: 100%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 90%;
      height: 100%;
    }
  `;
  const Title = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 2px dashed ${palette.black};
    background-color: ${palette.primary};
  `;
  const Text = styled.h1`
    font-size: ${fontSize.demi}rem;
    font-weight: 600;
    cursor: default;
  `;
  return (
    <Wrapper>
      <Title>
        <Text>گام‌های امروز</Text>
        <Add style={{ width: "38px", height: "38px", cursor: "pointer" }} />
      </Title>
    </Wrapper>
  );
};

export default Today;
