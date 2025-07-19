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

import { fetchAgentInfo } from "@/action/agentAction";
import FileUpload from "@/components/file-upload";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { handleImageValidation } from "@/utils/function";
import { getAppToken, getLoggedInUser, hideLoader, showLoader, toastError, toastSuccess } from "@/utils/helper";
import NepaliDatePicker, { NepaliDate } from "@zener/nepali-datepicker-react";
import "@zener/nepali-datepicker-react/index.css";
import { useNavigate, useSearchParams } from "react-router";
const validationSchema = (isEdit = false) =>
  Yup.object({
    middleName: Yup.string().notRequired(),
    lastName: Yup.string().required("This field is required"),
    gender: Yup.string().required("This field is required"),
    firstName: Yup.string().required("This field is required"),
    phoneNo: Yup.string().notRequired(),
    mobileNo: Yup.string().required("Mobile number is required"),
  

  });

const initialValues = {
  //"agentUID": "string",
  firstName: " ",
  middleName: "",
  lastName: "",
  gender: "",
  dateOfBirth: "",
  phoneNo: "",
  mobileNo: "",
  emailID: "",
  occupation: "",
  religion: "",
  nationality: "",
  bloodGroup: "",
  martialStatus: "",
  pan: "",
  panAttachmentPath: "", //send Base64 string
  panAttachmentPathFileName: "",
  citizenshipNo: "",
  instituteName: "",
  instituteAddress: "",
  citizenshipIssueDate: "",
  citizenshipFrontAttachmentPath: "", //send Base64 string
  citizenshipFrontAttachmentPathFileName: "",
  citizenshipBackAttachmentPath: "", //send Base64 string
  citizenshipBackAttachmentPathFileName: "", //send Base64 string
  password: "",
  passwordConfirmation: "",
  bankName: "",
  accountNo: "",
  accountHolderName: "",
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

export default function AgentRegistration() {
  let [searchParams, setSearchParams] = useSearchParams("");
  const id = searchParams.get("id");
const isEdit = !!id; // edit mode if id exists
  const formikRef = useRef(null);
  // const {values,setValues} = formikRef?.current;
  console.log("id", id);
  console.log("formikRef", formikRef);
  const [bloodGroup, setBloodGroup] = useState<DropDown[] | null>(null);
  const [occupation, setOccupation] = useState<DropDown[] | null>(null);
  const [religion, setReligion] = useState<DropDown[] | null>(null);
  const [nationality, setNationality] = useState<DropDown[] | null>(null);

  const ref = useRef<HTMLButtonElement>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    handleInitialApi();
    // if (id) {
      GetAgentById();
    // }
  }, []);

  const GetAgentById = async () => {
    showLoader();
try {
      const response = await fetchAgentInfo({
      agentUID: getLoggedInUser()?.agentUID || null,
    });
    hideLoader();
    console.log("response", response);
    console.log("formikRef", formikRef);
    formikRef?.current?.setValues(response[0])
} catch (error) {
    hideLoader();
    console.error("Error fetching agent info:", error);
    toastError("Failed to fetch agent information");
}

    

  };
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
  const handleSubmit = async (values, handleReset) => {
    try {
      const response = await api.post(API_ENDPOINTS.updateAgentInfo, values, {
        headers: {
          Authorization: "Bearer " + getAppToken(),
          "Access-Control-Allow-Origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      debugger;

      if (response.data.responseCode !== "0") {
        return toastError(response.data.responseMessage);
      }
      toastSuccess(response.data.responseMessage);
      handleReset();
      GetAgentById();
      // navigate("/agent");
      debugger;
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error in login API:", errorAsError);
      toastError(errorAsError.message);
    }
  };

  return (
    <div>
          
      <h1 className="text-3xl font-bold text-dark mb-3">Profile</h1>

               <Formik
        initialValues={initialValues}
        validationSchema={validationSchema(isEdit)}
        validateOnMount
          innerRef={formikRef} 
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
                    <Label htmlFor="dateOfBirth">
                      DOB
                      {/* DOB <span className="text-red-500">*</span> */}
                    </Label>
                    <NepaliDatePicker
                      // value={values?.dateOfBirth||new NepaliDate().toString()}

                      lang="en"
                      placeholder="Select date"
                      onChange={(value) => {
                        setFieldValue("dateOfBirth", value?.toString());

                        // setValue(e);
                      }}
                      max={maxDate}
                    />
                    <div className="text-red-500 text-sm">
                      {errors?.dateOfBirth}
                    </div>
                  </div>

                  {/* <div className="space-y-2">
                    <Label htmlFor="dob">
                      // Date of Birth <span className="text-red-500">*</span>
                    </Label>
                    <NepaliDatePicker
                      // value={value}
                      type="AD"
                      lang="en"
                      placeholder="Select date"
                      onChange={(e) => {
                        // setValue(e);
                      }}
                    />
                    <p className="text-xs text-muted-foreground">
                      Format: YYYY-MM-DD
                    </p>
                  </div> */}

                  <div className="space-y-2">
                    <Label htmlFor="email">Phone No</Label>
                    <Field
                      as={Input}
                      id="email"
                      name="phoneNo"
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
                    <Label htmlFor="email">
                      Mobile No
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="email"
                      name="mobileNo"
                      className={errors.mobileNo ? "validation-error" : ""}
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
                    <Label htmlFor="emailID">
                      Email
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="emailID"
                      name="emailID"
                      className={errors.emailID ? "validation-error" : ""}
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
                    <Label htmlFor="Pan">Pan</Label>
                    <Field
                      as={Input}
                      id="Pan"
                      name="pan"
                      className={errors.pan ? "validation-error" : ""}
                      // type="Pan"
                      type="text"
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="Pan"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="citizenshipNo">
                      Citizenship No
                    </Label>
                    <Field
                      as={Input}
                      id="citizenshipNo"
                      name="citizenshipNo"
                      // type="email"
                      type="text"
                      className={errors.citizenshipNo ? "validation-error" : ""}
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="citizenshipNo"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                
                         <div className="space-y-2">
                    <Label htmlFor="dobNepali">
                      Citizenship Issued Date{" "}
                    </Label>
                    <NepaliDatePicker
                      // value={value}
                      lang="en"
                      placeholder="Select date"
                      onChange={(value) => {
                        setFieldValue(
                          "citizenshipIssueDate",
                          value?.toString()
                        );

                        // setValue(e);
                      }}
                    />
                    <p className="text-xs text-muted-foreground">
                      Format: YYYY-MM-DD
                    </p>
                  </div>
                    <div className="space-y-2">

</div>
                  <div className="space-y-2">
                    <Label htmlFor="instituteName">
                      Institue Name
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="instituteName"
                      name="instituteName"
                      // type="email"
                      type="text"
                      className={errors.instituteName ? "validation-error" : ""}
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="instituteName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="instituteAddress">
                      Institue Address
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="instituteAddress"
                      name="instituteAddress"
                      // type="email"
                      type="text"
                      className={
                        errors.instituteAddress ? "validation-error" : ""
                      }
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="instituteAddress"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                               <div className="space-y-2">

</div>
                    <div className="space-y-2">
                    <FileUpload
                      previewUrl={values.panAttachmentPath}
                      name="panAttachmentPath"
                      imageName={values.panAttachmentPath}
                      fileName={values.panAttachmentPathFileName}
                      error={error}
                      handleFileUpload={(e) =>
                        handleImageUpload(e, setFieldValue)
                      }
                      title="Pan"
                    />
                  </div>

          
            
                

    
                </div>
              </CardContent>
            </Card>

              <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Basic Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bankName">
                      Bank Name
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="bankName"
                      name="bankName"
                      // type="email"
                      type="text"
                      className={errors.bankName ? "validation-error" : ""}
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="bankName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountNo">
                      Bank Account No
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="accountNo"
                      name="accountNo"
                      // type="email"
                      type="text"
                      className={errors.accountNo ? "validation-error" : ""}
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="accountNo"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="accountHolderName">
                      Bank Account Name
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="accountHolderName"
                      name="accountHolderName"
                      // type="email"
                      type="text"
                      className={
                        errors.accountHolderName ? "validation-error" : ""
                      }
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="accountHolderName"
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
          
          </Form>
        )}
      </Formik>
           
   
    </div>
  );
}
