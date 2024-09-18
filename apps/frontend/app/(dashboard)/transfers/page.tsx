"use client";

import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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
import { PoundSterlingIcon } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function TransfersPage() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/v1/pay/transfer`,
        {
          amount: parseFloat(amount),
          recipient: recipient,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );

      if (res.status === 200) {
        toast.success("Transfer successful");
      }
    } catch (error) {
      toast.error("Transfer failed");
    }
  };

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Transfers</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-stone-200">
          <CardHeader>
            <CardTitle>New Transfer</CardTitle>
            <CardDescription>Send money to other people</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleTransfer}>
              <div className="space-y-4">
                <Label>Transfer to someone else</Label>

                <div className="space-y-2">
                  <Label htmlFor="recipient">Recipient</Label>
                  <Input
                    id="recipient"
                    placeholder="Enter recipient email"
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="amount">Amount</Label>
                  <div className="relative">
                    <PoundSterlingIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      id="amount"
                      type="number"
                      placeholder="0.00"
                      className="pl-10"
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full mt-6 bg-black text-white">
                Transfer Money
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="bg-stone-200">
          <CardHeader>
            <CardTitle>Recent Transfers</CardTitle>
            <CardDescription>Your latest transfer activities</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Sarah Johnson", amount: -50.0, date: "2023-06-15" },
                { name: "Savings Account", amount: -200.0, date: "2023-06-14" },
                { name: "John Smith", amount: -75.5, date: "2023-06-13" },
                { name: "Current Account", amount: 500.0, date: "2023-06-12" },
              ].map((transfer, index) => (
                <div key={index} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>{transfer.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {transfer.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {transfer.date}
                    </p>
                  </div>
                  <div
                    className={`ml-auto font-medium ${transfer.amount > 0 ? "text-green-500" : "text-red-500"}`}
                  >
                    {transfer.amount > 0 ? "+" : ""}£
                    {Math.abs(transfer.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full text-white bg-black">
              View All Transfers
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
