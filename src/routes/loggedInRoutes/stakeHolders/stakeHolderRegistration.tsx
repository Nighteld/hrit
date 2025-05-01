import { Button } from "@/components/ui/button";
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
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useRef, useState } from "react";
import * as Yup from "yup";

import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { toastError, toastSuccess } from "@/utils/helper";
import NepaliDatePicker, { NepaliDate } from "@zener/nepali-datepicker-react";
import "@zener/nepali-datepicker-react/index.css";
import { useNavigate } from "react-router";

const validationSchema = () =>
  Yup.object({
    firstName: Yup.string().required("This field is required"),
    middleName: Yup.string().notRequired(),
    lastName: Yup.string().required("This field is required"),
    emailID: Yup.string().email().required("Email ID is required"),
    mobileNo: Yup.string().required("This field is required"),
    dateOfBirth: Yup.string().required("This field is required"),
    gender: Yup.string().required("This field is required"),
    religion: Yup.string().required("This field is required"),
    nationality: Yup.string().required("This field is required"),
    bloodGroup: Yup.string().required("This field is required"),
    martialStatus: Yup.string().required("This field is required"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is required"),
    passwordConfirmation: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password confirmation is required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
  });

const initialValues = {
  //"agentUID": "string",
  firstName: " ",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  mobileNo: "",
  emailID: "",
  religion: "",
  nationality: "",
  bloodGroup: "",
  martialStatus: "",
  password: "",
  passwordConfirmation: "",
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

export default function StakeHolderRegistration() {
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
  const [formLoader, setFormLoader] = useState(false);

  console.log("userData", userData);
  useEffect(() => {
    handleInitialApi();
  }, []);
  // useEffect(() => {
  //   if (ref.current) {
  //     console.log('====================================');
  //     console.log("here");
  //     console.log('====================================');
  //     ref.current.click();
  //   }
  // }, []);

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

  console.log("error", error);

  const handleSubmit = async (values, handleReset) => {
    debugger;
    setFormLoader(true);
    try {
      const response = await api.post(API_ENDPOINTS.registerStaff, values, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      debugger;
      setFormLoader(false);

      if (response.data.responseCode !== "0") {
        return toastError(response.data.responseMessage);
      }
      toastSuccess(response.data.responseMessage);
      navigate("/staff");
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
  return (
    <div>
      <h1 className="text-3xl font-bold text-dark mb-3">Stake Holder Registration</h1>
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
        {/* <div className="flex items-center space-x-2  p-5 rounded-sm bg-[var(--primary)] text-white">
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
        </div> */}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        // onSubmit={(values) => console.log("Form Submitted:", values)}
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
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
                    <Label htmlFor="emailID">Email</Label>
                    <Field
                      as={Input}
                      id="emailID"
                      name="emailID"
                      type="email"
                      autoComplete="off"
                      className={errors.emailID ? "validation-error" : ""}
                    />
                    <ErrorMessage
                      name="emailID"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobileNo">Contact No</Label>
                    <Field
                      as={Input}
                      id="mobileNo"
                      name="mobileNo"
                      // type="email"
                      type="text"
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="mobileNo"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Gender
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        setFieldValue("gender", value)
                      }
                      value={values.gender}
                      name="gender"
                    >
                      <SelectTrigger
                        className={errors.gender ? "validation-error" : ""}
                      >
                        <SelectValue placeholder="Select Your Gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Male">Male</SelectItem>
                          <SelectItem value="Female">Female</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <div className="text-red-500 text-sm">{errors?.gender}</div>
                  </div>

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
                
                    <div className="text-red-500 text-sm">{errors?.dateOfBirth}</div>
                  </div>

                  <div className="space-y-2">
                    <Label>Religion</Label>
                    <Select
                      onValueChange={(value: string) =>
                        setFieldValue("religion", value)
                      }
                      name="religion"
                    >
                      <SelectTrigger
                        className={errors.religion ? "validation-error" : ""}
                      >
                        <SelectValue placeholder="Click to select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {religion &&
                            religion.map((item) => (
                              <SelectItem value={item.id}>
                                {item.value}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
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
                              <SelectItem value={item.id}>
                                {item.value}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Blood Group
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        setFieldValue("bloodGroup", value)
                      }
                      name="bloodGroup"
                    >
                      <SelectTrigger
                        className={errors.bloodGroup ? "validation-error" : ""}
                      >
                        <SelectValue placeholder="Click to select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {bloodGroup &&
                            bloodGroup.map((item) => (
                              <SelectItem value={item.id}>
                                {item.value}
                              </SelectItem>
                            ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>
                      Marital Status
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        setFieldValue("martialStatus", value)
                      }
                      name="martialStatus"
                    >
                      <SelectTrigger
                        className={
                          errors.martialStatus ? "validation-error" : ""
                        }
                      >
                        <SelectValue placeholder="Click to select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Unmarried">Unmarried</SelectItem>
                          <SelectItem value="Married">Married</SelectItem>
                          <SelectItem value="Divorced">Divorced</SelectItem>
                          <SelectItem value="Widowed">Widowed</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Password
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="email"
                      name="password"
                      className={errors.password ? "validation-error" : ""}
                      // type="email"
                      type="password"
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Confirm Password
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="email"
                      name="passwordConfirmation"
                      className={
                        errors.passwordConfirmation ? "validation-error" : ""
                      }
                      // type="email"
                      type="password"
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="passwordConfirmation"
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
    </div>
  );
}
