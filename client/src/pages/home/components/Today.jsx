// STYLE
import { styled, useTheme } from "styled-components";
import { Add } from "@mui/icons-material";
// COMPONENT
import Step from "../../../features/step/Step";

const Today = () => {
  const { palette, fontSize, breakpoint } = useTheme();

  const Wrapper = styled.div`
    /* width: 40%;
    height: 85vh; */

    grid-column: 2 / 4;
    border: 2px solid ${palette.black};
    border-radius: 10px;
    background-color: red;
    /* @media (max-width: ${breakpoint.tablet}px) {
      width: 90%;
      height: 100%;
    }
    @media (max-width: ${breakpoint.phone}px) {
      width: 90%;
      height: 100%;
    } */
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
  const Box = styled.div`
    width: 100%;
    max-height: calc(85vh - 150px);
    margin: 25px 0 15px 0;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    gap: 35px;
    align-items: center;
  `;
  return (
    <Wrapper>
      <Title>
        <Text>گام‌های امروز</Text>
        <Add style={{ width: "38px", height: "38px", cursor: "pointer" }} />
      </Title>
      <Box>
        <Step number="1" />
        <Step number="2" />
        <Step number="3" />
        <Step number="4" />
        <Step number="5" />
        <Step number="6" />
        <Step number="7" />
        <Step number="8" />
        <Step number="9" />
        <Step number="10" />
        <Step number="11" />
        <Step number="12" />
        <Step number="13" />
        <Step number="14" />
        <Step number="15" />
      </Box>
    </Wrapper>
  );
};

export default Today;
