import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Stores from '@/app/ui/stores/stores/stores';

const meta = {
  title: 'Pages/Magasins/LISTE DES MAGASINS',
  component: Stores,
  parameters: {
    layout: 'padded',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stores>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
