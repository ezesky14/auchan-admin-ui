'use client';

import { useState, useRef, useEffect } from 'react';
import { CaretDown } from '@phosphor-icons/react';
import DonutChart from './donut-chart';
import type { DonutSegment } from './donut-chart';

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
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedLabel = periodOptions.find((o) => o.value === period)?.label;

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="rounded-3xl bg-white p-6 w-full lg:w-[414px]">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground-secondary">Statistiques</h3>

                <div ref={dropdownRef} className="relative italic">
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="inline-flex bg-gray-100 cursor-pointer items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted"
                    >
                        {selectedLabel}
                        <CaretDown size={12} weight="bold" />
                    </button>

                    {open && (
                        <ul className="absolute bg-gray-100 right-0 z-10 mt-1 min-w-[170px] overflow-hidden rounded-xl border border-border  py-1 shadow-lg">
                            {periodOptions.map((option) => (
                                <li key={option.value}>
                                    <button
                                        onClick={() => {
                                            setPeriod(option.value);
                                            setOpen(false);
                                        }}
                                        className={`w-full cursor-pointer px-4 py-2 text-left text-xs transition-colors hover:bg-muted ${
                                            period === option.value
                                                ? 'font-bold text-foreground-secondary'
                                                : 'text-muted-foreground'
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
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
