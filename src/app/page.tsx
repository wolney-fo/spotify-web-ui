import { ChevronLeft, ChevronRight } from "lucide-react";
import { TiArrowSortedDown } from "react-icons/ti";
import { userName } from "./config";
import { MainSuggestionCard } from "@/components/MainSuggestionCard";
import { Footer } from "@/components/Footer";
import { SideBar } from "@/components/SideBar";
import { MainMediaCard } from "@/components/MainMediaCard";
import { AlbumSuggestions1, AlbumSuggestions2 } from "../../public/suggestions";
import Image from "next/image";


function greetUser() {
  const now = new Date();
  const currentHour = now.getHours();

  let greeting;

  if (currentHour < 12) {
    greeting = "morning";
  } else if (currentHour < 18) {
    greeting = "afternoon";
  } else {
    greeting = "evening";
  }

  return greeting;
}


export default function Home() {
  const greeting = greetUser();

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />

        <main className="flex-1 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-1 rounded-full bg-black/40">
                <ChevronLeft />
              </button>
              <button className="p-1 rounded-full bg-black/40 cursor-not-allowed">
                <ChevronRight color="#7B7B7B" />
              </button>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-black/40 p-1 pr-2 font-bold cursor-pointer">
              <Image
                src="https://github.com/wolney-fo.png"
                width={28}
                height={28}
                alt="User Image"
              />
              {userName}
              <TiArrowSortedDown size={18} />
            </div>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good {greeting}</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {AlbumSuggestions1.map((album) => (
              <MainSuggestionCard key={album.title} album={album} />
            ))}
          </div>

          <div className="flex items-center justify-between mt-10">
            <h2 className="font-semibold text-2xl cursor-pointer hover:underline">
              Made for {userName}
            </h2>
            <span className="text-[#B3B3B3] text-sm cursor-pointer hover:underline">See all</span>
          </div>

          <div className="grid grid-cols-8 gap-4 mt-4">
            {AlbumSuggestions2.map((album2) => (
              <MainMediaCard key={album2.title} album={album2} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
