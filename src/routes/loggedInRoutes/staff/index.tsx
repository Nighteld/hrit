import React, { useMemo, useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { GenerateToken } from "@/auth/authAction";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAccessToken, getAppToken, toastError, toastSuccess } from "@/utils/helper";
import { fetchAgentLists } from "@/action/agentAction";
import { dateFormatter } from "@/utils/function";
import { Link } from "react-router";
import { fetchLeadsLists } from "@/action/leadAction";

export type Agent = {
  id: string;
  firstName: string;
  middleName?: string;
  lastName: string;
  gender: string;
  dateOfBirth: string;
  mobileNo: string;
  emailID: string;
  pan: string;
  agentUID: string;
  occupation: string;
};

export const columns: ColumnDef<Agent>[] = [
  {
    accessorKey: "FirstName",
    header: "First Name",
  },

  {
    accessorKey: "LastName",
    header: "Last Name",
  },

  {
    accessorKey: "PermanentAddress",
    header: "Permanent Address",
  },
  {
    accessorKey: "CorrespondingAddress",
    header: "Corresponding Address",
  },
  {
    accessorKey: "StudentContactNo",
    header: "Student Contact No",
  },
  {
    accessorKey: "ParentContactNo",
    header: "Parent Contact No",
  },
  {
    accessorKey: "Email",
    header: "Email",
  },

  {
    accessorKey: "SchoolName",
    header: "School Name",
  },
  {
    accessorKey: "SchoolAddress",
    header: "School Address",
  },
  {
    accessorKey: "Category",
    header: "Category",
  },
  {
    accessorKey: "CourseIntrested",
    header: "Course Interested",
  },
  {
    accessorKey: "Source",
    header: "Source",
  },
  {
    accessorKey: "KnowAbtCollege",
    header: "Known From",
  },
  {
    accessorKey: "Remarks",
    header: "Remarks",
  },
  {
    accessorKey: "CounselledDate",
    header: "Counselled Date",
  },
  {
    accessorKey: "FollowUpDate",
    header: "Fallow up Date",
  },
];

export function StaffGrid() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const { isPending, error, data } = useQuery({
    queryKey: ["staffList"],
    queryFn: () => fetchLeadsLists({}),
    retry: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  console.log("isPending", isPending);
  console.log("data2", data);
  console.log("error", error);

  const table = useReactTable({
    data: data ?? [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <section className="w-full">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Staff Lists</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4  justify-end">
            {/* <Input
                placeholder="Filter emails..."
                value={
                  (table.getColumn("emailId")?.getFilterValue() as string) ?? ""
                }
                onChange={(event) =>
                  table.getColumn("emailId")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
              /> */}
            <div className="flex items-center gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto">
                    Columns <ChevronDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) =>
                            column.toggleVisibility(!!value)
                          }
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      );
                    })}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/staff/create">
                <Button
                  variant="outline"
                  className="ml-auto bg-primary text-white"
                >
                  <Plus />
                  Add Staffs
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-md border overflow-x-auto">
            <Table className="">
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      // colSpan={columns?.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
