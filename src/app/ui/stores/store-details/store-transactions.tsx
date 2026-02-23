'use client';

import { useState, useMemo } from 'react';
import { type DateRange } from 'react-day-picker';
import { DataTable } from '@/app/components/data-table/data-table';
import { Button } from '@/app/components/button';
import { DateRangePicker } from '@/app/components/date-range-picker';
import { Store } from '@/app/types/store';
import { storeTransactionColumns } from './store-transaction-columns';
import {
  MagnifyingGlassIcon,
  ArrowsClockwiseIcon,
  ExportIcon,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';
import { InputSearch } from '@/app/components/input-search';

type TransactionFilter = 'tous' | 'Rendu monnaie' | 'Paiement course';

const tabs = ['Transactions', 'Caissiers'] as const;
type Tab = (typeof tabs)[number];

const filterButtons: { label: string; value: TransactionFilter }[] = [
  { label: 'Tous', value: 'tous' },
  { label: 'Rendu monnaie', value: 'Rendu monnaie' },
  { label: 'Paiement course', value: 'Paiement course' },
];

export default function StoreTransactions({ store }: { store: Store }) {
  const [activeTab, setActiveTab] = useState<Tab>('Transactions');
  const [activeFilter, setActiveFilter] = useState<TransactionFilter>('tous');
  const [search, setSearch] = useState('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(),
  });

  const filteredTransactions = useMemo(() => {
    let result = store.transactions;

    if (activeFilter !== 'tous') {
      result = result.filter((t) => t.type === activeFilter);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.id.toLowerCase().includes(q) ||
          t.type.toLowerCase().includes(q) ||
          t.clientContact.toLowerCase().includes(q),
      );
    }

    return result;
  }, [store.transactions, activeFilter, search]);

  return (
    <div className="card-no-padding mt-6 p-0">
      <div className="p-6">
        <div className="flex w-fit gap-1 rounded-lg bg-gray-200 p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'cursor-pointer rounded-lg px-6 py-3 text-sm font-semibold transition-colors',
                activeTab === tab
                  ? 'bg-white text-black'
                  : 'hover:text-gray-700',
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div>
        {activeTab === 'Transactions' && (
          <>
            <div className="p-6">
              <h3 className="mb-4 text-lg font-bold">Transactions</h3>

              <div className="mb-6 flex flex-wrap items-center gap-3">
                <div className="relative max-w-md min-w-[200px] flex-1">
                  <InputSearch
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Type, prenom et nom, n° client, n° devoir..."
                    className="w-full pr-4 text-sm outline-none focus:border-gray-400"
                  />
                </div>

                <div className="flex items-center gap-2">
                  {filterButtons.map((btn) => (
                    <button
                      key={btn.value}
                      onClick={() => setActiveFilter(btn.value)}
                      className={cn(
                        'bg-input-foreground cursor-pointer rounded-full px-4 py-3 text-xs font-medium italic transition-colors',
                        activeFilter === btn.value
                          ? 'bg-pink-custom'
                          : 'border-gray-300 text-gray-600 hover:border-gray-400',
                      )}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>

                <DateRangePicker value={dateRange} onChange={setDateRange} />

                <button className="flex cursor-pointer items-center justify-center p-2 text-gray-600 hover:border-gray-400">
                  <ArrowsClockwiseIcon size={18} weight="bold" />
                </button>

                <Button className="ml-auto flex items-center gap-2 rounded-lg">
                  Exporter
                </Button>
              </div>
            </div>

            <DataTable
              columns={storeTransactionColumns}
              data={filteredTransactions}
              enableSorting={false}
              enableFiltering={false}
              enablePagination
              pageSize={10}
            />
          </>
        )}

        {activeTab === 'Caissiers' && (
          <div className="py-8 text-center text-gray-400">
            Contenu des caissiers à venir
          </div>
        )}
      </div>
    </div>
  );
}
