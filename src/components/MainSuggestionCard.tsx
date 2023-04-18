import { IoPlay } from "react-icons/io5";
import Image from "next/image";

interface Props {
  album: {
    title: string;
    thumbnailUrl: string;
  };
}

export function MainSuggestionCard({ album }: Props) {
  const { title, thumbnailUrl } = album;

  return (
    <a className="bg-white/5 group rounded-md flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors hover:cursor-pointer relative">
      <Image src={thumbnailUrl} width={104} height={104} alt="Album Cover" />
      <strong>{title}</strong>

      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black absolute right-4 my-auto invisible group-hover:visible">
        <IoPlay />
      </button>
    </a>
  );
}
