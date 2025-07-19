import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
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
import {
  ArrowUpDown,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronsDown,
  MoreHorizontal,
  Plus,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { GenerateToken } from "@/auth/authAction";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import {
  getAccessToken,
  getAppToken,
  isAuthorizedUser,
  toastError,
  toastSuccess,
} from "@/utils/helper";
import { fetchAgentLists } from "@/action/agentAction";
import { dateFormatter } from "@/utils/function";
import { Link } from "react-router";
import { fetchFallowupDetails, fetchLeadsLists } from "@/action/leadAction";
import { CategoryList, CourseList } from "@/utils/constant";
import { ErrorMessage, Field, Form, Formik } from "formik";
import NepaliDatePicker from "@zener/nepali-datepicker-react";
import * as Yup from "yup";
import { fetchMenuMappedLists, fetchRoleLists } from "@/action/menuAction";
import { s } from "framer-motion/dist/types.d-DDSxwf0n";
import { fetchUsersLists } from "@/action/userAction";

export type Leads = {
  ID: number;
  FirstName: string;
  middleName?: string;
  LastName: string;
  PermanentAddress: string;
  CorrespondingAddress: string;
  StudentContactNo: string;
  ParentContactNo: string;
  Email: string;
  SessionId: string;
  SchoolName: string;
  SchoolAddress: string;
  Category: string;
  CourseIntrested: string;
  Source: string;
  KnowAbtCollege: string;
  CounselledDate: string;
  FollowUpDate: string;
  OriginalLeadId: string;
  LeadID: string;
};

type initialValues = {
  roleId: string | null;
};
type FormValues = {
  userUID: string;
  roleMappingID: number;
};
const validationSchema = () =>
  Yup.object({
    followUpDate: Yup.string().required("This field is required"),
    category: Yup.string().required("This field is required"),
    // FollowUpRemarks: Yup.string().required("This field is required"),
  });

export function MenuGrid() {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [marketingOfficerId, setMarketingOfficerId] = useState("");
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

  const [formValues, setFormValues] = useState<initialValues>({
    roleId: "3",
  });
  const [formData, setFormData] = useState<FormValues>({
    userUID: "",
    roleMappingID: 0, // send when update
  });

  const {
    data: roleLists,
    isLoading: loadingFallowUpLists,
    refetch,
  } = useQuery({
    queryKey: ["roleLists"],
    // queryFn: fetchMarketingVisitLog,
    queryFn: () => fetchRoleLists({}),
    retry: 2,
  });

  // const {
  //   data,
  //   error,
  //   isLoading,
  //   isFetching,
  //   isPending,
  //   refetch: refetchMappedMenuLists,
  // } = useQuery({
  //   queryKey: ["menuMappedLists"],
  //   queryFn: () => fetchMenuMappedLists(formValues),
  //   retry: 2,
  //   enabled: false,
  // });

  const {
    data: userLists,
    isLoading: loadingUserLists,
    refetch: refetchUserLists,
  } = useQuery({
    queryKey: ["userLists"],
    retry: 2,

    // queryFn: fetchMarketingVisitLog,
    queryFn: () => fetchUsersLists({}),
    // enabled: !!marketingOfficerId,
  });
  console.log("roleLists", roleLists);
  console.log("userLists", userLists);
  console.log("data", data);

  // useEffect(() => {
  //   refetchMappedMenuLists();
  // }, [formValues]);
    useEffect(() => {
      const fetchMenuLists = async () => {
        try {
          const result = await fetchMenuMappedLists(formValues); // pass params
          setData(result);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMenuLists();
    }, [formValues.roleId]);

  // console.log("isPending", isPending);
  console.log("data2", data);
  console.log("error", error);
  const columns: ColumnDef<Leads>[] = [
    {
      accessorKey: "FullName",
      header: "Full Name",
    },

    {
      accessorKey: "UserName",
      header: "User Name",
    },

    {
      accessorKey: "IsActive",
      header: "Is Active",
    },
  ];
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

  const handleSubmit = async (values, resetForm) => {
    setLoader(true);
    try {
      const response = await api.post(
        API_ENDPOINTS.InsertUpdateUserRoleMapping,
        {
          ...formData,
          ...formValues,
        },
        {
          headers: {
            Authorization: "Bearer " + getAppToken(),

            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      debugger;
      setLoader(false);

      if (response.data.responseCode !== "0") {
        return toastError(response.data.responseMessage);
      }
      toastSuccess(response.data.responseMessage);
      // refetchMappedMenuLists();
      handleClose();
    } catch (error: unknown) {
      setLoader(false);

      const errorAsError = error as Error;
      console.error("Error while Saving API:", errorAsError);
      toastError(errorAsError.message);
    }
  };

  const handleClear = () => {
    setFormData({
      userUID: "",
      roleMappingID: 0,
    });
  };
  const handleClose = () => {
    handleClear();
    setOpen(false);
  };

  return (
    <section className="w-full">
      <Dialog open={open} onOpenChange={handleClose}>

        <DialogContent className="dialog fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
          <DialogHeader>
            <DialogTitle>User Role Add</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                User Lists
              </Label>

              <div className="col-span-3">
                <Select
                  onValueChange={(value) =>
                    setFormData((prev) => ({
                      ...prev,
                      userUID: value,
                    }))
                  }
                  value={formData.userUID}
                  name="userUID"
                >
                  <SelectTrigger
                  // className={
                  //   errors.gender && touched.gender ? "validation-error" : ""
                  // }
                  >
                    <SelectValue placeholder="Click to select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {userLists &&
                        userLists.map((item) => (
                          <SelectItem
                            value={item.UserID}
                          >{`${item.FirstName}  ${item?.MiddleName} ${item.LastName} (${item.UserName})`}</SelectItem>
                        ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSubmit} disabled={loader}>
              {loader ? "Saving..." : "Save Changes"}
            </Button>

            {/* <Button type="submit">Save changes</Button> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>User Role Mapped</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4  justify-between">
            <div className="flex items-center gap-2">
              <Select
                onValueChange={(value: string) =>
                  setFormValues((prev) => ({
                    ...prev,
                    roleId: value,
                  }))
                }
                value={formValues.roleId}
                name="roleId"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter Roles..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {roleLists &&
                      roleLists.map((item) => (
                        <SelectItem value={String(item.ID)}>
                          {item.Role}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
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
              {isAuthorizedUser() && (
                <Button
                  variant="outline"
                  className="ml-auto bg-primary text-white"
                  onClick={() => setOpen(true)}
                >
                  <Plus />
                  Add Users
                </Button>
              )}
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
                    <React.Fragment key={row.id}>
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
                    </React.Fragment>
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
