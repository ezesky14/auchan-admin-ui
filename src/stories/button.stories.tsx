import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@/app/components/button';

const meta = {
  title: 'Composants/Composants de base/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Bouton',
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Lien',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Petit',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Grand',
  },
};
