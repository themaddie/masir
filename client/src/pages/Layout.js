// STYLE
import { styled } from "styled-components";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";
// ROUTE
import { Outlet } from "react-router-dom";

const Layout = ({title}) => {
    const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
    
    return (
        <Wrapper>
            <Header title="title" />
            <Outlet />
            <Footer />
        </Wrapper>
    );
};

export default Layout;