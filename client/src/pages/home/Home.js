// STYLE
import { styled, useTheme } from "styled-components";
// COMPONENT
import Today from "./components/Today";

const Home = () => {
    const { palette, breakpoint } = useTheme();

    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(6, 1fr);
    column-gap: 50px;
     @media (max-width: ${breakpoint.tablet}px) {
    /* grid-template-columns: auto auto auto;  */
        /* height: 90vh;
        flex-direction: column;
        gap: 20px; */
    }

    @media (max-width: ${breakpoint.phone}px) {
    /* grid-template-columns: auto;  */
        /* height: 90vh;
        flex-direction: column; */
    }
    `;
    const Info = styled.div`
    /* width: 38%;
    height: 85px; */
    /* width: 100%; */
    height: 80%;
    background-color: black;
    border: 2px solid ${palette.black};
    border-radius: 10px;
    grid-column: 4 / 6;
    `;
    return (
        <Wrapper>
            <Today>
                hi
            </Today>
            <Info>Info</Info>
        </Wrapper>
    );
};

export default Home;