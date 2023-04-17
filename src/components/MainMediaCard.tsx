import Image from "next/image";

interface Props {
  album: {
    title: string;
    thumbnailUrl: string;
    artist: string;
  },
}

export function MainMediaCard({album}: Props) {
  const { title, thumbnailUrl, artist } = album;
  return (
    <a className="bg-white/5 p-3 rounded-md flex flex-col gap-3 hover:bg-white/10 transition-colors hover:cursor-pointer">
      <Image
        className="w-full rounded-md"
        src={thumbnailUrl}
        width={120}
        height={120}
        alt="Album Cover"
      />
      <strong className="font-semibold mt-2">{title}</strong>
      <span className="text-sm text-[#B3B3B3]">{artist}</span>
    </a>
  );
}
