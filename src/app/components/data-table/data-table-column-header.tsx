'use client';

import type { Column } from '@tanstack/react-table';
import { ArrowUpIcon, ArrowDownIcon, ArrowsDownUpIcon } from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface DataTableColumnHeaderProps<TData, TValue> {
  column: Column<TData, TValue>;
  title: string;
  className?: string;
}

function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort()) {
    return <span className={className}>{title}</span>;
  }

  const sorted = column.getIsSorted();

  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center gap-1 transition-colors hover:text-foreground',
        className,
      )}
      onClick={() => column.toggleSorting(sorted === 'asc')}
    >
      {title}
      {sorted === 'asc' ? (
        <ArrowUpIcon size={14} weight="bold" />
      ) : sorted === 'desc' ? (
        <ArrowDownIcon size={14} weight="bold" />
      ) : (
        <ArrowsDownUpIcon size={14} />
      )}
    </button>
  );
}

export { DataTableColumnHeader };
export type { DataTableColumnHeaderProps };
