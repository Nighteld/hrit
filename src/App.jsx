import { lazy } from "react";
import "./App.css";
import "./breakpoints.css";

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";

import Home from "./routes/Home";
import ScrollTop from "./components/scroll-top";
import BookList from "./routes/book-list";
import AboutUs from "./routes/about-us";
const ContactPage = lazy(() => import("./routes/contact-us"));
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
          <Route path="*" element={<AboutUs />} /> 
        </Route>
      </Routes>
      <ScrollTop />
    </div>
  );
}

export default App;
