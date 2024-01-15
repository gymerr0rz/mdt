import React, { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme: 'red' | 'green';
  button?: boolean;
  warning?: boolean;
  className?: string;
  months: number;
  fine: number;
}

export default function LabelButton({
  children,
  theme,
  warning,
  className,
  fine,
  months,
}: LabelProps) {
  const chooseTheme =
    theme === 'red' ? 'bg-6 text-7 hover:bg-6/60' : 'bg-4 text-1 hover:bg-4/60';

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger className="flex gap-1">
            <div
              className={cn(
                'py-2 px-5  rounded-full whitespace-nowrap text-xs flex gap-1 justify-center items-center cursor-pointer',
                chooseTheme,
                className
              )}
            >
              {children}
              {warning && (
                <svg
                  viewBox="0 0 24 24"
                  className="fill-7 min-w-4 min-h-4 max-w-4 max-h-4"
                >
                  <path
                    d="M21.73 18L13.73 4C13.5556 3.6922 13.3026 3.43619 12.9969 3.25807C12.6912 3.07995 12.3438 2.9861 11.99 2.9861C11.6362 2.9861 11.2887 3.07995 10.9831 3.25807C10.6774 3.43619 10.4244 3.6922 10.25 4L2.24999 18C2.07367 18.3054 1.98122 18.6519 1.982 19.0045C1.98278 19.3571 2.07677 19.7032 2.25444 20.0078C2.43211 20.3124 2.68714 20.5646 2.99369 20.7388C3.30023 20.9131 3.6474 21.0032 3.99999 21H20C20.3509 20.9996 20.6955 20.907 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.9979 18.9995C21.9979 18.6486 21.9054 18.3039 21.73 18Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 9V13"
                    stroke="#0B0B0B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 17H12.01"
                    stroke="#0B0B0B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <Button div variant="red-hover" className="group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="group-hover:stroke-7 stroke-1 transition-colors"
              >
                <g filter="url(#filter0_d_17_598)">
                  <path
                    d="M8.46448 8.46436L15.5355 15.5354"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <g filter="url(#filter1_d_17_598)">
                  <path
                    d="M15.5355 8.46436L8.46445 15.5354"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">{`$${fine} - ${months} m`}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
}
