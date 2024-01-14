import Image from 'next/image';
import MbtNavbar from '@/components/common/MbtNavbar';
import SearchBar from '@/components/common/SearchBar';
import Profiles from '@/dummy-data/profiles.json';
import { Person } from '@/types.db';
import { Button } from '@/components/common/Button';
import Input from '@/components/common/Input';
import Label from '@/components/common/Label';
import { ComboboxDemo } from '@/components/common/Select';
import ListTags from '@/dummy-data/tags.json';
import ListCriminalHistory from '@/dummy-data/criminal-history.json';

export default function DisplayProfile({ params }: { params: { id: string } }) {
  const profileId = decodeURIComponent(params.id).toLowerCase();

  const ProfileFilter = () =>
    Profiles.filter((profile) => profile.name.toLowerCase() === profileId);

  const Profile = ProfileFilter()[0];

  return (
    <main className="flex">
      <MbtNavbar />
      <div className="flex flex-col w-full px-5 py-10">
        <SearchBar />
        <div className="w-full flex gap-5">
          <div className=" w-2/3 flex flex-col gap-5">
            <div className="bg-2 w-full px-5 py-2 flex justify-between ">
              <h1 className="flex items-center gap-1 font-kulim">
                {Profile.name}
                <b className="text-xs text-1 font-light"> ({Profile.id})</b>
              </h1>

              <div id="buttons" className="flex gap-2">
                <span className="flex gap-2 items-center">
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
                <Button
                  className="flex justify-center items-center"
                  variant="icon-green"
                  size="icon-sm"
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
                  value={Profile.id}
                />
                <Input
                  placeholder="XXXXXXXX"
                  name="Name"
                  id="name"
                  value={Profile.name}
                />
                <Input
                  placeholder="XXXXXXXX"
                  name="Profile Image Url"
                  id="profile-img"
                  value={Profile.profile_url}
                />
              </div>
            </div>
            <div className="w-full flex gap-5">
              <Input
                placeholder="XXXXXXXX"
                name="Phone Number"
                id="phone-number"
                value={Profile.phone_number}
              />
              <Input
                placeholder="XXXXXXXX"
                name="Fingerprint"
                id="fingerprint"
                value={Profile.fingerprint}
              />
              <Input
                placeholder="XXXXXXXX"
                name="Dna"
                id="dna"
                value={Profile.dna}
              />
            </div>
            <div>
              <h1 className="text-lg font-kulim font-bold">Summary</h1>
              <div className="h-full w-full flex">
                <div className="h-full w-[2px] bg-1 shadow-[0px 0px 1.9px 0px rgba(0, 194, 255, 1)]"></div>
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="bg-transparent resize-none w-full outline-none p-5 font-kulim"
                  placeholder="Write your summary..."
                  value={Profile.summary}
                />
              </div>
            </div>
          </div>
          <div className=" w-1/3 flex flex-col gap-5">
            {/* Tags */}
            <div className="w-full bg-2 to-transparent flex px-5 h-12 justify-between items-center">
              <span className="font-kulim font-bold">Tags</span>
              <ComboboxDemo placeholder="Search Tags..." list={ListTags}>
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
            </div>
            {/* Vehicles */}
            <div className="flex flex-col gap-5">
              <div className="w-full bg-2 to-transparent flex px-5 h-12 items-center justify-between">
                <span className="font-kulim font-bold">Vehicles</span>
              </div>
              <div className="grid grid-cols-3 gap-4 items-center justify-center">
                {Profile.vehicles.map((vehicle, idx) => (
                  <Label
                    theme={`${vehicle.warrant_active ? 'red' : 'green'}`}
                    key={idx}
                    warning={vehicle.warrant_active}
                  >
                    #R24939QN flatbed
                  </Label>
                ))}
              </div>
            </div>
            {/* Job */}
            <div className="flex flex-col gap-5">
              <div className="w-full bg-2 to-transparent flex px-5 h-12 items-center justify-between">
                <span className="font-kulim font-bold">Job</span>
              </div>
              <div className="grid grid-cols-1 gap-4 items-center justify-center">
                <Label theme="green" className=" capitalize">
                  {Profile.job}
                </Label>
              </div>
            </div>
            {/* Apartment */}
            <div className="flex flex-col gap-5">
              <div className="w-full bg-2 to-transparent flex px-5 h-12 items-center justify-between">
                <span className="font-kulim font-bold">Apartment</span>
              </div>
              <div className="grid grid-cols-1 gap-4 items-center justify-center ">
                {Profile.apartment.map((apart, idx) => (
                  <Label
                    theme="green"
                    className=" capitalize"
                    key={idx}
                  >{`${apart.location} ${apart.number}`}</Label>
                ))}
              </div>
            </div>
            {/* Criminal History */}
            <div className="w-full bg-2 to-transparent flex px-5 h-12 justify-between items-center">
              <span className="font-kulim font-bold">Criminal History</span>
              <ComboboxDemo
                placeholder="Search Criminal Fines..."
                list={ListCriminalHistory}
              >
                {' '}
              </ComboboxDemo>
            </div>
            {/* Licenceses */}
            <div className="w-full bg-2 to-transparent flex px-5 h-12 justify-between items-center">
              <span className="font-kulim font-bold">Licenceses</span>
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
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
