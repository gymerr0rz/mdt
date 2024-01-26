import MbtNavbar from '@/components/common/MbtNavbar';
import { Button } from '@/components/common/Button';
import Label from '@/components/common/Label';
import { WarrantsAccordion } from '@/components/common/WarrrantsAccordion';
import InputImage from '@/components/common/InputImage';
import SuspectInvolved from '@/components/common/SuspectInvolved';
import SearchIncidents from '@/components/common/SearchIncidents';
import Ping from '@/components/common/Ping';
import { RequestAccordion } from '../../components/common/RequestAccordion';

export default function Warrants() {
  return (
    <main className="flex">
      <MbtNavbar />
      <div className="flex w-full px-5 py-10 gap-5">
        <div className=" w-3/6 flex flex-col gap-5">
          <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-start gap-2 items-center">
            <Button variant="icon-red" size="icon-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-7 stroke-7"
              >
                <g clip-path="url(#clip0_16_203)">
                  <g filter="url(#filter0_d_16_203)">
                    <path d="M14.4867 12L9.15333 2.66665C9.03704 2.46146 8.8684 2.29078 8.66462 2.17203C8.46083 2.05329 8.22919 1.99072 7.99333 1.99072C7.75747 1.99072 7.52584 2.05329 7.32205 2.17203C7.11826 2.29078 6.94962 2.46146 6.83333 2.66665L1.5 12C1.38245 12.2036 1.32082 12.4346 1.32134 12.6697C1.32186 12.9047 1.38452 13.1355 1.50296 13.3385C1.62141 13.5416 1.79143 13.7097 1.9958 13.8259C2.20016 13.942 2.4316 14.0021 2.66667 14H13.3333C13.5673 13.9997 13.797 13.938 13.9995 13.8208C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6039 13.1301 14.6654 12.9002 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4867 12Z" />
                    <path
                      d="M14.4867 12L9.15333 2.66665C9.03704 2.46146 8.8684 2.29078 8.66462 2.17203C8.46083 2.05329 8.22919 1.99072 7.99333 1.99072C7.75747 1.99072 7.52584 2.05329 7.32205 2.17203C7.11826 2.29078 6.94962 2.46146 6.83333 2.66665L1.5 12C1.38245 12.2036 1.32082 12.4346 1.32134 12.6697C1.32186 12.9047 1.38452 13.1355 1.50296 13.3385C1.62141 13.5416 1.79143 13.7097 1.9958 13.8259C2.20016 13.942 2.4316 14.0021 2.66667 14H13.3333C13.5673 13.9997 13.797 13.938 13.9995 13.8208C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6039 13.1301 14.6654 12.9002 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4867 12Z"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    d="M8 6V8.66667"
                    stroke="#09413A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 11.3333H8.00667"
                    stroke="#09413A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Button>
            <span className="  font-bold">Active Warrants</span>
            <Ping className="bg-7" />
          </div>
          <WarrantsAccordion />
        </div>
        <div className=" w-3/6 flex flex-col gap-5">
          <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-start gap-2 items-center">
            <Button variant="icon-green" size="icon-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_16_203)">
                  <g filter="url(#filter0_d_16_203)">
                    <path
                      d="M14.4867 12L9.15333 2.66665C9.03704 2.46146 8.8684 2.29078 8.66462 2.17203C8.46083 2.05329 8.22919 1.99072 7.99333 1.99072C7.75747 1.99072 7.52584 2.05329 7.32205 2.17203C7.11826 2.29078 6.94962 2.46146 6.83333 2.66665L1.5 12C1.38245 12.2036 1.32082 12.4346 1.32134 12.6697C1.32186 12.9047 1.38452 13.1355 1.50296 13.3385C1.62141 13.5416 1.79143 13.7097 1.9958 13.8259C2.20016 13.942 2.4316 14.0021 2.66667 14H13.3333C13.5673 13.9997 13.797 13.938 13.9995 13.8208C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6039 13.1301 14.6654 12.9002 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4867 12Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M14.4867 12L9.15333 2.66665C9.03704 2.46146 8.8684 2.29078 8.66462 2.17203C8.46083 2.05329 8.22919 1.99072 7.99333 1.99072C7.75747 1.99072 7.52584 2.05329 7.32205 2.17203C7.11826 2.29078 6.94962 2.46146 6.83333 2.66665L1.5 12C1.38245 12.2036 1.32082 12.4346 1.32134 12.6697C1.32186 12.9047 1.38452 13.1355 1.50296 13.3385C1.62141 13.5416 1.79143 13.7097 1.9958 13.8259C2.20016 13.942 2.4316 14.0021 2.66667 14H13.3333C13.5673 13.9997 13.797 13.938 13.9995 13.8208C14.202 13.7037 14.3701 13.5354 14.487 13.3327C14.6039 13.1301 14.6654 12.9002 14.6653 12.6663C14.6652 12.4324 14.6036 12.2026 14.4867 12Z"
                      stroke="#3CE7D2"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    d="M8 6V8.66667"
                    stroke="#09413A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 11.3333H8.00667"
                    stroke="#09413A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </Button>
            <span className="  font-bold">Requested Warrants</span>
            <Ping className="bg-1" />
          </div>
          <RequestAccordion />
        </div>
      </div>
    </main>
  );
}
