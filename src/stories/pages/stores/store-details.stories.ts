import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StoreDetails from '@/app/ui/stores/store-details/store-details';
import { stores } from '@/app/mock/db';

const meta = {
  title: 'Pages/Magasins/DÉTAILS MAGASIN',
  component: StoreDetails,
  parameters: {
    layout: 'padded',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
  args: {
    store: stores[0],
  },
} satisfies Meta<typeof StoreDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
