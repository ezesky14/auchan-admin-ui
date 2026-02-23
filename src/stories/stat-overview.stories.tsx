import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StatOverview from '@/app/components/stat-overview/stat-overview';

const meta = {
  title: 'Composants/Composants composites/StatOverview',
  component: StatOverview,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof StatOverview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
