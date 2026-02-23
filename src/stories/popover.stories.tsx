import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { useState } from 'react';
import { Popover } from '@/app/components/popover';

const meta = {
  title: 'Composants/Composants de base/Popover',
  component: Popover,
  tags: ['autodocs'],
  args: {
    open: false,
    onOpenChange: () => {},
    trigger: null,
    children: null,
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
        trigger={
          <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm">
            Ouvrir le popover
          </button>
        }
      >
        <div className="p-4 text-sm">Contenu du popover</div>
      </Popover>
    );
  },
};

export const AlignRight: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <div className="flex w-full justify-end">
        <Popover
          open={open}
          onOpenChange={setOpen}
          align="right"
          trigger={
            <button className="rounded-lg bg-gray-200 px-4 py-2 text-sm">
              Aligné à droite
            </button>
          }
        >
          <div className="p-4 text-sm">Contenu aligné à droite</div>
        </Popover>
      </div>
    );
  },
};
