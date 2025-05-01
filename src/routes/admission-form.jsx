import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Label } from "@radix-ui/react-label";
import * as Yup from "yup";
import { academics } from "@/layouts/NavBarDemo";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { GenerateToken } from "@/auth/authAction";
import { phoneRegExp } from "@/utils/regexPattern";

const validationSchema = () =>
  Yup.object({
    studentName: Yup.string().required("This field is required"),
    address: Yup.string().required("This field is required"),

    guardianName: Yup.string().required("This field is required"),
    schoolNameAddress: Yup.string().required("This field is required"),
    intrestedProgram: Yup.string().required("This field is required"),
    contactNo: Yup.string()
      .matches(phoneRegExp, "please enter valid number")
      .required("This Field is required"),
    guardianContactNo: Yup.string()
      .matches(phoneRegExp, "please enter valid number")
      .required("This Field is required"),
  });
const initialValues = {
  studentName: "",
  contactNo: "",
  address: "",
  guardianName: "",
  guardianContactNo: "",
  schoolNameAddress: "",
  intrestedProgram: "",
};
export default function AdmissionForm() {
  const handleSubmit = async (values, handleReset) => {
    debugger;
    // await GenerateToken();
    try {
      const response = await api.post(
        API_ENDPOINTS.saveUser,
        {
          studentName: values.studentName,
          contactNo: values.contactNo.toString(),
          address: values.address,
          guardianName: values.guardianName,
          guardianContactNo: values.guardianContactNo.toString(),
          schoolNameAddress: values.schoolNameAddress,
          intrestedProgram: values.intrestedProgram,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (response.data.responseCode !== "0") {
        return toastError(response.data.responseMessage);
      }
      toastSuccess(response.data.responseMessage);
      handleReset();
      debugger;
    } catch (error) {
      //   const errorAsError = error as Error;
      //   console.error("Error in login API:", errorAsError);
      //   toastError(errorAsError.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        {/* <h1 className="text-4xl font-bold text-primary mb-4">Contact Us</h1> */}
        <h1 className="mb-4 text-2xl font-bold">
          <span className="bg-text-next">Admission </span>Form
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          We're here to help and answer any questions you might have. We look
          forward to hearing from you.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-card p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6  bg-text">
            Admission Enquiry
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            // validateOnMount
            onSubmit={(values, { resetForm }) =>
              handleSubmit(values, resetForm)
            }

            // onSubmit={(values) => console.log("Form Submitted:", values)}
            //  onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName">Student Full Name </Label>
                    <Field
                      as={Input}
                      id="studentName"
                      name="studentName"
                      // type="email"
                      type="text"
                      placeholder="Enter your first name"
                      // required
                    />
                    <ErrorMessage
                      name="studentName"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  {console.log("errors", errors)}
                  <div className="space-y-2">
                    <Label htmlFor="address">Address </Label>
                    <Field
                      as={Input}
                      id="address"
                      name="address"
                      // type="email"
                      type="text"
                      placeholder="Enter your Address"
                      // required
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNo">Contact No</Label>
                  <Field
                    as={Input}
                    id="contactNo"
                    name="contactNo"
                    // type="email"
                    type="number"
                    // placeholder="m@example.com"
                    // required
                  />
                  <ErrorMessage
                    name="contactNo"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guardianName">Guardian Name</Label>
                  <Field
                    as={Input}
                    id="guardianName"
                    name="guardianName"
                    // type="email"
                    type="text"
                    // placeholder="m@example.com"
                    // required
                  />
                  <ErrorMessage
                    name="guardianName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guardianContactNo">Guardian Contact</Label>
                  <Field
                    as={Input}
                    id="guardianContactNo"
                    name="guardianContactNo"
                    // type="email"
                    type="number"
                    // placeholder="m@example.com"
                    // required
                  />
                  <ErrorMessage
                    name="guardianContactNo"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="schoolNameAddress">
                    School Name and Address
                  </Label>
                  <Field
                    as={Input}
                    id="schoolNameAddress"
                    name="schoolNameAddress"
                    // type="email"
                    type="text"
                    // placeholder="m@example.com"
                    // required
                  />
                  <ErrorMessage
                    name="schoolNameAddress"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiry" className="text-sm font-medium">
                    Interested Program
                  </Label>
                  <Select
                    name="intrestedProgram"
                    onValueChange={(value) =>
                      setFieldValue("intrestedProgram", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {academics.map((item) => (
                          <SelectItem key={item.title} value={item.title}>
                            {item.title}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <div className="text-red-500 text-sm">
                    {errors?.intrestedProgram}
                  </div>
                </div>

                {/* <div className="space-y-2">
                  <Label htmlFor="message">Remarks </Label>
                  <Field
                    as={Textarea}
                    id="message"
                    name="message"
                    type="email"
                    placeholder="m@example.com"
                    className="min-h-[150px]"

                    // required
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div> */}

                <Button
                  type="submit"
                  className="w-full bg-color"
                  disabled={isSubmitting}
                >
                  <Send className="w-4 h-4 mr-2" />{" "}
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Map and Address */}
        <div className="space-y-6">
          <div className="bg-card p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 bg-text">Our Location</h2>
            <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.3473292818917!2d85.32679879999999!3d27.737431100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18dc8abf1601%3A0x1c43b16d37e5a66b!2sHrit%20Academy!5e0!3m2!1sen!2snp!4v1739630413403!5m2!1sen!2snp"
                width="600"
                height="450"
                className="w-full"
                allowfullscreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">School Address</p>
                  <p className="text-muted-foreground">
                    Basundhara Chauki, Kanti Marg, Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
