import { fetchDashboardDetailsStaff } from "@/action/staffAction";
import { SectionCards } from "@/components/staff/section.cards";
import { useQuery } from "@tanstack/react-query";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { dateFormatter } from "@/utils/function";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { fetchDashboarDetailsStakeHolders } from "@/action/stakeHolderAction";
import { fetchStudentCounts } from "@/action/agentAction";

export default function AgentDashboard() {
  const { data  } = useQuery({
    queryKey: ["agentDashboards"],
    queryFn: () => fetchStudentCounts({}),
    retry: true,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
  console.log("dataDashboard",data)
  // const { leads = [] } = stakeHolders || {};
  // const { counts = [] } = stakeHolders || {};
  // const { agentInfo = [] } = stakeHolders || {};
  // const { staffInfo = [] } = stakeHolders || {};
  // const { studentInfo = [] } = stakeHolders || {};
  // const { enquiry = [] } = stakeHolders || {};

  return (
     <div className="flex flex-1 flex-col bg-slate-100">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              {data && (
             <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-3 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
  <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>All Total Students</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
{data.TotalStudentCount||0}
          </CardTitle>
          {/* <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div> */}
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Computer Science (Management)</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
{data.ManagementComp||0}

          </CardTitle>
          {/* <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div> */}
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Business Studies (Management)</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
{data.ManagementBuss||0}


          </CardTitle>
          {/* <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div> */}
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>{" "}
      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Hotel Management (Mangement)</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
  {data.ManagementHtlMgmt||0}


          </CardTitle>
          {/* <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div> */}
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>{" "}
   

      <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Biology  (Science)</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
             {data.ScienceBio||0}


          </CardTitle>
          {/* <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div> */}
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>
            <Card className="@container/card">
        <CardHeader className="relative">
          <CardDescription>Computer Science  (Science)</CardDescription>
          <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {data.ScienceComp||0}

          </CardTitle>
          {/* <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              +12.5%
            </Badge>
          </div> */}
        </CardHeader>
        {/* <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter> */}
      </Card>

    </div>
             )}
              <div className="px-4 lg:px-6">
{/* 
             <Table>
  <TableCaption>A list of your recent Fallowup.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Full Name</TableHead>
      <TableHead>Temp Address</TableHead>
      <TableHead>Phone No</TableHead>
      <TableHead>Coruse Intrested</TableHead>
      <TableHead>FollowUpDate</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {leads.map((lead: any) => (
      <TableRow key={lead.ID}>
        <TableCell className="font-medium">{lead?.FirstName + " "+ lead?.LastName }</TableCell>
        <TableCell>{lead?.CorrespondingAddress}</TableCell>
        <TableCell>{lead?.StudentContactNo}</TableCell>
        <TableCell>{lead?.CourseIntrested}</TableCell>
        <TableCell>{dateFormatter(lead?.FollowUpDate)}</TableCell>
      </TableRow>
    ))}
    
  </TableBody>
</Table> */}
</div>


            </div>
          </div>
        </div>
  );
}
