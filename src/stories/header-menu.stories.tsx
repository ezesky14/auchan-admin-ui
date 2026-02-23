import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import HeaderMenu from '@/app/components/header-menu';

/**
 * Affiche un menu d'en-tête avec un logo et un menu de navigation.
 */
const meta = {
  title: 'Composants/Composants de base/HeaderMenu',
  component: HeaderMenu,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof HeaderMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
