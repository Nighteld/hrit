import { lazy } from "react";
import "./App.css";
import "./breakpoints.css";

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";

import Home from "./routes/Home";
import ScrollTop from "./components/scroll-top";
import BookList from "./routes/book-list";
import OurMission from "./routes/our-mission";
import OurDirector from "./routes/our-director";
import OurPrincipal from "./routes/our-principal";
import WhyUs from "./routes/why-hrit";
const ContactPage = lazy(() => import("./routes/contact-us"));
const AboutUs = lazy(() => import("./routes/about-us"));
function App() {
  return (
    <div>
      <Routes>
        {/* Wrap all pages with the Layout component */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactPage />} />
          <Route path="book-list" element={<BookList />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="our-mission" element={<OurMission />} />
          <Route path="our-director" element={<OurDirector />} />
          <Route path="our-principal" element={<OurPrincipal />} />
          <Route path="why-hrit" element={<WhyUs />}  />
          <Route path="*" element={<h1>No Found ...</h1>} />   
        </Route>
      </Routes>
      <ScrollTop />
    </div>
  );
}

export default App;
