import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ScrollToError } from "@/modules/errors/ScrollToError";
import { Button } from "@/components/ui/button";
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
import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  PencilLine,
  Trash2,
  Upload,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

import { cn } from "@/lib/utils";
import NepaliDatePicker, { NepaliDate } from "@zener/nepali-datepicker-react";
import "@zener/nepali-datepicker-react/index.css";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { handleImageValidation, handleXLSXValidation } from "@/utils/function";
import FileUpload from "@/components/file-upload";
import { GenerateToken } from "@/auth/authAction";
import {
  getAccessToken,
  getAppToken,
  toastError,
  toastSuccess,
  toastWarning,
} from "@/utils/helper";
import {
  CategoryList,
  CourseList,
  KnowUsList,
  SourceList,
} from "@/utils/constant";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { fetchJsonFromExcel } from "@/action/utilityAction";
import { useNavigate } from "react-router";

const validationSchema = () =>
  Yup.object({
    middleName: Yup.string().notRequired(),
    lastName: Yup.string().required("This field is required"),
    firstName: Yup.string().required("This field is required"),
    // permanentAddress: Yup.string().required("This field is required"),
    // correspondingAddress: Yup.string().required("This field is required"),
    // studentContactNo: Yup.string().required("This field is required"),
    // // email: Yup.string().email().required("Email ID is required"),
    // parentContactNo: Yup.string().required("This field is required"),
    // sessionId: Yup.string().required("This field is required"),
    // schoolName: Yup.string().required("This field is required"),
    // schoolAddress: Yup.string().required("This field is required"),
    // category: Yup.string().required("This field is required"),
    // courseIntrested: Yup.string().required("This field is required"),
    // source: Yup.string().required("This field is required"),
    // instituteName: Yup.string().required("This field is required"),
    // knowAbtCollege: Yup.string().required("This field is required"),
    // counselledDate: Yup.string().required("This field is required"),
    // followUpDate: Yup.string().required("This field is required"),
  });

const initialValues = {
  leadID: "", //send when you have to update
  refLeadID: "", //send when followup
  firstName: "",
  lastName: "",
  email: "",
  permanentAddress: "",
  correspondingAddress: "",
  studentContactNo: "",
  parentContactNo: "",
  sessionId: "",
  schoolName: "",
  schoolAddress: "",
  category: "",
  courseIntrested: "",
  source: "",
  sourceDescription: "",
  knowAbtCollege: "",
  knowAbtCollegeDescription: "",
  instituteName: "",
  remarks: "",
  counselledDate: "",
  followUpDate: "",
  isFailed: 0,
};
const flag = [
  "BloodGroupDDL",
  "OccupationDDL",
  "ReligionDDL",
  "NationalityDDL",
];
interface DropDown {
  id: string;
  value: string;
}
const maxDate = new NepaliDate().subtract(16, "y");

