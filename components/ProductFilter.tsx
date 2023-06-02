'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { useProductListContext } from './context/productListContext';

const filters = [
  {
    value: 'LowToHigh',
    label: 'Price: Low to High',
  },
  {
    value: 'HighToLow',
    label: 'Price: High to Low',
  },
];

export function ProductFilter() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  const { filterDropDown } = useProductListContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? filters.find((filter) => {
                return filter.label.toLowerCase() === value.toLowerCase();
              })?.label
            : 'Sort by'}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {filters.map((filter) => (
              <CommandItem
                key={filter.value}
                onSelect={(currentValue) => {
                  const filter = filters.find(
                    (filter) =>
                      filter.label.toLowerCase() === currentValue.toLowerCase()
                  )?.value;
                  if (filter) filterDropDown(filter);
                  setValue(currentValue === value ? '' : currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === filter.value ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {filter.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
