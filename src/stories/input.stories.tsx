import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from '@/app/components/input';

/**
 * Displays a form input field or a component that looks like an input field.
 */
const meta = {
  title: 'ui/Input',
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

/**
 * The default form of the input field.
 */
export const Default: Story = {};
