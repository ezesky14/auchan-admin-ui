'use client';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(' flex items-center justify-center rounded-full cursor-pointer', {
  variants: {
    variant: {
      default: 'px-4 py-2 text-white bg-primary w-full',
      link: 'text-primary text-xs',
      ghost: 'text-primary px-2 py-2',
      outline: 'text-primary bg-transparent px-2 py-2 border border-primary border-2 font-medium',
    },
    size: {
      default: 'h-10 px-4',
      sm: 'h-9 px-3',
      lg: 'h-11 px-8',
      icon: 'size-9 px-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

const Button = ({
  children,
  variant,
  className,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {
  return (
    <button {...props} className={buttonVariants({ variant, className })}>
      {children}
    </button>
  );
};

export { Button };