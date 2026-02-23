'use client';

import { useState } from 'react';
import DonutChart from './donut-chart';
import type { DonutSegment } from './donut-chart';
import { Dropdown } from '@/app/components/dropdown';

const periodOptions = [
    { label: "Aujourd'hui", value: 'today' },
    { label: '7 derniers jours', value: '7days' },
    { label: '30 derniers jours', value: '30days' },
    { label: 'Cette année', value: 'year' },
] as const;

type PeriodValue = (typeof periodOptions)[number]['value'];

const segments: DonutSegment[] = [
    { value: 6400, color: '#e0001a', label: 'Rendu monnaie' },
    { value: 2964, color: '#22c55e', label: 'Paiement course' },
];

const total = segments.reduce((sum, s) => sum + s.value, 0);

export default function StatOverview() {
    const [period, setPeriod] = useState<PeriodValue>('30days');

    return (
        <div className="rounded-3xl bg-white p-6 w-full lg:w-[414px]">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground-secondary">Statistiques</h3>

                <Dropdown
                    options={[...periodOptions]}
                    value={period}
                    onChange={(v) => setPeriod(v as PeriodValue)}
                    className="italic"
                />
            </div>

            <div className="mt-6 flex justify-center">
                <DonutChart
                    segments={segments}
                    centerValue={total.toLocaleString('fr-FR')}
                    centerLabel="Transactions"
                />
            </div>

            <div className="mt-6 flex items-center justify-center gap-6">
                {segments.map((segment) => (
                    <div key={segment.label} className="flex items-center gap-2">
                        <span
                            className="inline-block size-3 rounded-full"
                            style={{ backgroundColor: segment.color }}
                        />
                        <span className="text-md font-bold">{segment.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
