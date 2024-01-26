import React from 'react';
import { cn } from '../../lib/utils';

interface LoaderProps {
  size?: number;
  className?: string;
}

export default function Loader({
  size = 42,
  className = 'fill-1',
}: LoaderProps) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      className={cn('animate-spin', className)}
    >
      <path d="M12 3C16.9706 3 21 7.02944 21 12H19C19 8.13401 15.866 5 12 5V3Z"></path>
    </svg>
  );
}
