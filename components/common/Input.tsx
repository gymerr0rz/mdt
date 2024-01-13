'use client';

import React, { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
}

export default function Input({
  name,
  placeholder,
  id,
  value,
  disabled,
  ...rest
}: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2 bg-2 py-2 px-5 rounded-xl">
      <label
        htmlFor={id}
        className="text-xs uppercase tracking-[0.2em] font-kulim"
      >
        {name}
      </label>
      <input
        disabled={disabled}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="bg-transparent outline-none font-kulim font-bold text-lg"
        value={value}
        {...rest}
      />
    </div>
  );
}
