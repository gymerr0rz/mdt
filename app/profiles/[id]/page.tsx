'use client';

import MbtNavbar from '@/components/common/MbtNavbar';
import SearchBar from '@/components/common/SearchBarPeople';
import Profiles from '@/dummy-data/profiles.json';
import { Button } from '@/components/common/Button';
import Input from '@/components/common/InputProfile';
import Label from '@/components/common/Label';
import ListLicenses from '@/dummy-data/licenses.json';
import ListCriminalHistory from '@/dummy-data/criminal-history.json';
import { TagsAdd } from '@/components/common/TagAdd';
import { SelectLicenses } from '@/components/common/SelectLicenses';
import React from 'react';
import { Person } from '@/types.db';

export default function DisplayProfile({ params }: { params: { id: string } }) {
  const [profile, setProfile] = React.useState<Person | undefined>();
  const [editStatus, setEditStatus] = React.useState<boolean>(false);

  React.useEffect(() => {
    const profileId = decodeURIComponent(params.id).toLowerCase();

    const ProfileFilter = () =>
      Profiles.filter((profile) => profile.name.toLowerCase() === profileId);

    setProfile(ProfileFilter()[0]);
  }, []);

  if (!profile)
    return (
      <main className="flex">
        <MbtNavbar />
        <div className="flex flex-col w-full px-5 py-10">
          <SearchBar />
          <div className="w-full h-full flex justify-center items-center">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="50"
              width="50"
              className="fill-1 animate-spin"
            >
              <path
                opacity="0.2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              ></path>
              <path d="M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z"></path>
            </svg>
          </div>
        </div>
      </main>
    );
  return (
    <main className="flex">
      <MbtNavbar />
      <div className="flex flex-col w-full px-5 py-10">
        <SearchBar />
        <div className="w-full flex gap-5 animate-opacity-down">
          <div className=" w-2/3 flex flex-col gap-5">
            <div className="from-2 from-40%  bg-gradient-to-r to-transparent w-full px-5 py-2 flex justify-between ">
              <h1 className="flex items-center gap-1 font-kulim">
                {profile.name}
                <b className="text-xs text-1 font-light"> ({profile.id})</b>
              </h1>

              <div id="buttons" className="flex gap-2">
                {profile.warrant && (
                  <span className="flex gap-2 items-center animate-pulse">
                    <h1 className="font-kulim italic font-bold text-7 text-sm">
                      Active Warrant
                    </h1>
                    <Button
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
                  </span>
                )}
                <Button
                  className="flex justify-center items-center"
                  variant="icon-green"
                  size="icon-sm"
                  onClick={() => setEditStatus((prev) => !prev)}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-1"
                  >
                    <g clip-path="url(#clip0_17_740)">
                      <g filter="url(#filter0_d_17_740)">
                        <path d="M2.28564 9.74999V11.7143H4.24993L10.0433 5.92094L8.07898 3.95666L2.28564 9.74999ZM11.5623 4.40189C11.6109 4.35344 11.6494 4.29587 11.6757 4.23251C11.702 4.16914 11.7155 4.10121 11.7155 4.03261C11.7155 3.96401 11.702 3.89608 11.6757 3.83271C11.6494 3.76934 11.6109 3.71178 11.5623 3.66332L10.3366 2.43761C10.2881 2.38905 10.2306 2.35052 10.1672 2.32424C10.1038 2.29795 10.0359 2.28442 9.96731 2.28442C9.89871 2.28442 9.83078 2.29795 9.76741 2.32424C9.70404 2.35052 9.64648 2.38905 9.59802 2.43761L8.63945 3.39618L10.6037 5.36047L11.5623 4.40189Z" />
                        <path d="M2.28564 9.74999V11.7143H4.24993L10.0433 5.92094L8.07898 3.95666L2.28564 9.74999ZM11.5623 4.40189C11.6109 4.35344 11.6494 4.29587 11.6757 4.23251C11.702 4.16914 11.7155 4.10121 11.7155 4.03261C11.7155 3.96401 11.702 3.89608 11.6757 3.83271C11.6494 3.76934 11.6109 3.71178 11.5623 3.66332L10.3366 2.43761C10.2881 2.38905 10.2306 2.35052 10.1672 2.32424C10.1038 2.29795 10.0359 2.28442 9.96731 2.28442C9.89871 2.28442 9.83078 2.29795 9.76741 2.32424C9.70404 2.35052 9.64648 2.38905 9.59802 2.43761L8.63945 3.39618L10.6037 5.36047L11.5623 4.40189Z" />
                      </g>
                    </g>
                  </svg>
                </Button>
                <Button
                  className="flex justify-center items-center"
                  variant="icon-green"
                  size="icon-sm"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-1"
                  >
                    <g filter="url(#filter0_d_17_744)">
                      <path d="M13.2484 4.84852L11.1514 2.75147C10.9263 2.52642 10.6211 2.4 10.3029 2.39999H3.5999C2.93715 2.39999 2.3999 2.93724 2.3999 3.59999V12.4C2.3999 13.0627 2.93715 13.6 3.5999 13.6H12.3999C13.0627 13.6 13.5999 13.0627 13.5999 12.4V5.69704C13.5999 5.37878 13.4735 5.07356 13.2484 4.84852ZM7.9999 12C7.11625 12 6.3999 11.2836 6.3999 10.4C6.3999 9.51634 7.11625 8.79999 7.9999 8.79999C8.88355 8.79999 9.5999 9.51634 9.5999 10.4C9.5999 11.2836 8.88355 12 7.9999 12ZM10.3999 4.38699V6.89999C10.3999 7.06567 10.2656 7.19999 10.0999 7.19999H4.2999C4.13423 7.19999 3.9999 7.06567 3.9999 6.89999V4.29999C3.9999 4.13432 4.13423 3.99999 4.2999 3.99999H10.0129C10.0925 3.99999 10.1688 4.03159 10.225 4.08787L10.312 4.17487C10.3399 4.20272 10.362 4.23579 10.3771 4.27219C10.3921 4.30859 10.3999 4.3476 10.3999 4.38699Z" />
                      <path d="M13.2484 4.84852L11.1514 2.75147C10.9263 2.52642 10.6211 2.4 10.3029 2.39999H3.5999C2.93715 2.39999 2.3999 2.93724 2.3999 3.59999V12.4C2.3999 13.0627 2.93715 13.6 3.5999 13.6H12.3999C13.0627 13.6 13.5999 13.0627 13.5999 12.4V5.69704C13.5999 5.37878 13.4735 5.07356 13.2484 4.84852ZM7.9999 12C7.11625 12 6.3999 11.2836 6.3999 10.4C6.3999 9.51634 7.11625 8.79999 7.9999 8.79999C8.88355 8.79999 9.5999 9.51634 9.5999 10.4C9.5999 11.2836 8.88355 12 7.9999 12ZM10.3999 4.38699V6.89999C10.3999 7.06567 10.2656 7.19999 10.0999 7.19999H4.2999C4.13423 7.19999 3.9999 7.06567 3.9999 6.89999V4.29999C3.9999 4.13432 4.13423 3.99999 4.2999 3.99999H10.0129C10.0925 3.99999 10.1688 4.03159 10.225 4.08787L10.312 4.17487C10.3399 4.20272 10.362 4.23579 10.3771 4.27219C10.3921 4.30859 10.3999 4.3476 10.3999 4.38699Z" />
                    </g>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="flex gap-5 ">
              <div className="max-h-64 max-w-64 min-h-64 min-w-64 bg-2 flex justify-center items-center rounded-xl">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 16 20"
                  fill="none"
                  className="fill-1"
                >
                  <path d="M16 20V17.5C16 16.1739 15.5184 14.9021 14.6611 13.9645C13.8038 13.0268 12.641 12.5 11.4286 12.5H4.57143C3.35901 12.5 2.19625 13.0268 1.33894 13.9645C0.481631 14.9021 0 16.1739 0 17.5V20" />
                  <path d="M8.00001 9.44444C10.5037 9.44444 12.5333 7.33023 12.5333 4.72222C12.5333 2.11421 10.5037 0 8.00001 0C5.49632 0 3.46667 2.11421 3.46667 4.72222C3.46667 7.33023 5.49632 9.44444 8.00001 9.44444Z" />
                </svg>
              </div>
              <div className="w-full flex flex-col gap-5">
                <Input
                  placeholder="XXXXXXXX"
                  name="State id"
                  id="state-id"
                  defaultValue={profile.id}
                  disabled={!editStatus}
                  editMode={editStatus}
                />
                <Input
                  placeholder="XXXXXXXX"
                  name="Name"
                  id="name"
                  defaultValue={profile.name}
                  disabled={!editStatus}
                  editMode={editStatus}
                />
                <Input
                  placeholder="XXXXXXXX"
                  name="Profile Image Url"
                  id="profile-img"
                  defaultValue={profile.profile_url}
                  disabled={!editStatus}
                  editMode={editStatus}
                />
              </div>
            </div>
            <div className="w-full flex gap-5">
              <Input
                placeholder="XXXXXXXX"
                name="Phone Number"
                id="phone-number"
                defaultValue={profile.phone_number}
                disabled={!editStatus}
                editMode={editStatus}
              />
              <Input
                placeholder="XXXXXXXX"
                name="Fingerprint"
                id="fingerprint"
                defaultValue={profile.fingerprint}
                disabled={!editStatus}
                editMode={editStatus}
              />
              <Input
                placeholder="XXXXXXXX"
                name="Dna"
                id="dna"
                defaultValue={profile.dna}
                disabled={!editStatus}
                editMode={editStatus}
              />
            </div>
            <div>
              <h1
                className={`transition-colors text-lg font-kulim font-bold ${
                  editStatus && 'text-1'
                }`}
              >
                Summary
              </h1>
              <div className="h-full w-full flex">
                <div className="h-full w-[2px] bg-1 shadow-[0px 0px 1.9px 0px rgba(0, 194, 255, 1)]"></div>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="bg-transparent resize-none w-full outline-none p-5 font-kulim"
                  placeholder="Write your summary..."
                  value={profile.summary}
                />
              </div>
            </div>
          </div>
          <div className=" w-1/3 flex flex-col gap-5">
            {/* Tags */}
            <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
              <span className="flex gap-2 items-center">
                <Button variant="icon-green" size="icon-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="16"
                    width="16"
                    className="fill-1"
                  >
                    <path d="M0 252.118V48C0 21.49 21.49 0 48 0h204.118a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.745 18.745-49.137 18.745-67.882 0L14.059 286.059A48 48 0 0 1 0 252.118zM112 64c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
                  </svg>
                </Button>
                <span className="font-kulim font-bold">Tags</span>
              </span>
              <TagsAdd placeholder="Add Tags..." list={ListCriminalHistory}>
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
              </TagsAdd>
            </div>
            {/* Vehicles */}
            <div className="flex flex-col gap-5">
              <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
                <span className="flex gap-2 items-center">
                  <Button variant="icon-green" size="icon-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="16"
                      width="16"
                      className="fill-1"
                    >
                      <path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 0 1-.91-5.68 15.93 15.93 0 0 0 4.53-12.53A16.27 16.27 0 0 0 447.65 176h-15.6a17 17 0 0 0-2 .13 8.5 8.5 0 0 0-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 0 0-1.35.34 17 17 0 0 0-2-.13H64.35A16.27 16.27 0 0 0 48 190.77a15.93 15.93 0 0 0 4.59 12.47 3.6 3.6 0 0 1-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0 0 13.2 10.87v.2a16 16 0 0 0 16 16h56a16 16 0 0 0 16-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0 1 28-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0 1 28.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0 0 16 16h56a16 16 0 0 0 16-16v-.12A16 16 0 0 0 485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 0 1-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 0 1-7.44-11.42c.35-.74.72-1.49 1.05-2.24zm11.93 79.63A427.17 427.17 0 0 1 72.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 0 1-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 0 1-.49 14.48z"></path>
                    </svg>
                  </Button>
                  <span className="font-kulim font-bold">Vehicles</span>
                </span>
              </div>
              <div className="grid grid-cols-4 gap-4 items-center justify-center">
                {profile.vehicles.map((vehicle, idx) => (
                  <Label
                    theme={`${vehicle.bolo ? 'red' : 'green'}`}
                    key={idx}
                    warning={vehicle.bolo}
                  >
                    {vehicle.vehicle_model}
                  </Label>
                ))}
              </div>
            </div>
            {/* Job */}
            <div className="flex flex-col gap-5">
              <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
                <span className="flex gap-2 items-center">
                  <Button variant="icon-green" size="icon-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 448 512"
                      height="16"
                      width="16"
                      className="fill-1"
                    >
                      <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path>
                    </svg>
                  </Button>
                  <span className="font-kulim font-bold">Job</span>
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 items-center justify-center">
                <Label theme="green" className=" capitalize">
                  {profile.job}
                </Label>
              </div>
            </div>
            {/* Apartment */}
            <div className="flex flex-col gap-5">
              <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
                <span className="flex gap-2 items-center">
                  <Button variant="icon-green" size="icon-sm">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 24 24"
                      height="16"
                      width="16"
                      className="fill-1"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"></path>
                    </svg>
                  </Button>
                  <span className="font-kulim font-bold">Apartment</span>
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 items-center justify-center ">
                {profile.apartment.map((apart, idx) => (
                  <Label
                    theme="green"
                    className=" capitalize"
                    key={idx}
                  >{`${apart.location} ${apart.number}`}</Label>
                ))}
              </div>
            </div>
            {/* Criminal History */}
            <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
              <span className="flex gap-2 items-center">
                <Button variant="icon-green" size="icon-sm">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="16"
                    width="16"
                    className="fill-1"
                  >
                    <path d="M12 2C16.9706 2 21 6.02944 21 11C21 13.2031 20.2084 15.2213 18.8941 16.7858C20.1491 17.6156 20.9275 18.6754 20.9952 19.835L21 20L12 22L3 20L3.00481 19.835C3.0725 18.6755 3.85076 17.6158 5.10554 16.7859C3.79194 15.2222 3 13.2036 3 11C3 6.02944 7.02944 2 12 2ZM12 13C10.6193 13 9.5 13.6716 9.5 14.5C9.5 15.3284 10.6193 16 12 16C13.3807 16 14.5 15.3284 14.5 14.5C14.5 13.6716 13.3807 13 12 13ZM9 8C7.89543 8 7 8.67157 7 9.5C7 10.3284 7.89543 11 9 11C10.1046 11 11 10.3284 11 9.5C11 8.67157 10.1046 8 9 8ZM15 8C13.8954 8 13 8.67157 13 9.5C13 10.3284 13.8954 11 15 11C16.1046 11 17 10.3284 17 9.5C17 8.67157 16.1046 8 15 8Z"></path>
                  </svg>
                </Button>
                <span className="font-kulim font-bold">Criminal History</span>
              </span>
            </div>
            {/* Licenses */}
            <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-between gap-2 items-center">
              <span className="flex gap-2 items-center">
                <Button variant="icon-green" size="icon-sm">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="16"
                    width="16"
                    className="stroke-1"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11"></path>
                    <path d="M9 7l4 0"></path>
                    <path d="M9 11l4 0"></path>
                  </svg>
                </Button>
                <span className="font-kulim font-bold">Licenses</span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {ListLicenses.map((licenses, idx) => (
                <SelectLicenses key={idx}>
                  <Label theme={licenses.state ? 'green' : 'red'}>
                    {licenses.name}
                  </Label>
                </SelectLicenses>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
