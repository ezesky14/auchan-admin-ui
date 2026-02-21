import { ChangePasswordStep } from '@/app/enums/change-password-step-enum';
import { ForgotPassword } from '@/app/ui/auth/forgot-password';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';

/** 
* Page de réinitialisation de mot de passe. <br/>
* Contient les étapes suivantes:
- Email
- OTP
- Nouveau mot de passe
- Confirmation du nouveau mot de passe
*/
const meta = {
  title: 'Pages/Authentification/MOT DE PASSE OUBLIÉ',
  component: ForgotPassword,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  args: {
    currentStep: ChangePasswordStep.EMAIL,
    formValues: {
      email: '',
      otp: '',
      newPassword: '',
      confirmPassword: '',
    },
    setCurrentStep: (step: ChangePasswordStep) => {},
  },
} satisfies Meta<typeof ForgotPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setFormValues: (values: {
      email: string;
      otp: string;
      newPassword: string;
      confirmPassword: string;
    }) => {},
  },
};
