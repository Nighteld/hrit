import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { GenerateToken } from "@/auth/authAction";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchStudentEnquiryList } from "@/action/enquiryAction";

export function StudentsEnquiry() {
 
  const {
    isPending,
    error,
    data: data2,
  } = useQuery({
    queryKey: ["studentLists"],
    queryFn: fetchStudentEnquiryList,
    retry: false, // Disables retries
  });
  // console.log("isPending", isPending);
  // console.log("data2", data2);
  // console.log("error", error);

  return (
    <section className="w-full">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Student Enquiry Lists</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">SN</TableHead>
                <TableHead>StudentName</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>ContactNo</TableHead>
                <TableHead>GuardianName</TableHead>
                <TableHead>GuardianContactNo</TableHead>
                <TableHead>SchoolNameAddress</TableHead>
                <TableHead>IntrestedProgram</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data2 &&
                data2.map((item) => (
                  <TableRow key={item.ID}>
                    <TableCell>{item.ID}</TableCell>
                    <TableCell>{item.StudentName}</TableCell>
                    <TableCell>{item.Address}</TableCell>
                    <TableCell>{item.ContactNo}</TableCell>
                    <TableCell>{item.GuardianName}</TableCell>
                    <TableCell>{item.GuardianContactNo}</TableCell>
                    <TableCell key={item.ID}>
                      {item.SchoolNameAddress}
                    </TableCell>
                    <TableCell key={item.ID}>{item.IntrestedProgram}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
            {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
          </Table>
        </CardContent>
      </Card>
    </section>
  );
}
