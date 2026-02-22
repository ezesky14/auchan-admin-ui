'use client';

import type { Table } from '@tanstack/react-table';
import {
  CaretLeftIcon,
  CaretRightIcon,
  CaretDoubleLeftIcon,
  CaretDoubleRightIcon,
} from '@phosphor-icons/react';
import { cn } from '@/lib/utils';

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="flex items-center justify-between px-2 py-2">
      <p className="text-sm text-muted-foreground">
        Page {pageIndex + 1} sur {pageCount}
      </p>

      <div className="flex items-center gap-1">
        <PaginationButton
          onClick={() => table.firstPage()}
          disabled={!table.getCanPreviousPage()}
          aria-label="Première page"
        >
          <CaretDoubleLeftIcon size={16} />
        </PaginationButton>
        <PaginationButton
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          aria-label="Page précédente"
        >
          <CaretLeftIcon size={16} />
        </PaginationButton>
        <PaginationButton
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          aria-label="Page suivante"
        >
          <CaretRightIcon size={16} />
        </PaginationButton>
        <PaginationButton
          onClick={() => table.lastPage()}
          disabled={!table.getCanNextPage()}
          aria-label="Dernière page"
        >
          <CaretDoubleRightIcon size={16} />
        </PaginationButton>
      </div>
    </div>
  );
}

function PaginationButton({
  className,
  children,
  ...props
}: React.ComponentProps<'button'>) {
  return (
    <button
      className={cn(
        'inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-muted disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export { DataTablePagination };
