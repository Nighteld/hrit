import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { toastError, toastSuccess, updateCookieStorage, updateLocalStorage } from "@/utils/helper";
import { encrypt } from "@/utils/encrypted";
const validationSchema = Yup.object().shape({
  // email: Yup.string().email("Invalid email").required("This field is required"),
  userName: Yup.string().required("This field is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("This field is required"),
});
interface loginDetails {
  userName: string;
  password: string;
}

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (values: {
    userName: string;
    password: string;
  }) => {
    try {
      const response = await api.post(API_ENDPOINTS.login, values, {
      });
      if (response.data.responseCode !== "0") {
        return toastError(response.data.responseMessage);
      }
      const { data } = response.data;
      const newData = { ...data };
      delete newData.userToken;
      const encrypted = encrypt(JSON.stringify(newData));
      const encryptedToken = encrypt(data.userToken);
      login({
        encrypted: encrypted,
        encryptedToken: encryptedToken,
      });
      // updateLocalStorage({ key: "USER_LOGIN", value: encrypted });
      // updateCookieStorage({ key: "ACCESS_TOKEN", value: encryptedToken });
      toastSuccess(response.data.responseMessage);
      navigate("/dashboard");
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error in login API:", errorAsError);
      toastError(errorAsError.message);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome</CardTitle>
          <CardDescription>Login with your Email and Password.</CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={{ userName: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div className="grid gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">UserName</Label>
                    <Field
                      as={Input}
                      id="email"
                      name="userName"
                      // type="email"
                      type="text"
                      // placeholder="m@example.com"
                      required
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a
                        href="#"
                        className="text-sm underline-offset-4 hover:underline"
                      >
                        Forgot your password?
                      </a>
                    </div>
                    <Field
                      as={Input}
                      id="password"
                      name="password"
                      type="password"
                      required
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-color"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}
