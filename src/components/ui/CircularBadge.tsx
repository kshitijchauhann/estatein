import { GoArrowUpRight } from "react-icons/go";

const CircularBadge = () => {
    return (
        <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-[#141414] rounded-full border border-zinc-800 shadow-xl z-10">
            {/* Curved Text using SVG */}
            <svg className="absolute w-full h-full p-2" viewBox="0 0 100 100">
                <defs>
                    <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                </defs>
                <text className="fill-white text-[10px] tracking-widest font-medium uppercase">
                    <textPath xlinkHref="#circlePath" startOffset="0%">
                        Discover Your Dream Property ✨
                    </textPath>
                </text>
            </svg>

            {/* Center Arrow */}
            <GoArrowUpRight className="text-white text-3xl" />
        </div>
    );
};

export default CircularBadge;
