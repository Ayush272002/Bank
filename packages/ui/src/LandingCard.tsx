import { LinkItem } from "./LinkItem";

interface LandingCardProps {
  label: string;
  description: string;
  links: string[];
  imgSrc: string;
}

export const LandingCard = ({
  label,
  description,
  links,
  imgSrc,
}: LandingCardProps) => {
  return (
    <div>
      <div className="flex grow shrink-0 w-[398.4px] h-[223.5px] m-4">
        <div className="bg-slate-50">
          <a href="#" className="block w-full">
            <div className="">
              <img src={imgSrc} alt="card image" className="object-cover" />
              <div className="mt-3">
                <LinkItem label={label} />
              </div>
            </div>
          </a>

          <div className="mt-5 mb-5">{description}</div>

          {links.map((link, index) => (
            <div
              className="bg-slate-200 text-right font-bold hover:underline leading-loose border-b-2 border-b-slate-300 h-[50px] flex items-center justify-end px-4"
              key={index}
            >
              <div>{link}</div>
              <div className="flex items-center justify-center mb-3">
                <span className="text-red-500 text-5xl">›</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
