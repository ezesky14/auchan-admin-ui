import { DataTable } from '@/app/components/data-table/data-table';
import { Button } from '@/app/components/button';
import { columns } from './columns';
import { transactions } from '@/app/mock/db';

export default function TransactionTable() {
  return (
    <div className="mt-8">
      <div className="mb-4 flex items-center justify-between px-6">
        <h2 className="text-foreground-secondary text-2xl font-bold">
          Transactions récentes
        </h2>
        <Button variant="outline" className="rounded-lg">
          {'Toutes les transactions >'}
        </Button>
      </div>
      <DataTable
        columns={columns}
        data={transactions}
        enablePagination={false}
        enableSorting={false}
        enableFiltering={false}
      />
    </div>
  );
}
