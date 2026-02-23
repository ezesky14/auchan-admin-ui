'use client';

import { useState, useRef, useEffect } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';

export interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  options: DropdownOption[];
  value?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  bgClassName?: string;
}

export function Dropdown({
  options,
  value,
  onChange,
  placeholder,
  className,
  bgClassName = 'bg-gray-100',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLabel =
    options.find((o) => o.value === value)?.label ?? placeholder;

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative ${className ?? ''}`}>
      <button
        data-slot="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex w-full italic ${bgClassName} border-border text-muted-foreground hover:bg-muted cursor-pointer items-center gap-1 rounded-full border px-3 py-2 text-xs transition-colors`}
      >
        {selectedLabel}
        <CaretDownIcon
          size={12}
          weight="bold"
          color="currentColor"
          className="ml-auto"
        />
      </button>

      {open && (
        <ul
          className={`absolute ${bgClassName} border-border right-0 z-10 mt-1 min-w-[170px] overflow-hidden rounded-xl border py-1 shadow-lg`}
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                className={`hover:bg-muted w-full cursor-pointer px-4 py-2 text-left text-xs italic transition-colors ${
                  value === option.value
                    ? 'text-foreground-secondary font-bold'
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
  );
}
