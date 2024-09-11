"use client";

import { Button } from "@repo/ui/button";
import { InputBox } from "@repo/ui/input-box";
import { PasswordBox } from "@repo/ui/password-box";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
        <Button
          onClick={() => console.log(`Email: ${email}, Password: ${password}`)}
          className="w-[45ch] ml-1"
        >
          Sign in
        </Button>

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
