import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from './Button';

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full flex flex-col gap-5">
      <AccordionItem value="item-1">
        <div className="flex gap-5 w-full">
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
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
