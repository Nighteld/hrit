import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";
import { Link } from "react-router";
import MobileMenu from "./MobileMenu";

export const components = [
  {
    title: "About Us",
    href: "/about-us",
    description: "Smart Choice for Smart Students",
  },
  {
    title: "Our Mission",
    href: "/our-mission",
    description: "Shaping Future Leaders",
  },
  {
    title: "Director",
    href: "/our-director",
  },
  {
    title: "Principal Message",
    href: "/our-principal",
  },
  {
    title: "Why Hrit",
    href: "/why-hrit",
  },
  {
    title: "Teaching Approach",
    href: "/teaching-approach",
  },
  {
    title: "Our Supports and facilities",
    href: "/support-facilities",
  },
  // {
  //   title: "Blogs",
  //   href: "/blogs",
  // },
];

export const academics = [
  {
    title: "Law",
    href: "/law",
  },
  {
    title: "Management",
    href: "/management",
  },
  {
    title: "Science",
    href: "/science",
  },
  {
    title: "Fine Arts",
    href: "/fine-arts",
  },
  {
    title: "Humanities",
    href: "/humanities",
  },
];

export const admission = [
  {
    title: "Admission Procedure",
    href: "/admission-procedure",
  },
  // {
  //   title: "Admission Form",
  //   href: "/admission-form",
  // },
  {
    title: "Scholarship Schemes",
    href: "/scholarship-schemes",
  },
  {
    title: "Hotel Management",
    href: "/hotel-management",
  },
  {
    title: "Business Studies",
    href: "/business-studies",
  },
  {
    title: "Computer Science",
    href: "/computer-science",
  },
];
export const downloads = [
  {
    title: "Book Lists",
    href: "/book-lists",
  },

  {
    title: "Class Schedules",
    href: "/class-schedules",
  },
  // {
  //   title: "Lecture Notes",
  //   href: "/hotel-management",
  // },
  // {
  //   title: "Exam Schedules",
  //   href: "/business-studies",
  // },
];
export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);
  return (
    <nav className="nav-menu bg-white flex justify-between h-[80px] w-full flex-wrap items-center px-2 sticky inset-0 z-50">
      <div className="flex md:hidden">
        <Link to="/">
          <img src="/hrit.png" alt="school-logo" height={80} width={250} />
        </Link>
      </div>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-button">
              HRIT
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] z-10">
                {components.map((component) => (
                  // <Link to={component.href} key={component.title}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  >
                    {component.description}
                  </ListItem>
                  // </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-button">
              Academics
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {academics.map((component) => (
                  // <Link to={component.href} key={component.title}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  >
                    {component.description}
                  </ListItem>
                  // </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-button flex-1">
              Admission
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {admission.map((component) => (
                  // <Link to={component.href} key={component.title}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  >
                    {component.description}
                  </ListItem>
                  // </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            {/* <Link to="/alumni-committee"> */}
            <Link
              to="/alumni-committee"
              className={clsx(navigationMenuTriggerStyle(), "nav-button")}
            >
              Alumni committee
            </Link>
            {/* </Link> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="md:flex hidden">
        <Link to="/">
          <img src="/hrit.png" alt="school-logo" height={80} width={250} />
        </Link>
      </div>
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <Link
              to="/notices"
              className={clsx(navigationMenuTriggerStyle(), "nav-button")}
            >
              Notices
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="/news"
              className={clsx(navigationMenuTriggerStyle(), "nav-button")}
            >
              News
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="#"
              className={clsx(navigationMenuTriggerStyle(), "nav-button")}
            >
              Gallery
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-button flex-1">
              Downloads
            </NavigationMenuTrigger>
            <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[400px]">
                {downloads.map((component) => (
                  // <Link to={component.href} key={component.title}>
                  <ListItem
                    key={component.title}
                    title={component.title}
                    to={component.href}
                  >
                    {component.description}
                  </ListItem>
                  // </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              to="contact-us"
              className={clsx(navigationMenuTriggerStyle(), "nav-button")}
            >
              Contact Us
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileMenu />
    </nav>
  );
}

const ListItem = React.forwardRef(({ className, title, children, to }, ref) => {
  return (
    <li>
      {/* <NavigationMenuLink asChild> */}
      <Link
        ref={ref}
        to={to} // Ensure "to" is correctly passed down
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        {children && (
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        )}
      </Link>
      {/* </NavigationMenuLink> */}
    </li>
  );
});

ListItem.displayName = "ListItem";
