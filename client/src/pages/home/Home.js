// STYLE
import { styled, useTheme } from "styled-components";
// COMPONENT
import Today from "./components/Today";

const Home = () => {
    const { palette, breakpoint } = useTheme();

    const Wrapper = styled.div`
    width: 85vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: ${breakpoint.tablet}px) {
        height: 90vh;
        flex-direction: column;
        gap: 20px;
    }
    @media (max-width: ${breakpoint.phone}px) {
        height: 90vh;
        flex-direction: column;
    }
    `;
    const Info = styled.div`
    width: 38%;
    height: 85px;
    background-color: white;
    border: 2px solid ${palette.black};
    border-radius: 10px;
    `;
    return (
        <Wrapper>
            <Today>
            </Today>
            <Info>Info</Info>
        </Wrapper>
    );
};

export default Home;