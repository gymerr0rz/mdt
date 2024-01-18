'use client';

import React, { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  editMode?: boolean;
  required?: boolean;
}

export default function Input({
  required,
  name,
  placeholder,
  id,
  value,
  disabled,
  editMode,
  ...rest
}: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2 bg-2 py-2 px-5 rounded-xl">
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
