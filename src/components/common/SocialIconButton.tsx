import type { ReactNode } from 'react';

interface SocialIconButtonProps {
    icon: ReactNode;
    label: string;
    href: string;
    className?: string;
}

export const SocialIconButton = ({
    icon,
    label,
    href,
    className = '',
}: SocialIconButtonProps) => {
    return (
        <a
            href={href}
            aria-label={label}
            className={`w-10 h-10 flex items-center justify-center bg-[#0a0a0a] rounded-full border border-zinc-800 text-white hover:bg-zinc-800 transition-all ${className}`}
        >
            {icon}
        </a>
    );
};
