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
import { useRef, useState } from "react";
import * as Yup from "yup";

import { GenerateToken } from "@/auth/authAction";
import FileUpload from "@/components/file-upload";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { handleImageValidation } from "@/utils/function";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { NepaliDate } from "@zener/nepali-datepicker-react";
import "@zener/nepali-datepicker-react/index.css";
import { Bold, ClassicEditor, Essentials, Italic, Paragraph } from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import { useNavigate } from "react-router";
const validationSchema = () =>
  Yup.object({
    eventTitle: Yup.string().notRequired(),
    eventDescription: Yup.string().required("This field is required"),
  });

const initialValues = {
  eventID: null, //send when updating event
  eventCategory: "",
  eventTitle: "",
  slug: "",
  eventDescription: "",
  eventAttachment: "",
  eventAttachmentFileName: "",
  isActive: true,
  startDate: new Date().toISOString().split("T")[0],
  endDate: new Date().toISOString().split("T")[0],
};

interface DropDown {
  id: string;
  value: string;
}
const maxDate = new NepaliDate().subtract(16, "y");
const eventCategory = ["Notices", "News"];

export default function EventsCreate() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

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
  const handleSubmit = async (values) => {
    const data = {
      ...values,
      isActive: Boolean(Number(values.isActive)),
    }
    try {
      const response = await api.post(API_ENDPOINTS.saveEvents, data, {
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
      navigate("/events");
      debugger;
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error in login API:", errorAsError);
      toastError(errorAsError.message);
    }
  };
  function slugify(title:string) {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-dark mb-3">Event Create</h1>
      <div>
        <p className="mb-3">
          Before you proceed with the form please read below topics:
        </p>
        <ul className="list-disc pl-4 mb-5">
          <li>
            Field with red border color and fade red background color indicates
            that this field is required.
          </li>
        </ul>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="eventTitle">
                      Title
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="eventTitle"
                      name="eventTitle"
                      // type="email"
                      type="text"
                      className={errors.eventTitle ? "validation-error" : ""}
                      // placeholder="m@example.com"
                      // required
                      onChange={(e) => {
                        setFieldValue("slug", slugify(e.target.value));
                        setFieldValue("eventTitle", e.target.value);
                      }}
                    />
                    <ErrorMessage
                      name="eventTitle"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="slug">
                      Slug
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Field
                      as={Input}
                      id="slug"
                      name="slug"
                      // type="email"
                      value={values.slug}
                      type="text"
                      className={errors.slug ? "validation-error" : ""}
                      disabled
                      // placeholder="m@example.com"
                      // required
                    />
                    <ErrorMessage
                      name="slug"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Category
                      {/* <span className="text-red-500">*</span> */}
                    </Label>

                    <Select
                      name="eventCategory"
                      value={values.eventCategory}
                      onValueChange={(value: string) => {
                        setFieldValue("eventCategory", value);
                      }}
                    >
                      <SelectTrigger
                        className={
                          errors.eventCategory && touched.eventCategory
                            ? "validation-error"
                            : ""
                        }
                      >
                        <SelectValue placeholder="Select Event Category" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          {eventCategory.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    {errors.eventCategory && touched.eventCategory && (
                      <div className="text-red-500 text-sm">
                        {errors.eventCategory}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label>
                      Is Active
                      {/* <span className="text-red-500">*</span> */}
                    </Label>
                    <Select
                      onValueChange={(value: string) =>
                        setFieldValue("isActive", value)
                      }
                      value={values.isActive}
                      name="isActive"
                    >
                      <SelectTrigger
                        className={
                          errors.isActive ? "validation-error" : ""
                        }
                      >
                        <SelectValue placeholder="Event Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1">Active</SelectItem>
                          <SelectItem value="0">Inactive</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <div className="text-red-500 text-sm">
                      {errors?.isActive}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>

                    <CKEditor
                      id="description"
                      editor={ClassicEditor}
                      config={{
                        licenseKey: "GPL", // Or 'GPL'.
                        plugins: [Essentials, Paragraph, Bold, Italic],
                        toolbar: [
                          "undo",
                          "redo",
                          "|",
                          "bold",
                          "italic",
                          "|",
                          "formatPainter",
                        ],
                      }}
                      data={values.eventDescription}
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setFieldValue("eventDescription", data);
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <FileUpload
                      previewUrl={values.eventAttachment}
                      name="eventAttachment"
                      imageName={values.eventAttachment}
                      fileName={values.eventAttachmentFileName}
                      error={error}
                      handleFileUpload={(e) =>
                        handleImageUpload(e, setFieldValue)
                      }
                      title="Image"
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
