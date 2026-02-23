import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import StoreItem from '@/app/components/store-list/store-item/store-item';

const meta = {
  title: 'Composants/Composants composites/StoreItem',
  component: StoreItem,
  tags: ['autodocs'],
  args: {
    store: {
      id: 'MOO1',
      name: 'Angre Djibi 1',
      location: 'Abidjan, Cocody',
      manager: 'Emmanuel GUIEBI',
      responsableCaisse: 'Ismael DIOMANDE',
      caissiers: [],
      transactions: [],
    },
  },
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof StoreItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
