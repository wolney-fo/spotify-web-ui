import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";
import { userName } from "./config";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:cursor-pointer" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:cursor-pointer" />
            <div className="w-3 h-3 bg-green-500 rounded-full hover:cursor-pointer" />
          </div>

          <nav className="space-y-5 mt-10">
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <HomeIcon /> Home
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Search /> Search
            </a>
            <a
              href=""
              className="flex items-center gap-3 text-sm font-semibold text-zinc-200"
            >
              <Library /> Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Top Brasil
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Hot Hits November
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Lo-Fi Hip Hop
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              Fantasy World
            </a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">
              This is Queen
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="p-1 rounded-full bg-black/40">
              <ChevronLeft />
            </button>
            <button className="p-1 rounded-full bg-black/40">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Morning</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer">
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Album Cover"
              />
              <strong>This is Queen</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer">
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Album Cover"
              />
              <strong>This is Queen</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer">
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Album Cover"
              />
              <strong>This is Queen</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer">
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Album Cover"
              />
              <strong>This is Queen</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer">
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Album Cover"
              />
              <strong>This is Queen</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer">
              <Image
                src="/album.webp"
                width={104}
                height={104}
                alt="Album Cover"
              />
              <strong>This is Queen</strong>

              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for {userName}</h2>

          <div className="grid grid-cols-8 gap-4 mt-4">
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image
                className="w-full"
                src="/album.webp"
                width={120}
                height={120}
                alt="Album Cover"
              />
              <strong className="font-semibold">This is Fred Mercury</strong>
              <span className="text-sm text-zinc- 400">Queen, Alan Walker</span>
            </a>
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image
                className="w-full"
                src="/album.webp"
                width={120}
                height={120}
                alt="Album Cover"
              />
              <strong className="font-semibold">This is Fred Mercury</strong>
              <span className="text-sm text-zinc- 400">Queen, Alan Walker</span>
            </a>
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image
                className="w-full"
                src="/album.webp"
                width={120}
                height={120}
                alt="Album Cover"
              />
              <strong className="font-semibold">This is Fred Mercury</strong>
              <span className="text-sm text-zinc- 400">Queen, Alan Walker</span>
            </a>
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image
                className="w-full"
                src="/album.webp"
                width={120}
                height={120}
                alt="Album Cover"
              />
              <strong className="font-semibold">This is Fred Mercury</strong>
              <span className="text-sm text-zinc- 400">Queen, Alan Walker</span>
            </a>
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image
                className="w-full"
                src="/album.webp"
                width={120}
                height={120}
                alt="Album Cover"
              />
              <strong className="font-semibold">This is Fred Mercury</strong>
              <span className="text-sm text-zinc- 400">Queen, Alan Walker</span>
            </a>
            <a className="bg-white/5 p-2 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors">
              <Image
                className="w-full"
                src="/album.webp"
                width={120}
                height={120}
                alt="Album Cover"
              />
              <strong className="font-semibold">This is Fred Mercury</strong>
              <span className="text-sm text-zinc- 400">Queen, Alan Walker</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
