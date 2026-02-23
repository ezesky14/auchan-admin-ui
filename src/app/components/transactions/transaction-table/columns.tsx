'use client';

import type { ColumnDef } from '@tanstack/react-table';
import type { Transaction } from '@/app/types/transaction';
import { cn } from '@/lib/utils';

const transactionTypeLabels: Record<string, string> = {
  paiement_course: 'Paiement course',
  rendu_monnaie: 'Rendu monnaie',
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'type',
    header: 'Type de transaction',
    cell: ({ row }) =>
      transactionTypeLabels[row.getValue<string>('type')] ??
      row.getValue<string>('type'),
  },
  {
    accessorKey: 'store',
    header: 'Magasin',
  },
  {
    accessorKey: 'amount',
    header: 'Montant',
    cell: ({ row }) => {
      const amount = row.getValue<number>('amount');
      const isPositive = amount >= 0;
      return (
        <span
          className={cn(
            'font-medium',
            isPositive ? 'text-green-600' : 'text-red-600',
          )}
        >
          {isPositive ? '+' : ''}
          {amount} FCFA
        </span>
      );
    },
  },
  {
    accessorKey: 'client',
    header: 'Client',
  },
  {
    accessorKey: 'date',
    header: 'Date',
  },
];
