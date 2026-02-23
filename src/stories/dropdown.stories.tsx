import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Dropdown } from '@/app/components/dropdown';

const meta = {
  title: 'Composants/Composants de base/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  args: {
    options: [
      { label: 'Cocody', value: 'cocody' },
      { label: 'Yopougon', value: 'yopougon' },
      { label: 'Plateau', value: 'plateau' },
      { label: 'Marcory', value: 'marcory' },
    ],
    placeholder: 'Commune',
    onChange: () => {},
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: 'cocody',
  },
};
