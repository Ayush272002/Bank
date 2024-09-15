const Sidebar = () => {
  return (
    <div className="w-64 p-6 shadow-md">
      <div className="flex items-center mb-8">
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
          className="lucide lucide-dollar-sign h-8 w-8 text-blue-600"
          data-id="4"
        >
          <line x1="12" x2="12" y1="2" y2="22"></line>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
        </svg>
        <span className="ml-2 text-2xl font-bold text-slate-900">Bank App</span>
      </div>

      <nav>
        <button
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200 hover:text-slate-900 h-10 px-4 py-2 w-full justify-start mb-2 text-slate-700"
          data-id="7"
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
            className="lucide lucide-home mr-2 h-4 w-4 text-slate-600"
            data-id="8"
          >
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          Dashboard
        </button>

        <button
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200 hover:text-slate-900 h-10 px-4 py-2 w-full justify-start mb-2 text-slate-700"
          data-id="9"
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
            className="lucide lucide-credit-card mr-2 h-4 w-4 text-slate-600"
            data-id="10"
          >
            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
            <line x1="2" x2="22" y1="10" y2="10"></line>
          </svg>
          Accounts
        </button>

        <button
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200 hover:text-slate-900 h-10 px-4 py-2 w-full justify-start mb-2 text-slate-700"
          data-id="11"
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
            className="lucide lucide-send mr-2 h-4 w-4 text-slate-600"
            data-id="12"
          >
            <path d="m22 2-7 20-4-9-9-4Z"></path>
            <path d="M22 2 11 13"></path>
          </svg>
          Transfers
        </button>

        <button
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200 hover:text-slate-900 h-10 px-4 py-2 w-full justify-start mb-2 text-slate-700"
          data-id="13"
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
            className="lucide lucide-pie-chart mr-2 h-4 w-4 text-slate-600"
            data-id="14"
          >
            <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
            <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
          </svg>
          Analytics
        </button>

        <button
          className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-slate-200 hover:text-slate-900 h-10 px-4 py-2 w-full justify-start text-slate-700"
          data-id="15"
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
            className="lucide lucide-settings mr-2 h-4 w-4 text-slate-600"
            data-id="16"
          >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Settings
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
