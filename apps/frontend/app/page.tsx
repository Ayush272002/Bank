import { LinkItem } from "@repo/ui/link-item";
import Appbar from "../components/Appbar";

export default function Home() {
  return (
    <div>
      <Appbar />
      <div className="ml-[3rem] mt-[4rem] flex justify-center">
        <div>
          <img
            src="14924-carpenter-laptop-home-improvement-933x400.jpg"
            alt="carpenter-laptop image"
            height="400"
            width="933"
            className="ob"
          />
        </div>
        <div className="ml-4 w-[300px] h-[400px]">
          <div className="bg-slate-400 h-full">
            <div>
              <div className="p-4">
                <a
                  href=""
                  className="text-4xl text-slate-100 cursor-pointer underline"
                >
                  Global Money Account
                </a>
              </div>
              <div className="p-5">
                Send and spend abroad with no fees. Eligibility criteria apply.
              </div>
            </div>
            <span className="block w-full h-0.5 bg-black opacity-70 my-2"></span>
            <div>
              <div className="p-4">
                <a
                  href=""
                  className="text-4xl text-slate-100 cursor-pointer underline"
                >
                  Saving Goals
                </a>
              </div>
              <div className="p-5">
                Whatever your plan, creating a goal can help you achieve it.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ml-[7rem] mt-[4rem]">
        <div className=" p-4 grid grid-cols-4 gap-x-[4rem] gap-y-[2rem] justify-center">
          <LinkItem label="Current Account" />
          <LinkItem label="Mortgages" />
          <LinkItem label="Credit cards" />
          <LinkItem label="Savings" />
          <LinkItem label="Loans" />
          <LinkItem label="International" />
          <LinkItem label="Investing" />
          <LinkItem label="Insurance" />
        </div>
      </div>
    </div>
  );
}
