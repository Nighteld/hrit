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
export default function AddressDetails(props: any) {
  const { errors, touched, setFieldValue, values, setValues } = props;

  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Address Details</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* <div className="space-y-2">
            <Label htmlFor="addressType">
             Permanent Address
            </Label>
            <Field
              as={Input}
              id="addressType"
              name="addressType"
              type="text"
            />
            <ErrorMessage
              name="addressType"
              component="div"
              className="text-red-500 text-sm"
            />
          </div> */}
          {values.studentAddress.map((item, index) => (
            <>
              <p className="font-bold col-span-3">{item.addressType} Address</p>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Field
                  as={Input}
                  id="country"
                  name="country"
                  value={item.country}
                  type="text"
                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      country: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="administrativeArea_State">Province</Label>
                <Field
                  as={Input}
                  id="administrativeArea_State"
                  name="administrativeArea_State"
                  type="text"
                  value={item.administrativeArea_State}
                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      administrativeArea_State: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="administrativeArea_State"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subAdministrativeArea_District">District</Label>
                <Field
                  as={Input}
                  id="subAdministrativeArea_District"
                  name="subAdministrativeArea_District"
                  type="text"
                  value={item.subAdministrativeArea_District}

                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      subAdministrativeArea_District: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="subAdministrativeArea_District"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="locality_Municipility">Municipality</Label>
                <Field
                  as={Input}
                  id="locality_Municipility"
                  name="locality_Municipility"
                  type="text"
                  value={item.locality_Municipility}

                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      locality_Municipility: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="locality_Municipility"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Field
                  as={Input}
                  id="city"
                  name="city"
                  type="text"
                  value={item.city}

                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      city: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="wardNo">Ward</Label>
                <Field
                  as={Input}
                  id="wardNo"
                  name="wardNo"
                  type="text"
                  value={item.wardNo}

                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      wardNo: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="wardNo"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="tole">Tole</Label>
                <Field
                  as={Input}
                  id="tole"
                  name="tole"
                  type="text"
                  value={item.tole}

                  onChange={(e) => {
                    const newAchievements = [...values.studentAddress];
                    newAchievements[index] = {
                      ...newAchievements[index],
                      tole: e.target.value,
                    };

                    setValues((prev) => ({
                      ...prev,
                      studentAddress: newAchievements,
                    }));
                  }}
                />
                <ErrorMessage
                  name="tole"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
