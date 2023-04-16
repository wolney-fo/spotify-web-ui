import { Home as HomeIcon, Search, Library } from "lucide-react";

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
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits November</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Lo-Fi Hip Hop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Fantasy World</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">This is Queen</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">Main</main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        Footer
      </footer>
    </div>
  );
}
