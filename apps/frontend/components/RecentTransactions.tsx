import React from "react";

interface Transaction {
  id: number;
  amount: number;
  type: "DEPOSIT" | "WITHDRAWAL" | "TRANSFER";
  createdAt: string;
  senderId?: number;
  receiverId?: number;
  sender?: { name: string }; // Make sure sender is optional and includes name
  receiver?: { name: string }; // Make sure receiver is optional and includes name
}

interface RecentTransactionsProps {
  transactions: Transaction[];
}

const RecentTransactions: React.FC<RecentTransactionsProps> = ({
  transactions,
}) => {
  return (
    <div className="rounded-lg border bg-stone-200 text-black shadow-sm mb-8">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
          Recent Transactions
        </h3>
        <p className="text-sm text-black">Your latest financial activities</p>
      </div>
      <div className="p-6">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-slate-300">
                  {transaction.type.charAt(0)}
                </span>
              </span>
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
                <p className="text-sm text-black">
                  {new Date(transaction.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div
                className={`ml-auto font-medium ${transaction.type === "DEPOSIT" ? "text-green-500" : "text-red-500"}`}
              >
                {transaction.type === "DEPOSIT" ? "+" : "-"}£
                {Math.abs(transaction.amount / 100).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
