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

import { Button } from "@/components/ui/button"
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
} from "@/components/ui/dropdown-menu"
import clsx from "clsx";
import { cn } from "@/lib/utils";

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
    <div className=" ">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer "
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "rotate-45 origin-left ease-in-out duration-500" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "opacity-0 ease-in-out duration-500" : ""
          }`}
        />
        <div
          className={`w-6 h-1 bg-blue-500 rounded-sm ${
            isOpen ? "-rotate-45 origin-left ease-in-out duration-500" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="absolute left-0 top-20 w-full h-[calc(100vh-80px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="">
                  HRIT
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] z-10">
                    {components.map((component) => (
                      <Link to={component.href} key={component.title}>
                        <ListItem
                          key={component.title}
                          title={component.title}
                          to={component.href}
                        >
                          {component.description}
                        </ListItem>
                      </Link>
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
                      <Link to={component.href} key={component.title}>
                        <ListItem
                          key={component.title}
                          title={component.title}
                          to={component.href}
                        >
                          {component.description}
                        </ListItem>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="nav-button">
                  Admission
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {admission.map((component) => (
                      <Link to={component.href} key={component.title}>
                        <ListItem
                          key={component.title}
                          title={component.title}
                          to={component.href}
                        >
                          {component.description}
                        </ListItem>
                      </Link>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="#">
                  <NavigationMenuLink
                    className={clsx(navigationMenuTriggerStyle(), "nav-button")}
                  >
                    Alumni committee
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
         
          <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Open</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
          <DropdownMenuItem>
            New Team
            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

          <Link to="/">Friends</Link>
          <Link to="/">Groups</Link>
          <Link to="/">Stories</Link>
          <Link to="/">Login</Link>
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
