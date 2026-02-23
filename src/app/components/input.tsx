import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-lpignore="true"
      data-slot="input"
      className={cn(
        'h-14 w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-0 focus:border-none',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
