'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export function SelectLicenses({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <ContextMenu>
      <ContextMenuTrigger className={cn(className)}>
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuItem>Active</ContextMenuItem>
        <ContextMenuItem>Revoke</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
