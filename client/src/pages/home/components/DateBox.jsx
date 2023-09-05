// STYLE
import { styled, useTheme } from "styled-components";

const DateBox = () => {
  const { palette, fontSize, border } = useTheme();
  const Wrapper = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    color: ${palette.black};
    font-size: ${fontSize.ligth}rem;
    font-weight: 600;
    background-color: ${palette.primary};
  `;
  return <Wrapper>{Date.now()}</Wrapper>;
};

export default DateBox;
