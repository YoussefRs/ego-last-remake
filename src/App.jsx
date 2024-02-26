import "./App.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/navbar/Navbar";
import Footer from "./components/global/footer/Footer";
import SideMenu from "./components/global/sidemenu/SideMenu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar show={setShowSideMenu} />
        <SideMenu show={showSideMenu} handleShow={setShowSideMenu} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
