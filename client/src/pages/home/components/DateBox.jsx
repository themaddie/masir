// STYLE
import { styled, useTheme } from "styled-components";

const DateBox = () => {
  const { palette, fontSize } = useTheme();
  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 2px solid ${palette.black};
    border-radius: 10px;
    color: ${palette.black};
    font-size: ${fontSize.ligth}rem;
    font-weight: 600;
    background-color: ${palette.secondary};
  `;
  return <Wrapper>{Date.now()}</Wrapper>;
};

export default DateBox;
