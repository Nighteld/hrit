import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { GenerateToken } from "@/auth/authAction";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";

const validationSchema = () =>
  Yup.object({
    currentPassword: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is required"),
    newPassword: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password is required"),
    newPasswordConfirmation: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Password confirmation is required")
      .oneOf(
        [Yup.ref("newPassword")],
        "Password and Confirm Password didn't match"
      ),
  });
const initialValues = {
  currentPassword: "",
  newPassword: "",
  newPasswordConfirmation: "",
};

export default function ChangePassword() {
    const handleSubmit = async (values,handleReset) => {
        await GenerateToken();
        try {
          const response = await api.post(API_ENDPOINTS.changeUserPassword, values, {
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
          debugger;
        } catch (error: unknown) {
          const errorAsError = error as Error;
          console.error("Error in login API:", errorAsError);
          toastError(errorAsError.message);
        }
      };
  return (
    <section className="w-full max-w-1/3">
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
                <CardTitle>Change Password</CardTitle>
              </CardHeader>
              <CardContent className="">
              <div className="space-y-2">
{/* <div className="space-y-2"> */}
                <div className="space-y-2">
                  <Label htmlFor="email">
                    Current Password
                    {/* <span className="text-red-500">*</span> */}
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="currentPassword"
                    className={errors.currentPassword ? "validation-error" : ""}
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
                    New Password
                    {/* <span className="text-red-500">*</span> */}
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="newPassword"
                    className={errors.newPassword ? "validation-error" : ""}
                    // type="email"
                    type="password"
                    // placeholder="m@example.com"
                    // required
                  />
                  <ErrorMessage
                    name="newPassword"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPasswordConfirmation">
                    Confirm Password
                    {/* <span className="text-red-500">*</span> */}
                  </Label>
                  <Field
                    as={Input}
                    id="newPasswordConfirmation"
                    name="newPasswordConfirmation"
                    className={
                      errors.newPasswordConfirmation ? "validation-error" : ""
                    }
                    // type="email"
                    type="password"
                    // placeholder="m@example.com"
                    // required
                  />
                  <ErrorMessage
                    name="newPasswordConfirmation"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                {/* </div> */}

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
    </section>
  );
}
