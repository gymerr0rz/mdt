import { Button } from '@/components/common/Button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import SearchPeoplePopup from './SearchPeoplePopup';

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
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
      </DialogTrigger>
      <DialogContent className="sm:max-w-[825px]">
        <SearchPeoplePopup />
      </DialogContent>
    </Dialog>
  );
}
