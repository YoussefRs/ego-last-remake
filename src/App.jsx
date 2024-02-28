import "./App.css";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { useEffect, useState } from "react";

import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/global/navbar/Navbar";
import Footer from "./components/global/footer/Footer";
import SideMenu from "./components/global/sidemenu/SideMenu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NavbarTwo from "./components/global/navbar-two/NavbarTwo";
import Privacy from "./pages/privacy/Privacy";
import Terms from "./pages/terms/Terms";
import Team from "./pages/team/Team";
import Jobs from "./pages/jobs/Jobs";
import JobDetails from "./pages/job-details/JobDetails";
import Faq from "./pages/faq/Faq";
import BackToTopButton from "./components/global/back-to-top/BackToTopButton";
import CourseDetails from "./pages/course-details/CourseDetails";
import Courses from "./pages/courses/Courses";
import Events from "./pages/event/Events";
import News from "./pages/news/News";
import NewDetails from "./pages/new-details/NewDetails";
import RegistrationForm from "./pages/registration-form/RegistrationForm";
import EnrollmentForm from "./pages/course-purchase/EnrollmentForm";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Navbar show={setShowSideMenu} />
      <SideMenu show={showSideMenu} handleShow={setShowSideMenu} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/team" element={<Team />} />
        {/* <Route path="/jobs" element={<Jobs />} /> */}
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/register" element={<RegistrationForm />} />
        {/* <Route path="/job/:slug" element={<JobDetails />} /> */}
        <Route path="/course/:slug" element={<CourseDetails />} />
        <Route path="/news/:slug" element={<NewDetails />} />
        <Route path="/enrollment" element={<EnrollmentForm />} />
        <Route path="/course/:slug/enrollment" element={<EnrollmentForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
