'use client';

import { useMemo } from 'react';
import DonutChart, {
  DonutSegment,
} from '@/app/components/stat-overview/donut-chart';
import { Store } from '@/app/types/store';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import StoreTransactions from './store-transactions';

export default function StoreDetails({ store }: { store: Store }) {
  const segments: DonutSegment[] = useMemo(() => {
    const rendu = store.transactions.filter(
      (t) => t.type === 'Rendu monnaie',
    ).length;
    const paiement = store.transactions.filter(
      (t) => t.type === 'Paiement course',
    ).length;
    return [
      { value: rendu, color: '#e0001a', label: 'Rendu monnaie' },
      { value: paiement, color: '#22c55e', label: 'Paiement course' },
    ];
  }, [store.transactions]);

  return (
    <div>
      <div className="flex items-center gap-2 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 px-0">
          <ArrowLeftIcon
            className="text-gray-400"
            color="currentColor"
            weight="bold"
            fill="currentColor"
          />
        </div>
        <h2 className="text-xl font-bold">Détails Magasin</h2>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-2xl bg-white p-4 lg:flex-row">
        <div className="grid grow-3 grid-cols-3 gap-8">
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Nom du magasin
            </span>
            <span className="text-base font-bold">{store.name}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">Manager</span>
            <span className="text-base font-bold">{store.manager}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Nombre de caissiers
            </span>
            <span className="text-base font-bold">
              {String(store.caissiers.length).padStart(2, '0')}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Localisation
            </span>
            <span className="text-base font-bold">{store.location}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Responsable Caisse
            </span>
            <span className="text-base font-bold">
              {store.responsableCaisse}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-500">
              Nombre de Transactions
            </span>
            <span className="text-base font-bold">
              {store.transactions.length}
            </span>
          </div>
        </div>
        <div className="flex w-fit items-center gap-2 lg:ml-auto">
          <div className="mt-6 flex justify-center">
            <DonutChart segments={segments} size={150} />
          </div>

          <div className="mt-6 flex flex-col items-center justify-center gap-6">
            {segments.map((segment) => (
              <div key={segment.label} className="flex items-center gap-2">
                <span
                  className="inline-block size-3 rounded-full"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-md font-bold">{segment.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <StoreTransactions store={store} />
    </div>
  );
}
