import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Single from "./pages/Single";
import { Navbar } from "./components/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/single/:type/:uid" element={<Single />} />
      </Routes>
    </>
  );
};

export default Layout;