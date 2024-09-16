"use client";
import { Loader } from "@repo/ui/loader";
import axios from "axios";
import { useEffect, useState } from "react";
import AppbarClient from "../../../components/AppbarClient";

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
      <AppbarClient name={name} />

      {/* 4 cards */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-stone-200 shadow-sm text-black">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Total Balance
            </h3>

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
              className="lucide lucide-pound-sterling h-4 w-4 text-black"
              data-id="30"
            >
              <path d="M18 7c0-5.333-8-5.333-8 0"></path>
              <path d="M10 7v14"></path>
              <path d="M6 21h12"></path>
              <path d="M6 13h10"></path>
            </svg>
          </div>

          <div className="p-6" data-id="31">
            <div className="text-2xl font-bold" data-id="32">
              £12,345.67
            </div>
            <p className="text-xs text-black" data-id="33">
              +2.5% from last month
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-stone-200 text-balck shadow-sm">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Income
            </h3>
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
              className="lucide lucide-arrow-up h-4 w-4 text-black"
              data-id="37"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
          </div>
          <div className="p-6">
            <div className="text-2xl font-bold">£4,567.89</div>
            <p className="text-xs text-black">+10.5% from last month</p>
          </div>
        </div>

        <div className="rounded-lg border bg-stone-200 text-black shadow-sm">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Expenses
            </h3>
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
              className="lucide lucide-arrow-down h-4 w-4 text-black"
              data-id="44"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
          <div className="p-6" data-id="45">
            <div className="text-2xl font-bold" data-id="46">
              £2,345.67
            </div>
            <p className="text-xs text-black" data-id="47">
              -5.2% from last month
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-stone-200 text-black shadow-sm">
          <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
            <h3 className="whitespace-nowrap tracking-tight text-sm font-medium">
              Savings Goal
            </h3>
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
              className="lucide lucide-pie-chart h-4 w-4 text-black"
              data-id="51"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
          </div>
          <div className="p-6" data-id="52">
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-black">£7,500 / £10,000</p>
          </div>
        </div>
      </div>

      {/* recent transaction */}
      <div
        className="rounded-lg border bg-stone-200 text-black shadow-sm mb-8"
        data-id="55"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6" data-id="56">
          <h3
            className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight"
            data-id="57"
          >
            Recent Transactions
          </h3>
          <p className="text-sm text-black" data-id="58">
            Your latest financial activities
          </p>
        </div>
        <div className="p-6" data-id="59">
          <div className="space-y-4" data-id="60">
            <div className="flex items-center" data-id="61">
              <span
                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                data-id="62"
              >
                <span
                  className="flex h-full w-full items-center justify-center rounded-full bg-slate-300"
                  data-id="63"
                >
                  G
                </span>
              </span>
              <div className="ml-4 space-y-1" data-id="64">
                <p className="text-sm font-medium leading-none" data-id="65">
                  Grocery Store
                </p>
                <p className="text-sm text-black" data-id="66">
                  2023-06-15
                </p>
              </div>
              <div className="ml-auto font-medium text-red-500" data-id="67">
                £85.32
              </div>
            </div>
            <div className="flex items-center" data-id="61">
              <span
                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                data-id="62"
              >
                <span
                  className="flex h-full w-full items-center justify-center rounded-full bg-slate-300"
                  data-id="63"
                >
                  S
                </span>
              </span>
              <div className="ml-4 space-y-1" data-id="64">
                <p className="text-sm font-medium leading-none" data-id="65">
                  Salary Deposit
                </p>
                <p className="text-sm text-black" data-id="66">
                  2023-06-14
                </p>
              </div>
              <div className="ml-auto font-medium text-green-500" data-id="67">
                +£3500.00
              </div>
            </div>
            <div className="flex items-center" data-id="61">
              <span
                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                data-id="62"
              >
                <span
                  className="flex h-full w-full items-center justify-center rounded-full bg-slate-300"
                  data-id="63"
                >
                  E
                </span>
              </span>
              <div className="ml-4 space-y-1" data-id="64">
                <p className="text-sm font-medium leading-none" data-id="65">
                  Electric Bill
                </p>
                <p className="text-sm text-black" data-id="66">
                  2023-06-13
                </p>
              </div>
              <div className="ml-auto font-medium text-red-500" data-id="67">
                £120.50
              </div>
            </div>
            <div className="flex items-center" data-id="61">
              <span
                className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
                data-id="62"
              >
                <span
                  className="flex h-full w-full items-center justify-center rounded-full bg-slate-300"
                  data-id="63"
                >
                  O
                </span>
              </span>
              <div className="ml-4 space-y-1" data-id="64">
                <p className="text-sm font-medium leading-none" data-id="65">
                  Online Shopping
                </p>
                <p className="text-sm text-black" data-id="66">
                  2023-06-12
                </p>
              </div>
              <div className="ml-auto font-medium text-red-500" data-id="67">
                £65.99
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div
        className="rounded-lg border bg-stone-200 text-black shadow-sm"
        data-id="68"
        data-v0-t="card"
      >
        <div className="flex flex-col space-y-1.5 p-6" data-id="69">
          <h3
            className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight"
            data-id="70"
          >
            Quick Actions
          </h3>
          <p className="text-sm text-black" data-id="71">
            Manage your finances with ease
          </p>
        </div>
        <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-slate-900 h-10 px-4 py-2">
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
              className="lucide lucide-send mr-2 h-4 w-4"
            >
              <path d="m22 2-7 20-4-9-9-4Z"></path>
              <path d="M22 2 11 13"></path>
            </svg>
            Transfer Money
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-slate-900 h-10 px-4 py-2"
            data-id="75"
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
              className="lucide lucide-credit-card mr-2 h-4 w-4"
              data-id="76"
            >
              <rect width="20" height="14" x="2" y="5" rx="2"></rect>
              <line x1="2" x2="22" y1="10" y2="10"></line>
            </svg>
            Pay Bills
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-slate-900 h-10 px-4 py-2"
            data-id="77"
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
              className="lucide lucide-pie-chart mr-2 h-4 w-4"
              data-id="78"
            >
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
            Investments
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-slate-900 h-10 px-4 py-2"
            data-id="79"
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
              className="lucide lucide-user mr-2 h-4 w-4"
              data-id="80"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            Support
          </button>
        </div>
      </div>
    </div>
  );
}
