import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import TransactionTable from '@/app/components/transactions/transaction-table/transaction-table';

const meta = {
  title: 'Composants/Composants composites/TransactionTable',
  component: TransactionTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} satisfies Meta<typeof TransactionTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
