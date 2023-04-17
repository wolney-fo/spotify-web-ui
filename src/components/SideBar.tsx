import {
  Home as HomeIcon,
  Search,
  Library,
  Volume1,
} from "lucide-react";
import { WindowControls } from "./WindowControls";
import Image from "next/image";
import { userPlaylists } from "@/app/config";

export function SideBar() {
  return (
    <aside className="w-64 bg-black p-6">
      <WindowControls />

      <nav className="space-y-5 mt-10">
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <HomeIcon /> Home
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <Search /> Search
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <Library /> Your Library
        </a>

        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <Image
            src={"/CreatePlaylistIcon.svg"}
            width={22}
            height={22}
            alt="Create a New Playlist"
          />{" "}
          Create Playlist
        </a>
        <a
          href=""
          className="flex items-center gap-3 text-sm font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <Image
            src={"/LikedSongsIcon.svg"}
            width={22}
            height={22}
            alt="Liked Sonds"
          />{" "}
          Liked Songs
          <Volume1 color="#1DB954" />
        </a>
      </nav>

      <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
        {userPlaylists.map((playlist) => (
          <a
            href=""
            className="text-sm text-zinc-400 hover:text-zinc-100"
            key={playlist}
          >
            {playlist}
          </a>
        ))}
      </nav>
    </aside>
  );
}
