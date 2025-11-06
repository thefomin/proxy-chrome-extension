import { CircleFlag } from "react-circle-flags";
import { cn } from "../lib/css";

interface FlagInfoProps {
  country: string;
  tag: string;
  city: string;
  className?: string;
}

export const FlagInfo = ({ country, tag, city, className }: FlagInfoProps) => {
  return (
    <div className={cn("flex flex-row gap-3 items-center", className)}>
      <div className="flex items-center justify-center h-10 w-10 rounded-full text-2xl">
        <CircleFlag
          countryCode={tag.toLowerCase()}
          height="40"
          width="40"
          cdnUrl="https://hatscripts.github.io/circle-flags/flags/"
        />
      </div>

      <div className="flex flex-col">
        <div className="text-base font-medium">{country}</div>
        <div className="text-[12px]">{city}</div>
      </div>
    </div>
  );
};
