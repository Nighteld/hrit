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
  category: string;
  source: string;
  schoolName: string;
  courseIntrested: string;
};
const validationSchema = () =>
  Yup.object({
    FollowUpDate: Yup.string().required("This field is required"),
    NextFollowUpDate: Yup.string().required("This field is required"),
    // FollowUpRemarks: Yup.string().required("This field is required"),
  });

export function LeadsGrid() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const [marketingOfficerId, setMarketingOfficerId] = useState("");
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [formValues, setFormValues] = useState<initialValues>({
    category: "",
    source: "",
    schoolName: "",
    courseIntrested: "",
  });
  const newFallowUp = {
  FollowUpDate: new Date(),
  Category:"",
  remarks: "",
};

  const {
    data: fallowUpLists,
    isLoading: loadingFallowUpLists,
    refetch,
  } = useQuery({
    queryKey: ["FallowUpLogs", marketingOfficerId],
    // queryFn: fetchMarketingVisitLog,
    queryFn: () =>
      fetchFallowupDetails({
        leadID: marketingOfficerId,
      }),
    enabled: !!marketingOfficerId,
  });

  const {
    data,
    error,
    isLoading,
    isFetching,
    isPending,
    refetch: refetchLeads,
  } = useQuery({
    queryKey: ["leadList"],
    queryFn: () => fetchLeadsLists(formValues),
    enabled: false,
  });
  useEffect(() => {
    refetchLeads();
  }, [formValues]);

  console.log("isPending", isPending);
  console.log("data2", data);
  console.log("error", error);
  const columns: ColumnDef<Leads>[] = [
    {
      id: "expander",
      header: () => null,
      cell: ({ row }) => {
        debugger;
        return (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setMarketingOfficerId((prev) => {
                if (prev === row.original?.LeadID) {
                  return "";
                }
                return row.original?.LeadID;
              });
              // setIsAddingNew(false);
            }}
          >
            {row.original?.LeadID === marketingOfficerId ? (
              <ChevronsDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </Button>
        );
      },
    },
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
  // const RenderSkeletonRows = () => (
  //   <React.Fragment>
  //     {/* Render 10 skeleton rows as a placeholder while loading */}
  //     {Array.from(new Array(10)).map((_, index) => (
  //       <TableRow key={index}>
  //         {/* Render skeleton cells for each visible column */}
  //         {table.getVisibleLeafColumns().map((column) => (
  //           <TableCell key={column.id}>
  //             <Skeleton className="h-4 w-full" />
  //           </TableCell>
  //         ))}
  //       </TableRow>
  //     ))}
  //   </React.Fragment>
  // );
  return (
    <section className="w-full">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Lead Lists</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4  justify-between">
            <div className="flex items-center gap-2">
              <Input
                placeholder="Filter Schools..."
                // value={formValues.schoolName}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setTimeout(() => {
                    setFormValues((prev) => ({
                      ...prev,
                      schoolName: event.target.value,
                    }))
                  }, 1000);
                }}
                className="max-w-sm"
              />

              <Select
                onValueChange={(value: string) =>
                  setFormValues((prev) => ({
                    ...prev,
                    courseIntrested: value,
                  }))
                }
                value={formValues.courseIntrested}
                name="courseIntrested"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter Courses..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {CourseList.map((item) => (
                      <SelectItem value={item}>{item}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select
                onValueChange={(value: string) =>
                  setFormValues((prev) => ({
                    ...prev,
                    category: value,
                  }))
                }
                value={formValues.category}
                name="category"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter Category..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {CategoryList.map((item) => (
                      <SelectItem value={item}>{item}</SelectItem>
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

              <Link to="/leads/create">
                <Button
                  variant="outline"
                  className="ml-auto bg-primary text-white"
                >
                  <Plus />
                  Add Leads
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
                      {row.original.LeadID === marketingOfficerId && (
                        <TableRow>
                          <TableCell colSpan={columns.length} className="p-0">
                            <div className="p-4 bg-muted/50">
                              <Card>
                                <CardContent className="p-4">
                                  <div className="  items-center gap-5 py-2 mb-2">
                                    <Button
                                      variant="outline"
                                      className="mb-2"
                                      onClick={() => {
                                        setIsAddingNew(true);
                                      }}
                                    >
                                      <Plus />
                                      Add Log
                                    </Button>
                                    {/* <h3 className="font-semibold text-lg mb-2 ">
                                  Fallow up History
                                </h3> */}

                                  <div className="w-[1024px]">
                                  <Formik
                                    initialValues={newFallowUp}
                                    validationSchema={validationSchema}
                                    // validateOnMount
                                    onSubmit={(values, { resetForm }) =>
                                      handleSubmit(values, resetForm)
                                    }
                                  >
                                    {({
                                      setFieldValue,
                                      errors,
                                      touched,
                                      isValidating,
                                      isSubmitting,
                                      values,
                                    }) => (
                                      <Form className="space-y-4">
                                        <Table>
                                          <TableCaption className="font-bold py-4">
                                            {" "}
                                            Fallow up History.
                                          </TableCaption>
                                          <TableHeader>
                                            <TableRow>
                                              <TableHead className="w-[100px]">
                                                SN
                                              </TableHead>
                                              <TableHead>
                                                Fallow up Date
                                              </TableHead>
                                              <TableHead>
                                               Category
                                              </TableHead>
                                                <TableHead>
                                               Fallowup Type
                                              </TableHead>
                                              <TableHead className="">
                                                Remarks
                                              </TableHead>
                                              <TableHead className="">
                                                Action
                                              </TableHead>
                                            </TableRow>
                                          </TableHeader>
                                          <TableBody>
                                            {fallowUpLists &&
                                              fallowUpLists.map((item,index) => (
                                                <TableRow key={index}>
                                                  <TableCell className="font-medium">
                                                    {index+1}
                                                  </TableCell>
                                                  <TableCell>
                                                    {dateFormatter(
                                                      item.FollowUpDate
                                                    )}
                                                  </TableCell>
                                                  <TableCell>
                                                 {item.Category}
                                                  </TableCell>
                                                          <TableCell>
                                                    {dateFormatter(
                                                      item.nextFollowUpDate
                                                    )}{" "}
                                                  </TableCell>
                                                  <TableCell className="">
                                                    {item.Remarks}
                                                  </TableCell>
                                                </TableRow>
                                              ))}
                                            {console.log("errors", errors)}
                                            {console.log("values", values)}
                                            {isAddingNew && (
                                              <>
                                                <TableRow>
                                                  <TableCell>
                                                    {fallowUpLists.length + 1}
                                                  </TableCell>
                                                  <TableCell>
                                                    <NepaliDatePicker
                                                      className="date-picker"
                                                      value={
                                                        values.FollowUpDate
                                                      }
                                                      lang="en"
                                                      type="AD"
                                                      placeholder="Select date"
                                                      onChange={(e: Date) => {
                                                        setFieldValue(
                                                          "FollowUpDate",
                                                          dateFormatter(e)
                                                        );
                                                      }}
                                                    />
                                                  </TableCell>
                                                  <TableCell>
                                                    <NepaliDatePicker
                                                      className="date-picker"
                                                      value={
                                                        values.NextFollowUpDate
                                                      }
                                                      lang="en"
                                                      type="AD"
                                                      placeholder="Select date"
                                                      onChange={(e: Date) => {
                                                        setFieldValue(
                                                          "NextFollowUpDate",
                                                          dateFormatter(e)
                                                        );
                                                      }}
                                                    />
                                                  </TableCell>
                                                      <TableCell>
                                                           <Select
                      name="FollowupTypeId"
                      value={values.FollowupTypeId}
                      onValueChange={(value) => {
                        setFieldValue("ProductTypeId", value);
                      }}
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Fallowup Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {fallowUpTypeLists &&
                          fallowUpTypeLists.map((item) => (
                            <SelectItem
                              value={item.id.toString()}
                              key={item.id}
                            >
                              {item.followupType}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                    {/* {touched.ProductTypeId && errors.ProductTypeId && (
                      <p className="text-red-500 text-sm">
                        {errors.ProductTypeId}
                      </p>
                    )} */}
                                                   
                                                  </TableCell>

                                                  <TableCell>
                                                    <Field
                                                      as={Input}
                                                      id="FollowUpRemarks"
                                                      name="FollowUpRemarks"
                                                      value={
                                                        values.FollowUpRemarks
                                                      }
                                                      type="text"
                                                      // placeholder="m@example.com"
                                                    />
                                                    <ErrorMessage
                                                      name="FollowUpRemarks"
                                                      component="div"
                                                      className="text-red-500 text-sm"
                                                    />
                                                   
                                                  </TableCell>
                                                  <TableCell>
                                                    <div className="flex items-center gap-2">
                                                      <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        type="submit"
                                                      >
                                                        <div className="bg-blue-500 text-white p-1 rounded-sm">
                                                          <Check className="h-4 w-4" />
                                                        </div>
                                                      </Button>
                                                      <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        type="button"
                                                        onClick={() =>
                                                          setIsAddingNew(false)
                                                        }
                                                      >
                                                        <div className="bg-red-500 text-white p-1 rounded-sm">
                                                          <X className="h-4 w-4" />
                                                        </div>
                                                      </Button>
                                                    </div>
                                                  </TableCell>
                                                </TableRow>
                                              </>
                                            )}
                                          </TableBody>
                                        </Table>
                                      </Form>
                                    )}
                                  </Formik>
                                </div>
                                  </div>
                                  <div className=""></div>
                                </CardContent>
                              </Card>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
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
