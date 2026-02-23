'use client';

import { useState } from 'react';
import { Store } from '@/app/types/store';
import { ArrowRightIcon, ArrowLeftIcon } from '@phosphor-icons/react';
import StoreItem from './store-item/store-item';

const ITEMS_PER_PAGE = 10;

type Props = {
  stores: Store[];
};

export default function StoreList({ stores }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(stores.length / ITEMS_PER_PAGE);

  const paginatedStores = stores.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE,
  );

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div>
      <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {paginatedStores.map((store) => (
          <StoreItem key={store.id} store={store} className="w-full" />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeftIcon
              size={18}
              weight="bold"
              className={currentPage === 1 ? 'text-gray-400' : 'text-primary'}
            />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => goToPage(page)}
              className={`flex size-12.5 cursor-pointer items-center justify-center rounded-lg transition-colors ${
                page === currentPage
                  ? 'border-primary text-foreground border-2 bg-white'
                  : 'text-foreground bg-gray-200 hover:bg-gray-200'
              }`}
            >
              <span className="text-lg font-bold">{page}</span>
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex size-10 cursor-pointer items-center justify-center rounded-lg disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowRightIcon
              size={18}
              weight="bold"
              className={
                currentPage === totalPages ? 'text-gray-400' : 'text-primary'
              }
            />
          </button>
        </div>
      )}
    </div>
  );
}
