'use client';

import { AuthCard } from '../../components/auth-card';
import Image from 'next/image';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [formValues, setFormValues] = useState({
    login: '',
    password: '',
  });
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, login: e.target.value });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, password: e.target.value });
  };

  return (
    <div className="bg-primary flex h-screen w-full flex-col overflow-hidden text-white">
      <Image
        src="/assets/favicon.png"
        alt="Auchan Favicon"
        className="absolute inset-0 h-full w-full object-cover object-top opacity-50"
        width={1500}
        height={1}
        fill={false}
        sizes="100vw"
      />

      <div className="flex flex-1 items-center justify-center">
        <AuthCard
          title="Connexion"
          description="Saisissez vos identifiants pour vous connecter"
          overlayColor="#FFC7C7"
        >
          <form>
            <div className="mt-7 mb-4">
              <label
                htmlFor="Identifiant"
                className="mb-1 block text-sm font-medium"
              >
                Identifiant
              </label>
              <Input
                type="text"
                value={formValues.login}
                onChange={handleLoginChange}
                id="login-id-input"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium"
              >
                Mot de passe
              </label>
              <Input
                type="text"
                value={formValues.password}
                onChange={handlePasswordChange}
                id="login-password-input"
              />
            </div>

            <div className="mb-6 text-right">
              <Link
                href="/forgot-password"
                className="text-primary text-sm font-medium"
              >
                Mot de passe oublié
              </Link>
            </div>

            <Button className="h-14">
              {<span className="font-bold">{'Se connecter'}</span>}
            </Button>
          </form>
        </AuthCard>
      </div>
    </div>
  );
}
