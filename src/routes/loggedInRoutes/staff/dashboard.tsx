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
} from "@/components/ui/table"
import { dateFormatter } from "@/utils/function";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { fetchDashboarDetailsStakeHolders } from "@/action/stakeHolderAction";

export default function StaffDashboard() {
      const { isPending, error, data } = useQuery({
    queryKey: ["staffDashboard"],
    queryFn: () => fetchDashboardDetailsStaff({}),
    retry: true,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
       const { data :stakeHolders} = useQuery({
    queryKey: ["stakeHolders"],
    queryFn: () => fetchDashboarDetailsStakeHolders({}),
    retry: true,
    // refetchOnMount: false,
    // refetchOnWindowFocus: false,
  });
const { leads = [] } = data || {};
const { counts = [] } = data || {};

    return (
         <div className="flex flex-1 flex-col bg-slate-100">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards data={counts}/>
             
              <div className="px-4 lg:px-6">

             <Table>
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
        <TableCell className="font-medium">{lead?.FirstName + " "+ lead?.LastName }</TableCell>
        <TableCell>{lead?.CorrespondingAddress}</TableCell>
        <TableCell>{lead?.StudentContactNo}</TableCell>
        <TableCell>{lead?.CourseIntrested}</TableCell>
        <TableCell>{dateFormatter(lead?.FollowUpDate)}</TableCell>
        {/* <TableCell className="text-right">{lead.amount}</TableCell> */}
      </TableRow>
    ))}
    
  </TableBody>
</Table>
</div>
 <div className="px-4 lg:px-6">
                <ChartAreaInteractive />
              </div>

            </div>
          </div>
        </div>
    )
}