// STYLE
import { styled, useTheme } from "styled-components";

const Step = ({ number }) => {
    const {palette} = useTheme();

    const Wrapper = styled.div`
    width: 90%;
    min-height: 50px;
    text-align: center;
    border-right: 2px solid ${palette.roads.gray};
    `;
    return (
        <Wrapper>
            Step {number}
        </Wrapper>
    );
};

export default Step;