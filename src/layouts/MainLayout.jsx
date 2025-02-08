import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
