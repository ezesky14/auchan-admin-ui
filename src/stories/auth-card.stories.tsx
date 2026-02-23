import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { AuthCard } from '@/app/components/auth-card';

const meta = {
  title: 'Composants/Composants de base/AuthCard',
  component: AuthCard,
  tags: ['autodocs'],
  args: {
    title: 'Connexion',
    description: 'Saisissez vos identifiants pour vous connecter',
    overlayColor: '#FFC7C7',
    children: (
      <div className="mt-4 text-sm text-gray-500">Contenu de la carte</div>
    ),
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AuthCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
