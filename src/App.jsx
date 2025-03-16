import { lazy } from "react";
import "./App.css";
import "./breakpoints.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";

import Home from "./routes/Home";
import AlumniCommittee from "./routes/almuniee-comittee";
import NoticesFeed from "./routes/notices-feed";
import News from "./routes/news";
import ClassSchedules from "./routes/class-schedules";
import MainLayoutAuthenticated from "./layouts/MainLayoutLoggedIn";
import Dashboard from "./routes/loggedInRoutes/dashboard";
const ScrollTop = lazy(() => import("./components/scroll-top"));
const BookList = lazy(() => import("./routes/book-list"));
const OurMission = lazy(() => import("./routes/our-mission"));
const OurDirector = lazy(() => import("./routes/our-director"));
const OurPrincipal = lazy(() => import("./routes/our-principal"));
const WhyUs = lazy(() => import("./routes/why-hrit"));
const SupportFacilities = lazy(() => import("./routes/support-facilities"));
const AdmissionProcedure = lazy(() => import("./routes/AdmissionProcedure"));
const ScholarShipSchemes = lazy(() => import("./routes/scholarship-schemes"));
const HotelManagement = lazy(() => import("./routes/hotel-management"));
const BusinessStudies = lazy(() => import("./routes/business-studies"));
const ComputerScience = lazy(() => import("./routes/computer-science"));
const ContactPage = lazy(() => import("./routes/contact-us"));
const AboutUs = lazy(() => import("./routes/about-us"));
const Humanities = lazy(() => import("./routes/humanities"));
const FineArts = lazy(() => import("./routes/fine-arts"));
const Science = lazy(() => import("./routes/science"));
const Management = lazy(() => import("./routes/management"));
const Law = lazy(() => import("./routes/law"));
const TeachingApproach = lazy(() => import("./routes/teaching-approach"));

AOS.init();
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
          <Route path="why-hrit" element={<WhyUs />} />
          <Route path="teaching-approach" element={<TeachingApproach />} />
          <Route path="support-facilities" element={<SupportFacilities />} />
          <Route path="law" element={<Law />} />
          <Route path="management" element={<Management />} />
          <Route path="science" element={<Science />} />
          <Route path="fine-arts" element={<FineArts />} />
          <Route path="humanities" element={<Humanities />} />
          <Route path="admission-procedure" element={<AdmissionProcedure />} />
          <Route path="scholarship-schemes" element={<ScholarShipSchemes />} />
          <Route path="hotel-management" element={<HotelManagement />} />
          <Route path="business-studies" element={<BusinessStudies />} />\
          <Route path="computer-science" element={<ComputerScience />} />
          <Route path="alumni-committee" element={<AlumniCommittee />} />
          <Route path="notices" element={<NoticesFeed />} />
          <Route path="news" element={<News />} />
          <Route path="book-lists" element={<BookList />} />
          <Route path="class-schedules" element={<ClassSchedules />} />
          
          
          <Route path="*" element={<h1>Not Found ...</h1>} />
        </Route>
        <Route path="/" element={<MainLayoutAuthenticated />}>
        <Route path="dashboard" element={<Dashboard />} />

</Route>
      </Routes>
      <ScrollTop />
    </div>
  );
}

export default App;
