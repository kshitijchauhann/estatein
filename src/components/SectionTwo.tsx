import { GoArrowUpRight } from "react-icons/go";
import { IoHomeSharp, IoCamera, IoSunnySharp } from "react-icons/io5";
import { BsBuildingsFill } from "react-icons/bs";

const sections = [
  {
    id: 1,
    title: "Find Your Dream Home",
    icon: IoHomeSharp,
  },
  {
    id: 2,
    title: "Unlock Property Value",
    icon: IoCamera,
  },
  {
    id: 3,
    title: "Effortless Property Management",
    icon: BsBuildingsFill,
  },
  {
    id: 4,
    title: "Smart Investments, Informed Decisions",
    icon: IoSunnySharp,
  },
];

const SectionTwo = () => {
  return (
    <div
      className="
        grid
        grid-cols-2 md:grid-cols-4
        gap-3 md:gap-6
        px-6 md:px-12 lg:px-24
        pt-10 pb-16
        min-h-[320px]
        place-content-center
        border-[5px] border-[#141414]
      "
    >
      {sections.map(({ id, title, icon: Icon }) => (
        <div
          key={id}
          className="
            relative
            flex flex-col items-center justify-center
            text-center
            bg-[#141414]
            border border-zinc-800
            p-5 md:p-8
            rounded-xl
            group
            hover:border-[#703BF7]
            transition-all duration-300
          "
        >
          {/* Top-right Icon */}
          <div className="absolute top-4 right-4">
            <GoArrowUpRight className="text-zinc-500 group-hover:text-white text-xl transition-colors" />
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="p-3 bg-[#1a1a1a] rounded-full border border-zinc-800 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-8 h-8 text-[#703BF7]" />
            </div>

            <p className="text-white font-medium text-sm md:text-base leading-snug">
              {title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionTwo;
