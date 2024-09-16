import Sidebar from "../../components/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex bg-slate-100">
      <Sidebar />
      <div className="flex-1 p-4">{children}</div>
    </div>
  );
}
