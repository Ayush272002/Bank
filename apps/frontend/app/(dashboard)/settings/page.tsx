"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
import { toast } from "react-toastify";
import { Loader } from "@repo/ui/loader";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function SettingsPage() {
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await axios.get(
          `${API_BASE_URL}/api/v1/user/currUser`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("jwt")}`,
            },
          },
        );
        if (userResponse.status === 200) {
          setName(userResponse.data.name);
          setEmail(userResponse.data.email);
          setNumber(userResponse.data.number);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const updateUserHandler = async () => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/user/updateUser`,
        {
          name: name,
          email: email,
          number: number,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );

      if (res.status === 200) {
        toast.success("User details updated successfully");
      }
    } catch (error: any) {
      console.error(error);
      toast.error("Failed to update user details : " + error.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-8 overflow-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Settings</h1>
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </header>

        <Tabs defaultValue="account" className="space-y-4">
          <TabsList>
            <TabsTrigger
              value="account"
              className="bg-stone-200 data-[state=active]:bg-stone-400"
            >
              Account
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="bg-stone-200 data-[state=active]:bg-stone-400"
            >
              Security
            </TabsTrigger>
            <TabsTrigger
              value="notifications"
              className="bg-stone-200 data-[state=active]:bg-stone-400"
            >
              Notifications
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card className="bg-stone-200">
              <CardHeader>
                <CardTitle>Account Information</CardTitle>
                <CardDescription>
                  Update your account details here.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <Button
                  className="bg-black text-white"
                  onClick={updateUserHandler}
                >
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security">
            <Card className="bg-stone-200">
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>
                  Manage your account security preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>
                <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
                  <div className="space-y-0.5">
                    <Label
                      htmlFor="two-factor"
                      className="text-base font-medium"
                    >
                      Two-Factor Authentication
                    </Label>
                    <p className="text-sm text-gray-500">
                      Enable for enhanced account security
                    </p>
                  </div>
                  <Switch
                    id="two-factor"
                    checked={twoFactor}
                    onCheckedChange={setTwoFactor}
                    className="scale-125 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-800"
                  />
                </div>
                <Button className="w-full bg-black text-white">
                  Update Security Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="notifications">
            <Card className="bg-stone-200">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>
                  Choose how you want to be notified.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="email-notifications">
                      Email Notifications
                    </Label>
                    <p className="text-sm text-gray-500">
                      Receive updates via email
                    </p>
                  </div>
                  <Switch
                    id="email-notifications"
                    checked={emailNotifications}
                    onCheckedChange={setEmailNotifications}
                    className="scale-125 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-800"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="push-notifications">
                      Push Notifications
                    </Label>
                    <p className="text-sm text-gray-500">
                      Receive updates on your device
                    </p>
                  </div>
                  <Switch
                    id="push-notifications"
                    checked={pushNotifications}
                    onCheckedChange={setPushNotifications}
                    className="scale-125 data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-800"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Notification Frequency</Label>
                  <RadioGroup defaultValue="daily">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="realtime" id="realtime" />
                      <Label htmlFor="realtime">Real-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily Summary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly Summary</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button className="bg-black text-white">
                  Save Notification Settings
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
