'use client';

import React from 'react';
import { Person } from '@/types.db';
import { Button } from './Button';

export default function SearchIncidents() {
  // const [data] = React.useState<Person[]>();
  // const [results, setResults] = React.useState<Person[]>();

  // const FilterResults = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   const filteredData = data.filter((person) =>
  //     person.name.toLowerCase().includes(value.toLowerCase())
  //   );
  //   setResults(filteredData.slice(0, 5));
  // };

  return (
    <>
      <div className="flex w-full flex-col ">
        <div className="flex max-h-[42px] rounded-[5px] items-center w-full py-2 px-3  gap-1  ">
          <input
            type="text"
            placeholder="Search..."
            className="from-[#1F1F1F] bg-gradient-to-r to-5 px-5 py-1 rounded-[5px] placeholder:text-white/60 outline-none font-kulim  w-full"
            // onChange={FilterResults}
          />
          <Button>
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              className="stroke-1"
            >
              <path
                d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.5 17.5L13.9167 13.9167"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
