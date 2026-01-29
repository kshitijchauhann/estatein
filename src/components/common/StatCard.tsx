import type { Stat } from '@/types';

interface StatCardProps {
    stat: Stat;
    className?: string;
}

export const StatCard = ({ stat, className = '' }: StatCardProps) => {
    return (
        <div
            className={`bg-[#1a1a1a] border border-zinc-800 p-5 rounded-xl text-center md:text-left ${className}`}
        >
            <p className="text-white text-2xl md:text-3xl font-bold">{stat.value}</p>
            <p className="text-zinc-500 text-xs md:text-sm mt-1">{stat.label}</p>
        </div>
    );
};
