'use client';

import MbtNavbar from '@/components/common/MbtNavbar';
import { Button } from '@/components/common/Button';
import Ping from '@/components/common/Ping';
import React from 'react';
import Loader from '@/components/common/Loader';

export default function Roster() {
  const [loaded, setLoaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    const frame = document.getElementById(
      'iframe-load'
    ) as HTMLIFrameElement | null;
    console.log(frame);

    if (frame) {
      frame.onload = () => setLoaded(true);

      return () => {
        frame.onload = null;
      };
    }
  }, []);

  return (
    <main className="flex">
      <MbtNavbar />
      <div className="flex w-full px-5 py-10 gap-5">
        <div className=" w-full flex flex-col gap-5">
          <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-start gap-2 items-center">
            <Button variant="icon-green" size="icon-sm">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="fill-1"
              >
                <path d="M11.5 6C9.57812 6 8 7.57812 8 9.5C8 11.4219 9.57812 13 11.5 13C13.4219 13 15 11.4219 15 9.5C15 7.57812 13.4219 6 11.5 6ZM20.5 6C18.5781 6 17 7.57812 17 9.5C17 11.4219 18.5781 13 20.5 13C22.4219 13 24 11.4219 24 9.5C24 7.57812 22.4219 6 20.5 6ZM11.5 8C12.3398 8 13 8.66016 13 9.5C13 10.3398 12.3398 11 11.5 11C10.6602 11 10 10.3398 10 9.5C10 8.66016 10.6602 8 11.5 8ZM20.5 8C21.3398 8 22 8.66016 22 9.5C22 10.3398 21.3398 11 20.5 11C19.6602 11 19 10.3398 19 9.5C19 8.66016 19.6602 8 20.5 8ZM7 12C4.80078 12 3 13.8008 3 16C3 17.1133 3.47656 18.1172 4.21875 18.8438C2.88672 19.7461 2 21.2812 2 23H4C4 21.332 5.33203 20 7 20C8.66797 20 10 21.332 10 23H12C12 21.2812 11.1133 19.7461 9.78125 18.8438C10.5234 18.1172 11 17.1133 11 16C11 13.8008 9.19922 12 7 12ZM12 23C11.375 23.8359 11 24.8867 11 26H13C13 24.332 14.332 23 16 23C17.668 23 19 24.332 19 26H21C21 24.8867 20.625 23.8359 20 23C19.6602 22.5469 19.25 22.1602 18.7812 21.8438C19.5234 21.1172 20 20.1133 20 19C20 16.8008 18.1992 15 16 15C13.8008 15 12 16.8008 12 19C12 20.1133 12.4766 21.1172 13.2188 21.8438C12.75 22.1602 12.3398 22.5469 12 23ZM20 23H22C22 21.332 23.332 20 25 20C26.668 20 28 21.332 28 23H30C30 21.2812 29.1133 19.7461 27.7812 18.8438C28.5234 18.1172 29 17.1133 29 16C29 13.8008 27.1992 12 25 12C22.8008 12 21 13.8008 21 16C21 17.1133 21.4766 18.1172 22.2188 18.8438C20.8867 19.7461 20 21.2812 20 23ZM7 14C8.11719 14 9 14.8828 9 16C9 17.1172 8.11719 18 7 18C5.88281 18 5 17.1172 5 16C5 14.8828 5.88281 14 7 14ZM25 14C26.1172 14 27 14.8828 27 16C27 17.1172 26.1172 18 25 18C23.8828 18 23 17.1172 23 16C23 14.8828 23.8828 14 25 14ZM16 17C17.1172 17 18 17.8828 18 19C18 20.1172 17.1172 21 16 21C14.8828 21 14 20.1172 14 19C14 17.8828 14.8828 17 16 17Z"></path>
              </svg>
            </Button>
            <span className="  font-bold">Roster</span>
            <Ping className="bg-1" />
          </div>

          <iframe
            src="https://docs.google.com/document/d/1G3-oSPLTcdvihVP7yGz28xMpjvo7j_O_dlEDHjnwTmE/edit?usp=sharing"
            height={'100%'}
            style={{ border: 'none' }}
            id="iframe-load"
            onLoad={() => setLoaded(true)}
            className={`${!loaded && 'hidden'}`}
          />

          <div
            className={`w-full h-full flex justify-center items-center ${
              loaded && 'hidden'
            }`}
          >
            <Loader />
          </div>
        </div>
      </div>
    </main>
  );
}
