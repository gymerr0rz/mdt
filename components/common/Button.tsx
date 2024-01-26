'use client';

import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
import { type VariantProps, cva } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-4 hover:bg-4/60',
        'red-hover': 'bg-4 hover:bg-6/60',
        'icon-green': 'bg-4 hover:bg-4/60',
        'icon-red': 'bg-6 hover:bg-6/60',
      },

      size: {
        default: 'h-10 px-4 py-2 rounded-[10px]   font-[600]',
        sm: 'h-9 rounded-xl px-3',
        lg: 'h-11 rounded-xl px-8',
        xl: 'h-11 rounded-xl px-6',
        'icon-xs': 'max-h-6 max-w-6 min-w-6 min-h-6 rounded-[2.5px]',
        'icon-sm': 'max-h-8 max-w-8 min-w-8 min-h-8 rounded-[5px]',
        'icon-lg': 'max-h-12 max-w-12 min-w-12 min-h-12 rounded-[10px]',
        'icon-xl': 'max-h-20 max-w-20 min-w-20 min-h-20 rounded-[10px]',
        custom: '',
      },
    },
    defaultVariants: {
      variant: 'icon-green',
      size: 'icon-sm',
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLDivElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
  div?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLDivElement,
  ButtonProps
>(({ className, variant, size, children, div = false, ...props }, ref) => {
  if (div) {
    return (
      <div
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { buttonVariants, Button };
