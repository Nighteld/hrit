import { Button } from "@/components/ui/button";
import { ScrollToError } from "@/modules/errors/ScrollToError";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import BasicDetails from "./BasicDetails";
import ParentGuardianDetail from "./ParentGuardianDetail";
import PersonalHealthInformation from "./PersonalHealthInformation";
import { useEffect, useRef } from "react";

const validationSchema = () =>
  Yup.object({
    class: Yup.string().required(),
    gender: Yup.string().required(),
    first_name: Yup.string().required("This field is required"),
    middle_name: Yup.string().notRequired(),
    last_name: Yup.string().required("This field is required"),
    email: Yup.string().email().required("This field is required"),
    picture: Yup.string().required("This field is required"),
    dob: Yup.string()
      .required("Address is required")
      .matches(
        /^\d{4}-\d{2}-\d{2}$/,
        "Date of Birth must be in YYYY-MM-DD format"
      )
      .test(
        "is-valid-date",
        "Date of Birth must be a valid date",
        (value) => !isNaN(new Date(value || "").getTime())
      ),
    mobile_number: Yup.string().required("This field is required"),
    address: Yup.string().required("This field is required"),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is required"),
    password_confirmation: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password confirmation is required")
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm Password didn't match"
      ),
    bloodGroup: Yup.string().required("This field is required"),
    fatherName: Yup.string().required("This field is required"),
    fatherContactNumber: Yup.string().required("This field is required"),
    motherName: Yup.string().required("This field is required"),
    motherContactNumber: Yup.string().required("This field is required"),
    guardianName: Yup.string().required("This field is required"),
    guardianContactNumber: Yup.string().required("This field is required"),
  });

const initialValues = {
  first_name: "",
  middle_name: "",
  last_name: "",
  class: "",
  dob: "",
  gender: "",
  email: "",
  mobile_number: "",
  password: "",
  password_confirmation: "",
  address: "",
  bloodGroup: "",
  height: "",
  weight: "",
  medicalHistory: "",
  fatherName: "",
  fatherContactNumber: "",
  fatherOccupation: "",
  fatherImage: "",
  motherName: "",
  motherContactNumber: "",
  motherOccupation: "",
  motherPhoto: "",
  guardianName: "",
  guardianContactNumber: "",
  guardianOccupation: "",
  guardianImage: "",
};

export default function AdmissionForm() {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log('====================================');
      console.log("here");
      console.log('====================================');
      ref.current.click();
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-dark mb-3">Apply for Admission</h1>
      <p className="mb-3">
        You can apply online by filling up below form or Download a pdf and
        submit. Any question related admission process, please contact our
        admission office at +123 456 789 or example@email.com.
      </p>
      <p className="mb-3">
        Before you proceed with the form please read below topics:
      </p>
      <ul className="list-disc pl-4 mb-5">
        <li>Fees are non-refundable.</li>
        <li>
          Field with red border color and fade red background color indicates
          that this field is required.
        </li>
      </ul>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log("Form Submitted:", values)}
      >
        {({ setFieldValue, errors, touched }) => (
          <Form className="space-y-4">
            <BasicDetails
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />

            <PersonalHealthInformation
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />

            <ParentGuardianDetail
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            />

            <Button ref={ref} type="submit" className="bg-color">
              Submit
            </Button>
            <ScrollToError />
          </Form>
        )}
      </Formik>
    </div>
  );
}
