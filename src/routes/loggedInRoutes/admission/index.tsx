import { Button } from "@/components/ui/button";
import { ScrollToError } from "@/modules/errors/ScrollToError";
import { Form, Formik } from "formik";
import BasicDetails from "./BasicDetails";
import ParentGuardianDetail from "./ParentGuardianDetail";
import PersonalHealthInformation from "./PersonalHealthInformation";
import { useEffect, useRef } from "react";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";

import * as Yup from "yup";
import SchoolDetails from "./schoolDetails";
import EcaDetails from "./EcaDetails";
import AddressDetails from "./addressDetails";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";
import { useNavigate } from "react-router";

const validationSchema = Yup.object().shape({
  // Student Info
  firstName: Yup.string().required("First name is required"),
  middleName: Yup.string(), // optional
  lastName: Yup.string().required("Last name is required"),
  gender: Yup.string().required("Gender is required"),
  courseName: Yup.string().required("courseName is required"),
  // dateOfBirth: Yup.date()
  //   .required("Date of birth is required")
  //   .max(new Date(), "Date of birth cannot be in the future"),
  // phoneNo: Yup.string().matches(/^\d{7,15}$/, "Phone number is not valid"),
  mobileNo: Yup.string()
    .required("Mobile number is required")
    .matches(/^\d{10,10}$/, "Mobile number is not valid"),
  emailID: Yup.string().email("Invalid email").required("Email is required"),
  occupation: Yup.string(),
  religion: Yup.string(),
  nationality: Yup.string().required("Nationality is required"),
  bloodGroup: Yup.string().matches(/^(A|B|AB|O)[+-]$/, "Invalid blood group"),
  martialStatus: Yup.string(),
  firstLanguage: Yup.string(),
  secondLanguage: Yup.string(),
  otherLanguage: Yup.string(),


  // Qualification Info
  // startYear: Yup.string().matches(/^\d{4}$/, "Start year must be 4 digits"),
  // passedYear: Yup.string().matches(/^\d{4}$/, "Passed year must be 4 digits"),
  // boardUniversityName: Yup.string(),
  // boardUniversityTitle: Yup.string(),
  // boardUniversityRank: Yup.string(),
  // institutionName: Yup.string(),
  // educationDegree: Yup.string(),
  // scoreMarks: Yup.number()
  //   .typeError("Score must be a number")
  //   .min(0, "Score must be positive"),
  // scorePercentage: Yup.number()
  //   .typeError("Percentage must be a number")
  //   .min(0)
  //   .max(100),
  // gpa: Yup.number().typeError("GPA must be a number").min(0).max(4),
  // grade: Yup.string(),
  // division: Yup.string(),
  // certifiedDate: Yup.date().nullable(),
});

const initialValues = {
  //StudentInfo
  firstName: "",
  middleName: "",
  lastName: "",
  //"familyMemberValue": 0,
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
  firstLanguage: "",
  secondLanguage: "",
  otherLanguage: "",

  //AddressInfo
  addressType: "",
  country: "",
  countryCode: "",
  zipCode: "",
  administrativeArea_State: "",
  subAdministrativeArea_District: "",
  locality_Municipility: "",
  city: "",
  wardNo: "",
  tole: "",
  street: "",
  blockNo: "",
  houseNo: "",
  addressLine: "",
  locationMap: "",
  latLong: "",

  //Achievement ECA Info
  //"studentAchievementsECAID": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //"studentAchievementsECAGID": "",
  studentAddress: [
    {
      addressType: "Permanent", //permanent and temporary
      country: "",
      countryCode: "",
      zipCode: "",
      subAdministrativeArea_District: "",
      locality_Municipility: "",
      city: "",
      wardNo: "",
      tole: "",
      street: "",
      blockNo: "",
      houseNo: "",
      addressLine: "",
      locationMap: "",
      latLong: "",
    },
    {
      addressType: "Temporary", //permanent and temporary
      country: "",
      countryCode: "",
      zipCode: "",
      subAdministrativeArea_District: "",
      locality_Municipility: "",
      city: "",
      wardNo: "",
      tole: "",
      street: "",
      blockNo: "",
      houseNo: "",
      addressLine: "",
      locationMap: "",
      latLong: "",
    },
  ],
  studentECAAchievements: [
    {
      achievementECA: "",
      achievementECAArea: "",
      achievementECADesc: "",
      achievementECADate: "",
    },
  ],
  studentFamilyBackgrounds: [
    {
      fullName: "",
      occupation: "",
      employer: "",
      phoneNo: "",
      email: "",
      relation: "Father", //from relation ddl
    },
    {
      fullName: "",
      occupation: "",
      employer: "",
      phoneNo: "",
      email: "",
      relation: "Mother", //from relation ddl
    },
    {
      fullName: "",
      occupation: "",
      employer: "",
      phoneNo: "",
      email: "",
      relation: "Guardian", //from relation ddl
    },
  ],
  startYear: "",
  passedYear: "",
  boardUniversityName: "",
  boardUniversityTitle: "",
  boardUniversityRank: "",
  institutionName: "",
  educationDegree: "",
  scoreMarks: "",
  scorePercentage: "",
  gpa: "",
  grade: "",
  division: "",
  certifiedDate: "",
};

export default function AdmissionForm() {
  const ref = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();

  const handleSubmit = async (values, handleReset) => {
    const finalData = {
      ...values,
      studentCourseOrCareer: [
        {
          studentCourseOrCareerDescription:
            values.studentCourseOrCareerDescription,
        },
      ],
      studentEvaluationForLearningDifficulty: [
        {
          studentEvaluationForLearningDifficultyDesc:
            values.studentEvaluationForLearningDifficultyDesc,
        },
      ],
      studentAcademicProblemHistory: [
        {
          studentAcademicProblemHistoryDescription:
            values.studentAcademicProblemHistoryDescription,
        },
      ],
      studentWeaknesses: [
        {
          studentWeaknessesDescription: values.studentWeaknessesDescription,
        },
      ],
      studentStrength: [
        {
          studentStrengthDescription: values.studentStrengthDescription,
        },
      ],
    };
    try {
      const response = await api.post(
        API_ENDPOINTS.registerStudent,
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

      if (response.data.responseCode !== "0") {
        return toastError(response.data.responseMessage);
      }
      toastSuccess(response.data.responseMessage);
      handleReset();
      navigate("/students");
      debugger;
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error in login API:", errorAsError);
      toastError(errorAsError.message);
    }
  };
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
        onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}
      >
        {({ setFieldValue, errors, touched, values, setValues }) => (
          <Form className="space-y-4">
            <BasicDetails
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
              setValues={setValues}
            />

            <AddressDetails
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
              setValues={setValues}
            />

            {/* <PersonalHealthInformation
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
            /> */}
            <SchoolDetails
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
              setValues={setValues}
            />

            <EcaDetails
              errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
              setValues={setValues}
            />

            <ParentGuardianDetail
                  errors={errors}
              touched={touched}
              setFieldValue={setFieldValue}
              values={values}
              setValues={setValues}
            />

            <Button ref={ref} type="submit" className="bg-color">
              Submit
            </Button>
            {/* <ScrollToError /> */}
          </Form>
        )}
      </Formik>
    </div>
  );
}
