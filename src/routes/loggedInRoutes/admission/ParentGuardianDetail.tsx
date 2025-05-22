import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Field } from "formik";

export default function ParentGuardianDetail(props: any) {
  const { errors, touched } = props;

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Parent Guardian Detail</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-5">
          <div className="space-y-1">
            <Label>Father Name</Label>
            <Field
              as={Input}
              id="name"
              name="fatherName"
              className={
                errors.fatherName && touched.fatherName
                  ? "validation-error"
                  : ""
              }
            />
          </div>

          <div className="space-y-1">
            <Label>Father Contact Number</Label>
            <Field
              as={Input}
              name="fatherContactNumber"
              className={
                errors.fatherContactNumber && touched.fatherContactNumber
                  ? "validation-error"
                  : ""
              }
            />
          </div>
            <div className="space-y-1">
            <Label>Father Email</Label>
            <Field
              as={Input}
              name="fatherContactNumber"
              className={
                errors.fatherContactNumber && touched.fatherContactNumber
                  ? "validation-error"
                  : ""
              }
            />
          </div>


          <div className="space-y-1">
            <Label>Father Occupation</Label>
            <Field as={Input} name="fatherOccupation" />
          </div>

          {/* <div className="space-y-1">
            <Label htmlFor="fatherImage">Father Photo</Label>
            <Input
              id="fatherImage"
              name="fatherImage"
              type="file"
              accept="image/*"
            />
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-8">
          <div className="space-y-1">
            <Label>Mother Name</Label>
            <Field
              as={Input}
              name="motherName"
              className={
                errors.motherName && touched.motherName
                  ? "validation-error"
                  : ""
              }
            />
          </div>

          <div className="space-y-1">
            <Label>Mother Contact Number</Label>
            <Field
              as={Input}
              name="motherContactNumber"
              className={
                errors.motherContactNumber && touched.motherContactNumber
                  ? "validation-error"
                  : ""
              }
            />
          </div>
            <div className="space-y-1">
            <Label>Mother Email</Label>
            <Field
              as={Input}
              name="fatherContactNumber"
              className={
                errors.fatherContactNumber && touched.fatherContactNumber
                  ? "validation-error"
                  : ""
              }
            />
          </div>

          <div className="space-y-1">
            <Label>Mother Occupation</Label>
            <Field as={Input} name="motherOccupation" />
          </div>

          {/* <div className="space-y-1">
            <Label htmlFor="motherPhoto">Mother Photo</Label>
            <Input
              id="motherPhoto"
              name="motherPhoto"
              type="file"
              accept="image/*"
            />
          </div> */}
        </div>

        <div className="border-dashed border-2 border-gray-300 rounded-lg p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            <div className="col-span-3 space-y-1">
              <p className="mb-2">If Guardian Is:</p>
              <RadioGroup defaultValue="comfortable" className="flex space-x-3">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1">Father</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="comfortable" id="r2" />
                  <Label htmlFor="r2">Mother</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compact" id="r3" />
                  <Label htmlFor="r3">Other</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-1">
              <Label>Guardian Name</Label>
              <Field
                as={Input}
                id="guardianName"
                name="guardianName"
                className={
                  errors.guardianName && touched.guardianName
                    ? "validation-error"
                    : ""
                }
              />
            </div>

            <div className="space-y-1">
              <Label>Guardian Contact Number</Label>
              <Field
                as={Input}
                id="guardianContactNumber"
                name="guardianContactNumber"
                className={
                  errors.guardianContactNumber && touched.guardianContactNumber
                    ? "validation-error"
                    : ""
                }
              />
            </div>
 <div className="space-y-1">
            <Label>Guardian Email</Label>
            <Field
              as={Input}
              name="fatherContactNumber"
              className={
                errors.fatherContactNumber && touched.fatherContactNumber
                  ? "validation-error"
                  : ""
              }
            />
          </div>
           <div className="space-y-1">
            <Label>Guardian Relationship With Student</Label>
            <Field
              as={Input}
              name="fatherContactNumber"
              className={
                errors.fatherContactNumber && touched.fatherContactNumber
                  ? "validation-error"
                  : ""
              }
            />
          </div>
            <div className="space-y-1">
              <Label>Guardian Occupation</Label>
              <Field as={Input} name="guardianOccupation" />
            </div>

            {/* <div className="space-y-1">
              <Label htmlFor="guardianImage">Guardian Photo</Label>
              <Input
                id="guardianImage"
                name="guardianImage"
                type="file"
                accept="image/*"
              />
            </div> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
