import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page not found"
      />
      <div className="flex justify-center items-center h-screen">
        <div className="text-center space-y-2">
          <span className="text-2xl">404 | not found</span>
          <Image
            src="https://media.giphy.com/media/jWexOOlYe241y/giphy.gif"
            alt="confused"
            width={500}
            height={500}
            quality={95}
            className="py-2"
          />
          <Link href="/" className="font-semibold hover:text-accent"> Go back to main page</Link>
        </div>
      </div>
    </>
  )
}