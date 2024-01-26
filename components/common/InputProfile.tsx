'use client';

import React, { HTMLAttributes } from 'react';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
  editMode?: boolean;
}

export default function InputProfile({
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
      <label
        htmlFor={id}
        className={`transition-colors text-xs uppercase tracking-[0.2em]   ${
          editMode && 'text-1'
        }`}
      >
        {name}
      </label>
      <input
        disabled={disabled}
        type="text"
        name={id}
        id={id}
        placeholder={placeholder}
        className="bg-transparent outline-none    text-lg"
        value={value}
        {...rest}
      />
    </div>
  );
}
