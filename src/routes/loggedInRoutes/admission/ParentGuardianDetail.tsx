import { Field } from "formik";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { fetchDropDownLists } from "@/action/utilityAction";
export default function ParentGuardianDetail(props: any) {
  const { errors, touched, setFieldValue, values, setValues } = props;
  const parentingName = {
    0: "Father",
    1: "Mother",
    2: "Guardian",
  };
  const { isPending, error, data } = useQuery({
    queryKey: ["agentList"],
    queryFn: () =>
      fetchDropDownLists({
        flag: "",
      }),
    retry: 2,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Parent Guardian Detail</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {values.studentFamilyBackgrounds.map((item, index) => (
          <div className="border-dashed border-2 border-gray-300 rounded-lg p-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-5">
              {/* {index === 2 && (
                <div className="col-span-3 space-y-1">
                  <p className="mb-2">If Guardian Is:</p>
                  <RadioGroup
                    // defaultValue="other"
                    className="flex space-x-3"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="father" id="r1" />
                      <Label htmlFor="r1">Father</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="mother" id="r2" />
                      <Label htmlFor="r2">Mother</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="other" id="r3" />
                      <Label htmlFor="r3">Other</Label>
                    </div>
                  </RadioGroup>
                </div>
              )} */}

              <div className="space-y-1">
                <Label>{parentingName[index]} Name</Label>
                <Field
                  as={Input}
                  id="name"
                  name="fatherName"
                  className={
                    errors.fatherName && touched.fatherName
                      ? "validation-error"
                      : ""
                  }
                  onChange={(e) => {
                    const newAchievements = [
                      ...values.studentFamilyBackgrounds,
                    ];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      fullName: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentFamilyBackgrounds: newAchievements,
                    }));
                  }}
                />
              </div>

              <div className="space-y-1">
                <Label>{parentingName[index]} Contact Number</Label>
                <Field
                  as={Input}
                  name="fatherContactNumber"
                  className={
                    errors.fatherContactNumber && touched.fatherContactNumber
                      ? "validation-error"
                      : ""
                  }
                  onChange={(e) => {
                    const newAchievements = [
                      ...values.studentFamilyBackgrounds,
                    ];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      phoneNo: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentFamilyBackgrounds: newAchievements,
                    }));
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label>{parentingName[index]} Email</Label>
                <Field
                  as={Input}
                  name="fatherContactNumber"
                  className={
                    errors.fatherContactNumber && touched.fatherContactNumber
                      ? "validation-error"
                      : ""
                  }
                  onChange={(e) => {
                    const newAchievements = [
                      ...values.studentFamilyBackgrounds,
                    ];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      email: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentFamilyBackgrounds: newAchievements,
                    }));
                  }}
                />
              </div>

              <div className="space-y-1">
                <Label>{parentingName[index]} Occupation</Label>
                <Field as={Input} name="fatherOccupation" 
                 onChange={(e) => {
                    const newAchievements = [
                      ...values.studentFamilyBackgrounds,
                    ];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      occupation: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentFamilyBackgrounds: newAchievements,
                    }));
                  }}
                />
              </div>
              {index === 2 && (
                <div className="space-y-1">
                  <Label>Relation</Label>
                  <Select
                    onValueChange={(value: string) => {
                      const newAchievements = [
                        ...values.studentFamilyBackgrounds,
                      ];
                      newAchievements[index] = {
                        ...newAchievements[index],
                        relation: value,
                      };

                      setValues((prev) => ({
                        ...prev,
                        studentFamilyBackgrounds: newAchievements,
                      }));
                    }}
                    name="nationality"
                  >
                    <SelectTrigger
                      className={errors.nationality ? "validation-error" : ""}
                    >
                      <SelectValue placeholder="Click to select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="brother">Brother</SelectItem>
                        <SelectItem value="sister">Sister</SelectItem>
                        <SelectItem value="uncle">Uncle</SelectItem>
                        <SelectItem value="aunt">Aunt</SelectItem>

                        {/* {nationality &&
                    nationality.map((item) => (
                      <SelectItem value={item.value}>{item.value}</SelectItem>
                    ))} */}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
