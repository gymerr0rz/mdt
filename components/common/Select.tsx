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
  CommandList,
  CommandShortcut,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Charges, SelectProps } from '@/types.db';

interface Combobox {
  children: React.ReactNode;
  placeholder: string;
  list: (SelectProps | Charges)[];
}

export function ComboboxDemo({ children, placeholder, list }: Combobox) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');
  const [activeHover, setHover] = React.useState<null | string>(null);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div aria-expanded={open}>{children}</div>
      </PopoverTrigger>
      <PopoverContent className=" p-1 m-5 shadow-xl">
        <Command>
          <CommandInput placeholder={placeholder} />

          <CommandEmpty>No tags found.</CommandEmpty>
          <CommandList className="overflow-auto max-h-[300px]">
            {list.map((framework, idx) => (
              <CommandItem
                key={idx}
                value={
                  (framework as SelectProps)?.value ||
                  (framework as Charges)?.title
                }
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
                id="command-list"
                onMouseOver={() =>
                  setHover((framework as Charges)?.description)
                }
              >
                <span className="font-[600]">
                  {(framework as SelectProps)?.label ||
                    (framework as Charges)?.title}
                </span>

                {framework.fine && (
                  <CommandShortcut className="!text-xs">
                    [${framework.fine}]
                  </CommandShortcut>
                )}
              </CommandItem>
            ))}
          </CommandList>
        </Command>
        <div className="text-xs text-1 py-3 px-1 w-full">{activeHover}</div>
      </PopoverContent>
    </Popover>
  );
}
