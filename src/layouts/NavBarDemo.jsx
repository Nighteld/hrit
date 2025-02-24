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
import { Twitter } from "lucide-react";
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
    title: "Blogs",
    href: "/blogs",
  },
];

export const academics = [
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

export const admission = [
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

const navItems = [
  { name: "Home", href: "/" },
  {
    name: "HRIT",
    href: "/academy",
    children: [
      {
        name: "About Us",
        href: "/about-us",
      },
      {
        name: "Our Mission",
        href: "/our-mission",
      },
    ],
  },
  { name: "Admission", href: "/admission" },
  { name: "Alumni Committee", href: "/alumni" },
  { name: "Notices", href: "/event" },
  { name: "News", href: "/news" },
  { name: "Gallery", href: "/gallery" },
  { name: "Downloads", href: "/downloads" },
  { name: "Contact", href: "/articles" },
];
console.log(navItems);

export function NavigationMenuDemo() {
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);
  return (
    <nav className="nav-menu flex justify-between h-[80px] w-full flex-wrap items-center px-2">
       <div className="flex md:hidden">
  <Link to="/">
    <img src="/hrit.png" alt="school-logo" height={80} width={250} />
  </Link>
</div>

      <NavigationMenu 
      className="hidden md:flex"
      >
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="nav-button">
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
            <NavigationMenuTrigger className="nav-button flex-1">
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
        <div className="md:flex hidden">
          <Link to="/">
            <img src="/hrit.png" alt="school-logo" height={80} width={250} />
          </Link>
        </div>
      <NavigationMenu
       className="hidden md:flex"
       >
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), "nav-button")}
              >
                Notices
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), "nav-button")}
              >
                News
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), "nav-button")}
              >
                Gallery
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="#">
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), "nav-button")}
              >
                Downloads
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="contact-us">
              <NavigationMenuLink
                className={clsx(navigationMenuTriggerStyle(), "nav-button")}
              >
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <MobileMenu/>
    </nav>
  );
}

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
