import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import DonutChart from '@/app/components/stat-overview/donut-chart';

const meta = {
  title: 'Composants/Composants composites/DonutChart',
  component: DonutChart,
  tags: ['autodocs'],
  args: {
    segments: [
      { value: 6400, color: '#e0001a', label: 'Rendu monnaie' },
      { value: 2964, color: '#22c55e', label: 'Paiement course' },
    ],
    centerValue: '9 364',
    centerLabel: 'Transactions',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DonutChart>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SmallSize: Story = {
  args: {
    size: 150,
  },
};

export const WithoutCenter: Story = {
  args: {
    centerValue: undefined,
    centerLabel: undefined,
  },
};
