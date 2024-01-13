import Image from 'next/image';
import MbtNavbar from '@/components/common/MbtNavbar';
import SearchBar from '@/components/common/SearchBar';

export default function Home() {
  return (
    <>
      <main className="flex">
        <MbtNavbar />
      </main>
    </>
  );
}
