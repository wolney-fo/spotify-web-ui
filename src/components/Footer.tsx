import {
  Shuffle,
  SkipBack,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2Icon,
  Maximize2,
  Volume1,
  ChevronUp
} from "lucide-react";
import {
  IoHeart,
  IoShuffle,
  IoPlaySkipBack,
  IoPlay,
  IoPlaySkipForward,
} from "react-icons/io5";
import Image from "next/image";
import { musicPlayingSinger, musicPlayingThumbnailUrl, musicPlayingTitle } from "../app/config";

export function Footer() {
  return (
    <footer className="bg-[#181818] border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      {/*Music Playing*/}
      <div className="flex items-center gap-4">
        <div className="group relative">
          <Image
            className="cursor-pointer"
            src={musicPlayingThumbnailUrl}
            width={56}
            height={56}
            alt="Album Cover"
          />
          <button className="w-8 h-8 flex items-center justify-center pl-1 rounded-full bg-black/40 text-white absolute top-0 right-0 mr-1 mt-1 invisible group-hover:visible cursor-default">
            <ChevronUp />
          </button>
        </div>

        <div className="flex flex-col">
          <strong className="text-white hover:underline hover:cursor-pointer">
            {musicPlayingTitle}
          </strong>
          <span className="text-xs text-[#B3B3B3] hover:underline hover:cursor-pointer">
            {musicPlayingSinger}
          </span>
        </div>
        <IoHeart size={20} color="#1DB954" />
      </div>
      {/*Music Controller*/}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <IoShuffle size={20} className="text-zinc-200" />
          <IoPlaySkipBack size={20} className="text-zinc-200" />

          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <IoPlay size={20} />
          </button>

          <IoPlaySkipForward size={20} className="text-zinc-200" />
          <Repeat size={20} className="text-[#1DB954]" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">1:20</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-400">3:17</span>
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
  );
}
