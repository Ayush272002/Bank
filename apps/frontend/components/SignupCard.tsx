"use client";

import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";
import { PasswordBox } from "@repo/ui/password-box";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const SignupCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setConfirmPassword(e.target.value);
  };

  const signUpHandler = async () => {
    if (!email || !password || !name || !number || !confirmPassword) {
      toast.error("Please fill all the fields");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/v1/user/signup`,
        {
          name,
          email,
          number,
          password,
        },
        {
          withCredentials: true,
        },
      );

      if (response.status === 200) {
        // router.push("/api/auth/signin");
        toast.success("User created successfully, sign in now");
      } else {
        toast.error(response.data.error || "Something went wrong");
      }
    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.error) {
        toast.error(error.response.data.error);
      } else {
        toast.error("An error occurred during sign up. Please try again.");
      }
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-full md:p-12">
      <div className="flex flex-col gap-5">
        <div>
          <h4 className="m-0 font-inter font-medium text-[1.5rem] leading-[1.58334] text-customPrimary">
            Adventure starts here 🚀
          </h4>
          <p className="">Please enter the details to create an account</p>
        </div>

        <InputBox placeholder="Full Name" onChange={handleNameChange} />
        <InputBox placeholder="Email" onChange={handleEmailChange} />
        <InputBox placeholder="Phone Number" onChange={handleNumberChange} />
        <PasswordBox onChange={handlePasswordChange} />
        <PasswordBox
          onChange={handleConfirmPasswordChange}
          label="Confirm Password"
        />
        <Button onClick={signUpHandler}>Sign up</Button>

        <div className="flex justify-center items-center flex-wrap gap-2">
          <p style={{ color: "rgba(46, 38, 61, 0.7)" }}>
            Already have an account?
          </p>
          <a
            style={{ color: "#8C57FF" }}
            className="cursor-pointer"
            onClick={() => router.push("/signin")}
          >
            Sign in instead
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupCard;
