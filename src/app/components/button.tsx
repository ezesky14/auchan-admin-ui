'use client';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('px-4 py-2 rounded-full cursor-pointer', {
  variants: {
    variant: {
      default: 'text-white bg-primary w-full h-14',
      link: 'text-primary text-xs',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export function Button({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
}
