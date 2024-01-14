'use client';

import * as React from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

interface Combobox {
  children: React.ReactNode;
  placeholder: string;
  list: List[];
}

interface List {
  value: string;
  label: string;
  fine?: number;
}

export function ComboboxDemo({ children, placeholder, list }: Combobox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div aria-expanded={open}>{children}</div>
      </PopoverTrigger>
      <PopoverContent className=" p-0 m-5 shadow-xl">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>No tags found.</CommandEmpty>
          <div className="overflow-auto max-h-[300px]">
            <CommandGroup heading="OFFENSES AGAINST PERSONS">
              {list.map((framework) => (
                <>
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    {framework.label}
                    {framework.fine && (
                      <CommandShortcut>${framework.fine}</CommandShortcut>
                    )}
                  </CommandItem>
                </>
              ))}
            </CommandGroup>
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
