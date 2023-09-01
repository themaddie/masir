// ROUTE
import { Route, Routes } from "react-router-dom";
// PAGES
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Layout from "./pages/Layout";
import About from "./pages/about/About";
import Profile from "./pages/profile/Profile";
import Roads from "./pages/roads/Roads";
import Maps from "./pages/maps/Maps";
import Error from "./pages/error/Error";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="page/" element={<Layout />}>
          <Route index element={<Error />} />
          <Route path="about" element={<About />} />
          <Route path="profile" element={<Profile />} />
          <Route path="roads" element={<Roads />} />
          <Route path="maps" element={<Maps />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
