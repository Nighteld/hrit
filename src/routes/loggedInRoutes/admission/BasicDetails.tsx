import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { Button } from "@/components/ui/button";
import NepaliDatePicker, { NepaliDate } from "@zener/nepali-datepicker-react";
import { ErrorMessage, Field } from "formik";
import { ChevronRight, FolderPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { dateFormatter } from "@/utils/function";
const flag = [
  "BloodGroupDDL",
  "OccupationDDL",
  "ReligionDDL",
  "NationalityDDL",
  "CourseDDL",
];

const maxDate = new NepaliDate();

export default function BasicDetails(props: any) {
  const { errors, touched, setFieldValue, values, setValues } = props;
  const [bloodGroup, setBloodGroup] = useState<DropDown[] | null>(null);
  const [occupation, setOccupation] = useState<DropDown[] | null>(null);
  const [religion, setReligion] = useState<DropDown[] | null>(null);
  const [nationality, setNationality] = useState<DropDown[] | null>(null);
  const [courseList, setCoursesList] = useState<DropDown[] | null>(null);
  useEffect(() => {
    handleInitialApi();
  }, []);

  console.log("values", values);
  const handleInitialApi = async () => {
    try {
      // Create an array of promises by mapping over the flag array and making axios calls
      const promises = flag.map((endpoint) =>
        api.post(API_ENDPOINTS.getDdl, {
          flag: endpoint,
        })
      );
      // Wait for all requests to complete
      const responses = await Promise.all(promises);
      responses.forEach((response, index) => {
        // Check the index and set state accordingly
        switch (flag[index]) {
          case "BloodGroupDDL":
            setBloodGroup(response.data.data);
            break;
          case "OccupationDDL":
            setOccupation(response.data.data);
            break;
          case "ReligionDDL":
            setReligion(response.data.data);
            break;
          case "NationalityDDL":
            setNationality(response.data.data);
            break;
                   case "CourseDDL":
            setCoursesList(response.data.data);
            break;
          default:
            break;
        }
      });
      // Extract data from the responses
      // const values = responses.map((response) => response.data.data);

      // console.log(values); // Logs an array with the data from each endpoint
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Basic Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Field as={Input} id="firstName" name="firstName" type="text" />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="middleName">Middle Name</Label>
            <Field as={Input} id="middleName" name="middleName" type="text" />
            <ErrorMessage
              name="middleName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Field as={Input} id="lastName" name="lastName" type="text" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="courseName">Stream</Label>
            <Field as={Input} id="courseName" name="courseName" type="text" />
            <ErrorMessage
              name="courseName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div> */}

           <div className="space-y-2">
            <Label>
              Stream
              {/* <span className="text-red-500">*</span> */}
            </Label>
            <Select
              onValueChange={(value: string) =>
                setFieldValue("courseName", value)
              }
              name="courseName"
            >
              <SelectTrigger
                className={errors.courseName ? "validation-error" : ""}
              >
                <SelectValue placeholder="Click to select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {courseList &&
                    courseList.map((item) => (
                      <SelectItem value={item.value}>{item.value}</SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label>Gender</Label>
            <Select onValueChange={(value) => setFieldValue("gender", value)}>
              <SelectTrigger
                className={
                  errors.gender && touched.gender ? "validation-error" : ""
                }
              >
                <SelectValue placeholder="Click to select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {/* <div className="space-y-2">
        <Label htmlFor="familyMemberValue">Family Member Value</Label>
        <Field as={Input} id="familyMemberValue" name="familyMemberValue" type="text" />
        <ErrorMessage name="familyMemberValue" component="div" className="text-red-500 text-sm" />
      </div> */}
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Date of Birth</Label>

            <NepaliDatePicker
              // value={value}

              lang="en"
              type="AD"
              placeholder="Select date"
              onChange={(value) => {
                setFieldValue("dateOfBirth", dateFormatter(value));

                // setValue(e);
              }}
              // max={maxDate}
            />

            <div className="text-red-500 text-sm">{errors?.dateOfBirth}</div>
          </div>
          <div className="space-y-2">
            <Label>
              Nationality
              {/* <span className="text-red-500">*</span> */}
            </Label>
            <Select
              onValueChange={(value: string) =>
                setFieldValue("nationality", value)
              }
              name="nationality"
            >
              <SelectTrigger
                className={errors.nationality ? "validation-error" : ""}
              >
                <SelectValue placeholder="Click to select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {nationality &&
                    nationality.map((item) => (
                      <SelectItem value={item.value}>{item.value}</SelectItem>
                    ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="firstLanguage">First Language</Label>
            <Field
              as={Input}
              id="firstLanguage"
              name="firstLanguage"
              type="text"
            />
            <ErrorMessage
              name="firstLanguage"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondLanguage">Second Language</Label>
            <Field
              as={Input}
              id="secondLanguage"
              name="secondLanguage"
              type="text"
            />
            <ErrorMessage
              name="secondLanguage"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="otherLanguage">Other Language</Label>
            <Field
              as={Input}
              id="otherLanguage"
              name="otherLanguage"
              type="text"
            />
            <ErrorMessage
              name="otherLanguage"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="phoneNo">Contact Address</Label>
            <Field as={Input} id="phoneNo" name="phoneNo" type="text" />
            <ErrorMessage
              name="phoneNo"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>{" "} */}
          <div className="space-y-2">
            <Label htmlFor="mobileNo">Mobile Number</Label>
            <Field as={Input} id="mobileNo" name="mobileNo" type="text" />
            <ErrorMessage
              name="mobileNo"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>{" "}
          <div className="space-y-2">
            <Label htmlFor="emailID">Email ID</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          {/* <div className="space-y-2">
            <Label htmlFor="emailID">Permanent Address</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailID">Last school Name</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailID">Last school Address</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div> */}
        
        </div>
      </CardContent>
    </Card>
  );
}
