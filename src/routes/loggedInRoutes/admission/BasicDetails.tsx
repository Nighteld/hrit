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
import { ErrorMessage, Field } from "formik";

export default function BasicDetails(props: any) {
  const { errors, touched, setFieldValue } = props;

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
        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="middleName">Middle Name</Label>
        <Field as={Input} id="middleName" name="middleName" type="text" />
        <ErrorMessage name="middleName" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Field as={Input} id="lastName" name="lastName" type="text" />
        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="familyMemberValue">Family Member Value</Label>
        <Field as={Input} id="familyMemberValue" name="familyMemberValue" type="text" />
        <ErrorMessage name="familyMemberValue" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Field as={Input} id="gender" name="gender" type="text" />
        <ErrorMessage name="gender" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="dateOfBirth">Date of Birth</Label>
        <Field as={Input} id="dateOfBirth" name="dateOfBirth" type="date" />
        <ErrorMessage name="dateOfBirth" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phoneNo">Phone Number</Label>
        <Field as={Input} id="phoneNo" name="phoneNo" type="text" />
        <ErrorMessage name="phoneNo" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="emailID">Email ID</Label>
        <Field as={Input} id="emailID" name="emailID" type="email" />
        <ErrorMessage name="emailID" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="occupation">Occupation</Label>
        <Field as={Input} id="occupation" name="occupation" type="text" />
        <ErrorMessage name="occupation" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="religion">Religion</Label>
        <Field as={Input} id="religion" name="religion" type="text" />
        <ErrorMessage name="religion" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="nationality">Nationality</Label>
        <Field as={Input} id="nationality" name="nationality" type="text" />
        <ErrorMessage name="nationality" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="bloodGroup">Blood Group</Label>
        <Field as={Input} id="bloodGroup" name="bloodGroup" type="text" />
        <ErrorMessage name="bloodGroup" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="martialStatus">Marital Status</Label>
        <Field as={Input} id="martialStatus" name="martialStatus" type="text" />
        <ErrorMessage name="martialStatus" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="firstLanguage">First Language</Label>
        <Field as={Input} id="firstLanguage" name="firstLanguage" type="text" />
        <ErrorMessage name="firstLanguage" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="secondLanguage">Second Language</Label>
        <Field as={Input} id="secondLanguage" name="secondLanguage" type="text" />
        <ErrorMessage name="secondLanguage" component="div" className="text-red-500 text-sm" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="otherLanguage">Other Language</Label>
        <Field as={Input} id="otherLanguage" name="otherLanguage" type="text" />
        <ErrorMessage name="otherLanguage" component="div" className="text-red-500 text-sm" />
      </div>
          <div className="space-y-1">
            <Label>Class</Label>
            <Select onValueChange={(value) => setFieldValue("class", value)}>
              <SelectTrigger
                className={
                  errors.class && touched.class ? "validation-error" : ""
                }
              >
                <SelectValue placeholder="Click to select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
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

          <div className="space-y-1">
            <Label>DOB</Label>
            <Field
              as={Input}
              name="dob"
              placeholder="YYYY-MM-DD"
              className={errors.dob && touched.dob ? "validation-error" : ""}
            />
          </div>

          <div className="space-y-1">
            <Label className="font-medium text-sm mb-2 required">
              First Name
            </Label>
            <Field
              as={Input}
              id="name"
              name="first_name"
              className={
                errors.first_name && touched.first_name
                  ? "validation-error"
                  : ""
              }
            />
          </div>

          <div className="space-y-1">
            <Label className="font-medium text-sm mb-2">Middle Name</Label>
            <Field as={Input} name="middle_name" />
          </div>

          <div className="space-y-1">
            <Label>Last Name</Label>
            <Field
              as={Input}
              name="last_name"
              className={
                errors.last_name && touched.last_name ? "validation-error" : ""
              }
            />
            {/* <ErrorMessage
              name="last_name"
              component="div"
              className="text-red-500 text-sm mt-1"
            /> */}
          </div>

          <div className="space-y-1">
            <Label>Mobile Number</Label>
            <Field
              as={Input}
              name="mobile_number"
              className={
                errors.mobile_number && touched.mobile_number
                  ? "validation-error"
                  : ""
              }
            />
            {/* <ErrorMessage
              name="mobile_number"
              component="div"
              className="text-red-500 text-sm mt-1"
            /> */}
          </div>

          <div className="space-y-1">
            <Label>Email</Label>
            <Field
              as={Input}
              name="email"
              className={
                errors.email && touched.email ? "validation-error" : ""
              }
              autocomplete="new-email"
            />
            {/* <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            /> */}
          </div>

          <div className="space-y-1">
            <Label>Address</Label>
            <Field
              as={Input}
              name="address"
              className={
                errors.address && touched.address ? "validation-error" : ""
              }
            />
            {/* <ErrorMessage
              name="address"
              component="div"
              className="text-red-500 text-sm mt-1"
            /> */}
          </div>

          <div className="space-y-1">
            <Label htmlFor="picture">Photo</Label>
            <Field
              name="picture"
              as={Input}
              type="file"
              accept="image/*"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
