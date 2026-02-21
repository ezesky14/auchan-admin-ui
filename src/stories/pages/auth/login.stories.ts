import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import Login from '@/app/ui/auth/login';

const meta = {
  title: 'Pages/Authentification/CONNEXION',
  component: Login,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
