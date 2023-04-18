"use client"
import * as Slider from "@radix-ui/react-slider";
import {
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
import { useState } from "react";

export function Footer() {

  const [progressbar, setProgressbar] = useState<number[]>([41]);
  const [currentTime, setCurrentTime] = useState<string>("1:20");

  const handleSliderChange = (value: number[]) => {
    setProgressbar(value);
    const currentTimeInSeconds = parseInt((value[0] / 100) * 197 + "", 10);
    setCurrentTime(formatTime(currentTimeInSeconds));
  };

  function formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60)
      .toString();
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }

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
          <span className="text-xs text-zinc-400">{currentTime}</span>
          <Slider.Root
            className="SliderRoot group relative flex items-center select-none touch-none w-96 h-1"
            value={progressbar}
            onValueChange={handleSliderChange}
            max={100}
            step={1}
            aria-label="Volume"
          >
            <Slider.Track className="SliderTrack bg-zinc-600 relative grow rounded-full h-1">
              <Slider.Range className="SliderRange absolute bg-white rounded-full h-full group-hover:bg-[#1DB954]" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb block w-3 h-3 bg-white rounded-full invisible group-hover:visible focus:outline-none" />
          </Slider.Root>
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
          <Slider.Root
            className="SliderRoot group relative flex items-center select-none touch-none w-24 h-1 "
            defaultValue={[50]}
            max={100}
            step={1}
            aria-label="Volume"
          >
            <Slider.Track className="SliderTrack bg-zinc-600 relative grow rounded-full h-1">
              <Slider.Range className="SliderRange absolute bg-white rounded-full h-full group-hover:bg-[#1DB954]" />
            </Slider.Track>
            <Slider.Thumb className="SliderThumb block w-3 h-3 bg-white rounded-full invisible group-hover:visible focus:outline-none" />
          </Slider.Root>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
