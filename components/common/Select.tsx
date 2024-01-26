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
import { Charges } from '../../types.db';

interface Combobox {
  children: React.ReactNode;
  placeholder: string;
  list: Default[] | Charges[];
}

interface Default {
  value: string;
  label: string;
  fine?: number;
}

const Values = {
  misdemeanor: 'text-orange-300',
  infraction: 'text-yellow-300',
  felony: 'text-red-300',
};

export function ComboboxDemo({ children, placeholder, list }: Combobox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div aria-expanded={open}>{children}</div>
      </PopoverTrigger>
      <PopoverContent className=" p-1 m-5 shadow-xl">
        <Command>
          <CommandInput placeholder={placeholder} />

          <CommandEmpty>No tags found.</CommandEmpty>
          <div className="overflow-auto max-h-[300px]  ">
            {list.map((framework) => (
              <>
                <CommandItem
                  key={framework?.value || framework?.title}
                  value={framework?.value || framework?.title}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  <span className={Values[framework.severity]}>
                    {framework.label || framework.title}
                  </span>

                  {framework.fine && (
                    <CommandShortcut className="!text-xs">
                      [${framework.fine}]
                    </CommandShortcut>
                  )}
                </CommandItem>
              </>
            ))}
          </div>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
