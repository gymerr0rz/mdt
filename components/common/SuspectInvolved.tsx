'use client';

import React from 'react';
import { Button } from './Button';
import { ComboboxDemo } from './Select';
import ListCriminalHistory from '@/dummy-data/criminal-history.json';
import LabelButton from './LabelButton';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface Suspect {
  suspect_name: string;
  suspect_warrant?: string;
}

export default function SuspectInvolved({
  suspect_name,
  suspect_warrant,
}: Suspect) {
  const [reduction, setReduction] = React.useState<number>(20);
  const [defaultFine, setDefaultFine] = React.useState<number>(360);
  const [fine, setFine] = React.useState<number>(defaultFine);

  function adjustDiscount() {
    setFine(Math.floor((defaultFine * (100 - reduction)) / 100));

    setReduction((red) => (red + 20) % 120);
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
        <span className="flex gap-2 items-center">
          <Button variant="icon-green" size="icon-sm">
            <svg
              width="16"
              height="18"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 9C10.4855 9 12.5 6.98555 12.5 4.5C12.5 2.01445 10.4855 0 8 0C5.51445 0 3.5 2.01445 3.5 4.5C3.5 6.98555 5.51445 9 8 9ZM11.15 10.125H10.5629C9.78242 10.4836 8.91406 10.6875 8 10.6875C7.08594 10.6875 6.22109 10.4836 5.43711 10.125H4.85C2.24141 10.125 0.125 12.2414 0.125 14.85V16.3125C0.125 17.2441 0.880859 18 1.8125 18H14.1875C15.1191 18 15.875 17.2441 15.875 16.3125V14.85C15.875 12.2414 13.7586 10.125 11.15 10.125Z"
                fill="#3CE7D2"
              />
            </svg>
          </Button>
          <span className="font-kulim font-bold">{suspect_name}</span>
        </span>
        <span className="flex gap-2 items-center">
          {suspect_warrant && (
            <span className="flex items-center gap-2 animate-pulse">
              <h1 className="font-kulim italic font-bold text-7 text-sm">
                Active Warrant
              </h1>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Button
                      div
                      className="flex justify-center items-center"
                      variant="icon-red"
                      size="icon-sm"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="fill-7"
                      >
                        <path d="M21.73 18L13.73 4C13.5556 3.6922 13.3026 3.43619 12.9969 3.25807C12.6912 3.07995 12.3438 2.9861 11.99 2.9861C11.6362 2.9861 11.2887 3.07995 10.9831 3.25807C10.6774 3.43619 10.4244 3.6922 10.25 4L2.24999 18C2.07367 18.3054 1.98122 18.6519 1.982 19.0045C1.98278 19.3571 2.07677 19.7032 2.25444 20.0078C2.43211 20.3124 2.68714 20.5646 2.99369 20.7388C3.30023 20.9131 3.6474 21.0032 3.99999 21H20C20.3509 20.9996 20.6955 20.907 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.9979 18.9995C21.9979 18.6486 21.9054 18.3039 21.73 18Z" />
                        <path
                          d="M12 9V13"
                          stroke="#0B0B0B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 17H12.01"
                          stroke="#0B0B0B"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">{suspect_warrant}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
          )}
          <ComboboxDemo
            placeholder="Search Criminal Fines..."
            list={ListCriminalHistory}
          >
            <Button variant="icon-green" size="icon-sm">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 6H11"
                  stroke="#3CE7D2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 1V11"
                  stroke="#3CE7D2"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Button>
          </ComboboxDemo>
        </span>
      </div>
      <div
        id="incident-calculator"
        className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-8 justify-between gap-2 items-center font-kulim"
      >
        <span className="flex gap-5 items-center">
          <h1>
            Fine: <b className="text-1 font-normal">${fine}</b>
          </h1>
          <h1>
            Time: <b className="text-1 font-normal">16 months</b>
          </h1>
        </span>
        <span className="flex gap-2 items-center">
          <h1>Discount in %</h1>
          <Button className="text-1" onClick={adjustDiscount} size="icon-xs">
            {reduction}
          </Button>
          <Button size="icon-xs">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_17_650)">
                <path
                  d="M9.2177 3.26757L7.73229 1.78216C7.57288 1.62276 7.35668 1.5332 7.13125 1.5332H2.38333C1.91388 1.5332 1.53333 1.91376 1.53333 2.3832V8.61654C1.53333 9.08598 1.91388 9.46654 2.38333 9.46654H8.61666C9.08611 9.46654 9.46666 9.08598 9.46666 8.61654V3.86861C9.46666 3.64318 9.3771 3.42698 9.2177 3.26757ZM5.49999 8.3332C4.87407 8.3332 4.36666 7.82579 4.36666 7.19987C4.36666 6.57395 4.87407 6.06654 5.49999 6.06654C6.12591 6.06654 6.63333 6.57395 6.63333 7.19987C6.63333 7.82579 6.12591 8.3332 5.49999 8.3332ZM7.19999 2.94066V4.7207C7.19999 4.83806 7.10485 4.9332 6.98749 4.9332H2.87916C2.76181 4.9332 2.66666 4.83806 2.66666 4.7207V2.87904C2.66666 2.76168 2.76181 2.66654 2.87916 2.66654H6.92587C6.98223 2.66654 7.03628 2.68892 7.07612 2.72878L7.13775 2.79041C7.15748 2.81014 7.17314 2.83356 7.18382 2.85934C7.1945 2.88512 7.19999 2.91276 7.19999 2.94066Z"
                  fill="#3CE7D2"
                />
                <path
                  d="M9.2177 3.26757L7.73229 1.78216C7.57288 1.62276 7.35668 1.5332 7.13125 1.5332H2.38333C1.91388 1.5332 1.53333 1.91376 1.53333 2.3832V8.61654C1.53333 9.08598 1.91388 9.46654 2.38333 9.46654H8.61666C9.08611 9.46654 9.46666 9.08598 9.46666 8.61654V3.86861C9.46666 3.64318 9.3771 3.42698 9.2177 3.26757ZM5.49999 8.3332C4.87407 8.3332 4.36666 7.82579 4.36666 7.19987C4.36666 6.57395 4.87407 6.06654 5.49999 6.06654C6.12591 6.06654 6.63333 6.57395 6.63333 7.19987C6.63333 7.82579 6.12591 8.3332 5.49999 8.3332ZM7.19999 2.94066V4.7207C7.19999 4.83806 7.10485 4.9332 6.98749 4.9332H2.87916C2.76181 4.9332 2.66666 4.83806 2.66666 4.7207V2.87904C2.66666 2.76168 2.76181 2.66654 2.87916 2.66654H6.92587C6.98223 2.66654 7.03628 2.68892 7.07612 2.72878L7.13775 2.79041C7.15748 2.81014 7.17314 2.83356 7.18382 2.85934C7.1945 2.88512 7.19999 2.91276 7.19999 2.94066Z"
                  stroke="#3CE7D2"
                />
              </g>
            </svg>
          </Button>
        </span>
      </div>
      <span className="grid grid-flow-col-dense">
        <LabelButton theme="green" fine={100} months={5}>
          Arrest
        </LabelButton>
        <LabelButton theme="green" fine={200} months={10}>
          Resisting Arrest
        </LabelButton>
        <LabelButton theme="green" fine={300} months={24}>
          Reckless Evading
        </LabelButton>
      </span>
      <span className="grid grid-flow-col-dense gap-2 py-3">
        {/* Send the Fine */}
        <Button variant="default" size="default" className="flex gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_17_679)">
              <path
                d="M6 3V13"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.5 4.5H4.75C4.28587 4.5 3.84075 4.68437 3.51256 5.01256C3.18437 5.34075 3 5.78587 3 6.25C3 6.71413 3.18437 7.15925 3.51256 7.48744C3.84075 7.81563 4.28587 8 4.75 8H7.25C7.71413 8 8.15925 8.18438 8.48744 8.51256C8.81563 8.84075 9 9.28587 9 9.75C9 10.2141 8.81563 10.6592 8.48744 10.9874C8.15925 11.3156 7.71413 11.5 7.25 11.5H3"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          Send the fine
        </Button>
        {/* Send to Jail */}
        <Button variant="default" size="default" className="flex gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_17_673)">
              <path
                d="M4 3V11"
                stroke="#3CE7D2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.5 3V11"
                stroke="#3CE7D2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 3V11"
                stroke="#3CE7D2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.5 3V11"
                stroke="#3CE7D2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13 4L3 10"
                stroke="#3CE7D2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          Send to Jail
        </Button>
        {/* Community Service */}
        <Button variant="default" size="default" className="flex gap-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6055 0.855469L6.85547 4.60547L6.375 4.125V4.11328L6.36328 4.10156C6.12305 3.8877 5.80957 3.78516 5.50781 3.78516C5.20605 3.78516 4.91455 3.89795 4.6875 4.125L4.62891 4.17188L4.44141 4.35938L4.3125 4.46484L0.890625 7.125L0.5625 7.39453L4.60547 11.4375L4.875 11.1094L7.52344 7.71094L7.53516 7.72266L7.91016 7.34766H7.92188L7.93359 7.33594C8.36133 6.854 8.36426 6.11426 7.91016 5.66016L7.39453 5.14453L11.1445 1.39453L10.6055 0.855469ZM5.50781 4.53516C5.62354 4.53223 5.75098 4.57178 5.84766 4.65234C5.85205 4.65527 5.85498 4.66113 5.85938 4.66406L7.38281 6.1875C7.52344 6.32812 7.53662 6.62695 7.38281 6.82031C7.37695 6.82764 7.37695 6.83643 7.37109 6.84375L7.25391 6.94922L5.08594 4.78125L5.21484 4.65234C5.28662 4.58057 5.39209 4.53809 5.50781 4.53516ZM4.51172 5.26172L6.73828 7.48828L4.53516 10.3008L3.99609 9.76172L4.80469 8.91797L4.26562 8.40234L3.46875 9.23438L2.97656 8.74219L4.42969 7.27734L3.90234 6.75L2.4375 8.20312L1.69922 7.46484L4.51172 5.26172Z"
              fill="#3CE7D2"
            />
          </svg>
          Community Service
        </Button>
      </span>
    </div>
  );
}