export default function LeadsRegistration() {
  const navigate = useNavigate();
  const [bloodGroup, setBloodGroup] = useState<DropDown[] | null>(null);
  const [occupation, setOccupation] = useState<DropDown[] | null>(null);
  const [religion, setReligion] = useState<DropDown[] | null>(null);
  const [nationality, setNationality] = useState<DropDown[] | null>(null);

  const ref = useRef<HTMLButtonElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<(typeof initialValues)[]>([]);
  const [isExcel, setIsExcel] = useState(false);
  const [formLoader, setFormLoader] = useState(false);

  console.log("userData", userData);
  useEffect(() => {
    // handleInitialApi();
  }, []);
  // useEffect(() => {
  //   if (ref.current) {
  //     console.log('====================================');
  //     console.log("here");
  //     console.log('====================================');
  //     ref.current.click();
  //   }
  // }, []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    // Check file size (2MB = 2 * 1024 * 1024 bytes)
    if (file.size > 2 * 1024 * 1024) {
      setError("Image size must be less than 2MB");
      setSelectedImage(null);
      setPreviewUrl(null);
      return;
    }

    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      setSelectedImage(null);
      setPreviewUrl(null);
      return;
    }

    setError(null);
    setSelectedImage(file);

    // Create preview URL
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

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

  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    setFieldValue: (name: string, value: any) => void
  ) => {
    debugger;

    const { name, files } = e.target || {};
    if (!files) return;
    if (files.length > 0) {
      let { size } = files[0];
      debugger;
      let validation = handleImageValidation(files[0]);
      if (validation) {
        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = function () {
          if (reader.result !== null) {
            let imageBase64 = (reader.result as string).replace(/^.+,/, "");
            setFieldValue(name, imageBase64);
            setFieldValue(name + "FileName", files[0].name);
          }
        };
        reader.onerror = function (error) {
          // console.log(error);
        };
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target || {};
    if (files && files.length > 0) {
      let validation = handleXLSXValidation(files[0]);
      if (validation) {
        debugger;
        handleSheetUpload({
          file: files[0],
        });
      }
    }
  };

  const handleSheetUpload = (value) => {
    setFormLoader(true);
    fetchJsonFromExcel(value)
      .then((res) => {
        setFormLoader(false);
        debugger;

        console.log("res", res);
        // if (res.responseCode !== "0") {
        //   return toastError(res.responseMessage);
        // }
        debugger;
        updateValues(res);
      })
      .catch((err) => {})
      .finally(() => {
        setFormLoader(false);
      });
  };
  const updateValues = async (value) => {
    const memberList = value.forEach(async (member) => {
      debugger;
      let user = {
        // leadID: "", //send when you have to update
        // refLeadID: "", //send when followup
        firstName: member.firstName,
        lastName: member.lastName,
        email: member.email,
        permanentAddress: member.permanentAddress,
        correspondingAddress: member.correspondingAddress,
        studentContactNo: member.studentContactNo,
        parentContactNo: member.parentContactNo,
        sessionId: member.sessionId,
        schoolName: member.schoolName,
        schoolAddress: member.schoolAddress,
        category: member.category,
        courseIntrested: member.courseIntrested,
        source: member.source,
        // sourceDescription: member.sourceDescription,
        knowAbtCollege: member.knowAbtCollege,
        instituteName: member.instituteName,
        // knowAbtCollegeDescription: member.,
        remarks: member.remarks,
        counselledDate: member.counselledDate,
        followUpDate: member.followUpDate,
      };
        setUserData((prevData) => [...prevData, user]);

      // const schema = validationSchema(); // Call the function to get the object schema
      // try {
      //   await schema.validate(user, { abortEarly: false });
      //   setUserData((prevData) => [...prevData, user]);
      // } catch (err) {
      //   toastError(
      //     "Due to insufficient data, certain columns have not been updated."
      //   );

      //   const validationErrors = {};

      //   if (err.inner && Array.isArray(err.inner)) {
      //     err.inner.forEach((error) => {
      //       validationErrors[error.path] = error.message;
      //     });
      //   } else if (err.path && err.message) {
      //     // Single error fallback
      //     validationErrors[err.path] = err.message;
      //   }

      //   setError(validationErrors);
      // }
    });

    console.log("memberList", memberList);
    debugger;
  };
  console.log("error", error);

  const handleSubmit = async (values, handleReset) => {
    debugger;
    setFormLoader(true);
    try {
      const response = await api.post(
        API_ENDPOINTS.saveLeadsDetails,
        isExcel ? userData : [values],
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      debugger;
      setFormLoader(false);
      if (!isExcel) {
        if (response.data.responseCode !== "0") {
          return toastError(response.data.responseMessage);
        }
        toastSuccess(response.data.responseMessage);
        // setUserData(response.data.data);

        navigate("/leads");
      } else {
        toastWarning(response.data.responseMessage);
        setUserData(response.data.data);
      }
      // if (response.data.responseCode !== "0") {
      //   return toastError(response.data.responseMessage);
      // }

      // navigate("/leads");
      if (handleReset) {
        handleReset();
      }
      debugger;
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error in login API:", errorAsError);
      toastError(errorAsError.message);
      setFormLoader(false);
    }
  };

  const handleDelete = async (index) => {
    debugger;
    setUserData((prevData) => prevData.filter((_, i) => i !== index));
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-dark mb-3">Leads Registration</h1>
      <div className="mb-3">
        <p className="mb-3">
          Before you proceed with the form please read below topics:
        </p>
        <ul className="list-disc pl-4 mb-5">
          <li>
            Field with red border color and fade red background color indicates
            that this field is required.
          </li>
        </ul>
        <div className="flex gap-4 mb-4">
          <div className="bg-green-600 text-white px-5 py-3 rounded-lg">
Leads Added
           </div>

          <div className="bg-red-600 text-white px-5 py-3 rounded-lg">
            Leads Added Failed
          </div>
        </div>
        <div className="flex items-center space-x-2  p-5 rounded-sm bg-[var(--primary)] text-white">
          <Checkbox
            id="terms"
            checked={isExcel}
            onCheckedChange={(checked) => setIsExcel(checked === true)}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Import from Excel
          </label>
        </div>
      </div>
      {!isExcel && (
        <>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnMount
            // onSubmit={(values) => console.log("Form Submitted:", values)}
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
                <Card className="shadow-none">
                  <CardHeader>
                    <CardTitle>Basic Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {console.log("values", values)}
                    {console.log("errors", errors)}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">
                          First Name
                          {/* <span className="text-red-500">*</span> */}
                        </Label>
                        <Field
                          as={Input}
                          id="firstName"
                          name="firstName"
                          // type="email"
                          type="text"
                          className={errors.firstName ? "validation-error" : ""}
                          // placeholder="m@example.com"
                          // required
                        />
                        <ErrorMessage
                          name="firstName"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      {/* {console.log("JSON.stringify(errors",(errors))}
                    {console.log("values",(values))}
                    <pre>
                    {JSON.stringify(values, null, 2)}
                    {JSON.stringify(touched, null, 2)}
                    </pre> */}
                      <div className="space-y-2">
                        <Label htmlFor="middleName">Middle Name</Label>
                        <Field
                          as={Input}
                          id="middleName"
                          name="middleName"
                          // type="email"
                          type="text"
                          // placeholder="m@example.com"
                          // required
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">
                          Last Name
                          {/* <span className="text-red-500">*</span> */}
                        </Label>
                        <Field
                          as={Input}
                          id="lastName"
                          name="lastName"
                          // type="email"
                          className={errors.lastName ? "validation-error" : ""}
                          type="text"
                          // placeholder="m@example.com"
                          // required
                        />
                        <ErrorMessage
                          name="lastName"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="permanentAddress">
                          Permanent Address
                        </Label>
                        <Field
                          as={Input}
                          id="permanentAddress"
                          name="permanentAddress"
                          type="text"
                          className={
                            errors.permanentAddress ? "validation-error" : ""
                          }
                        />
                        <ErrorMessage
                          name="permanentAddress"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="correspondingAddress">
                          Corresponding Address
                        </Label>
                        <Field
                          as={Input}
                          id="correspondingAddress"
                          name="correspondingAddress"
                          type="text"
                          className={
                            errors.correspondingAddress
                              ? "validation-error"
                              : ""
                          }
                        />
                        <ErrorMessage
                          name="correspondingAddress"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="studentContactNo">
                          Student Contact No
                        </Label>
                        <Field
                          as={Input}
                          id="studentContactNo"
                          name="studentContactNo"
                          // type="email"
                          type="text"
                          // placeholder="m@example.com"
                          // required
                        />
                        <ErrorMessage
                          name="studentContactNo"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="parentContactNo">
                          Parent Contact No
                          {/* <span className="text-red-500">*</span> */}
                        </Label>
                        <Field
                          as={Input}
                          id="parentContactNo"
                          name="parentContactNo"
                          className={
                            errors.parentContactNo ? "validation-error" : ""
                          }
                          type="text"
                          // placeholder="m@example.com"
                          // required
                        />
                        <ErrorMessage
                          name="parentContactNo"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          Email
                          {/* <span className="text-red-500">*</span> */}
                        </Label>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          className={errors.email ? "validation-error" : ""}
                          type="email"
                          // placeholder="m@example.com"
                          // required
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sessionId">Session</Label>
                        <Field
                          as={Input}
                          id="sessionId"
                          name="sessionId"
                          type="text"
                          className={errors.sessionId ? "validation-error" : ""}
                        />
                        <ErrorMessage
                          name="sessionId"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="schoolName">School Name</Label>
                        <Field
                          as={Input}
                          id="schoolName"
                          name="schoolName"
                          type="text"
                          className={
                            errors.schoolName ? "validation-error" : ""
                          }
                        />
                        <ErrorMessage
                          name="schoolName"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="schoolAddress">School Address</Label>
                        <Field
                          as={Input}
                          id="schoolAddress"
                          name="schoolAddress"
                          type="text"
                          className={
                            errors.schoolAddress ? "validation-error" : ""
                          }
                        />
                        <ErrorMessage
                          name="schoolAddress"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label>
                          Category
                          {/* <span className="text-red-500">*</span> */}
                        </Label>
                        <Select
                          onValueChange={(value: string) =>
                            setFieldValue("category", value)
                          }
                          value={values.category}
                          name="category"
                        >
                          <SelectTrigger
                            className={
                              errors.category ? "validation-error" : ""
                            }
                          >
                            <SelectValue placeholder="Select Category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {CategoryList.map((item) => (
                                <SelectItem value={item}>{item}</SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className="text-red-500 text-sm">
                          {errors?.category}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="courseIntrested">
                          Course Interested
                        </Label>

                        <Select
                          onValueChange={(value: string) =>
                            setFieldValue("courseIntrested", value)
                          }
                          value={values.courseIntrested}
                          name="courseIntrested"
                        >
                          <SelectTrigger
                            className={
                              errors.courseIntrested ? "validation-error" : ""
                            }
                          >
                            <SelectValue placeholder="Select courseIntrested" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {CourseList.map((item) => (
                                <SelectItem value={item}>{item}</SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className="text-red-500 text-sm">
                          {errors?.courseIntrested}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="source">Source</Label>

                        <Select
                          onValueChange={(value: string) =>
                            setFieldValue("source", value)
                          }
                          value={values.source}
                          name="source"
                        >
                          <SelectTrigger
                            className={errors.source ? "validation-error" : ""}
                          >
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {SourceList.map((item) => (
                                <SelectItem value={item}>{item}</SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className="text-red-500 text-sm">
                          {errors?.source}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="knowAbtCollege">
                          How did you know about us?
                        </Label>

                        <Select
                          onValueChange={(value: string) =>
                            setFieldValue("knowAbtCollege", value)
                          }
                          value={values.knowAbtCollege}
                          name="knowAbtCollege"
                        >
                          <SelectTrigger
                            className={
                              errors.knowAbtCollege ? "validation-error" : ""
                            }
                          >
                            <SelectValue placeholder="Select know about College" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              {KnowUsList.map((item) => (
                                <SelectItem value={item}>{item}</SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div className="text-red-500 text-sm">
                          {errors?.knowAbtCollege}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="counselledDate">Counselled Date</Label>

                        <NepaliDatePicker
                          // value={value}

                          lang="en"
                          placeholder="Select date"
                          onChange={(value) => {
                            setFieldValue("counselledDate", value?.toString());

                            // setValue(e);
                          }}
                          // max={maxDate}
                        />
                        <ErrorMessage
                          name="counselledDate"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="followUpDate">Follow Up Date</Label>

                        <NepaliDatePicker
                          // value={value}

                          lang="en"
                          placeholder="Select date"
                          onChange={(value) => {
                            setFieldValue("followUpDate", value?.toString());

                            // setValue(e);
                          }}
                          // max={maxDate}
                        />
                        <ErrorMessage
                          name="followUpDate"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="instituteName">Institue Name</Label>
                        <Field
                          as={Input}
                          id="instituteName"
                          name="instituteName"
                          type="text"
                          className={
                            errors.instituteName ? "validation-error" : ""
                          }
                        />
                        <ErrorMessage
                          name="instituteName"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="remarks">Remarks</Label>
                        <Field
                          as={Textarea}
                          id="remarks"
                          name="remarks"
                          className={`${
                            errors.remarks ? "validation-error" : ""
                          } form-textarea mt-1 block w-full border  p-2 min-h-[150px]`}
                        />
                        <ErrorMessage
                          name="remarks"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="text-end">
                  <Button
                    type="submit"
                    className=" bg-color"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
                {/* <ScrollToError /> */}
              </Form>
            )}
          </Formik>
        </>
      )}
      {isExcel && (
        <>
          <Card className="shadow-none">
            <CardHeader>
              {/* <CardTitle>Basic Details</CardTitle> */}
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="file"
                    hidden
                    id="fileInput-leads"
                    accept=".xlsx"
                    name="file"
                    onChange={(e) => handleFileUpload(e)}
                  />
                  {/* <Label
                  htmlFor="fileInput-leads"
                  className="text-white bg-color py-2 px-4 rounded-md "
                  disabled
                >
                  Import From Excel
                </Label> */}
                  <Button
                    className="bg-color cursor-pointer"
                    disabled={formLoader}
                    onClick={() =>
                      document.getElementById("fileInput-leads")?.click()
                    }
                  >
                    Import From Excel
                  </Button>
                  {/* LeadsDocument */}
                  <a href="/document/LeadsDocument.xlsx" download={true}>
                    <Button type="submit" className=" bg-color">
                      Download Excel Format
                    </Button>
                  </a>
                </div>
                <div className="overflow-x-auto rounded-md border">
                  <table className="table">
                    <thead className="whitespace-nowrap ">
                      <tr className="">
                        <th>SN</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th> Permanent Address</th>
                        <th>Corresponding Address</th>
                        <th>Student Contact No</th>
                        <th> Parent Contact No</th>
                        <th>Session</th>
                        <th>School Name</th>
                        <th>School Address</th>
                        <th>Category</th>
                        <th> Course Interested</th>
                        <th>Source</th>
                        <th>How did you know about us?</th>
                        <th>Institue Name</th>
                        <th>Remarks</th>
                        <th>Counselled Date</th>
                        <th>Follow Up Date</th>
                        <th>failReason</th>
                      </tr>
                    </thead>
                    <tbody className="whitespace-nowrap">
                      {userData.map((item, index) => (
                        <tr
                          key={index}
                          // className={
                          //   item.isFailed ? "bg-red-600 text-white" : ""
                          // }
                          className={"isFailed" in item ? item.isFailed ? "bg-red-600 text-white" : "bg-green-600 text-white" : "" }
                        >
                          <td>{index + 1}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
                          <td>{item.permanentAddress}</td>
                          <td>{item.correspondingAddress}</td>
                          <td>{item.studentContactNo}</td>
                          <td>{item.parentContactNo}</td>
                          <td>{item.sessionId}</td>
                          <td>{item.schoolName}</td>
                          <td>{item.schoolAddress}</td>
                          <td>{item.category}</td>
                          <td>{item.courseIntrested}</td>
                          <td>{item.source}</td>
                          {/* <td>{item.sourceDescription}</td> */}
                          <td>{item.knowAbtCollege}</td>
                          <td>{item.instituteName}</td>
                          {/* <td>{item.knowAbtCollegeDescription}</td> */}
                          <td>{item.remarks}</td>
                          <td>{item.counselledDate}</td>
                          <td>{item.followUpDate}</td>
                          <td>{item.failReason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="text-end">
                  <Button
                    className="bg-color"
                    disabled={formLoader}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
