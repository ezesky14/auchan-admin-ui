import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/app/components/input';

/**
 * Affiche un champ de formulaire ou un composant qui ressemble à un champ de formulaire.
 */
const meta = {
  title: 'Composants/Composants de base/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    className: 'w-96',
    id: 'email',
    type: 'email',
    placeholder: 'Email',
    disabled: false,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
