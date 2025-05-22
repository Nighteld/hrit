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
import NepaliDatePicker from "@zener/nepali-datepicker-react";
import { ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
const flag = [
  "BloodGroupDDL",
  "OccupationDDL",
  "ReligionDDL",
  "NationalityDDL",
];
export default function BasicDetails(props: any) {
  const { errors, touched, setFieldValue } = props;
  const [bloodGroup, setBloodGroup] = useState<DropDown[] | null>(null);
  const [occupation, setOccupation] = useState<DropDown[] | null>(null);
  const [religion, setReligion] = useState<DropDown[] | null>(null);
  const [nationality, setNationality] = useState<DropDown[] | null>(null);
  useEffect(() => {
    handleInitialApi();
  }, []);
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
          <div className="space-y-2">
            <Label htmlFor="lastName">Stream</Label>
            <Field as={Input} id="lastName" name="lastName" type="text" />
            <ErrorMessage
              name="lastName"
              component="div"
              className="text-red-500 text-sm"
            />
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
                      placeholder="Select date"
                      onChange={(value) => {
                        setFieldValue("dateOfBirth", value?.toString());

                        // setValue(e);
                      }}
                      // max={maxDate}
                    />

                    <div className="text-red-500 text-sm">
                      {errors?.dateOfBirth}
                    </div>
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
             <div className="space-y-2">
            <Label htmlFor="phoneNo">Contact Addres</Label>
            <Field as={Input} id="phoneNo" name="phoneNo" type="text" />
            <ErrorMessage
              name="phoneNo"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>{" "}
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
             <div className="space-y-2">
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
          </div>
             <div className="space-y-2">
            <Label htmlFor="emailID">Have you already decided on a courses for higher studies or a carrer ? if so, give details</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
           <div className="space-y-2">
            <Label htmlFor="emailID">What extracurricular activities have you been involved in ? (Social service, sports, arts, music ,club activities etc...)</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
         
         <div className="space-y-2">
            <Label htmlFor="emailID">Have you been evaluated for any learning difficulties? if so, please describe and attach report.</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emailID">Have you had any academic or other problem in school? if so, please describe it.</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
         <div className="space-y-2">
            <Label htmlFor="emailID">What are your weakness ? Please decribe.</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
         <div className="space-y-2">
            <Label htmlFor="emailID">What are your strengths ? Please decribe.</Label>
            <Field as={Input} id="emailID" name="emailID" type="email" />
            <ErrorMessage
              name="emailID"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
       
        
          {/* <div className="space-y-1">
            <Label htmlFor="picture">Photo</Label>
            <Field name="picture" as={Input} type="file" accept="image/*" />
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
