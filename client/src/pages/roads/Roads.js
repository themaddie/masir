// STYLE
import { styled, useTheme } from "styled-components";
// COMPONENT
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Road from "../../features/road/Road";

const Roads = () => {
    const { palette, breakpoint } = useTheme();

    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    `;
    const Content = styled.div`
    min-height: calc(100vh - 155px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 3% 0 3% 0;
    @media (max-width: ${breakpoint.tablet}px) {
        margin: 5% 0 5% 0;
    }
    @media (max-width: ${breakpoint.phone}px) {
        margin: 8% 0 8% 0;
    }
    `;

    return (
        <Wrapper>
            <Header title="مسیرها" />
            <Content>
                <Road name="زندگی" color={palette.roads.gray} />
                <Road name="کار" color={palette.roads.yellow} />
                <Road name="تفریح" color={palette.roads.pink} />
                <Road name="جلسات" color={palette.roads.purple} />
                <Road name="پروژه" color={palette.roads.green} />
                <Road name="کنکور" color={palette.roads.blue} />
            </Content>
            <Footer />
        </Wrapper>
    );
};

export default Roads;