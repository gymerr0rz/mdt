import Link from 'next/link';
import MbtNavbar from '@/components/common/MbtNavbar';
import Image from 'next/image';
import Horizon from '@/assets/horizon-logo.png';
export default function NotFound() {
  return (
    <main className="flex h-screen">
      <MbtNavbar />
      <div className="w-full h-full flex justify-center items-center flex-col gap-2">
        <Image src={Horizon} alt="horizon-logo" />
        <h1 className="uppercase   tracking-[0.5em] font-bold">
          Page not found.
        </h1>
      </div>
    </main>
  );
}
