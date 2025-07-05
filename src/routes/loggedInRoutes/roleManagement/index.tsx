import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useQuery } from "@tanstack/react-query";
import { fetchRolePermission } from "@/action/rolePermission";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchUsersLists } from "@/action/userAction";
import { useEffect, useState } from "react";
import { fetchRoleLists } from "@/action/menuAction";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";
type initialValues = {
  roleId: string | null;
};
export default function RolePermission() {
  const [formValues, setFormValues] = useState<initialValues>({
    roleId: "3",
  });
  const {
    isPending,
    error,
    data,
    refetch: refetchRolePermission,
  } = useQuery({
    queryKey: ["agentList"],
    queryFn: () =>
      fetchRolePermission({
        roleId: formValues.roleId,
      }),
    retry: 2,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [formData, setFormData] = useState(data);
  console.log("formData", formData);
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
  useEffect(() => {
    if (formValues.roleId) {
      refetchRolePermission();
    }
  }, [formValues.roleId]);

  // Update formData when new data is available
  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleSubmit = async (finalData) => {
    debugger;
    try {
      const response = await api.post(
        API_ENDPOINTS.InsertUpdateMenuPermission,
        finalData,
        {
          headers: {
            Authorization: "Bearer " + getAppToken(),

            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      debugger;

      // if (response.data.responseCode !== "0") {
      //   return toastError(response.data.responseMessage);
      // }
      toastSuccess(response.data.responseMessage);
      refetchRolePermission();
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error while Saving API:", errorAsError);
      toastError(errorAsError.message);
    }
  };

  return (
    <section className="w-full">
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Role Permission</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center py-4  justify-end">
            <Select
              onValueChange={(value: string) => {
                setFormValues((prev) => ({
                  ...prev,
                  roleId: value,
                }));
              }}
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
            <div className="flex items-center gap-2"></div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[500px]">Module</TableHead>
                <TableHead>View</TableHead>
                <TableHead>Add</TableHead>
                <TableHead>Edit</TableHead>
                <TableHead>Delete</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {formData &&
                formData.map((item) => (
                  <TableRow key={item.MenuId}>
                    <TableCell>{item.MenuName}</TableCell>

                    <TableCell>
                      {" "}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={item.AllowView}
                          name="AllowView"
                          //      onCheckedChange={(value) => {
                          //   setFormData((prev) =>
                          //     prev.map((oldItem) =>
                          //       oldItem.MenuId === item.MenuId
                          //         ? { ...oldItem, AllowView: value }
                          //         : oldItem
                          //     )
                          //   );
                          // }}
                          onCheckedChange={(value) => {
                            const finalData = {
                              isActive: true,
                              roleId: formValues.roleId,
                              menuId: item.MenuId,
                              allowView: Number(!item.AllowView),
                              allowEdit: Number(item.AllowEdit),
                              allowDelete: Number(item.AllowDelete),
                              allowAdd: Number(item.AllowAdd),
                              userPermissionId: item.UserPermissionID, //send when update
                            };

                            handleSubmit(finalData);
                          }}
                        />
                      </div>
                    </TableCell>

                    <TableCell>
                      {" "}
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={item.AllowAdd}
                          onCheckedChange={(value) => {
                            const finalData = {
                              isActive: true,
                              roleId: formValues.roleId,
                              menuId: Number(item.MenuId),
                              allowView: Number(item.AllowView),
                              allowEdit: Number(item.AllowEdit),
                              allowDelete: Number(item.AllowDelete),
                              allowAdd: Number(!item.AllowAdd),
                              userPermissionId: item.UserPermissionID, //send when update
                            };

                            handleSubmit(finalData);
                          }}
                        />
                      </div>
                    </TableCell>

                    <TableCell>
                      {" "}
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" checked={item.AllowEdit}
                        
                          onCheckedChange={(value) => {
                            const finalData = {
                              isActive: true,
                              roleId: formValues.roleId,
                              menuId: item.MenuId,
                              allowView: Number(item.AllowView),
                              allowEdit: Number(!item.AllowEdit),
                              allowDelete: item.AllowDelete,
                              allowAdd: Number(item.AllowAdd),
                              userPermissionId: item.UserPermissionID, //send when update
                            };

                            handleSubmit(finalData);
                          }}
                        />
                      </div>
                    </TableCell>

                    <TableCell>
                      {" "}
                      <div className="flex items-center space-x-2">
                        <Checkbox id="terms" checked={item.AllowDelete} 
                          onCheckedChange={(value) => {
                            const finalData = {
                              isActive: true,
                              roleId: formValues.roleId,
                              menuId: item.MenuId,
                              allowView: Number(item.AllowView),
                              allowEdit: Number(item.AllowEdit),
                              allowDelete: Number(!item.AllowDelete),
                              allowAdd: Number(item.AllowAdd),
                              userPermissionId: item.UserPermissionID, //send when update
                            };

                            handleSubmit(finalData);
                          }}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
          {/* <div className="mt-4 text-end">
            <Button variant="outline" className="flex-1 bg-color text-white">
              Save Changes
            </Button>
          </div> */}
        </CardContent>
      </Card>
    </section>
  );
}
