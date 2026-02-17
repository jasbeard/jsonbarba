import Link from "next/link";
import { useRouter } from "next/router";
import { serif } from "@/font/fonts";

export function Header() {
  const router = useRouter();
  return (
    <header className="w-full fixed top-0 z-10">
      <div
        className="w-full h-[124px] md:h-[160px] pointer-events-none select-none fixed top-0"
        style={{
          backgroundImage: "linear-gradient(180deg, #f3f3f5 30%, transparent)",
        }}
      ></div>
      <div className={`fixed w-full mt-2 ${serif.className}`}>
        <div className="w-full flex justify-end text-lg font-[550] gap-2 px-4">
          <div className="flex items-center gap-4 md:gap-8 py-4">
            <Link
              href="/"
              aria-label="home link of the website"
              className={
                router.asPath === "/"
                  ? "underline underline-offset-2 decoration-indigo-400"
                  : "hover:underline underline-offset-2 decoration-indigo-200"
              }
            >
              Home
            </Link>
            <Link
              href="/writing"
              aria-label="writing link of the website"
              className={
                router.asPath.split("/").includes("writing")
                  ? "underline underline-offset-2 decoration-indigo-400"
                  : "hover:underline underline-offset-2 decoration-indigo-200"
              }
            >
              Writing
            </Link>
            <Link
              href="/pictorial"
              aria-label="pictorial link of the website"
              className={
                router.asPath.split("/").includes("pictorial")
                  ? "underline underline-offset-2 decoration-indigo-400"
                  : "hover:underline underline-offset-2 decoration-indigo-200"
              }
            >
              Pictorial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
