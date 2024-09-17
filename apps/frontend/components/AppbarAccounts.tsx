const AppbarAccounts = () => {
  return (
    <header className="border-b" data-id="2">
      <div className="flex h-16 items-center px-4" data-id="3">
        <h1 className="text-2xl font-bold" data-id="4">
          Accounts
        </h1>
        <div className="ml-auto flex items-center space-x-4" data-id="5">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
          </button>
          <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <img
              className="aspect-square h-full w-full"
              alt="User"
              src="/placeholder-user.jpg"
            />
          </span>
        </div>
      </div>
    </header>
  );
};

export default AppbarAccounts;
