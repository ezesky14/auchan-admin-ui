'use client';
import { useState } from 'react';
import Image from 'next/image';

export type BalanceOverviewProps = {
  balanceDetails: {
    amount: string;
  };
};

export default function BalanceOverview({
  balanceDetails,
}: BalanceOverviewProps) {
  const { amount } = balanceDetails;
  const [shouldShowAmount, setShouldShowAmount] = useState(false);

  return (
    <div className="bg-primary relative flex h-[330px] min-w-[354px] flex-col gap-2 overflow-hidden rounded-3xl p-6 text-white">
      <Image
        src="/assets/favicon.png"
        alt=""
        className="ml-[-240px] object-contain opacity-50 md:ml-[-89px] md:object-cover"
        fill
      />

      <div className="z-10 flex h-full flex-col">
        <div className="flex items-center gap-2 text-2xl font-bold">
          <span>{'Solde globale'}</span>
          {shouldShowAmount && (
            <span className="bg-primary hidden h-10 w-10 items-end justify-start rounded-full p-1 sm:flex">
              <Image src="/assets/eye.svg" alt="eye" width={16} height={16} />
            </span>
          )}
        </div>
        <p className="text-pink-custom mt-3 text-xs">
          {"Touchez l'oeil pour afficher le solde"}
        </p>

        <div
          className="mt-auto flex cursor-pointer flex-col gap-2"
          onClick={() => setShouldShowAmount(!shouldShowAmount)}
        >
          {shouldShowAmount ? (
            <span className="text-4xl font-bold">{amount}</span>
          ) : (
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((digit) => (
                <div className="h-5 w-5 rounded-full bg-white" key={digit}>
                  {digit}
                </div>
              ))}
            </div>
          )}
          <span className="text-4xl font-bold">{'FCFA'}</span>
        </div>
      </div>
    </div>
  );
}
