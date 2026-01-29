import { Button } from '@/components/ui/button';
import type { ReactNode } from 'react';

interface SectionHeaderProps {
    preTitle?: ReactNode;
    title: string;
    description?: string;
    actionButton?: {
        label: string;
        onClick?: () => void;
        variant?: 'default' | 'outline';
    };
    className?: string;
}

export const SectionHeader = ({
    preTitle,
    title,
    description,
    actionButton,
    className = '',
}: SectionHeaderProps) => {
    return (
        <div
            className={`flex flex-col md:flex-row md:justify-between md:items-end gap-6 ${className}`}
        >
            <div className="max-w-3xl space-y-4">
                {preTitle}
                <h2 className="text-white text-3xl md:text-4xl font-bold">{title}</h2>
                {description && (
                    <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>
                )}
            </div>
            {actionButton && (
                <Button
                    variant={actionButton.variant || 'outline'}
                    onClick={actionButton.onClick}
                    className="bg-zinc-900 text-white border-zinc-800 hover:bg-zinc-800 w-fit rounded-lg px-6"
                >
                    {actionButton.label}
                </Button>
            )}
        </div>
    );
};
