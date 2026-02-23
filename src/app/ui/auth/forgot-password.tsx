'use client';
import Image from 'next/image';
import { AuthCard } from '../../components/auth-card';
import { Input } from '@/app/components/input';
import { ChangePasswordStep } from '@/app/enums/change-password-step-enum';
import { Button } from '@/app/components/button';
import { useState } from 'react';
import { InputOTP, InputOTPSlot } from '@/app/components/input-otp';
import { InputOTPGroup } from '@/app/components/input-otp';
import { useMemo } from 'react';

export const ForgotPassword = () => {
  const [currentStep, setCurrentStep] = useState<ChangePasswordStep>(
    ChangePasswordStep.EMAIL,
  );
  const [formValues, setFormValues] = useState({
    email: '',
    otp: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleContinueToOtp = () => {
    if (formValues.email !== '') {
      setCurrentStep(ChangePasswordStep.OTP);
    }
  };

  const handleResendOtp = () => {};

  const handleContinueToNewPassword = () => {
    if (formValues.otp !== '') {
      setCurrentStep(ChangePasswordStep.CHANGE);
    }
  };

  const handleFinishChangePassword = () => {};

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, email: e.target.value });
  };

  const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, newPassword: e.target.value });
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormValues({ ...formValues, confirmPassword: e.target.value });
  };

  const handleOtpChange = (newValue: string) => {
    setFormValues({ ...formValues, otp: newValue });
  };

  const { title, description } = useMemo(() => {
    switch (currentStep) {
      case ChangePasswordStep.EMAIL:
        return {
          title: 'Mot de passe oublié',
          description:
            'Veuillez entrer votre adresse email pour réinitialiser votre mot de passe',
        };
      case ChangePasswordStep.OTP:
        return {
          title: 'Code OTP',
          description:
            'Veuillez saisir le code OTP reçu par message sur votre adresse email',
        };
      case ChangePasswordStep.CHANGE:
        return {
          title: 'Nouveau mot de passe',
          description: 'Définis ton nouveau mot de passe pour terminer',
        };
    }
  }, [currentStep]);

  return (
    <div className="bg-primary min-h-screen w-full text-white">
      <Image
        src="/assets/favicon.png"
        alt="Auchan Favicon"
        className="absolute top-0 right-0 left-0 w-full opacity-50"
        width={1500}
        height={1}
        style={{
          objectFit: 'contain',
          height: 'auto',
        }}
      />

      <div className="flex h-screen items-center justify-center">
        <AuthCard
          title={title}
          description={description}
          overlayColor="#FFC7C7"
        >
          <form className="mt-7">
            {currentStep === 'email' && (
              <div>
                <div className="mt-7 mb-40">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    type="email"
                    onChange={handleEmailChange}
                    id="email-input"
                  />
                </div>

                <Button type="button" onClick={handleContinueToOtp} className="h-14 w-full">
                  {<span className="font-bold">{'Continuer'}</span>}
                </Button>
              </div>
            )}
            {currentStep === 'otp' && (
              <div>
                <InputOTP
                  maxLength={4}
                  pattern={'^[a-zA-Z0-9]+$'}
                  value={formValues.otp}
                  onChange={handleOtpChange}
                >
                  <InputOTPGroup className="flex items-center justify-center gap-4">
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                  </InputOTPGroup>
                </InputOTP>

                <span className="mt-4 mb-40 flex flex-row items-center gap-1">
                  {' '}
                  {'Pas encore recu ? '}
                  <span className="text-foreground text-xs">{'00:51'}</span>
                  <Button
                    type="button"
                    variant="link"
                    className="italic"
                    onClick={handleResendOtp}
                  >
                    {<span className="font-bold">{'Renvoyer'}</span>}
                  </Button>
                </span>

                <Button type="button" onClick={handleContinueToNewPassword} className="h-14 w-full">
                  {<span className="font-bold">{'Valider'}</span>}
                </Button>
              </div>
            )}
            {currentStep === 'change' && (
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="newPassword"
                    className="mb-2 block text-sm font-medium"
                  >
                    {'Nouveau mot de passe'}
                  </label>
                  <Input
                    type="password"
                    value={formValues.newPassword}
                    onChange={handleNewPasswordChange}
                    id="newPassword"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium"
                  >
                    {'Confirmer le mot de passe'}
                  </label>
                  <Input
                    type="password"
                    value={formValues.confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    id="confirmPassword"
                  />
                </div>
                <Button type="button" onClick={handleFinishChangePassword} className="h-14 w-full">
                  {<span className="font-bold">{'Valider'}</span>}
                </Button>
              </div>
            )}
          </form>
        </AuthCard>
      </div>
    </div>
  );
};
