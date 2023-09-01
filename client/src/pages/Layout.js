// ROUTE
import { Outlet } from "react-router-dom";
// COMPONENTS
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;