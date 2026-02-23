import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import type { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/app/components/data-table/data-table';

type SampleRow = {
  id: string;
  type: string;
  amount: number;
  client: string;
  date: string;
};

const sampleColumns: ColumnDef<SampleRow>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'type', header: 'Type' },
  {
    accessorKey: 'amount',
    header: 'Montant',
    cell: ({ row }) => `${row.getValue<number>('amount')} FCFA`,
  },
  { accessorKey: 'client', header: 'Client' },
  { accessorKey: 'date', header: 'Date' },
];

const sampleData: SampleRow[] = Array.from({ length: 25 }, (_, i) => ({
  id: `TXN${String(i + 1).padStart(3, '0')}`,
  type: i % 2 === 0 ? 'Paiement course' : 'Rendu monnaie',
  amount: [1500, 2500, 3000, 1800, 4200][i % 5],
  client: '+225 07 08 06 05 04',
  date: '20/01/2025, 10:20',
}));

const meta = {
  title: 'Composants/Composants composites/DataTable',
  component: DataTable<SampleRow, unknown>,
  tags: ['autodocs'],
  args: {
    columns: sampleColumns,
    data: sampleData,
  },
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof DataTable<SampleRow, unknown>>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutPagination: Story = {
  args: {
    enablePagination: false,
  },
};

export const WithoutSorting: Story = {
  args: {
    enableSorting: false,
  },
};
