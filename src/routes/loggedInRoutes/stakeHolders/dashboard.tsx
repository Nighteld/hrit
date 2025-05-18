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

export default function StakeHolderDashboard() {
  const { data: stakeHolders } = useQuery({
    queryKey: ["stakeHolders"],
    queryFn: () => fetchDashboarDetailsStakeHolders({}),
    retry: true,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
  const { leads = [] } = stakeHolders || {};
  const { counts = [] } = stakeHolders || {};
  const { agentInfo = [] } = stakeHolders || {};
  const { staffInfo = [] } = stakeHolders || {};
  const { studentInfo = [] } = stakeHolders || {};
  const { enquiry = [] } = stakeHolders || {};

  return (
    <div className="flex flex-1 flex-col bg-slate-100">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="*:data-[slot=card]:shadow-xs @xl/main:grid-cols-2 @5xl/main:grid-cols-5 grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card lg:px-6">
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Leads</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {counts[0]?.LeadsCount}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Agents</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {counts[0]?.AgentCount}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Staff</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {counts[0]?.StaffCount}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Students</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {counts[0]?.StudentCount}
                </CardTitle>
              </CardHeader>
            </Card>
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Enquiry</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {counts[0]?.EnquiryCount}
                </CardTitle>
              </CardHeader>
            </Card>
          </div>

          <div className="px-4 lg:px-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Table className="h-[200px]">
                  <TableCaption>A list of your recent Staff.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Full Name</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Phone No</TableHead>
                      <TableHead>Nationality</TableHead>
                      <TableHead>Religion</TableHead>
                      {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {staffInfo.map((staff: any) => (
                      <TableRow key={staff.StaffID}>
                            <TableCell className="font-medium">
                          {staff?.FirstName + " " + staff?.MiddleName +" " + staff?.LastName}
                        </TableCell>
                        <TableCell>{staff?.GENDER}</TableCell>
                        <TableCell>{staff?.CONTACTNO}</TableCell>
                        <TableCell>{staff?.Nationality}</TableCell>
                        <TableCell>
                          {(staff?.Religion)}
                        </TableCell>
                        {/* <TableCell className="text-right">{lead.amount}</TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div>
                <Table className="h-[200px]">
                  <TableCaption>A list of your recent Agents.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Full Name</TableHead>
                      <TableHead>Gender</TableHead>
                      <TableHead>Mobile No</TableHead>
                      <TableHead>nationality</TableHead>

                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {agentInfo.map((agent: any,index:number) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {agent?.firstName + " " + agent?.middleName +" " + agent?.lastName}
                        </TableCell>
                        <TableCell>{agent?.gender}</TableCell>
                        <TableCell>{agent?.mobileNo}</TableCell>
                        <TableCell>{agent?.nationality}</TableCell>
                      
                        {/* <TableCell className="text-right">{lead.amount}</TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        <div className="px-4 lg:px-6">
            <div className="grid md:grid-cols-1 gap-4">
            
                <div>
                <Table className="h-[200px]">
                  <TableCaption>A list of your recent Fallowup.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Full Name</TableHead>
                      <TableHead>Temp Address</TableHead>
                      <TableHead>Phone No</TableHead>
                      <TableHead>Coruse Intrested</TableHead>
                      <TableHead>FollowUpDate</TableHead>
                      {/* <TableHead className="text-right">Amount</TableHead> */}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {leads.map((lead: any) => (
                      <TableRow key={lead.ID}>
                        <TableCell className="font-medium">
                          {lead?.FirstName + " " + lead?.LastName}
                        </TableCell>
                        <TableCell>{lead?.CorrespondingAddress}</TableCell>
                        <TableCell>{lead?.StudentContactNo}</TableCell>
                        <TableCell>{lead?.CourseIntrested}</TableCell>
                        <TableCell>
                          {dateFormatter(lead?.FollowUpDate)}
                        </TableCell>
                        {/* <TableCell className="text-right">{lead.amount}</TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
