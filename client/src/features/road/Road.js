// STYLE
import { styled, useTheme } from "styled-components";
import { Add } from "@mui/icons-material";
// COMPONENT
import Step from "../step/Step";

const Road = ({ name, color }) => {
    const { palette, fontSize, breakpoint, border } = useTheme();

    const Wrapper = styled.div`
    width: 60%;
    height: 300px;
    border: ${border.size}px solid ${palette.black};
    border-radius: ${border.radius}px;
    @media (max-width: ${breakpoint.tablet}px) {
        width: 80%;
    }
    @media (max-width: ${breakpoint.phone}px) {
        width: 90%;
    }
    `;
    const Title = styled.div`
      width: 100%;
      height: 60px;
      display: flex;
      justify-content: space-between;
      padding: 0 5% 0 5%;
      align-items: center;
      border-top-left-radius: ${border.radius}px;
      border-top-right-radius: ${border.radius}px;
      border-bottom: ${border.size}px dashed ${palette.black};
      background-color: ${palette.neutral};
    `;
    const Text = styled.h2`
      font-size: ${fontSize.regular}rem;
      font-weight: 600;
    `;
    const Label = styled.span`
      font-size: ${fontSize.regular}rem;
      font-weight: 600;
      color: ${color};
    `;
    const Content = styled.div`
      width: 100%;
      max-height: calc(100% - 80px);
      margin: 15px 0 5px 0;
      overflow: scroll;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 25px;
    `;
    return (
        <Wrapper>
            <Title>
                <Text>مسیر <Label>{name}</Label></Text>
                <Add style={{ width: "32px", height: "32px", cursor: "pointer" }} />
            </Title>
            <Content>
                <Step label={color}/>
                <Step />
                <Step />
                <Step />
                <Step />
            </Content>
        </Wrapper>
    );
};

export default Road;