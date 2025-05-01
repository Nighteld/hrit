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
import { Field } from "formik";

export default function PersonalHealthInformation(props: any) {
  const { errors, touched, setFieldValue } = props;

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Personal Health Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="space-y-1">
            <Label>Blood Group</Label>
            <Select
              onValueChange={(value) => setFieldValue("bloodGroup", value)}
            >
              <SelectTrigger
                className={
                  errors.bloodGroup && touched.bloodGroup
                    ? "validation-error"
                    : ""
                }
              >
                <SelectValue placeholder="Click to select" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="A+">A+ (A Positive)</SelectItem>
                  <SelectItem value="A−">A− (A Negative)</SelectItem>
                  <SelectItem value="B+">B+ (B Positive)</SelectItem>
                  <SelectItem value="B−">B− (B Negative)</SelectItem>
                  <SelectItem value="AB+">AB+ (AB Positive)</SelectItem>
                  <SelectItem value="AB−">AB− (AB Negative)</SelectItem>
                  <SelectItem value="O+">O+ (O Positive)</SelectItem>
                  <SelectItem value="O−">O− (O Negative)</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1">
            <Label>Height</Label>
            <Field as={Input} name="height" />
          </div>

          <div className="space-y-1">
            <Label>Weight</Label>
            <Field as={Input} name="weight" />
          </div>

          <div className="space-y-1">
            <Label>Medical History</Label>
            <Field as={Input} name="medicalHistory" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
