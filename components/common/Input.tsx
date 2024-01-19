'use client';

import React, { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  editMode?: boolean;
  required?: boolean;
  className?: string;
}

export default function Input({
  required,
  placeholder,
  id,
  value,
  disabled,
  editMode,
  className,
  ...rest
}: InputProps) {
  return (
    <div
      className={cn(
        'w-full flex flex-col gap-2 bg-2 py-2 px-5 rounded-xl relative ',
        className
      )}
    >
      <div className="absolute left-0 h-full top-0 bg-1 w-1 shadow-sm shadow-1/50" />
      <input
        required={required}
        disabled={disabled}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="bg-transparent outline-none font-kulim text-md"
        value={value}
        {...rest}
      />
    </div>
  );
}
