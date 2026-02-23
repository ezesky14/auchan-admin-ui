import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import NotFound from '@/app/not-found';

const meta = {
  title: 'Pages/404',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof NotFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
