'use client';

import React, { HTMLAttributes } from 'react';
import { Button } from './Button';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
}

export default function InputImage({
  name,
  placeholder,
  id,
  value,
  disabled,
  ...rest
}: InputProps) {
  return (
    <div className="w-full flex justify-between gap-2 bg-2 py-2 pl-5 pr-[7px] rounded-xl border border-1">
      <input
        disabled={disabled}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="bg-transparent outline-none   font-bold text-sm w-full"
        value={value}
        {...rest}
      />
      <Button variant="icon-green" size="icon-lg">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6H11"
            stroke="#3CE7D2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6 1V11"
            stroke="#3CE7D2"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}
