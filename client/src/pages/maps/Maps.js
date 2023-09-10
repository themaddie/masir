// STYLE
import { styled, useTheme } from "styled-components";
import { EmojiFoodBeverageRounded } from "@mui/icons-material";
// ROUTE
import { Link } from "react-router-dom";
// COMPONENT
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Maps = ({ title }) => {
    const { palette } = useTheme();

    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    `;
    const Content = styled.div`
    min-height: calc(100vh - 170px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${palette.disable};
    `;
    const Text = styled.span`
    display: block;
    max-width: 700px;
    cursor: default;
    margin-bottom: 1%;
    `;

    return (
        <Wrapper>
            <Header title={title} />
            <Content>
                <Text>این قسمت هنوز در حال ساخت و سازه
                    و به زودی با کلی فیچر باحال منتشر میشه!</Text>
                <Text>می‌تونی تو این مدت، تجربه‌ات از نسخه فعلی رو برامون بفرستی
                    یا حتی یه لیوان چایی برامون بخری!‌ :))</Text>
                <Link to="/page/about">
                    <EmojiFoodBeverageRounded style={{ color: `${palette.disable}`, cursor: "pointer" }} />
                </Link>
            </Content>
            <Footer />
        </Wrapper>
    );
};

export default Maps;