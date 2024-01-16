'use client';

import React from 'react';
import Profiles from '@/dummy-data/profiles.json';
import { Person } from '@/types.db';
import Link from 'next/link';

export default function SearchBar() {
  const [data] = React.useState<Person[]>(Profiles);
  const [results, setResults] = React.useState<Person[]>();
  const [inputValue, setValue] = React.useState<string>();

  React.useEffect(() => {
    const FilterResults = () => {
      const value = inputValue;
      setValue(value);
      const filteredData = data.filter((person) =>
        person.name.toLowerCase().includes(value?.toLowerCase())
      );
      setResults(filteredData.slice(0, 5));
    };

    FilterResults();
  }, [inputValue]);

  return (
    <>
      <div className="flex w-full flex-col  gap-3">
        <div className="flex max-h-[42px] rounded-[5px] items-center w-full bg-2 px-3 py-2 gap-1  ">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
              stroke="#797979"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.5 17.5L13.9167 13.9167"
              stroke="#797979"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            placeholder="Search Profiles..."
            className="bg-transparent outline-none font-kulim  w-full"
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
          />
        </div>
        <div className="flex justify-start gap-5">
          {results?.map((res, idx) => (
            <Link
              href={'/profiles/' + encodeURIComponent(res.name)}
              key={idx}
              className="w-full flex gap-2 bg-2 max-w-96 px-5 py-2 rounded-xl hover:bg-white/5 cursor-pointer transition-colors animate-opacity-down h-28 items-center"
            >
              <div className="min-w-16 min-h-16 max-w-16 max-h-16 bg-2 border border-1 rounded-full" />
              <div className="flex flex-col justify-center">
                <span className="font-kulim font-bold text-xl">{res.name}</span>
                <span className=" font-light text-xs">ID: {res.id}</span>
              </div>
            </Link>
          ))}
        </div>
        {results?.length > 0 && (
          <div className="w-full h-[1px] my-5 bg-gradient-to-l from-transparent via-white/30 to-transparent"></div>
        )}
      </div>
    </>
  );
}
