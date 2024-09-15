"use client";
import { Loader } from "@repo/ui/loader";
import axios from "axios";
import { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function () {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/v1/user/currUser`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setName(response.data.name);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex-1 p-8 overflow-auto">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Welcome back, {name}</h1>
        <div className="flex items-center">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 mr-2"
            data-id="21"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bell h-5 w-5"
              data-id="22"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </button>

          <span
            className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
            data-id="23"
          >
            <img
              className="aspect-square h-full w-full"
              data-id="24"
              alt="John Doe"
              src="/placeholder-user.jpg"
            />
          </span>
        </div>
      </header>
    </div>
  );
}
