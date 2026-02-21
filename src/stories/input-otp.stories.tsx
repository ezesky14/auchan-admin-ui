import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/app/components/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';

/**
 * Composant de mot de passe à usage unique accessible avec fonction copier-coller.
 */
const meta = {
  title: 'ui/InputOTP',
  component: InputOTP,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    maxLength: 6,
    pattern: REGEXP_ONLY_DIGITS_AND_CHARS,
    children: null,
    'aria-label': 'One-time password',
  },

  render: (args) => (
    <InputOTP {...args} render={undefined}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  ),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof InputOTP>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the InputOTP field.
 */
export const Default: Story = {};
