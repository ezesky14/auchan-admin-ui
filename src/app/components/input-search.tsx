'use client';
import { cn } from '@/lib/utils';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function InputSearch({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <div className='bg-input-foreground border-none rounded-full flex items-center gap-2 p-2'>
      <MagnifyingGlassIcon size={24} color='#666666' />
      <input
        type={type}
        data-lpignore="true"
        data-slot="input"
        className={cn(
          'w-full italic text-sm focus:outline-none focus:ring-0 focus:border-none',
          className,
        )}
        {...props}
      />

    </div>

  );
}

export { InputSearch };
