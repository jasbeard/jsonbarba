import Link from "next/link";
import { useRouter } from "next/router";
import { serif } from "@/font/fonts";

export function Header() {
  const router = useRouter();
  return (
    <header className="w-full fixed top-0 bg-dark z-10">
      <div
        className="w-full h-[100px] pointer-events-none select-none fixed top-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #000 20%, transparent)",
        }}
      ></div>
      <div
        className={`fixed flex top-0 left-0 right-0 justify-between ml-4 mt-2 ${serif.className}`}
      >
        <div className="w-full font-normal tracking-wide text-base gap-2 -mt-2 pr-4 rounded-br bg-white dark:bg-dark">
          <div className="flex items-center gap-4 mt-4">
            <Link
              href="/"
              aria-label="home link of the website"
              className={
                router.asPath === "/"
                  ? "underline underline-offset-[3px] decoration-indigo-400"
                  : "hover:underline underline-offset-[3px] decoration-indigo-200"
              }
            >
              Home
            </Link>
            <Link
              href="/writing"
              aria-label="writing link of the website"
              className={
                router.asPath.split("/").includes("writing")
                  ? "underline underline-offset-[3px] decoration-indigo-400"
                  : "hover:underline underline-offset-[3px] decoration-indigo-200"
              }
            >
              Writing
            </Link>
            <Link
              href="/photographs"
              aria-label="photographs link of the website"
              className={
                router.asPath.split("/").includes("photographs")
                  ? "underline underline-offset-[3px] decoration-indigo-400"
                  : "hover:underline underline-offset-[3px] decoration-indigo-200"
              }
            >
              Photographs
            </Link>
            <Link
              href="/work"
              aria-label="work link of the website"
              className={
                router.asPath.split("/").includes("work")
                  ? "underline underline-offset-[3px] decoration-indigo-400"
                  : "hover:underline underline-offset-[3px] decoration-indigo-200"
              }
            >
              Work
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
