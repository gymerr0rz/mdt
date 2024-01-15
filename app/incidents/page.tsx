import MbtNavbar from '@/components/common/MbtNavbar';
import { Button } from '@/components/common/Button';
import Label from '@/components/common/Label';
import { IncidentsAccordion } from '@/components/common/IncidentsAccordion';
import InputImage from '@/components/common/InputImage';
import SuspectInvolved from '@/components/common/SuspectInvolved';
import SearchIncidents from '@/components/common/SearchIncidents';

export default function Incidents() {
  return (
    <main className="flex">
      <MbtNavbar />
      <div className="flex w-full px-5 py-10 gap-5">
        <div className=" w-2/6 flex flex-col gap-5">
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
            <span className="font-kulim font-bold">Incidents</span>
            <SearchIncidents />
          </div>
          <IncidentsAccordion />
        </div>

        <div className=" w-2/6 flex flex-col gap-5">
          <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-start gap-2 items-center">
            <Button variant="icon-green" size="icon-sm">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_9_579)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75735 2.04997C3.85098 2.14372 3.90358 2.27081 3.90358 2.40331C3.90358 2.53581 3.85098 2.66289 3.75735 2.75664C3.20009 3.31381 2.75804 3.97529 2.45645 4.70331C2.15486 5.43133 1.99963 6.21162 1.99963 6.99964C1.99963 7.78766 2.15486 8.56796 2.45645 9.29598C2.75804 10.024 3.20009 10.6855 3.75735 11.2426C3.84567 11.3374 3.89375 11.4628 3.89147 11.5923C3.88918 11.7219 3.83671 11.8454 3.7451 11.9371C3.65349 12.0287 3.5299 12.0811 3.40036 12.0834C3.27083 12.0857 3.14547 12.0376 3.05068 11.9493C0.316683 9.21597 0.316683 4.78397 3.05068 2.04997C3.14443 1.95634 3.27152 1.90375 3.40402 1.90375C3.53652 1.90375 3.6636 1.95634 3.75735 2.04997ZM12.2427 2.04997C12.3364 1.95634 12.4635 1.90375 12.596 1.90375C12.7285 1.90375 12.8556 1.95634 12.9494 2.04997C15.6833 4.78331 15.6833 9.21597 12.9494 11.95C12.9032 11.9977 12.848 12.0358 12.787 12.0619C12.726 12.0881 12.6604 12.1019 12.594 12.1024C12.5276 12.103 12.4618 12.0903 12.4003 12.0651C12.3389 12.04 12.2831 12.0028 12.2362 11.9558C12.1892 11.9089 12.1521 11.853 12.127 11.7916C12.1019 11.7301 12.0893 11.6643 12.0899 11.5979C12.0905 11.5315 12.1043 11.4659 12.1306 11.4049C12.1568 11.3439 12.1949 11.2887 12.2427 11.2426C12.7998 10.6855 13.2418 10.024 13.5433 9.29609C13.8449 8.56813 14.0001 7.78791 14.0001 6.99997C14.0001 6.21204 13.8449 5.43181 13.5433 4.70386C13.2418 3.9759 12.7998 3.31446 12.2427 2.75731C12.149 2.66356 12.0965 2.53647 12.0965 2.40397C12.0965 2.27147 12.149 2.14439 12.2427 2.05064V2.04997ZM5.17135 3.46397C5.21781 3.51041 5.25467 3.56554 5.27982 3.62622C5.30497 3.68691 5.31791 3.75195 5.31791 3.81764C5.31791 3.88333 5.30497 3.94837 5.27982 4.00906C5.25467 4.06974 5.21781 4.12487 5.17135 4.17131C4.42126 4.92145 3.99987 5.93882 3.99987 6.99964C3.99987 8.06046 4.42126 9.07784 5.17135 9.82797C5.26247 9.92223 5.31293 10.0485 5.31185 10.1796C5.31078 10.3107 5.25825 10.4361 5.16559 10.5289C5.07293 10.6216 4.94755 10.6743 4.81645 10.6755C4.68535 10.6767 4.55903 10.6263 4.46468 10.5353C4.00035 10.071 3.63202 9.5198 3.38072 8.91314C3.12943 8.30649 3.00008 7.65628 3.00008 6.99964C3.00008 6.343 3.12943 5.69279 3.38072 5.08614C3.63202 4.47948 4.00035 3.92827 4.46468 3.46397C4.55843 3.37034 4.68552 3.31775 4.81802 3.31775C4.95052 3.31775 5.0776 3.37034 5.17135 3.46397ZM10.8287 3.46397C10.9224 3.37034 11.0495 3.31775 11.182 3.31775C11.3145 3.31775 11.4416 3.37034 11.5353 3.46397C11.9997 3.92827 12.368 4.47948 12.6193 5.08614C12.8706 5.69279 12.9999 6.343 12.9999 6.99964C12.9999 7.65628 12.8706 8.30649 12.6193 8.91314C12.368 9.5198 11.9997 10.071 11.5353 10.5353C11.4406 10.6236 11.3152 10.6717 11.1857 10.6694C11.0561 10.6671 10.9325 10.6147 10.8409 10.5231C10.7493 10.4314 10.6969 10.3079 10.6946 10.1783C10.6923 10.0488 10.7404 9.92342 10.8287 9.82864C11.2002 9.4572 11.4949 9.01621 11.6959 8.53086C11.897 8.04552 12.0005 7.52532 12.0005 6.99997C12.0005 6.47463 11.897 5.95443 11.6959 5.46908C11.4949 4.98374 11.2002 4.54275 10.8287 4.17131C10.7351 4.07756 10.6825 3.95047 10.6825 3.81797C10.6825 3.68547 10.7351 3.55772 10.8287 3.46397ZM6.58602 4.87864C6.67965 4.97239 6.73224 5.09947 6.73224 5.23197C6.73224 5.36447 6.67965 5.49156 6.58602 5.58531C6.40026 5.77103 6.25291 5.99152 6.15238 6.2342C6.05185 6.47687 6.00011 6.73697 6.00011 6.99964C6.00011 7.26231 6.05185 7.52241 6.15238 7.76509C6.25291 8.00776 6.40026 8.22825 6.58602 8.41397C6.63375 8.46012 6.67181 8.51531 6.69799 8.57632C6.72416 8.63734 6.73793 8.70295 6.73847 8.76934C6.73902 8.83573 6.72634 8.90157 6.70117 8.963C6.676 9.02444 6.63884 9.08025 6.59188 9.12717C6.54491 9.1741 6.48906 9.2112 6.4276 9.23631C6.36614 9.26142 6.3003 9.27404 6.23391 9.27343C6.16752 9.27282 6.10192 9.259 6.04093 9.23277C5.97994 9.20653 5.92478 9.16842 5.87868 9.12064C5.31627 8.55806 5.00032 7.79513 5.00032 6.99964C5.00032 6.20415 5.31627 5.44122 5.87868 4.87864C5.97243 4.78501 6.09952 4.73241 6.23202 4.73241C6.36452 4.73241 6.49227 4.78501 6.58602 4.87864ZM9.41402 4.87864C9.46045 4.83218 9.51558 4.79532 9.57627 4.77017C9.63695 4.74502 9.70199 4.73208 9.76768 4.73208C9.83337 4.73208 9.89842 4.74502 9.9591 4.77017C10.0198 4.79532 10.0749 4.83218 10.1213 4.87864C10.3999 5.15722 10.6209 5.48794 10.7717 5.85192C10.9224 6.21589 11 6.60601 11 6.99997C11 7.39394 10.9224 7.78405 10.7717 8.14803C10.6209 8.51201 10.3999 8.84273 10.1213 9.12131C10.0266 9.20963 9.9012 9.25771 9.77167 9.25542C9.64213 9.25314 9.51854 9.20066 9.42694 9.10906C9.33533 9.01745 9.28285 8.89386 9.28057 8.76432C9.27828 8.63479 9.32636 8.50942 9.41468 8.41464C9.60054 8.22891 9.74797 8.00837 9.84856 7.76564C9.94915 7.5229 10.0009 7.26273 10.0009 6.99997C10.0009 6.73722 9.94915 6.47705 9.84856 6.23431C9.74797 5.99158 9.60054 5.77104 9.41468 5.58531C9.32105 5.49156 9.26846 5.36447 9.26846 5.23197C9.26846 5.09947 9.32038 4.97239 9.41402 4.87864ZM7.25002 6.99997C7.25002 6.80106 7.32903 6.6103 7.46969 6.46964C7.61034 6.32899 7.8011 6.24997 8.00002 6.24997C8.19893 6.24997 8.38969 6.32899 8.53035 6.46964C8.671 6.6103 8.75002 6.80106 8.75002 6.99997C8.75002 7.19889 8.671 7.38965 8.53035 7.5303C8.38969 7.67096 8.19893 7.74997 8.00002 7.74997C7.8011 7.74997 7.61034 7.67096 7.46969 7.5303C7.32903 7.38965 7.25002 7.19889 7.25002 6.99997Z"
                    fill="#3CE7D2"
                  />
                </g>
              </svg>
            </Button>
            <span className="font-kulim font-bold">Manage Incident</span>
          </div>
          <textarea
            name="manage-incident"
            id="manage-incident"
            cols={30}
            rows={20}
            className="resize-none bg-2 p-5 outline-none font-kulim"
            defaultValue={`Location: [Insert Location Here]

Summary:

[Insert Report Summary Here]

Evidence Location: Stash # | Drawer #

Items Confiscated: 
[Insert List Here]

Plead:`}
          />
          <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-start gap-2 items-center">
            <Button variant="icon-green" size="icon-sm">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_9_579)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.75735 2.04997C3.85098 2.14372 3.90358 2.27081 3.90358 2.40331C3.90358 2.53581 3.85098 2.66289 3.75735 2.75664C3.20009 3.31381 2.75804 3.97529 2.45645 4.70331C2.15486 5.43133 1.99963 6.21162 1.99963 6.99964C1.99963 7.78766 2.15486 8.56796 2.45645 9.29598C2.75804 10.024 3.20009 10.6855 3.75735 11.2426C3.84567 11.3374 3.89375 11.4628 3.89147 11.5923C3.88918 11.7219 3.83671 11.8454 3.7451 11.9371C3.65349 12.0287 3.5299 12.0811 3.40036 12.0834C3.27083 12.0857 3.14547 12.0376 3.05068 11.9493C0.316683 9.21597 0.316683 4.78397 3.05068 2.04997C3.14443 1.95634 3.27152 1.90375 3.40402 1.90375C3.53652 1.90375 3.6636 1.95634 3.75735 2.04997ZM12.2427 2.04997C12.3364 1.95634 12.4635 1.90375 12.596 1.90375C12.7285 1.90375 12.8556 1.95634 12.9494 2.04997C15.6833 4.78331 15.6833 9.21597 12.9494 11.95C12.9032 11.9977 12.848 12.0358 12.787 12.0619C12.726 12.0881 12.6604 12.1019 12.594 12.1024C12.5276 12.103 12.4618 12.0903 12.4003 12.0651C12.3389 12.04 12.2831 12.0028 12.2362 11.9558C12.1892 11.9089 12.1521 11.853 12.127 11.7916C12.1019 11.7301 12.0893 11.6643 12.0899 11.5979C12.0905 11.5315 12.1043 11.4659 12.1306 11.4049C12.1568 11.3439 12.1949 11.2887 12.2427 11.2426C12.7998 10.6855 13.2418 10.024 13.5433 9.29609C13.8449 8.56813 14.0001 7.78791 14.0001 6.99997C14.0001 6.21204 13.8449 5.43181 13.5433 4.70386C13.2418 3.9759 12.7998 3.31446 12.2427 2.75731C12.149 2.66356 12.0965 2.53647 12.0965 2.40397C12.0965 2.27147 12.149 2.14439 12.2427 2.05064V2.04997ZM5.17135 3.46397C5.21781 3.51041 5.25467 3.56554 5.27982 3.62622C5.30497 3.68691 5.31791 3.75195 5.31791 3.81764C5.31791 3.88333 5.30497 3.94837 5.27982 4.00906C5.25467 4.06974 5.21781 4.12487 5.17135 4.17131C4.42126 4.92145 3.99987 5.93882 3.99987 6.99964C3.99987 8.06046 4.42126 9.07784 5.17135 9.82797C5.26247 9.92223 5.31293 10.0485 5.31185 10.1796C5.31078 10.3107 5.25825 10.4361 5.16559 10.5289C5.07293 10.6216 4.94755 10.6743 4.81645 10.6755C4.68535 10.6767 4.55903 10.6263 4.46468 10.5353C4.00035 10.071 3.63202 9.5198 3.38072 8.91314C3.12943 8.30649 3.00008 7.65628 3.00008 6.99964C3.00008 6.343 3.12943 5.69279 3.38072 5.08614C3.63202 4.47948 4.00035 3.92827 4.46468 3.46397C4.55843 3.37034 4.68552 3.31775 4.81802 3.31775C4.95052 3.31775 5.0776 3.37034 5.17135 3.46397ZM10.8287 3.46397C10.9224 3.37034 11.0495 3.31775 11.182 3.31775C11.3145 3.31775 11.4416 3.37034 11.5353 3.46397C11.9997 3.92827 12.368 4.47948 12.6193 5.08614C12.8706 5.69279 12.9999 6.343 12.9999 6.99964C12.9999 7.65628 12.8706 8.30649 12.6193 8.91314C12.368 9.5198 11.9997 10.071 11.5353 10.5353C11.4406 10.6236 11.3152 10.6717 11.1857 10.6694C11.0561 10.6671 10.9325 10.6147 10.8409 10.5231C10.7493 10.4314 10.6969 10.3079 10.6946 10.1783C10.6923 10.0488 10.7404 9.92342 10.8287 9.82864C11.2002 9.4572 11.4949 9.01621 11.6959 8.53086C11.897 8.04552 12.0005 7.52532 12.0005 6.99997C12.0005 6.47463 11.897 5.95443 11.6959 5.46908C11.4949 4.98374 11.2002 4.54275 10.8287 4.17131C10.7351 4.07756 10.6825 3.95047 10.6825 3.81797C10.6825 3.68547 10.7351 3.55772 10.8287 3.46397ZM6.58602 4.87864C6.67965 4.97239 6.73224 5.09947 6.73224 5.23197C6.73224 5.36447 6.67965 5.49156 6.58602 5.58531C6.40026 5.77103 6.25291 5.99152 6.15238 6.2342C6.05185 6.47687 6.00011 6.73697 6.00011 6.99964C6.00011 7.26231 6.05185 7.52241 6.15238 7.76509C6.25291 8.00776 6.40026 8.22825 6.58602 8.41397C6.63375 8.46012 6.67181 8.51531 6.69799 8.57632C6.72416 8.63734 6.73793 8.70295 6.73847 8.76934C6.73902 8.83573 6.72634 8.90157 6.70117 8.963C6.676 9.02444 6.63884 9.08025 6.59188 9.12717C6.54491 9.1741 6.48906 9.2112 6.4276 9.23631C6.36614 9.26142 6.3003 9.27404 6.23391 9.27343C6.16752 9.27282 6.10192 9.259 6.04093 9.23277C5.97994 9.20653 5.92478 9.16842 5.87868 9.12064C5.31627 8.55806 5.00032 7.79513 5.00032 6.99964C5.00032 6.20415 5.31627 5.44122 5.87868 4.87864C5.97243 4.78501 6.09952 4.73241 6.23202 4.73241C6.36452 4.73241 6.49227 4.78501 6.58602 4.87864ZM9.41402 4.87864C9.46045 4.83218 9.51558 4.79532 9.57627 4.77017C9.63695 4.74502 9.70199 4.73208 9.76768 4.73208C9.83337 4.73208 9.89842 4.74502 9.9591 4.77017C10.0198 4.79532 10.0749 4.83218 10.1213 4.87864C10.3999 5.15722 10.6209 5.48794 10.7717 5.85192C10.9224 6.21589 11 6.60601 11 6.99997C11 7.39394 10.9224 7.78405 10.7717 8.14803C10.6209 8.51201 10.3999 8.84273 10.1213 9.12131C10.0266 9.20963 9.9012 9.25771 9.77167 9.25542C9.64213 9.25314 9.51854 9.20066 9.42694 9.10906C9.33533 9.01745 9.28285 8.89386 9.28057 8.76432C9.27828 8.63479 9.32636 8.50942 9.41468 8.41464C9.60054 8.22891 9.74797 8.00837 9.84856 7.76564C9.94915 7.5229 10.0009 7.26273 10.0009 6.99997C10.0009 6.73722 9.94915 6.47705 9.84856 6.23431C9.74797 5.99158 9.60054 5.77104 9.41468 5.58531C9.32105 5.49156 9.26846 5.36447 9.26846 5.23197C9.26846 5.09947 9.32038 4.97239 9.41402 4.87864ZM7.25002 6.99997C7.25002 6.80106 7.32903 6.6103 7.46969 6.46964C7.61034 6.32899 7.8011 6.24997 8.00002 6.24997C8.19893 6.24997 8.38969 6.32899 8.53035 6.46964C8.671 6.6103 8.75002 6.80106 8.75002 6.99997C8.75002 7.19889 8.671 7.38965 8.53035 7.5303C8.38969 7.67096 8.19893 7.74997 8.00002 7.74997C7.8011 7.74997 7.61034 7.67096 7.46969 7.5303C7.32903 7.38965 7.25002 7.19889 7.25002 6.99997Z"
                    fill="#3CE7D2"
                  />
                </g>
              </svg>
            </Button>
            <span className="font-kulim font-bold">Evidence</span>
          </div>
          <div>
            <InputImage
              id="evidence-image"
              placeholder="Insert Image URL..."
              name="Evidence"
            />
          </div>
        </div>

        <div className=" w-2/6 flex flex-col gap-5">
          <div className="w-full from-2 from-40%  bg-gradient-to-r to-transparent flex px-5 h-12 justify-start gap-2 items-center">
            <Button variant="icon-green" size="icon-sm">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 1.70005C6.75 1.46135 6.84482 1.23244 7.0136 1.06365C7.18239 0.89487 7.4113 0.800049 7.65 0.800049C7.88869 0.800049 8.11761 0.89487 8.2864 1.06365C8.45518 1.23244 8.55 1.46135 8.55 1.70005C8.55 1.93874 8.45518 2.16766 8.2864 2.33645C8.11761 2.50523 7.88869 2.60005 7.65 2.60005C7.4113 2.60005 7.18239 2.50523 7.0136 2.33645C6.84482 2.16766 6.75 1.93874 6.75 1.70005ZM5.4 2.15005C5.63869 2.15005 5.86761 2.24487 6.0364 2.41365C6.20518 2.58244 6.3 2.81135 6.3 3.05005C6.3 3.28874 6.20518 3.51766 6.0364 3.68644C5.86761 3.85523 5.63869 3.95005 5.4 3.95005C5.1613 3.95005 4.93239 3.85523 4.7636 3.68644C4.59482 3.51766 4.5 3.28874 4.5 3.05005C4.5 2.81135 4.59482 2.58244 4.7636 2.41365C4.93239 2.24487 5.1613 2.15005 5.4 2.15005ZM4.5 4.40005C4.99781 4.40005 5.4 4.80224 5.4 5.30005H5.625C5.99906 5.30005 6.3 5.60099 6.3 5.97505V6.42505C6.3 6.47286 6.29437 6.52067 6.28594 6.56849C7.88344 7.25755 9 8.84942 9 10.7C9 13.1863 6.98625 15.2 4.5 15.2C2.01375 15.2 0 13.1863 0 10.7C0 8.84942 1.11656 7.25755 2.71406 6.56849C2.70281 6.52349 2.7 6.47567 2.7 6.42505V5.97505C2.7 5.60099 3.00094 5.30005 3.375 5.30005H3.6C3.6 4.80224 4.00219 4.40005 4.5 4.40005ZM4.5 13.4C4.85457 13.4 5.20567 13.3302 5.53325 13.1945C5.86082 13.0588 6.15847 12.86 6.40919 12.6092C6.65991 12.3585 6.85879 12.0609 6.99447 11.7333C7.13016 11.4057 7.2 11.0546 7.2 10.7C7.2 10.3455 7.13016 9.99438 6.99447 9.6668C6.85879 9.33922 6.65991 9.04158 6.40919 8.79086C6.15847 8.54014 5.86082 8.34126 5.53325 8.20557C5.20567 8.06989 4.85457 8.00005 4.5 8.00005C4.14543 8.00005 3.79433 8.06989 3.46675 8.20557C3.13918 8.34126 2.84153 8.54014 2.59081 8.79086C2.34009 9.04158 2.14121 9.33922 2.00553 9.6668C1.86984 9.99438 1.8 10.3455 1.8 10.7C1.8 11.0546 1.86984 11.4057 2.00553 11.7333C2.14121 12.0609 2.34009 12.3585 2.59081 12.6092C2.84153 12.86 3.13918 13.0588 3.46675 13.1945C3.79433 13.3302 4.14543 13.4 4.5 13.4ZM9.9 10.7C9.9 9.97161 9.75656 9.27974 9.495 8.64411C9.97031 7.7188 10.755 6.98192 11.7141 6.56567C11.7028 6.52067 11.7 6.47286 11.7 6.42224V5.97505C11.7 5.60099 12.0009 5.30005 12.375 5.30005H12.6C12.6 4.80224 13.0022 4.40005 13.5 4.40005C13.9978 4.40005 14.4 4.80224 14.4 5.30005H14.625C14.9991 5.30005 15.3 5.60099 15.3 5.97505V6.42505C15.3 6.47286 15.2944 6.52067 15.2859 6.56849C16.8834 7.25755 18 8.84942 18 10.7C18 13.1863 15.9862 15.2 13.5 15.2C11.7562 15.2 10.2431 14.2072 9.495 12.756C9.75656 12.1232 9.9 11.4285 9.9 10.7ZM16.2 10.7C16.2 9.98396 15.9155 9.29721 15.4092 8.79086C14.9028 8.28451 14.2161 8.00005 13.5 8.00005C12.7839 8.00005 12.0972 8.28451 11.5908 8.79086C11.0845 9.29721 10.8 9.98396 10.8 10.7C10.8 11.4161 11.0845 12.1029 11.5908 12.6092C12.0972 13.1156 12.7839 13.4 13.5 13.4C14.2161 13.4 14.9028 13.1156 15.4092 12.6092C15.9155 12.1029 16.2 11.4161 16.2 10.7ZM10.35 0.800049C10.5887 0.800049 10.8176 0.89487 10.9864 1.06365C11.1552 1.23244 11.25 1.46135 11.25 1.70005C11.25 1.93874 11.1552 2.16766 10.9864 2.33645C10.8176 2.50523 10.5887 2.60005 10.35 2.60005C10.1113 2.60005 9.88239 2.50523 9.7136 2.33645C9.54482 2.16766 9.45 1.93874 9.45 1.70005C9.45 1.46135 9.54482 1.23244 9.7136 1.06365C9.88239 0.89487 10.1113 0.800049 10.35 0.800049ZM12.6 2.15005C12.8387 2.15005 13.0676 2.24487 13.2364 2.41365C13.4052 2.58244 13.5 2.81135 13.5 3.05005C13.5 3.28874 13.4052 3.51766 13.2364 3.68644C13.0676 3.85523 12.8387 3.95005 12.6 3.95005C12.3613 3.95005 12.1324 3.85523 11.9636 3.68644C11.7948 3.51766 11.7 3.28874 11.7 3.05005C11.7 2.81135 11.7948 2.58244 11.9636 2.41365C12.1324 2.24487 12.3613 2.15005 12.6 2.15005Z"
                  fill="#3CE7D2"
                />
              </svg>
            </Button>
            <span className="font-kulim font-bold">Suspects Involved</span>
          </div>
          <div className="grid grid-cols-3 gap-4 items-center justify-center">
            <Label theme="green">Jean Paul</Label>
            <Label theme="green">Boris Lawyer</Label>
          </div>
          <SuspectInvolved suspect_name="Jean Paul" suspect_warrant="Arrest" />
          <SuspectInvolved
            suspect_name="Boris Lawyer"
            suspect_warrant="Arrest"
          />
        </div>
      </div>
    </main>
  );
}
