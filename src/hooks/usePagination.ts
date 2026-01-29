import { useState, useCallback } from 'react';

interface UsePaginationProps {
    initialPage?: number;
    totalPages: number;
}

export const usePagination = ({
    initialPage = 1,
    totalPages,
}: UsePaginationProps) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const goToNext = useCallback(() => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }, [totalPages]);

    const goToPrevious = useCallback(() => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }, []);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(Math.max(1, Math.min(page, totalPages)));
    }, [totalPages]);

    return {
        currentPage,
        goToNext,
        goToPrevious,
        goToPage,
        canGoNext: currentPage < totalPages,
        canGoPrevious: currentPage > 1,
    };
};
