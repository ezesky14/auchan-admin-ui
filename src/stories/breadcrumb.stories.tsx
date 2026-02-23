import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Breadcrumb from '@/app/components/breadcrumb';

const meta = {
  title: 'Composants/Composants de base/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  args: {
    items: [
      { label: 'Accueil', href: '/' },
      { label: 'Magasins', href: '/stores' },
      { label: 'Angre Djibi 1' },
    ],
  },
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
} satisfies Meta<typeof Breadcrumb>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoItems: Story = {
  args: {
    items: [{ label: 'Accueil', href: '/' }, { label: 'Dashboard' }],
  },
};
