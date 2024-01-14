import Image from 'next/image';
import MbtNavbar from '@/components/common/MbtNavbar';
import SearchBar from '@/components/common/SearchBar';

export default function Profiles() {
  return (
    <>
      <main className="flex">
        <MbtNavbar />
        <div className="px-5 py-10 w-full">
          <SearchBar />
        </div>
      </main>
    </>
  );
}
