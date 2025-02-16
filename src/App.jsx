import { lazy } from "react";
import "./App.css";
import "./breakpoints.css";

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";

import Home from "./routes/Home";
import ScrollTop from "./components/scroll-top";
const ContactPage = lazy(() => import("./routes/contact-us"));
function App() {
  return (
    <div>
      <Routes>
        {/* Wrap all pages with the Layout component */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="contact-us" element={<ContactPage />} />
          {/* <Route path="about" element={<About />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
      <ScrollTop />
    </div>
  );
}

export default App;
