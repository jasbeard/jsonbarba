import Link from "next/link";
import { useRouter } from "next/router";
import { serif } from "@/font/fonts";

export function Header() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-10 bg-dark">
      <nav>
        <div
          className="w-full h-[100px] fixed pointer-events-none select-none -z-10"
          style={{
            backgroundImage: "linear-gradient(180deg, #000 20%, transparent)",
          }}
        ></div>
        <div className={`flex justify-between ml-4 mt-2 ${serif.className}`}>
          <div className=" font-normal tracking-wide text-base gap-2 -mt-2 pr-4 rounded-br bg-white dark:bg-dark">
            <div className="flex justify-between items-center gap-4 mt-4">
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
                aria-label="work link of the website"
                className={
                  router.asPath.split("/").includes("work")
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
      </nav>
    </header>
  );
}
