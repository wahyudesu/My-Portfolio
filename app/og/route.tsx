import { ImageResponse } from "next/og";
import { Figtree } from "next/font/google";

const figtree = Figtree({ subsets: ["latin"], display: "swap" });

export function GET(request: Request) {
  let url = new URL(request.url);
  let title =
    url.searchParams.get("title") || "Wahyu Ikbal — Data Scientist";

  return new ImageResponse(
    (
      <div
        tw={`flex flex-col w-full h-full items-center justify-center bg-[#0c0c0c] text-[#e2e8f0] ${figtree.className}`}
      >
        <h3 tw="absolute top-10 left-10 text-xl font-semibold">
          Wahyu Ikbal
        </h3>
        <div tw="flex flex-col">
          <div tw="relative mx-auto flex flex-col max-w-xl p-10 tracking-tight text-center">
            <h1 tw="mx-auto text-5xl font-semibold">{title}</h1>
            <p tw="absolute top-28 mx-auto text-xl text-neutral-400">
              {`Find out more about the ${title} post on my personal
              blog.`}
            </p>
          </div>
        </div>
      </div>
    ),
    {
      width: 800,
      height: 400,
    }
  );
}
