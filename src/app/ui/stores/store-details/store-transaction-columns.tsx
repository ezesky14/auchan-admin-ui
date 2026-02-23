'use client';

import type { ColumnDef } from '@tanstack/react-table';
import type { Store } from '@/app/types/store';

type StoreTransaction = Store['transactions'][number];

export const storeTransactionColumns: ColumnDef<StoreTransaction>[] = [
  {
    accessorKey: 'id',
    header: 'ID Transaction',
  },
  {
    accessorKey: 'type',
    header: 'Type de transaction',
    cell: ({ row }) => {
      const type = row.getValue<string>('type');
      return <span className="font-semibold text-black">{type}</span>;
    },
  },
  {
    accessorKey: 'amount',
    header: 'Montant',
    cell: ({ row }) => {
      const amount = row.getValue<number>('amount');
      return <span className="font-medium">+{amount} FCFA</span>;
    },
  },
  {
    accessorKey: 'clientContact',
    header: 'Client',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
];
