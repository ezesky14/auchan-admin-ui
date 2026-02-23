'use client';

import { useState } from "react";
import { Store } from "@/app/types/store";
import { ArrowRightIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import StoreItem from "./store-item/store-item";

const ITEMS_PER_PAGE = 10;

type Props = {
    stores: Store[];
}

export default function StoreList({ stores }: Props) {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(stores.length / ITEMS_PER_PAGE);

    const paginatedStores = stores.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <div>
            <div className="flex flex-wrap gap-6 mt-6 lg:justify-between">
                {paginatedStores.map((store) => (
                    <StoreItem key={store.id} store={store} />
                ))}
            </div>

            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center justify-center size-10 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ArrowLeftIcon size={18} weight="bold" className={currentPage === 1 ? "text-gray-400" : "text-primary"} />
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`flex items-center justify-center size-12.5 rounded-lg cursor-pointer transition-colors ${page === currentPage
                                ? "border-2 border-primary text-foreground bg-white"
                                : "bg-gray-200 text-foreground hover:bg-gray-200"
                                }`}
                        >
                            <span className="text-lg font-bold ">{page}</span>
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center justify-center size-10 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:opacity-40"
                    >
                        <ArrowRightIcon size={18} weight="bold" className={currentPage === totalPages ? "text-gray-400" : "text-primary"} />
                    </button>
                </div>
            )}
        </div>
    );
}