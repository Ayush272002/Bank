"use client";

import { Button } from "@repo/ui/button";
import { useRouter } from "next/navigation";

const Appbar = () => {
  const router = useRouter();

  return (
    <div className="flex border-b justify-between p-4 bg-slate-50 fixed top-0 w-full">
      <div className="flex flex-col justify-center text-2xl font-extrabold text-slate-700">
        Bank
      </div>
      <div className="flex">
        <div className="pr-4">
          <Button
            sx={{
              backgroundColor: "orange",
              "&:hover": {
                backgroundColor: "darkorange",
              },
            }}
            onClick={() => {}}
          >
            Contact Sales
          </Button>
        </div>
        <Button onClick={() => router.push("/signup")}>Get Started</Button>
      </div>
    </div>
  );
};

export default Appbar;
