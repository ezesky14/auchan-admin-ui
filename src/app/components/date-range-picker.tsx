'use client';

import { useState } from 'react';
import { DayPicker, type DateRange } from 'react-day-picker';
import { fr } from 'react-day-picker/locale';
import { CalendarBlankIcon } from '@phosphor-icons/react';
import { Popover } from './popover';

function formatDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

interface DateRangePickerProps {
  value?: DateRange;
  onChange?: (range: DateRange | undefined) => void;
  className?: string;
}

export function DateRangePicker({
  value,
  onChange,
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);

  const label =
    value?.from && value?.to
      ? `${formatDate(value.from)} - ${formatDate(value.to)}`
      : value?.from
        ? `${formatDate(value.from)} - ...`
        : 'Sélectionner une période';

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
      className={className}
      trigger={
        <button
          type="button"
          className="bg-input-foreground flex cursor-pointer items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-xs text-gray-600 italic"
        >
          <span>{label}</span>
          <CalendarBlankIcon size={16} />
        </button>
      }
    >
      <div className="p-3">
        <DayPicker
          mode="range"
          selected={value}
          onSelect={onChange}
          locale={fr}
          numberOfMonths={2}
          showOutsideDays
        />
      </div>
    </Popover>
  );
}
