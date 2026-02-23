import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { InputSearch } from '@/app/components/input-search';

const meta = {
  title: 'Composants/Composants de base/InputSearch',
  component: InputSearch,
  tags: ['autodocs'],
  args: {
    placeholder: 'Rechercher...',
    className: 'w-96',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputSearch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
