import React from "react";
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
import { dateFormatter } from "@/utils/function";
export default function EcaDetails(props: any) {
  const { errors, touched, setFieldValue, values, setValues } = props;

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>ECA Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="studentCourseOrCareerDescription">
              Have you already decided on a courses for higher studies or a
              carrer ? if so, give details
            </Label>
            <Field
              as={Input}
              id="studentCourseOrCareerDescription"
              name="studentCourseOrCareerDescription"
              type="text"
            />
            <ErrorMessage
              name="studentCourseOrCareerDescription"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentEvaluationForLearningDifficultyDesc">
              Have you been evaluated for any learning difficulties? if so,
              please describe and attach report.
            </Label>
            <Field
              as={Input}
              id="studentEvaluationForLearningDifficultyDesc"
              name="studentEvaluationForLearningDifficultyDesc"
              type="text"
            />
            <ErrorMessage
              name="studentEvaluationForLearningDifficultyDesc"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentAcademicProblemHistoryDescription">
              Have you had any academic or other problem in school? if so,
              please describe it.
            </Label>
            <Field
              as={Input}
              id="studentAcademicProblemHistoryDescription"
              name="studentAcademicProblemHistoryDescription"
              type="text"
            />
            <ErrorMessage
              name="studentAcademicProblemHistoryDescription"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentWeaknessesDescription">
              What are your weakness ? Please decribe.
            </Label>
            <Field
              as={Input}
              id="studentWeaknessesDescription"
              name="studentWeaknessesDescription"
              type="text"
            />
            <ErrorMessage
              name="studentWeaknessesDescription"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="studentStrengthDescription">
              What are your strengths ? Please describe.
            </Label>
            <Field
              as={Input}
              id="studentStrengthDescription"
              name="studentStrengthDescription"
              type="text"
            />
            <ErrorMessage
              name="studentStrengthDescription"
              component="div"
              className="text-red-500 text-sm"
            />
          </div>
          
          <Card className="w-full md:col-span-3">
            <CardHeader>
              <div className="flex items-start md:items-center justify-between gap-4">
                <Label htmlFor="textID" className="flex-1">
                  What extracurricular activities have you been involved in?
                  (Social service, sports, arts, music, club activities, etc.)
                </Label>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setValues((prev) => ({
                      ...prev,
                      studentECAAchievements: [
                        ...prev.studentECAAchievements,
                        {
                          achievementECA: "",
                          achievementECAArea: "",
                          achievementECADesc: "",
                          achievementECADate: "",
                        },
                      ],
                    }));
                  }}
                >
                  <FolderPlus />
                  Add More ECA
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {values.studentECAAchievements.map((achivement, index) => (
                <>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="achievementECA">ECA category</Label>
                      {/* <Field as={Input} id="textID" name="textID" type="text" /> */}
                      <Select
                        onValueChange={(value) => {
                          const newAchievements = [
                            ...values.studentECAAchievements,
                          ];
                          newAchievements[index] = {
                            ...newAchievements[index],
                            achievementECA: value,
                          };

                          setValues((prev) => ({
                            ...prev,
                            studentECAAchievements: newAchievements,
                          }));
                        }}
                      >
                        <SelectTrigger
                          className={
                            errors.gender && touched.gender
                              ? "validation-error"
                              : ""
                          }
                        >
                          <SelectValue placeholder="Click to select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="sports">Sports</SelectItem>
                            <SelectItem value="arts">Arts</SelectItem>
                            <SelectItem value="social">Social</SelectItem>
                            <SelectItem value="service">Service</SelectItem>
                            <SelectItem value="music">Music</SelectItem>
                            <SelectItem value="club">Club</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="achievementECAArea">ECA Area </Label>
                      <Field
                        as={Input}
                        id="achievementECAArea"
                        name="achievementECAArea"
                        type="text"
                        placeholder="Basketball"
                        onChange={(e) => {
                          const newAchievements = [
                            ...values.studentECAAchievements,
                          ];
                          newAchievements[index] = {
                            ...newAchievements[index],
                            achievementECAArea: e.target.value,
                          };

                          setValues((prev) => ({
                            ...prev,
                            studentECAAchievements: newAchievements,
                          }));
                        }}
                      />
                      <ErrorMessage
                        name="achievementECAArea"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="achievementECADesc">
                        ECA Description{" "}
                      </Label>
                      <Field
                        as={Input}
                        id="achievementECADesc"
                        name="achievementECADesc"
                        type="text"
                        placeholder="Winner of inter college basketball tournament"
                        onChange={(e) => {
                          const newAchievements = [
                            ...values.studentECAAchievements,
                          ];
                          newAchievements[index] = {
                            ...newAchievements[index],
                            achievementECADesc: e.target.value,
                          };

                          setValues((prev) => ({
                            ...prev,
                            studentECAAchievements: newAchievements,
                          }));
                        }}
                      />
                      <ErrorMessage
                        name="achievementECADesc"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="achievementECADate">ECA DATE</Label>
                      <NepaliDatePicker
                        // value={value}
type="AD"
                        lang="en"
                        placeholder="Select date"
                        onChange={(value) => {
                          // setFieldValue(
                          //   "achievementECADate",
                          //   value?.toString()

                          const newAchievements = [
                            ...values.studentECAAchievements,
                          ];
                          newAchievements[index] = {
                            ...newAchievements[index],
                            achievementECADate: dateFormatter(value),
                          };

                          setValues((prev) => ({
                            ...prev,
                            studentECAAchievements: newAchievements,
                          }));

                          // setValue(e);
                        }}
                        // max={maxDate}
                      />
                      <div className="text-red-500 text-sm">
                        {errors?.achievementECADate}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  );
}
