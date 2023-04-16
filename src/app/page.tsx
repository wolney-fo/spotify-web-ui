import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2Icon, Maximize2 } from "lucide-react";
import Image from "next/image";
import { musicPlayingSinger, musicPlayingTitle, userName } from "./config";
import { Volume1 } from "lucide-react";

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
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
        {/*Music Playing*/}
        <div className="flex items-center gap-3">
          <Image src="/album.webp" width={56} height={56} alt="Album Cover" />
          <div className="flex flex-col">
            <strong className="font-normal hover:underline hover:cursor-pointer">
              {musicPlayingTitle}
            </strong>
            <span className="text-xs text-zinc-400 hover:underline hover:cursor-pointer">
              {musicPlayingSinger}
            </span>
          </div>
        </div>
        {/*Music Controller*/}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-6">
            <Shuffle size={20} className="text-zinc-200" />
            <SkipBack size={20} className="text-zinc-200" />

            <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
              <Play />
            </button>

            <SkipForward size={20} className="text-zinc-200" />
            <Repeat size={20} className="text-zinc-200" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-400">1:06</span>
            <div className="h-1 rounded-full w-96 bg-zinc-600">
              <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:37</span>
          </div>
        </div>
        {/*Actions*/}
        <div className="flex items-center gap-4">
          <Mic2 size={20} />
          <LayoutList size={20} />
          <Laptop2Icon size={20} />
          <div className="flex items-center gap-2">
            <Volume1 size={20} />
            <div className="h-1 rounded-full w-24 bg-zinc-600">
              <div className="bg-zinc-200 w-10 h-1 rounded-full"></div>
            </div>
          </div>
          <Maximize2 size={20} />
        </div>
      </footer>
    </div>
  );
}
