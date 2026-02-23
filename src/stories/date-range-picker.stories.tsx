import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { DateRangePicker } from '@/app/components/date-range-picker';

const meta = {
  title: 'Composants/Composants de base/DateRangePicker',
  component: DateRangePicker,
  tags: ['autodocs'],
  args: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DateRangePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: {
      from: new Date(2025, 0, 1),
      to: new Date(2025, 0, 31),
    },
  },
};
