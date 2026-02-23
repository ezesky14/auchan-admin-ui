import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StoreList from '@/app/components/store-list/store-list';
import type { Store } from '@/app/types/store';

const mockStores: Store[] = Array.from({ length: 12 }, (_, i) => ({
  id: `MOO${i + 1}`,
  name: `Angre Djibi ${i + 1}`,
  location: ['Abidjan, Cocody', 'Abidjan, Yopougon', 'Abidjan, Plateau'][i % 3],
  manager: `Manager ${i + 1}`,
  responsableCaisse: `Responsable ${i + 1}`,
  caissiers: [],
  transactions: [],
}));

const meta = {
  title: 'Composants/Composants composites/StoreList',
  component: StoreList,
  tags: ['autodocs'],
  args: {
    stores: mockStores,
  },
  parameters: {
    layout: 'padded',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof StoreList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const FewStores: Story = {
  args: {
    stores: mockStores.slice(0, 3),
  },
};
