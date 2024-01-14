'use client';

import React from 'react';
import HorizonLogo from '@/assets/horizon-logo.png';
import LosSantosPolice from '@/assets/los-santos-police.png';
import Image from 'next/image';
import Link from 'next/link';

export default function MbtNavbar() {
  const [path, setPath] = React.useState<string>();

  React.useEffect(() => {
    return () => setPath(window.location.pathname);
  }, []);

  return (
    <nav className=" max-w-80 h-screen py-12 px-6 flex gap-2 ">
      <div className="px-5">
        <div className="flex justify-center items-center gap-3">
          <Image src={LosSantosPolice} alt="" />
          <div className=" font-kulim whitespace-nowrap">
            <Image src={HorizonLogo} alt="" />
            <h1>Los Santos Police</h1>
          </div>
        </div>

        <ul className="flex flex-col gap-2 py-12 ">
          <li id="dispatch">
            <Link
              href="/"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={` transition-colors ${
                  path === '/'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <g clipPath="url(/clip0_7_20)">
                  <path d="M15 2.8125C8.26758 2.8125 2.8125 8.26758 2.8125 15V17.3438C2.8125 18.123 2.18555 18.75 1.40625 18.75C0.626953 18.75 0 18.123 0 17.3438V15C0 6.71484 6.71484 0 15 0C23.2852 0 30 6.71484 30 15V23.4434C30 26.291 27.6914 28.5996 24.8379 28.5996L18.375 28.5938C17.8887 29.4316 16.9805 30 15.9375 30H14.0625C12.5098 30 11.25 28.7402 11.25 27.1875C11.25 25.6348 12.5098 24.375 14.0625 24.375H15.9375C16.9805 24.375 17.8887 24.9434 18.375 25.7812L24.8438 25.7871C26.1387 25.7871 27.1875 24.7383 27.1875 23.4434V15C27.1875 8.26758 21.7324 2.8125 15 2.8125ZM8.4375 12.1875H9.375C10.4121 12.1875 11.25 13.0254 11.25 14.0625V20.625C11.25 21.6621 10.4121 22.5 9.375 22.5H8.4375C6.36914 22.5 4.6875 20.8184 4.6875 18.75V15.9375C4.6875 13.8691 6.36914 12.1875 8.4375 12.1875ZM21.5625 12.1875C23.6309 12.1875 25.3125 13.8691 25.3125 15.9375V18.75C25.3125 20.8184 23.6309 22.5 21.5625 22.5H20.625C19.5879 22.5 18.75 21.6621 18.75 20.625V14.0625C18.75 13.0254 19.5879 12.1875 20.625 12.1875H21.5625Z" />
                </g>
                <defs>
                  <clipPath id="clip0_7_20">
                    <rect width="30" height="30" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Dispatch
            </Link>
          </li>

          <li id="profiles">
            <Link
              href="/profiles"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/profiles' || path?.includes('/profiles')
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 20"
                fill="none"
                className={` transition-colors ${
                  path === '/profiles' || path?.includes('/profiles')
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <path d="M16 20V17.5C16 16.1739 15.5184 14.9021 14.6611 13.9645C13.8038 13.0268 12.641 12.5 11.4286 12.5H4.57143C3.35901 12.5 2.19625 13.0268 1.33894 13.9645C0.481631 14.9021 0 16.1739 0 17.5V20" />
                <path d="M8.00001 9.44444C10.5037 9.44444 12.5333 7.33023 12.5333 4.72222C12.5333 2.11421 10.5037 0 8.00001 0C5.49632 0 3.46667 2.11421 3.46667 4.72222C3.46667 7.33023 5.49632 9.44444 8.00001 9.44444Z" />
              </svg>
              Profiles
            </Link>
          </li>

          <li id="incidents">
            <Link
              href="/incidents"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/incidents'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={` transition-colors ${
                  path === '/incidents'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <path
                  d="M21.73 18L13.73 4C13.5556 3.6922 13.3026 3.43619 12.9969 3.25807C12.6912 3.07995 12.3438 2.9861 11.99 2.9861C11.6362 2.9861 11.2887 3.07995 10.9831 3.25807C10.6774 3.43619 10.4244 3.6922 10.25 4L2.24999 18C2.07367 18.3054 1.98122 18.6519 1.982 19.0045C1.98278 19.3571 2.07677 19.7032 2.25444 20.0078C2.43211 20.3124 2.68714 20.5646 2.99369 20.7388C3.30023 20.9131 3.6474 21.0032 3.99999 21H20C20.3509 20.9996 20.6955 20.907 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.9979 18.9995C21.9979 18.6486 21.9054 18.3039 21.73 18Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
              Incidents
            </Link>
          </li>

          <li id="citations">
            <Link
              href="/citations"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/citations'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                stroke-width="0"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="24"
                width="24"
                className={` transition-colors ${
                  path === '/citations'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z"
                  clip-rule="evenodd"
                ></path>
                <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"></path>
              </svg>
              Citations
            </Link>
          </li>

          <li id="warrants">
            <Link
              href="/warrants"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/warrants'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={` transition-colors ${
                  path === '/warrants'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <path d="M9 3.59999C9 3.28173 9.12643 2.97651 9.35147 2.75147C9.57652 2.52642 9.88174 2.39999 10.2 2.39999C10.5183 2.39999 10.8235 2.52642 11.0485 2.75147C11.2736 2.97651 11.4 3.28173 11.4 3.59999C11.4 3.91825 11.2736 4.22348 11.0485 4.44852C10.8235 4.67357 10.5183 4.79999 10.2 4.79999C9.88174 4.79999 9.57652 4.67357 9.35147 4.44852C9.12643 4.22348 9 3.91825 9 3.59999ZM7.2 4.19999C7.51826 4.19999 7.82348 4.32642 8.04853 4.55147C8.27357 4.77651 8.4 5.08173 8.4 5.39999C8.4 5.71825 8.27357 6.02348 8.04853 6.24852C7.82348 6.47357 7.51826 6.59999 7.2 6.59999C6.88174 6.59999 6.57652 6.47357 6.35147 6.24852C6.12643 6.02348 6 5.71825 6 5.39999C6 5.08173 6.12643 4.77651 6.35147 4.55147C6.57652 4.32642 6.88174 4.19999 7.2 4.19999ZM6 7.19999C6.66375 7.19999 7.2 7.73624 7.2 8.39999H7.5C7.99875 8.39999 8.4 8.80124 8.4 9.29999V9.89999C8.4 9.96374 8.3925 10.0275 8.38125 10.0912C10.5113 11.01 12 13.1325 12 15.6C12 18.915 9.315 21.6 6 21.6C2.685 21.6 0 18.915 0 15.6C0 13.1325 1.48875 11.01 3.61875 10.0912C3.60375 10.0312 3.6 9.96749 3.6 9.89999V9.29999C3.6 8.80124 4.00125 8.39999 4.5 8.39999H4.8C4.8 7.73624 5.33625 7.19999 6 7.19999ZM6 19.2C6.47276 19.2 6.94089 19.1069 7.37766 18.926C7.81443 18.745 8.21129 18.4799 8.54558 18.1456C8.87988 17.8113 9.14505 17.4144 9.32597 16.9777C9.50688 16.5409 9.6 16.0728 9.6 15.6C9.6 15.1272 9.50688 14.6591 9.32597 14.2223C9.14505 13.7856 8.87988 13.3887 8.54558 13.0544C8.21129 12.7201 7.81443 12.4549 7.37766 12.274C6.94089 12.0931 6.47276 12 6 12C5.52724 12 5.05911 12.0931 4.62234 12.274C4.18557 12.4549 3.78871 12.7201 3.45442 13.0544C3.12012 13.3887 2.85495 13.7856 2.67403 14.2223C2.49312 14.6591 2.4 15.1272 2.4 15.6C2.4 16.0728 2.49312 16.5409 2.67403 16.9777C2.85495 17.4144 3.12012 17.8113 3.45442 18.1456C3.78871 18.4799 4.18557 18.745 4.62234 18.926C5.05911 19.1069 5.52724 19.2 6 19.2ZM13.2 15.6C13.2 14.6287 13.0088 13.7062 12.66 12.8587C13.2938 11.625 14.34 10.6425 15.6188 10.0875C15.6038 10.0275 15.6 9.96374 15.6 9.89624V9.29999C15.6 8.80124 16.0013 8.39999 16.5 8.39999H16.8C16.8 7.73624 17.3363 7.19999 18 7.19999C18.6638 7.19999 19.2 7.73624 19.2 8.39999H19.5C19.9988 8.39999 20.4 8.80124 20.4 9.29999V9.89999C20.4 9.96374 20.3925 10.0275 20.3813 10.0912C22.5113 11.01 24 13.1325 24 15.6C24 18.915 21.315 21.6 18 21.6C15.675 21.6 13.6575 20.2762 12.66 18.3412C13.0088 17.4975 13.2 16.5712 13.2 15.6ZM21.6 15.6C21.6 14.6452 21.2207 13.7295 20.5456 13.0544C19.8705 12.3793 18.9548 12 18 12C17.0452 12 16.1295 12.3793 15.4544 13.0544C14.7793 13.7295 14.4 14.6452 14.4 15.6C14.4 16.5548 14.7793 17.4704 15.4544 18.1456C16.1295 18.8207 17.0452 19.2 18 19.2C18.9548 19.2 19.8705 18.8207 20.5456 18.1456C21.2207 17.4704 21.6 16.5548 21.6 15.6ZM13.8 2.39999C14.1183 2.39999 14.4235 2.52642 14.6485 2.75147C14.8736 2.97651 15 3.28173 15 3.59999C15 3.91825 14.8736 4.22348 14.6485 4.44852C14.4235 4.67357 14.1183 4.79999 13.8 4.79999C13.4817 4.79999 13.1765 4.67357 12.9515 4.44852C12.7264 4.22348 12.6 3.91825 12.6 3.59999C12.6 3.28173 12.7264 2.97651 12.9515 2.75147C13.1765 2.52642 13.4817 2.39999 13.8 2.39999ZM16.8 4.19999C17.1183 4.19999 17.4235 4.32642 17.6485 4.55147C17.8736 4.77651 18 5.08173 18 5.39999C18 5.71825 17.8736 6.02348 17.6485 6.24852C17.4235 6.47357 17.1183 6.59999 16.8 6.59999C16.4817 6.59999 16.1765 6.47357 15.9515 6.24852C15.7264 6.02348 15.6 5.71825 15.6 5.39999C15.6 5.08173 15.7264 4.77651 15.9515 4.55147C16.1765 4.32642 16.4817 4.19999 16.8 4.19999Z" />
              </svg>
              Warrants
            </Link>
          </li>

          <li id="vehicles">
            <Link
              href="/vehicles"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/vehicles'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={` transition-colors ${
                  path === '/vehicles'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <g clipPath="url(/clip0_6_25)">
                  <path d="M23.437 8.25H20.6306L19.8506 6.3C19.0491 4.29516 17.1361 3 14.9766 3H9.02345C6.86439 3 4.95095 4.29516 4.14892 6.3L3.36892 8.25H0.562981C0.196888 8.25 -0.0717061 8.59406 0.0173564 8.94891L0.298606 10.0739C0.36095 10.3242 0.58595 10.5 0.844231 10.5H1.78501C1.15548 11.0498 0.750013 11.8491 0.750013 12.75V15C0.750013 15.7556 1.03876 16.4377 1.50001 16.9655V19.5C1.50001 20.3283 2.17173 21 3.00001 21H4.50001C5.32829 21 6.00001 20.3283 6.00001 19.5V18H18V19.5C18 20.3283 18.6717 21 19.5 21H21C21.8283 21 22.5 20.3283 22.5 19.5V16.9655C22.9613 16.4381 23.25 15.7561 23.25 15V12.75C23.25 11.8491 22.8445 11.0498 22.2155 10.5H23.1563C23.4145 10.5 23.6395 10.3242 23.7019 10.0739L23.9831 8.94891C24.0717 8.59406 23.8031 8.25 23.437 8.25ZM6.93423 7.41422C7.27595 6.56016 8.10329 6 9.02345 6H14.9766C15.8967 6 16.7241 6.56016 17.0658 7.41422L18 9.75H6.00001L6.93423 7.41422ZM4.50001 14.9906C3.60001 14.9906 3.00001 14.3925 3.00001 13.4953C3.00001 12.5981 3.60001 12 4.50001 12C5.40001 12 6.75001 13.3458 6.75001 14.243C6.75001 15.1402 5.40001 14.9906 4.50001 14.9906ZM19.5 14.9906C18.6 14.9906 17.25 15.1402 17.25 14.243C17.25 13.3458 18.6 12 19.5 12C20.4 12 21 12.5981 21 13.4953C21 14.3925 20.4 14.9906 19.5 14.9906Z" />
                </g>
                <defs>
                  <clipPath id="clip0_6_25">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Vehicles
            </Link>
          </li>

          <li id="bolos">
            <Link
              href="/bolos"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/bolos'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={` transition-colors ${
                  path === '/bolos'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <rect x="1.00003" y="1" width="22" height="22" />
                <path d="M20.584 23.9173H3.41735C2.53329 23.9173 1.68545 23.5661 1.06033 22.941C0.435204 22.3159 0.0840149 21.468 0.0840149 20.584V3.41866C0.0840149 2.53461 0.435204 1.68676 1.06033 1.06164C1.68545 0.436517 2.53329 0.0853271 3.41735 0.0853271H20.584C21.4681 0.0853271 22.3159 0.436517 22.941 1.06164C23.5662 1.68676 23.9173 2.53461 23.9173 3.41866V20.584C23.9173 21.468 23.5662 22.3159 22.941 22.941C22.3159 23.5661 21.4681 23.9173 20.584 23.9173ZM3.41735 1.41866C2.88692 1.41866 2.37821 1.62937 2.00313 2.00445C1.62806 2.37952 1.41735 2.88823 1.41735 3.41866V20.584C1.41735 21.1144 1.62806 21.6231 2.00313 21.9982C2.37821 22.3733 2.88692 22.584 3.41735 22.584H20.584C21.1144 22.584 21.6232 22.3733 21.9982 21.9982C22.3733 21.6231 22.584 21.1144 22.584 20.584V3.41866C22.584 2.88823 22.3733 2.37952 21.9982 2.00445C21.6232 1.62937 21.1144 1.41866 20.584 1.41866H3.41735Z" />
                <path
                  d="M11.2134 12.6147C11.3031 12.3173 11.4585 12.0439 11.668 11.8147C11.8813 11.5999 12.121 11.413 12.3814 11.2587C12.5556 11.1493 12.7178 11.022 12.8654 10.8787C13.008 10.7392 13.1237 10.5747 13.2067 10.3933C13.2916 10.2043 13.3348 9.99922 13.3334 9.79201C13.3398 9.54815 13.2739 9.30783 13.144 9.10134C13.0216 8.90878 12.8493 8.75303 12.6454 8.65067C12.4305 8.54366 12.1933 8.48928 11.9534 8.49201C11.7234 8.49061 11.4959 8.53929 11.2867 8.63467C11.0755 8.73219 10.8958 8.88693 10.768 9.08134C10.7048 9.17338 10.655 9.27394 10.62 9.38001C10.5764 9.51724 10.4908 9.6373 10.3752 9.7232C10.2596 9.80909 10.12 9.85649 9.97603 9.85867C9.86782 9.85911 9.7611 9.83352 9.66486 9.78406C9.56862 9.73459 9.48569 9.6627 9.42307 9.57446C9.36045 9.48621 9.31998 9.3842 9.30506 9.27703C9.29014 9.16985 9.30122 9.06067 9.33736 8.95867C9.39784 8.79517 9.47751 8.63941 9.57469 8.49467C9.82192 8.12551 10.1673 7.83274 10.572 7.64934C11.0171 7.45601 11.4976 7.35791 11.9828 7.36135C12.468 7.3648 12.9471 7.46971 13.3894 7.66934C13.7844 7.85786 14.1178 8.15471 14.3507 8.52534C14.5848 8.91003 14.7038 9.35379 14.6934 9.80401C14.6985 10.1126 14.6451 10.4193 14.536 10.708C14.4343 10.9723 14.2831 11.2149 14.0907 11.4227C13.8879 11.6408 13.6544 11.8282 13.3974 11.9787C13.1712 12.1152 12.964 12.2811 12.7814 12.472C12.6207 12.6435 12.5037 12.8511 12.44 13.0773C12.4123 13.2018 12.3923 13.3278 12.38 13.4547C12.3614 13.6124 12.2855 13.7577 12.1668 13.8632C12.0481 13.9686 11.8948 14.0268 11.736 14.0267C11.646 14.0269 11.5569 14.0083 11.4745 13.972C11.392 13.9357 11.3181 13.8826 11.2575 13.816C11.1968 13.7495 11.1507 13.6709 11.1223 13.5855C11.0938 13.5001 11.0835 13.4097 11.092 13.32C11.1108 13.0817 11.1514 12.8456 11.2134 12.6147Z"
                  fill="#0B0B0B"
                />
                <path
                  d="M11.7227 16.6414C12.155 16.6414 12.5054 16.2909 12.5054 15.8587C12.5054 15.4264 12.155 15.076 11.7227 15.076C11.2904 15.076 10.94 15.4264 10.94 15.8587C10.94 16.2909 11.2904 16.6414 11.7227 16.6414Z"
                  fill="#0B0B0B"
                />
              </svg>
              BOLOs
            </Link>
          </li>

          <li id="sops">
            <Link
              href="/sops"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/sops'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={` transition-colors ${
                  path === '/sopss'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <path
                  d="M21.73 18L13.73 4C13.5556 3.6922 13.3026 3.43619 12.9969 3.25807C12.6912 3.07995 12.3438 2.9861 11.99 2.9861C11.6362 2.9861 11.2887 3.07995 10.9831 3.25807C10.6774 3.43619 10.4244 3.6922 10.25 4L2.24999 18C2.07367 18.3054 1.98122 18.6519 1.982 19.0045C1.98278 19.3571 2.07677 19.7032 2.25444 20.0078C2.43211 20.3124 2.68714 20.5646 2.99369 20.7388C3.30023 20.9131 3.6474 21.0032 3.99999 21H20C20.3509 20.9996 20.6955 20.907 20.9993 20.7313C21.303 20.5556 21.5552 20.3031 21.7305 19.9991C21.9058 19.6951 21.998 19.3504 21.9979 18.9995C21.9979 18.6486 21.9054 18.3039 21.73 18Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
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
              SOPs
            </Link>
          </li>

          <li id="roster">
            <Link
              href="/roster"
              className={`flex gap-3 font-kulim font-bold w-52 py-2  rounded-xl transition-colors ${
                path === '/roster'
                  ? 'text-1 hover:text-3 bg-2'
                  : 'hover:text-1 text-3 hover:bg-2'
              } group justify-start px-5 items-center h-14`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className={` transition-colors ${
                  path === '/roster'
                    ? 'group-hover:fill-3 fill-1'
                    : 'fill-3 group-hover:fill-1'
                }`}
              >
                <path d="M11.5 6C9.57812 6 8 7.57812 8 9.5C8 11.4219 9.57812 13 11.5 13C13.4219 13 15 11.4219 15 9.5C15 7.57812 13.4219 6 11.5 6ZM20.5 6C18.5781 6 17 7.57812 17 9.5C17 11.4219 18.5781 13 20.5 13C22.4219 13 24 11.4219 24 9.5C24 7.57812 22.4219 6 20.5 6ZM11.5 8C12.3398 8 13 8.66016 13 9.5C13 10.3398 12.3398 11 11.5 11C10.6602 11 10 10.3398 10 9.5C10 8.66016 10.6602 8 11.5 8ZM20.5 8C21.3398 8 22 8.66016 22 9.5C22 10.3398 21.3398 11 20.5 11C19.6602 11 19 10.3398 19 9.5C19 8.66016 19.6602 8 20.5 8ZM7 12C4.80078 12 3 13.8008 3 16C3 17.1133 3.47656 18.1172 4.21875 18.8438C2.88672 19.7461 2 21.2812 2 23H4C4 21.332 5.33203 20 7 20C8.66797 20 10 21.332 10 23H12C12 21.2812 11.1133 19.7461 9.78125 18.8438C10.5234 18.1172 11 17.1133 11 16C11 13.8008 9.19922 12 7 12ZM12 23C11.375 23.8359 11 24.8867 11 26H13C13 24.332 14.332 23 16 23C17.668 23 19 24.332 19 26H21C21 24.8867 20.625 23.8359 20 23C19.6602 22.5469 19.25 22.1602 18.7812 21.8438C19.5234 21.1172 20 20.1133 20 19C20 16.8008 18.1992 15 16 15C13.8008 15 12 16.8008 12 19C12 20.1133 12.4766 21.1172 13.2188 21.8438C12.75 22.1602 12.3398 22.5469 12 23ZM20 23H22C22 21.332 23.332 20 25 20C26.668 20 28 21.332 28 23H30C30 21.2812 29.1133 19.7461 27.7812 18.8438C28.5234 18.1172 29 17.1133 29 16C29 13.8008 27.1992 12 25 12C22.8008 12 21 13.8008 21 16C21 17.1133 21.4766 18.1172 22.2188 18.8438C20.8867 19.7461 20 21.2812 20 23ZM7 14C8.11719 14 9 14.8828 9 16C9 17.1172 8.11719 18 7 18C5.88281 18 5 17.1172 5 16C5 14.8828 5.88281 14 7 14ZM25 14C26.1172 14 27 14.8828 27 16C27 17.1172 26.1172 18 25 18C23.8828 18 23 17.1172 23 16C23 14.8828 23.8828 14 25 14ZM16 17C17.1172 17 18 17.8828 18 19C18 20.1172 17.1172 21 16 21C14.8828 21 14 20.1172 14 19C14 17.8828 14.8828 17 16 17Z" />
              </svg>
              Roster
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-[1px] h-full bg-gradient-to-t from-transparent via-white/20 from-10% to-90% to-transparent"></div>
    </nav>
  );
}
