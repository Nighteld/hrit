import React from 'react'
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
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { Button } from "@/components/ui/button";
import NepaliDatePicker, { NepaliDate } from "@zener/nepali-datepicker-react";
import { ErrorMessage, Field } from "formik";
import { ChevronRight, FolderPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { dateFormatter } from '@/utils/function';
export default function SchoolDetails(props: any) {
  const { errors, touched, setFieldValue, values, setValues } = props;

  return (
    <div>
        <Card className="shadow-none">
      <CardHeader>
        <CardTitle>School Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="institutionName">School Name / Institute Name</Label>
            <Field as={Input} id="institutionName" name="institutionName" type="text" placeholder="School Name / Institute Name" />
            <ErrorMessage
              name="institutionName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="educationDegree">Education Degree</Label>
            <Field as={Input} id="educationDegree" name="educationDegree" type="text" placeholder="SEE" />
            <ErrorMessage
              name="educationDegree"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="scoreMarks">Score Marks</Label>
            <Field as={Input} id="scoreMarks" name="scoreMarks" type="text" placeholder="1000" />
            <ErrorMessage
              name="scoreMarks"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="scorePercentage">Score Percentage(%)</Label>
            <Field as={Input} id="scorePercentage" name="scorePercentage" type="text" placeholder="80%" />
            <ErrorMessage
              name="scorePercentage"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
       
          {/* <div className="space-y-2">
        <Label htmlFor="familyMemberValue">Family Member Value</Label>
        <Field as={Input} id="familyMemberValue" name="familyMemberValue" type="text" />
        <ErrorMessage name="familyMemberValue" component="div" className="text-red-500 text-sm" />
      </div> */}
          <div className="space-y-2">
            <Label htmlFor="startYear">Started Year</Label>

            <NepaliDatePicker
              // value={value}
              type="AD"

              lang="en"
              placeholder="Select date"
              onChange={(value) => {
                                setFieldValue("startYear", dateFormatter(value));
                

                // setValue(e);
              }}
            />

            <div className="text-red-500 text-sm">{errors?.startYear}</div>
          </div>
 
   <div className="space-y-2">
            <Label htmlFor="passedYear">Passed Year</Label>

            <NepaliDatePicker
              // value={value}
              type="AD"

              lang="en"
              placeholder="Select date"
              onChange={(value) => {
                                setFieldValue("passedYear", dateFormatter(value));


                // setValue(e);
              }}
            />

            <div className="text-red-500 text-sm">{errors?.passedYear}</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="gpa">GPA</Label>
            <Field
              as={Input}
              id="gpa"
              name="gpa"
              type="text"
              placeholder="4.0"

            />
            <ErrorMessage
              name="gpa"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="grade">Grade</Label>
            <Field
              as={Input}
              id="grade"
              name="grade"
              type="text"
              placeholder="A+"
            />
            <ErrorMessage
              name="grade"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="division">Division</Label>
            <Field
              as={Input}
              id="division"
              name="division"
              type="text"
              placeholder="Dist"

            />
            <ErrorMessage
              name="division"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
             <div className="space-y-2">
            <Label htmlFor="certifiedDate">Certified Year</Label>

            <NepaliDatePicker
              // value={value}
type='AD'
              lang="en"
              placeholder="Select date"
              onChange={(value) => {
                                             setFieldValue("certifiedDate", dateFormatter(value));


                // setValue(e);
              }}
            />

            <div className="text-red-500 text-sm">{errors?.certifiedDate}</div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="boardUniversityName">Board University Name</Label>
            <Field as={Input} id="boardUniversityName" name="boardUniversityName" type="text" placeholder="NEB"/>
            <ErrorMessage
              name="boardUniversityName"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>{" "}
          <div className="space-y-2">
            <Label htmlFor="boardUniversityTitle">Board University Title</Label>
            <Field as={Input} id="boardUniversityTitle" name="boardUniversityTitle" type="text" placeholder="SEE" />
            <ErrorMessage
              name="boardUniversityTitle"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>{" "}
          <div className="space-y-2">
            <Label htmlFor="boardUniversityRank">Board University Rank</Label>
            <Field as={Input} id="boardUniversityRank" name="boardUniversityRank" type="text" placeholder="Distinction"/>
            <ErrorMessage
              name="boardUniversityRank"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
        
        
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
