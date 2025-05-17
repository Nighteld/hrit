import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { schoolDetails } from "@/utils/constant";
import { getLoggedInUser, getLoggedInUserCategory } from "@/utils/helper";
// This is sample data.
let data = {
  user: {
    name: "Admin",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Hrit Academy",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Enquiry",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Student Registration",
          url: "/admission",
        },
        {
          title: "Student Enquiry",
          url: "/student/enquiry",
        },
        // {
        //   title: "Settings",
        //   url: "#",
        // },
      ],
    },
    {
      title: "Agent",
      url: "agent",
      icon: Bot,
      isActive: true,
    },
    {
      title: "Leads",
      url: "leads",
      icon: Bot,
      isActive: true,
    },
    {
      title: "Staff",
      url: "staff",
      icon: Bot,
      isActive: true,
    },
    {
      title: "Stake Holder",
      url: "stake-holder",
      icon: Bot,
      isActive: true,
    },
    // {
    //   title: "Documentation",
    //   url: "#",
    //   icon: BookOpen,
    //   items: [
    //     {
    //       title: "Introduction",
    //       url: "#",
    //     },
    //     {
    //       title: "Get Started",
    //       url: "#",
    //     },
    //     {
    //       title: "Tutorials",
    //       url: "#",
    //     },
    //     {
    //       title: "Changelog",
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Event",
          url: "events",
        },
        // {
        //   title: "Team",
        //   url: "#",
        // },
        // {
        //   title: "Billing",
        //   url: "#",
        // },
        // {
        //   title: "Limits",
        //   url: "#",
        // },
      ],
    },
  ],

  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};
console.log("data", data);
console.log("getLoggedInUserCategory", getLoggedInUserCategory());
console.log("getLoggedInUser", getLoggedInUser());
if (getLoggedInUserCategory() === "STAFF") {
  debugger;
  const user = getLoggedInUser();
  if (typeof user === "object" && user !== null && "allowEvent" in user) {
    if (Number(user.allowEvent)) {
      // Your code here
      data = {
        ...data,
        navMain: [
          {
            title: "Leads",
            url: "leads",
            icon: Bot,
            isActive: true,
          },
        ],
      };
    } else {
      data = {
        ...data,
        navMain: [
           {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Event",
          url: "events",
        },

      ],
    },
        ],
      };
    }
  }
}
console.log("updatedData", data);
export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props} className="" variant="">
      <SidebarHeader className="">
        <img
          src={schoolDetails.logo}
          alt="school-logo"
          className="cursor-pointer"
        />

        {/* <TeamSwitcher teams={data.teams} /> */}
      </SidebarHeader>
      <SidebarContent className="">
        <NavMain items={data.navMain} />

        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter className="">
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail className="" />
    </Sidebar>
  );
}
