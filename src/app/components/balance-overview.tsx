'use client';
import { useState } from "react";
import Image from "next/image";

export type BalanceOverviewProps = {
    balanceDetails: {
        amount: string;
    }
}

export default function BalanceOverview({ balanceDetails }: BalanceOverviewProps) {
    const { amount } = balanceDetails;
    const [shouldShowAmount, setShouldShowAmount] = useState(false);


    return (<div className="relative overflow-hidden flex flex-col gap-2 h-[330px] min-w-[354px] bg-primary text-white rounded-3xl p-6">
        <Image
            src="/assets/favicon.png"
            alt=""
            className="md:ml-[-89px]  ml-[-240px] object-contain md:object-cover opacity-50"
            fill
            
        />

        <div className="flex flex-col h-full z-10">
            <div className="flex items-center text-2xl font-bold gap-2">
                <span>{'Solde globale'}</span>
                {shouldShowAmount && (<span className="h-10 w-10 p-1  bg-primary rounded-full hidden sm:flex items-end justify-start">
                    <Image src="/assets/eye.svg" alt="eye" width={16} height={16} />
                </span>)}
            </div>
            <p className="text-xs text-pink-custom mt-3">{'Touchez l\'oeil pour afficher le solde'}</p>

            <div className="flex flex-col gap-2 mt-auto cursor-pointer" onClick={() => setShouldShowAmount(!shouldShowAmount)}>
                {shouldShowAmount ? <span className="text-4xl font-bold">{amount}</span> : <div className="flex items-center gap-2">

                    {[0, 1, 2, 3, 4, 5, 6, 7].map((digit) => (
                        <div className="w-5 h-5 rounded-full bg-white" key={digit}>{digit}</div>
                    ))}
                </div>}
                <span className="text-4xl font-bold">{'FCFA'}</span>
            </div>
        </div>

    </div>)
}