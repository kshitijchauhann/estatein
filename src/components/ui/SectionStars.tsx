import { RiGeminiFill } from "react-icons/ri";
import { cn } from "@/lib/utils";

interface SectionStarsProps {
    className?: string;
}

const SectionStars = ({ className }: SectionStarsProps) => {
    return (
        <div className={cn("flex items-center justify-center gap-1", className)}>
            <RiGeminiFill className="text-zinc-600 text-2xl" />
            <RiGeminiFill className="text-zinc-700 text-lg opacity-70" />
            <RiGeminiFill className="text-zinc-800 text-sm opacity-50" />
        </div>
    );
};

export default SectionStars;
