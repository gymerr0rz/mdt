'use client';

import MbtNavbar from '@/components/common/MbtNavbar';
import Vehicles from '@/dummy-data/vehicles.json';
import { Button } from '@/components/common/Button';
import Input from '@/components/common/InputProfile';
import React from 'react';
import { Vehicle } from '@/types.db';
import SearchBarVehicle from '@/components/common/SearchBarVehicles';

export default function DisplayVehicle({ params }: { params: { id: string } }) {
  const [vehicle, setVehicle] = React.useState<Vehicle | undefined>();
  const [editStatus, setEditStatus] = React.useState<boolean>(false);

  React.useEffect(() => {
    const vehiclePlate = decodeURIComponent(params.id).toLowerCase();

    const VehicleFilter = () =>
      Vehicles.filter(
        (profile) => profile.vehicle_plate.toLowerCase() === vehiclePlate
      );

    setVehicle(VehicleFilter()[0]);
  }, []);

  if (!vehicle)
    return (
      <main className="flex">
        <MbtNavbar />
        <div className="flex flex-col w-full px-5 py-10">
          <SearchBarVehicle />
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
        <SearchBarVehicle />
        <div className="w-full flex gap-5 animate-opacity-down">
          <div className=" w-2/3 flex flex-col gap-5">
            <div className="from-2 from-40%  bg-gradient-to-r to-transparent w-full px-5 py-2 flex justify-between ">
              <h1 className="flex items-center gap-1 font-kulim">
                {vehicle.vehicle_model}
                <b className="text-xs text-1 font-light">
                  ({vehicle.vehicle_plate})
                </b>
              </h1>

              <div id="buttons" className="flex gap-2">
                {vehicle.vehicle_bolo && (
                  <span className="flex gap-2 items-center animate-pulse">
                    <h1 className="font-kulim italic font-bold text-7 text-sm">
                      Active BOLO
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
                  viewBox="0 0 13 11"
                  fill="none"
                  className="fill-1"
                >
                  <path d="M12.695 3.46875H11.1748L10.7523 2.4125C10.3182 1.32654 9.28196 0.625 8.11221 0.625H4.8876C3.71811 0.625 2.68167 1.32654 2.24723 2.4125L1.82473 3.46875H0.304849C0.106548 3.46875 -0.03894 3.65512 0.00930219 3.84732L0.161646 4.4567C0.195415 4.59229 0.31729 4.6875 0.457193 4.6875H0.966783C0.625787 4.98533 0.406158 5.41824 0.406158 5.90625V7.125C0.406158 7.5343 0.562564 7.90373 0.812408 8.18963V9.5625C0.812408 10.0112 1.17626 10.375 1.62491 10.375H2.43741C2.88606 10.375 3.24991 10.0112 3.24991 9.5625V8.75H9.74991V9.5625C9.74991 10.0112 10.1138 10.375 10.5624 10.375H11.3749C11.8236 10.375 12.1874 10.0112 12.1874 9.5625V8.18963C12.4373 7.90398 12.5937 7.53455 12.5937 7.125V5.90625C12.5937 5.41824 12.374 4.98533 12.0333 4.6875H12.5429C12.6828 4.6875 12.8047 4.59229 12.8384 4.4567L12.9908 3.84732C13.0388 3.65512 12.8933 3.46875 12.695 3.46875ZM3.75594 3.01604C3.94104 2.55342 4.38919 2.25 4.8876 2.25H8.11221C8.61063 2.25 9.05878 2.55342 9.24387 3.01604L9.74991 4.28125H3.24991L3.75594 3.01604ZM2.43741 7.11992C1.94991 7.11992 1.62491 6.79594 1.62491 6.30996C1.62491 5.82398 1.94991 5.5 2.43741 5.5C2.92491 5.5 3.65616 6.22896 3.65616 6.71494C3.65616 7.20092 2.92491 7.11992 2.43741 7.11992ZM10.5624 7.11992C10.0749 7.11992 9.34366 7.20092 9.34366 6.71494C9.34366 6.22896 10.0749 5.5 10.5624 5.5C11.0499 5.5 11.3749 5.82398 11.3749 6.30996C11.3749 6.79594 11.0499 7.11992 10.5624 7.11992Z" />
                </svg>
              </div>
              <div className="w-full flex flex-col gap-5">
                <Input
                  placeholder="XXXXXXXX"
                  name="vehicle owner"
                  id="vehicle-owner"
                  defaultValue={vehicle.vehicle_owner.owner_name}
                  disabled={!editStatus}
                  editMode={editStatus}
                />
                <Input
                  placeholder="XXXXXXXX"
                  name="vehicle plate"
                  id="vehicle-plate"
                  defaultValue={vehicle.vehicle_plate}
                  disabled={!editStatus}
                  editMode={editStatus}
                />
                <Input
                  placeholder="XXXXXXXX"
                  name="Vehicle Image Url"
                  id="vehicle-img"
                  defaultValue={vehicle.vehicle_image_url}
                  disabled={!editStatus}
                  editMode={editStatus}
                />
              </div>
            </div>
            <div className="w-full flex gap-5">
              <Input
                placeholder="XXXXXXXX"
                name="vehicle points"
                id="vehicle-points"
                defaultValue={vehicle.vehicle_points}
                disabled={!editStatus}
                editMode={editStatus}
              />
              <Input
                placeholder="XXXXXXXX"
                name="class"
                id="class"
                defaultValue={vehicle.vehicle_class}
                disabled={!editStatus}
                editMode={editStatus}
              />
              <Input
                placeholder="XXXXXXXX"
                name="model"
                id="model"
                defaultValue={vehicle.vehicle_model}
                disabled={!editStatus}
                editMode={editStatus}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
