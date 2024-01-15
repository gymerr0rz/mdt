import Image from 'next/image';
import MbtNavbar from '@/components/common/MbtNavbar';
import SearchBar from '@/components/common/SearchBar';
import Police from '@/assets/los-santos-police.png';
export default function Profiles() {
  return (
    <>
      <main className="flex">
        <MbtNavbar />
        <div className="px-5 py-10 w-full flex justify-center items-center flex-col gap-5">
          <Image src={Police} alt="" height={120} />
          <span className="font-kulim text-center">
            <h1 className="text-6xl font-bold tracking-tighter">
              Los Santos Police
            </h1>
            <h1 className=" tracking-widest uppercase">Profiles Database</h1>
          </span>
          <SearchBar />
        </div>
      </main>
    </>
  );
}
