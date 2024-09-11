import SigninCard from "../../components/SigninCard";

export default function () {
  return (
    <div className="flex justify-center h-full">
      <div className="flex items-center justify-center flex-1 relative p-6 max-md:hidden h-full min-h-[100dvh] bg-slate-200">
        <div className="pt-[3rem] pb-[3rem]">
          <img
            src="v2-login-light.png"
            alt="tree1"
            className="max-h-[500px] max-w-full"
          />
        </div>
      </div>

      <div className="flex justify-center">
        <SigninCard />
      </div>
    </div>
  );
}
