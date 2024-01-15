import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './Button';

export function RecentCalls() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
      <AccordionItem value="item-1" className="flex flex-col gap-5">
        <div className="flex gap-2">
          <AccordionTrigger>Stolen Vehicle @ Bulivart Ava 25 </AccordionTrigger>
          <Button
            className="flex justify-center items-center"
            variant="icon-green"
            size="icon-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22922 19.5965C1.55352 11.3684 0.5 10.5239 0.5 7.5C0.5 3.35785 3.85785 0 8 0C12.1421 0 15.5 3.35785 15.5 7.5C15.5 10.5239 14.4465 11.3684 8.77078 19.5965C8.39832 20.1345 7.60164 20.1345 7.22922 19.5965ZM8 10.625C9.7259 10.625 11.125 9.2259 11.125 7.5C11.125 5.7741 9.7259 4.375 8 4.375C6.2741 4.375 4.875 5.7741 4.875 7.5C4.875 9.2259 6.2741 10.625 8 10.625Z"
                fill="#3CE7D2"
              />
            </svg>
          </Button>
          <Button
            className="flex justify-center items-center"
            variant="icon-green"
            size="icon-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.81281 1.81287L14.1872 14.1872"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1872 1.81287L1.81283 14.1872"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>

        <AccordionContent>
          <div className="p-5  from-2 from-40%  bg-gradient-to-r to-transparent grid grid-cols-2 gap-5 relative">
            <h1 className="absolute p-5 top-0 right-0 text-sm text-3 font-bold font-kulim">
              14 minutes ago
            </h1>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_219)">
                    <path
                      d="M12 3.11796V10.333C12 10.5688 11.7619 10.73 11.5429 10.6425L8.66667 9.33337V1.33337L11.5808 2.499C11.7045 2.54848 11.8106 2.63389 11.8853 2.74421C11.96 2.85454 12 2.98472 12 3.11796ZM8 9.33337L4 10.6667V2.66671L8 1.33337V9.33337ZM0.457083 1.35754L3.33333 2.66671V10.6667L0.419167 9.50108C0.295437 9.45162 0.189369 9.36622 0.114653 9.25589C0.039937 9.14556 9.53674e-07 9.01537 0 8.88212V1.66712C0 1.43129 0.238125 1.27004 0.457083 1.35754Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M12 3.11796V10.333C12 10.5688 11.7619 10.73 11.5429 10.6425L8.66667 9.33337V1.33337L11.5808 2.499C11.7045 2.54848 11.8106 2.63389 11.8853 2.74421C11.96 2.85454 12 2.98472 12 3.11796ZM8 9.33337L4 10.6667V2.66671L8 1.33337V9.33337ZM0.457083 1.35754L3.33333 2.66671V10.6667L0.419167 9.50108C0.295437 9.45162 0.189369 9.36622 0.114653 9.25589C0.039937 9.14556 9.53674e-07 9.01537 0 8.88212V1.66712C0 1.43129 0.238125 1.27004 0.457083 1.35754Z"
                      stroke="#3CE7D2"
                    />
                  </g>
                </svg>
                Street
              </label>
              <span className="text-base font-medium">Bulivart Ava 25</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="21"
                  height="11"
                  viewBox="0 0 21 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_238)">
                    <rect
                      x="2.5"
                      y="2.5"
                      width="16"
                      height="6"
                      rx="1.5"
                      stroke="#3CE7D2"
                    />
                  </g>
                  <g filter="url(#filter1_d_9_238)">
                    <circle cx="4.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter2_d_9_238)">
                    <circle cx="12.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter3_d_9_238)">
                    <circle cx="6.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter4_d_9_238)">
                    <circle cx="14.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter5_d_9_238)">
                    <circle cx="8.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter6_d_9_238)">
                    <circle cx="16.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter7_d_9_238)">
                    <circle cx="10.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                </svg>
                Plate
              </label>
              <span className="text-base font-medium">X921-UX95</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_221)">
                    <path
                      d="M9.36719 0H7.66992C7.44004 0 7.32617 0.277148 7.4873 0.44043L7.85039 0.803516L6.1166 2.5373C5.63965 2.23652 5.07461 2.0625 4.46875 2.0625C2.76074 2.0625 1.375 3.44824 1.375 5.15625C1.375 6.62793 2.4041 7.86113 3.78125 8.17266V8.76562H3.00781C2.86602 8.76562 2.75 8.88164 2.75 9.02344V9.88281C2.75 10.0246 2.86602 10.1406 3.00781 10.1406H3.78125V10.7422C3.78125 10.884 3.89727 11 4.03906 11H4.89844C5.04023 11 5.15625 10.884 5.15625 10.7422V10.1406H5.92969C6.07148 10.1406 6.1875 10.0246 6.1875 9.88281V9.02344C6.1875 8.88164 6.07148 8.76562 5.92969 8.76562H5.15625V8.17266C6.5334 7.85898 7.5625 6.62793 7.5625 5.15625C7.5625 4.55039 7.38848 3.98535 7.0877 3.5084L8.82148 1.77461L9.18457 2.1377C9.34785 2.30098 9.625 2.18496 9.625 1.95508V0.257812C9.625 0.116016 9.50898 0 9.36719 0ZM4.46875 6.875C3.52129 6.875 2.75 6.10371 2.75 5.15625C2.75 4.20879 3.52129 3.4375 4.46875 3.4375C5.41621 3.4375 6.1875 4.20879 6.1875 5.15625C6.1875 6.10371 5.41621 6.875 4.46875 6.875Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M9.36719 0H7.66992C7.44004 0 7.32617 0.277148 7.4873 0.44043L7.85039 0.803516L6.1166 2.5373C5.63965 2.23652 5.07461 2.0625 4.46875 2.0625C2.76074 2.0625 1.375 3.44824 1.375 5.15625C1.375 6.62793 2.4041 7.86113 3.78125 8.17266V8.76562H3.00781C2.86602 8.76562 2.75 8.88164 2.75 9.02344V9.88281C2.75 10.0246 2.86602 10.1406 3.00781 10.1406H3.78125V10.7422C3.78125 10.884 3.89727 11 4.03906 11H4.89844C5.04023 11 5.15625 10.884 5.15625 10.7422V10.1406H5.92969C6.07148 10.1406 6.1875 10.0246 6.1875 9.88281V9.02344C6.1875 8.88164 6.07148 8.76562 5.92969 8.76562H5.15625V8.17266C6.5334 7.85898 7.5625 6.62793 7.5625 5.15625C7.5625 4.55039 7.38848 3.98535 7.0877 3.5084L8.82148 1.77461L9.18457 2.1377C9.34785 2.30098 9.625 2.18496 9.625 1.95508V0.257812C9.625 0.116016 9.50898 0 9.36719 0ZM4.46875 6.875C3.52129 6.875 2.75 6.10371 2.75 5.15625C2.75 4.20879 3.52129 3.4375 4.46875 3.4375C5.41621 3.4375 6.1875 4.20879 6.1875 5.15625C6.1875 6.10371 5.41621 6.875 4.46875 6.875Z"
                      stroke="#3CE7D2"
                    />
                  </g>
                </svg>
                Gender
              </label>
              <span className="text-base font-medium">Female</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.695 3.46875H11.1748L10.7523 2.4125C10.3182 1.32654 9.28196 0.625 8.11221 0.625H4.8876C3.71811 0.625 2.68167 1.32654 2.24723 2.4125L1.82473 3.46875H0.304849C0.106548 3.46875 -0.03894 3.65512 0.00930219 3.84732L0.161646 4.4567C0.195415 4.59229 0.31729 4.6875 0.457193 4.6875H0.966783C0.625787 4.98533 0.406158 5.41824 0.406158 5.90625V7.125C0.406158 7.5343 0.562564 7.90373 0.812408 8.18963V9.5625C0.812408 10.0112 1.17626 10.375 1.62491 10.375H2.43741C2.88606 10.375 3.24991 10.0112 3.24991 9.5625V8.75H9.74991V9.5625C9.74991 10.0112 10.1138 10.375 10.5624 10.375H11.3749C11.8236 10.375 12.1874 10.0112 12.1874 9.5625V8.18963C12.4373 7.90398 12.5937 7.53455 12.5937 7.125V5.90625C12.5937 5.41824 12.374 4.98533 12.0333 4.6875H12.5429C12.6828 4.6875 12.8047 4.59229 12.8384 4.4567L12.9908 3.84732C13.0388 3.65512 12.8933 3.46875 12.695 3.46875ZM3.75594 3.01604C3.94104 2.55342 4.38919 2.25 4.8876 2.25H8.11221C8.61063 2.25 9.05878 2.55342 9.24387 3.01604L9.74991 4.28125H3.24991L3.75594 3.01604ZM2.43741 7.11992C1.94991 7.11992 1.62491 6.79594 1.62491 6.30996C1.62491 5.82398 1.94991 5.5 2.43741 5.5C2.92491 5.5 3.65616 6.22896 3.65616 6.71494C3.65616 7.20092 2.92491 7.11992 2.43741 7.11992ZM10.5624 7.11992C10.0749 7.11992 9.34366 7.20092 9.34366 6.71494C9.34366 6.22896 10.0749 5.5 10.5624 5.5C11.0499 5.5 11.3749 5.82398 11.3749 6.30996C11.3749 6.79594 11.0499 7.11992 10.5624 7.11992Z"
                    fill="#3CE7D2"
                  />
                </svg>
                Vehicle
              </label>
              <span className="text-base font-medium">Audi A4</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2" className="flex flex-col gap-5">
        <div className="flex gap-2">
          <AccordionTrigger>Stolen Vehicle @ Bulivart Ava 25 </AccordionTrigger>
          <Button
            className="flex justify-center items-center"
            variant="icon-green"
            size="icon-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22922 19.5965C1.55352 11.3684 0.5 10.5239 0.5 7.5C0.5 3.35785 3.85785 0 8 0C12.1421 0 15.5 3.35785 15.5 7.5C15.5 10.5239 14.4465 11.3684 8.77078 19.5965C8.39832 20.1345 7.60164 20.1345 7.22922 19.5965ZM8 10.625C9.7259 10.625 11.125 9.2259 11.125 7.5C11.125 5.7741 9.7259 4.375 8 4.375C6.2741 4.375 4.875 5.7741 4.875 7.5C4.875 9.2259 6.2741 10.625 8 10.625Z"
                fill="#3CE7D2"
              />
            </svg>
          </Button>
          <Button
            className="flex justify-center items-center"
            variant="icon-green"
            size="icon-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.81281 1.81287L14.1872 14.1872"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1872 1.81287L1.81283 14.1872"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>

        <AccordionContent>
          <div className="p-5  from-2 from-40%  bg-gradient-to-r to-transparent grid grid-cols-2 gap-5 relative">
            <h1 className="absolute p-5 top-0 right-0 text-sm text-3 font-bold font-kulim">
              14 minutes ago
            </h1>
            <h1 className="col-span-2 text-base font-medium">Vehicle Theft</h1>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_219)">
                    <path
                      d="M12 3.11796V10.333C12 10.5688 11.7619 10.73 11.5429 10.6425L8.66667 9.33337V1.33337L11.5808 2.499C11.7045 2.54848 11.8106 2.63389 11.8853 2.74421C11.96 2.85454 12 2.98472 12 3.11796ZM8 9.33337L4 10.6667V2.66671L8 1.33337V9.33337ZM0.457083 1.35754L3.33333 2.66671V10.6667L0.419167 9.50108C0.295437 9.45162 0.189369 9.36622 0.114653 9.25589C0.039937 9.14556 9.53674e-07 9.01537 0 8.88212V1.66712C0 1.43129 0.238125 1.27004 0.457083 1.35754Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M12 3.11796V10.333C12 10.5688 11.7619 10.73 11.5429 10.6425L8.66667 9.33337V1.33337L11.5808 2.499C11.7045 2.54848 11.8106 2.63389 11.8853 2.74421C11.96 2.85454 12 2.98472 12 3.11796ZM8 9.33337L4 10.6667V2.66671L8 1.33337V9.33337ZM0.457083 1.35754L3.33333 2.66671V10.6667L0.419167 9.50108C0.295437 9.45162 0.189369 9.36622 0.114653 9.25589C0.039937 9.14556 9.53674e-07 9.01537 0 8.88212V1.66712C0 1.43129 0.238125 1.27004 0.457083 1.35754Z"
                      stroke="#3CE7D2"
                    />
                  </g>
                </svg>
                Street
              </label>
              <span className="text-base font-medium">Bulivart Ava 25</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="21"
                  height="11"
                  viewBox="0 0 21 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_238)">
                    <rect
                      x="2.5"
                      y="2.5"
                      width="16"
                      height="6"
                      rx="1.5"
                      stroke="#3CE7D2"
                    />
                  </g>
                  <g filter="url(#filter1_d_9_238)">
                    <circle cx="4.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter2_d_9_238)">
                    <circle cx="12.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter3_d_9_238)">
                    <circle cx="6.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter4_d_9_238)">
                    <circle cx="14.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter5_d_9_238)">
                    <circle cx="8.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter6_d_9_238)">
                    <circle cx="16.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter7_d_9_238)">
                    <circle cx="10.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                </svg>
                Plate
              </label>
              <span className="text-base font-medium">X921-UX95</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_221)">
                    <path
                      d="M9.36719 0H7.66992C7.44004 0 7.32617 0.277148 7.4873 0.44043L7.85039 0.803516L6.1166 2.5373C5.63965 2.23652 5.07461 2.0625 4.46875 2.0625C2.76074 2.0625 1.375 3.44824 1.375 5.15625C1.375 6.62793 2.4041 7.86113 3.78125 8.17266V8.76562H3.00781C2.86602 8.76562 2.75 8.88164 2.75 9.02344V9.88281C2.75 10.0246 2.86602 10.1406 3.00781 10.1406H3.78125V10.7422C3.78125 10.884 3.89727 11 4.03906 11H4.89844C5.04023 11 5.15625 10.884 5.15625 10.7422V10.1406H5.92969C6.07148 10.1406 6.1875 10.0246 6.1875 9.88281V9.02344C6.1875 8.88164 6.07148 8.76562 5.92969 8.76562H5.15625V8.17266C6.5334 7.85898 7.5625 6.62793 7.5625 5.15625C7.5625 4.55039 7.38848 3.98535 7.0877 3.5084L8.82148 1.77461L9.18457 2.1377C9.34785 2.30098 9.625 2.18496 9.625 1.95508V0.257812C9.625 0.116016 9.50898 0 9.36719 0ZM4.46875 6.875C3.52129 6.875 2.75 6.10371 2.75 5.15625C2.75 4.20879 3.52129 3.4375 4.46875 3.4375C5.41621 3.4375 6.1875 4.20879 6.1875 5.15625C6.1875 6.10371 5.41621 6.875 4.46875 6.875Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M9.36719 0H7.66992C7.44004 0 7.32617 0.277148 7.4873 0.44043L7.85039 0.803516L6.1166 2.5373C5.63965 2.23652 5.07461 2.0625 4.46875 2.0625C2.76074 2.0625 1.375 3.44824 1.375 5.15625C1.375 6.62793 2.4041 7.86113 3.78125 8.17266V8.76562H3.00781C2.86602 8.76562 2.75 8.88164 2.75 9.02344V9.88281C2.75 10.0246 2.86602 10.1406 3.00781 10.1406H3.78125V10.7422C3.78125 10.884 3.89727 11 4.03906 11H4.89844C5.04023 11 5.15625 10.884 5.15625 10.7422V10.1406H5.92969C6.07148 10.1406 6.1875 10.0246 6.1875 9.88281V9.02344C6.1875 8.88164 6.07148 8.76562 5.92969 8.76562H5.15625V8.17266C6.5334 7.85898 7.5625 6.62793 7.5625 5.15625C7.5625 4.55039 7.38848 3.98535 7.0877 3.5084L8.82148 1.77461L9.18457 2.1377C9.34785 2.30098 9.625 2.18496 9.625 1.95508V0.257812C9.625 0.116016 9.50898 0 9.36719 0ZM4.46875 6.875C3.52129 6.875 2.75 6.10371 2.75 5.15625C2.75 4.20879 3.52129 3.4375 4.46875 3.4375C5.41621 3.4375 6.1875 4.20879 6.1875 5.15625C6.1875 6.10371 5.41621 6.875 4.46875 6.875Z"
                      stroke="#3CE7D2"
                    />
                  </g>
                </svg>
                Gender
              </label>
              <span className="text-base font-medium">Female</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.695 3.46875H11.1748L10.7523 2.4125C10.3182 1.32654 9.28196 0.625 8.11221 0.625H4.8876C3.71811 0.625 2.68167 1.32654 2.24723 2.4125L1.82473 3.46875H0.304849C0.106548 3.46875 -0.03894 3.65512 0.00930219 3.84732L0.161646 4.4567C0.195415 4.59229 0.31729 4.6875 0.457193 4.6875H0.966783C0.625787 4.98533 0.406158 5.41824 0.406158 5.90625V7.125C0.406158 7.5343 0.562564 7.90373 0.812408 8.18963V9.5625C0.812408 10.0112 1.17626 10.375 1.62491 10.375H2.43741C2.88606 10.375 3.24991 10.0112 3.24991 9.5625V8.75H9.74991V9.5625C9.74991 10.0112 10.1138 10.375 10.5624 10.375H11.3749C11.8236 10.375 12.1874 10.0112 12.1874 9.5625V8.18963C12.4373 7.90398 12.5937 7.53455 12.5937 7.125V5.90625C12.5937 5.41824 12.374 4.98533 12.0333 4.6875H12.5429C12.6828 4.6875 12.8047 4.59229 12.8384 4.4567L12.9908 3.84732C13.0388 3.65512 12.8933 3.46875 12.695 3.46875ZM3.75594 3.01604C3.94104 2.55342 4.38919 2.25 4.8876 2.25H8.11221C8.61063 2.25 9.05878 2.55342 9.24387 3.01604L9.74991 4.28125H3.24991L3.75594 3.01604ZM2.43741 7.11992C1.94991 7.11992 1.62491 6.79594 1.62491 6.30996C1.62491 5.82398 1.94991 5.5 2.43741 5.5C2.92491 5.5 3.65616 6.22896 3.65616 6.71494C3.65616 7.20092 2.92491 7.11992 2.43741 7.11992ZM10.5624 7.11992C10.0749 7.11992 9.34366 7.20092 9.34366 6.71494C9.34366 6.22896 10.0749 5.5 10.5624 5.5C11.0499 5.5 11.3749 5.82398 11.3749 6.30996C11.3749 6.79594 11.0499 7.11992 10.5624 7.11992Z"
                    fill="#3CE7D2"
                  />
                </svg>
                Vehicle
              </label>
              <span className="text-base font-medium">Audi A4</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="flex flex-col gap-5">
        <div className="flex gap-2">
          <AccordionTrigger>Stolen Vehicle @ Bulivart Ava 25 </AccordionTrigger>
          <Button
            className="flex justify-center items-center"
            variant="icon-green"
            size="icon-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.22922 19.5965C1.55352 11.3684 0.5 10.5239 0.5 7.5C0.5 3.35785 3.85785 0 8 0C12.1421 0 15.5 3.35785 15.5 7.5C15.5 10.5239 14.4465 11.3684 8.77078 19.5965C8.39832 20.1345 7.60164 20.1345 7.22922 19.5965ZM8 10.625C9.7259 10.625 11.125 9.2259 11.125 7.5C11.125 5.7741 9.7259 4.375 8 4.375C6.2741 4.375 4.875 5.7741 4.875 7.5C4.875 9.2259 6.2741 10.625 8 10.625Z"
                fill="#3CE7D2"
              />
            </svg>
          </Button>
          <Button
            className="flex justify-center items-center"
            variant="icon-green"
            size="icon-lg"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.81281 1.81287L14.1872 14.1872"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.1872 1.81287L1.81283 14.1872"
                stroke="#3CE7D2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Button>
        </div>

        <AccordionContent>
          <div className="p-5  from-2 from-40%  bg-gradient-to-r to-transparent grid grid-cols-2 gap-5 relative">
            <h1 className="absolute p-5 top-0 right-0 text-sm text-3 font-bold font-kulim">
              14 minutes ago
            </h1>
            <h1 className="col-span-2 text-base font-medium">Vehicle Theft</h1>
            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_219)">
                    <path
                      d="M12 3.11796V10.333C12 10.5688 11.7619 10.73 11.5429 10.6425L8.66667 9.33337V1.33337L11.5808 2.499C11.7045 2.54848 11.8106 2.63389 11.8853 2.74421C11.96 2.85454 12 2.98472 12 3.11796ZM8 9.33337L4 10.6667V2.66671L8 1.33337V9.33337ZM0.457083 1.35754L3.33333 2.66671V10.6667L0.419167 9.50108C0.295437 9.45162 0.189369 9.36622 0.114653 9.25589C0.039937 9.14556 9.53674e-07 9.01537 0 8.88212V1.66712C0 1.43129 0.238125 1.27004 0.457083 1.35754Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M12 3.11796V10.333C12 10.5688 11.7619 10.73 11.5429 10.6425L8.66667 9.33337V1.33337L11.5808 2.499C11.7045 2.54848 11.8106 2.63389 11.8853 2.74421C11.96 2.85454 12 2.98472 12 3.11796ZM8 9.33337L4 10.6667V2.66671L8 1.33337V9.33337ZM0.457083 1.35754L3.33333 2.66671V10.6667L0.419167 9.50108C0.295437 9.45162 0.189369 9.36622 0.114653 9.25589C0.039937 9.14556 9.53674e-07 9.01537 0 8.88212V1.66712C0 1.43129 0.238125 1.27004 0.457083 1.35754Z"
                      stroke="#3CE7D2"
                    />
                  </g>
                </svg>
                Street
              </label>
              <span className="text-base font-medium">Bulivart Ava 25</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="21"
                  height="11"
                  viewBox="0 0 21 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_238)">
                    <rect
                      x="2.5"
                      y="2.5"
                      width="16"
                      height="6"
                      rx="1.5"
                      stroke="#3CE7D2"
                    />
                  </g>
                  <g filter="url(#filter1_d_9_238)">
                    <circle cx="4.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter2_d_9_238)">
                    <circle cx="12.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter3_d_9_238)">
                    <circle cx="6.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter4_d_9_238)">
                    <circle cx="14.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter5_d_9_238)">
                    <circle cx="8.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter6_d_9_238)">
                    <circle cx="16.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                  <g filter="url(#filter7_d_9_238)">
                    <circle cx="10.5" cy="5.5" r="0.5" fill="#3CE7D2" />
                  </g>
                </svg>
                Plate
              </label>
              <span className="text-base font-medium">X921-UX95</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_9_221)">
                    <path
                      d="M9.36719 0H7.66992C7.44004 0 7.32617 0.277148 7.4873 0.44043L7.85039 0.803516L6.1166 2.5373C5.63965 2.23652 5.07461 2.0625 4.46875 2.0625C2.76074 2.0625 1.375 3.44824 1.375 5.15625C1.375 6.62793 2.4041 7.86113 3.78125 8.17266V8.76562H3.00781C2.86602 8.76562 2.75 8.88164 2.75 9.02344V9.88281C2.75 10.0246 2.86602 10.1406 3.00781 10.1406H3.78125V10.7422C3.78125 10.884 3.89727 11 4.03906 11H4.89844C5.04023 11 5.15625 10.884 5.15625 10.7422V10.1406H5.92969C6.07148 10.1406 6.1875 10.0246 6.1875 9.88281V9.02344C6.1875 8.88164 6.07148 8.76562 5.92969 8.76562H5.15625V8.17266C6.5334 7.85898 7.5625 6.62793 7.5625 5.15625C7.5625 4.55039 7.38848 3.98535 7.0877 3.5084L8.82148 1.77461L9.18457 2.1377C9.34785 2.30098 9.625 2.18496 9.625 1.95508V0.257812C9.625 0.116016 9.50898 0 9.36719 0ZM4.46875 6.875C3.52129 6.875 2.75 6.10371 2.75 5.15625C2.75 4.20879 3.52129 3.4375 4.46875 3.4375C5.41621 3.4375 6.1875 4.20879 6.1875 5.15625C6.1875 6.10371 5.41621 6.875 4.46875 6.875Z"
                      fill="#3CE7D2"
                    />
                    <path
                      d="M9.36719 0H7.66992C7.44004 0 7.32617 0.277148 7.4873 0.44043L7.85039 0.803516L6.1166 2.5373C5.63965 2.23652 5.07461 2.0625 4.46875 2.0625C2.76074 2.0625 1.375 3.44824 1.375 5.15625C1.375 6.62793 2.4041 7.86113 3.78125 8.17266V8.76562H3.00781C2.86602 8.76562 2.75 8.88164 2.75 9.02344V9.88281C2.75 10.0246 2.86602 10.1406 3.00781 10.1406H3.78125V10.7422C3.78125 10.884 3.89727 11 4.03906 11H4.89844C5.04023 11 5.15625 10.884 5.15625 10.7422V10.1406H5.92969C6.07148 10.1406 6.1875 10.0246 6.1875 9.88281V9.02344C6.1875 8.88164 6.07148 8.76562 5.92969 8.76562H5.15625V8.17266C6.5334 7.85898 7.5625 6.62793 7.5625 5.15625C7.5625 4.55039 7.38848 3.98535 7.0877 3.5084L8.82148 1.77461L9.18457 2.1377C9.34785 2.30098 9.625 2.18496 9.625 1.95508V0.257812C9.625 0.116016 9.50898 0 9.36719 0ZM4.46875 6.875C3.52129 6.875 2.75 6.10371 2.75 5.15625C2.75 4.20879 3.52129 3.4375 4.46875 3.4375C5.41621 3.4375 6.1875 4.20879 6.1875 5.15625C6.1875 6.10371 5.41621 6.875 4.46875 6.875Z"
                      stroke="#3CE7D2"
                    />
                  </g>
                </svg>
                Gender
              </label>
              <span className="text-base font-medium">Female</span>
            </div>

            <div className="flex flex-col">
              <label className="text-xs uppercase tracking-[0.2em] font-kulim text-1 font-bold flex gap-2 items-center">
                <svg
                  width="13"
                  height="11"
                  viewBox="0 0 13 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.695 3.46875H11.1748L10.7523 2.4125C10.3182 1.32654 9.28196 0.625 8.11221 0.625H4.8876C3.71811 0.625 2.68167 1.32654 2.24723 2.4125L1.82473 3.46875H0.304849C0.106548 3.46875 -0.03894 3.65512 0.00930219 3.84732L0.161646 4.4567C0.195415 4.59229 0.31729 4.6875 0.457193 4.6875H0.966783C0.625787 4.98533 0.406158 5.41824 0.406158 5.90625V7.125C0.406158 7.5343 0.562564 7.90373 0.812408 8.18963V9.5625C0.812408 10.0112 1.17626 10.375 1.62491 10.375H2.43741C2.88606 10.375 3.24991 10.0112 3.24991 9.5625V8.75H9.74991V9.5625C9.74991 10.0112 10.1138 10.375 10.5624 10.375H11.3749C11.8236 10.375 12.1874 10.0112 12.1874 9.5625V8.18963C12.4373 7.90398 12.5937 7.53455 12.5937 7.125V5.90625C12.5937 5.41824 12.374 4.98533 12.0333 4.6875H12.5429C12.6828 4.6875 12.8047 4.59229 12.8384 4.4567L12.9908 3.84732C13.0388 3.65512 12.8933 3.46875 12.695 3.46875ZM3.75594 3.01604C3.94104 2.55342 4.38919 2.25 4.8876 2.25H8.11221C8.61063 2.25 9.05878 2.55342 9.24387 3.01604L9.74991 4.28125H3.24991L3.75594 3.01604ZM2.43741 7.11992C1.94991 7.11992 1.62491 6.79594 1.62491 6.30996C1.62491 5.82398 1.94991 5.5 2.43741 5.5C2.92491 5.5 3.65616 6.22896 3.65616 6.71494C3.65616 7.20092 2.92491 7.11992 2.43741 7.11992ZM10.5624 7.11992C10.0749 7.11992 9.34366 7.20092 9.34366 6.71494C9.34366 6.22896 10.0749 5.5 10.5624 5.5C11.0499 5.5 11.3749 5.82398 11.3749 6.30996C11.3749 6.79594 11.0499 7.11992 10.5624 7.11992Z"
                    fill="#3CE7D2"
                  />
                </svg>
                Vehicle
              </label>
              <span className="text-base font-medium">Audi A4</span>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
