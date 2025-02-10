import { Outlet } from "react-router";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { NavigationMenuDemo } from "./NavBarDemo";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      {/* <NavigationMenuDemo/> */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
