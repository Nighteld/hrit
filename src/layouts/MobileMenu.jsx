import React, { useState } from "react";
import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const components = [
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
      href: "/docs/primitives/progress",
    },
    {
      title: "Principal Message",
      href: "/docs/primitives/progress",
    },
    {
      title: "Why Hrit",
      href: "/docs/primitives/scroll-area",
    },
    {
      title: "Blogs",
      href: "/docs/primitives/tabs",
    },
  ];
  const academics = [
    {
      title: "Law",
      href: "/about-us",
    },
    {
      title: "Management",
      href: "/our-mission",
    },
    {
      title: "Science",
      href: "/docs/primitives/progress",
    },
    {
      title: "Fine Arts",
      href: "/docs/primitives/progress",
    },
    {
      title: "Humanities",
      href: "/docs/primitives/scroll-area",
    },
  ];

  const admission = [
    {
      title: "Admission Procedure",
      href: "/about-us",
    },
    {
      title: "Admission Form",
      href: "/our-mission",
    },
    {
      title: "Scholarship Schemes",
      href: "/docs/primitives/progress",
    },
    {
      title: "Hotel Management",
      href: "/docs/primitives/progress",
    },
    {
      title: "Business Studies",
      href: "/docs/primitives/scroll-area",
    },
    {
      title: "Computer Science",
      href: "/docs/primitives/scroll-area",
    },
  ];

  console.log("isOpen", isOpen);
  return (
    <div className="flex md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-color rounded-sm ${
            isOpen ? "rotate-45 origin-left ease-in-out duration-500" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-color rounded-sm ${
            isOpen ? "opacity-0 ease-in-out duration-500" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-color rounded-sm ${
            isOpen ? "-rotate-45 origin-left ease-in-out duration-500" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute bg-color text-white left-0 top-20 w-full  bg-white flex flex-col  gap-8 font-medium text-xl z-10 p-5">
          <ul className="list-style-wrapper">
            <li className="">
              <div className="flex justify-between items-center">
                HRIT
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5 ease-in-out duration-500">
                {components.map((component) => (
                  <Link to={component.href} key={component.title}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>

            <li className="">
              {" "}
              <div className="flex justify-between items-center">
                Academics
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5">
                {academics.map((component) => (
                  <Link to={component.href} key={component.title}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>
            <li>
              <div className="flex justify-between items-center">
                Admission
                <label>
                  <input type="checkbox" hidden />
                  {/* <Plus /> */}
                </label>
              </div>
              <ul className="ml-5 ease-in-out duration-500">
                {admission.map((component) => (
                  <Link to={component.href} key={component.title}>
                    <li>{component.title}</li>
                  </Link>
                ))}
              </ul>
            </li>
            <li>Alumni committee</li>
            <li>Notices</li>
            <li>News</li>
            <li>Gallery</li>

            <li>Downloads</li>
            <li>Contact Us</li>
          </ul>

          {/* <Link to="/">Friends</Link>
          <Link to="/">Groups</Link>
          <Link to="/">Stories</Link>
          <Link to="/">Login</Link> */}
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
