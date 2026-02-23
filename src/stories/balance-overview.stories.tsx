import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import BalanceOverview from '@/app/components/balance-overview';

const meta = {
  title: 'Composants/Composants composites/BalanceOverview',
  component: BalanceOverview,
  tags: ['autodocs'],
  args: {
    balanceDetails: {
      amount: '1 250 000',
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof BalanceOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
