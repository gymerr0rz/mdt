'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Command } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react';
import { Button } from './Button';

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

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 font-kulim',
        className
      )}
      {...props}
    />
    <Button>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="20"
        width="20"
        className="fill-1"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9h-4v4h-2v-4H9V9h4V5h2v4h4v2z"></path>
      </svg>
    </Button>
  </div>
));

CommandInput.displayName = 'input';

export function TagsAdd({ children, placeholder, list }: Combobox) {
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
        </Command>
      </PopoverContent>
    </Popover>
  );
}
