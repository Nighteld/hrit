import { Link, Outlet, useLocation } from "react-router";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function MainLayoutAuthenticated() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((path) => path);
  console.log("path", pathnames)
  return (
    <main>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/admission">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                {pathnames.map((value, index) => {
                  const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                  const isLast = index === pathnames.length - 1;

                  return (
                    <BreadcrumbItem key={to}>
                      {!isLast ? (
                        <BreadcrumbLink asChild>
                          <Link to={to}>{decodeURIComponent(value)}</Link>
                        </BreadcrumbLink>
                      ) : (
                        <span className="text-muted-foreground capitalize">
                          {decodeURIComponent(value)}
                        </span>
                      )}
                      {!isLast && <BreadcrumbSeparator />}
                    </BreadcrumbItem>
                  );
                })}
              </BreadcrumbList>
              </Breadcrumb>

              
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <Outlet />

            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
              <div className="aspect-video rounded-xl bg-muted/50" />
            </div>
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
