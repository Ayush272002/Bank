"use client";

import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";
import { PasswordBox } from "@repo/ui/password-box";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SigninCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignin = async () => {
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/api/v1/user/signin`, {
        email,
        password,
      });
      if (response.status === 200) {
        localStorage.setItem("jwt", response.data.jwt);
        router.push("/dashboard");
        toast.success("Sign in successful");
      } else {
        toast.error(response.data.error || "Something went wrong");
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred during sign in. Please try again.");
      }
      console.error("Signin error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full md:p-12">
      <div className="flex flex-col gap-5">
        <div>
          <h4 className="m-0 font-inter font-medium text-[1.5rem] leading-[1.58334] text-customPrimary">
            Welcome back!
          </h4>
          <p className="">
            Please sign-in to your account and start the adventure
          </p>
        </div>

        <InputBox placeholder="Email" onChange={handleEmailChange} />
        <PasswordBox onChange={handlePasswordChange} />
        <Button onClick={handleSignin}>Sign in</Button>

        <div className="flex justify-center items-center flex-wrap gap-2">
          <p style={{ color: "rgba(46, 38, 61, 0.7)" }}>New on our platform?</p>
          <a
            style={{ color: "#8C57FF" }}
            className="cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Create an Account
          </a>
        </div>
      </div>
    </div>
  );
};

export default SigninCard;
