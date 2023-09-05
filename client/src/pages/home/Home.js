// STYLE
import { styled, useTheme } from "styled-components";
// COMPONENT
import Today from "./components/Today";
import DateBox from "./components/DateBox";
import RoadsBox from "./components/RoadsBox";
import MapsBox from "./components/MapsBox";
import AboutBox from "./components/AboutBox";
import ProfileBox from "./components/ProfileBox";

const Home = () => {
    const { breakpoint } = useTheme();
    // BODY
    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    align-items: center;
    justify-content: center;
    @media (max-width: ${breakpoint.phone}px) {
        grid-template-rows: repeat(1, 1fr);
        grid-template-columns: repeat(1, 1fr);
    }
    `;
    const Right = styled.div`
    grid-column: 2 / span 3;
    height: 80vh;
     @media (max-width: ${breakpoint.tablet}px) {
    grid-column: 2 / span 4;
    margin: 0% 0% 0% 20%;
    }
    @media (max-width: ${breakpoint.phone}px) {
    grid-column: 1;
    grid-row: 1;
    margin: 5% 10% 5% 10%;
    }
    `;
    const Left = styled.div`
    grid-column: 6 / span 2;
    display: flex;
    flex-direction: column;
    gap: 2%;
    height: 80vh;
     @media (max-width: ${breakpoint.tablet}px) {
    grid-column: 6 / span 2;
    }
    @media (max-width: ${breakpoint.phone}px) {
    grid-column: 1;
    grid-row: 2;
    margin: 0% 10% 0% 10%;
    padding-bottom: 10%;
    }
    `;
    const Box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    `;

    return (
        <Wrapper>
            <Right>
                <Today />
            </Right>
            <Left>
                <DateBox />
                <Box>
                    <ProfileBox name="مهدیه" />
                    <AboutBox />
                </Box>
                <RoadsBox />
                <MapsBox />
            </Left>
        </Wrapper>
    );
};

export default Home;