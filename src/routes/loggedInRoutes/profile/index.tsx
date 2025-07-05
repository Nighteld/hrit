import type React from "react";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Camera, User } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { handleImageValidation } from "@/utils/function";
import api from "@/utils/api";
import API_ENDPOINTS from "@/utils/apiList";
import { getAppToken, toastError, toastSuccess } from "@/utils/helper";
import { useQuery } from "@tanstack/react-query";
import { fetchUserProfileDetails } from "@/action/utilityAction";
import { useNavigate } from "react-router";

export default function ProfilePage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  console.log("user", user);
  useEffect(() => {
    if (user?.userCategory?.toUpperCase() === "AGENT") {
      navigate("/agent/profile");
    }
  }, []);

  const {
    isPending,
    error,
    data: profileDetails,
    refetch,
  } = useQuery({
    queryKey: ["agentList"],

    queryFn: () => fetchUserProfileDetails({}),
    retry: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [formData, setFormData] = useState({
    userProfileImage: {
      documentName: "",
      documentFile: "",
    },
  });
  const [loader, setLoader] = useState(false);

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

            setFormData((prev) => ({
              ...prev,
              userProfileImage: {
                documentName: files[0].name,
                documentFile: imageBase64,
              },
            }));
          }
        };
        reader.onerror = function (error) {
          // console.log(error);
        };
      }
    }
  };

  const handleSaveImage = async () => {
    setLoader(true);
    try {
      const response = await api.post(
        API_ENDPOINTS.UploadProfileImage,
        formData,
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
      handleCancelImage();
      refetch();
      debugger;
    } catch (error: unknown) {
      const errorAsError = error as Error;
      console.error("Error in login API:", errorAsError);
      toastError(errorAsError.message);
      setLoader(false);
    }
    setLoader(false);
  };

  const handleCancelImage = () => {
    setFormData({
      userProfileImage: {
        documentName: "",
        documentFile: "",
      },
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the updated user data to your backend
    alert("Profile updated successfully!");
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <Card>
          <CardHeader>
            <CardTitle>Profile Picture</CardTitle>
            <CardDescription>Update your profile picture here</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-6">
            <Avatar className="w-40 h-40 border">
              <AvatarImage
                src={
                  formData?.userProfileImage?.documentFile
                    ? `data:image/jpeg;base64,${formData?.userProfileImage?.documentFile}`
                    : profileDetails?.imageFile
                }
              />
              <AvatarFallback className="text-4xl">
                <User className="w-16 h-16" />
              </AvatarFallback>
            </Avatar>

            <div className="w-full">
              <Label htmlFor="profile-image" className="cursor-pointer">
                <div className="flex items-center gap-2 justify-center w-full p-2 border-2 border-dashed rounded-md hover:bg-muted">
                  <Camera className="w-5 h-5" />
                  <span>Choose image</span>
                </div>
                <Input
                  id="profile-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </Label>
            </div>

            {formData.userProfileImage.documentFile && (
              <div className="flex gap-2 w-full">
                <Button
                  onClick={handleSaveImage}
                  className="flex-1"
                  disabled={loader}
                >
                  {loader ? "Uploading..." : "Save"}
                </Button>
                <Button
                  onClick={handleCancelImage}
                  variant="outline"
                  className="flex-1"
                >
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <form onSubmit={handleSubmit}>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              {/* <CardDescription>
                Update your personal details here
              </CardDescription> */}
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={user?.firstName}
                  onChange={handleInputChange}
                  disabled
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={user?.email}
                  onChange={handleInputChange}
                  disabled
                />
              </div>
              {/* 
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  value={user.bio}
                  onChange={handleInputChange}
                />
              </div> */}
            </CardContent>
            {/* <CardFooter>
              <Button type="submit">Save Changes</Button>
            </CardFooter> */}
          </form>
        </Card>
      </div>
    </div>
  );
}
