import { Button } from '@/components/ui/button';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPrevious: () => void;
    onNext: () => void;
    className?: string;
}

export const Pagination = ({
    currentPage,
    totalPages,
    onPrevious,
    onNext,
    className = '',
}: PaginationProps) => {
    return (
        <div
            className={`flex items-center gap-3 md:gap-4 ${className}`}
        >
            <Button
                variant="outline"
                size="icon"
                onClick={onPrevious}
                disabled={currentPage === 1}
                className="rounded-full bg-[#141414] border-zinc-800 text-white hover:bg-zinc-800 w-12 h-12 disabled:opacity-50"
            >
                <GoArrowLeft className="text-xl" />
            </Button>

            <div className="text-zinc-400 text-sm md:text-base whitespace-nowrap">
                <span className="text-white font-medium">
                    {String(currentPage).padStart(2, "0")}
                </span>{" "}
                of {totalPages}
            </div>

            <Button
                variant="outline"
                size="icon"
                onClick={onNext}
                disabled={currentPage === totalPages}
                className="rounded-full bg-[#141414] border-zinc-800 text-white hover:bg-zinc-800 w-12 h-12 disabled:opacity-50"
            >
                <GoArrowRight className="text-xl" />
            </Button>
        </div>
    );
};
