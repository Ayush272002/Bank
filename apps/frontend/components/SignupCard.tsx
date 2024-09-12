"use client";

import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";
import { PasswordBox } from "@repo/ui/password-box";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SignupCard = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
        <PasswordBox onChange={handlePasswordChange} />
        <PasswordBox onChange={handlePasswordChange} label="Confirm Password" />
        <Button
          onClick={() =>
            console.log(`Email: ${email}, Password: ${password} Name: ${name}`)
          }
          className="w-[345px] ml-1"
        >
          Sign up
        </Button>

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
