"use client";

import { useState, useEffect } from "react";
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

interface Transaction {
  id: number;
  amount: number;
  type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  createdAt: string;
  senderId?: number;
  receiverId?: number;
  sender?: { name: string };
  receiver?: { name: string };
}

export default function TransfersPage() {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchTransactions = async (pageNum: number) => {
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/v1/user/getAllTransactions`,
        {
          params: { page: pageNum, limit: 5 },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        },
      );
      if (res.status === 200) {
        setTransactions((prevTransactions) =>
          pageNum === 1
            ? res.data.transactions
            : [...prevTransactions, ...res.data.transactions],
        );
        setTotalPages(res.data.totalPages);
      }
    } catch (error) {
      toast.error("Failed to fetch transactions");
    }
  };

  useEffect(() => {
    fetchTransactions(1);
  }, []);

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
        setAmount("");
        setRecipient("");
        fetchTransactions(1);
      }
    } catch (error) {
      toast.error("Transfer failed");
    }
  };

  const loadMoreTransactions = () => {
    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
      fetchTransactions(page + 1);
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
                    value={recipient}
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
                      value={amount}
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
              {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarFallback>
                      {transaction.type === "DEPOSIT"
                        ? transaction.receiver?.name?.[0] || "D"
                        : transaction.type === "WITHDRAWAL"
                          ? transaction.sender?.name?.[0] || "W"
                          : transaction.senderId === null
                            ? transaction.sender?.name?.[0] || "R"
                            : transaction.receiver?.name?.[0] || "S"}
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {transaction.type === "DEPOSIT"
                        ? `Deposit from ${transaction.receiver?.name || "Unknown"}`
                        : transaction.type === "WITHDRAWAL"
                          ? `Withdrawal to ${transaction.sender?.name || "Unknown"}`
                          : transaction.senderId === null
                            ? `Received from ${transaction.sender?.name || "Unknown"}`
                            : `Sent to ${transaction.receiver?.name || "Unknown"}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(transaction.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div
                    className={`ml-auto font-medium ${
                      transaction.type === "DEPOSIT" ||
                      transaction.senderId === null
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {transaction.type === "DEPOSIT" ||
                    transaction.senderId === null
                      ? "+"
                      : "-"}
                    £{Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            {page < totalPages && (
              <Button
                variant="outline"
                className="w-full text-white bg-black"
                onClick={loadMoreTransactions}
              >
                Load More Transactions
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
