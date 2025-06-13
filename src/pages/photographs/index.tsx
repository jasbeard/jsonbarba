import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";
import {
  nearGym,
  nearCiti,
  nearMytown,
  oreCentral,
  walkway,
  pocketPark,
  catwalk,
  glassy,
  cornerCat,
  uptownMallBridge,
} from "@/components/photographs/getPhotos";
import Image, { StaticImageData } from "next/image";

interface landscapeImagesProps {
  src: StaticImageData;
  blurDataUrl: string;
  alt?: string;
}

const PhotographsPage = () => {
  const blurDataUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mMM8PGpBwADRQFp5BFVGgAAAABJRU5ErkJggg==";
  const landscapeImages: landscapeImagesProps[] = [
    {
      src: nearCiti,
      blurDataUrl: blurDataUrl,
      alt: "Near citi building",
    },
    {
      src: oreCentral,
      blurDataUrl: blurDataUrl,
      alt: "ore central building",
    },
    {
      src: nearMytown,
      blurDataUrl: blurDataUrl,
      alt: "near mytown",
    },
    {
      src: nearGym,
      blurDataUrl: blurDataUrl,
      alt: "this area is where my gym is located",
    },
    {
      src: walkway,
      blurDataUrl: blurDataUrl,
      alt: "a walkway",
    },
  ];

  const portraits: landscapeImagesProps[] = [
    {
      src: uptownMallBridge,
      blurDataUrl: blurDataUrl,
      alt: "uptown mall bridge",
    },
    {
      src: cornerCat,
      blurDataUrl: blurDataUrl,
      alt: "corner cat",
    },
    {
      src: pocketPark,
      blurDataUrl: blurDataUrl,
      alt: "pocket park",
    },
    {
      src: catwalk,
      blurDataUrl: blurDataUrl,
      alt: "cat walk",
    },
    {
      src: glassy,
      blurDataUrl: blurDataUrl,
      alt: "glassly",
    },
  ];
  return (
    <>
      <NextSeo title="Jason Barba | Photographs" />
      <MainLayout>
        <section className="mx-auto mt-20" aria-describedby="shooting">
          <h1 className={` font-semibold text-2xl sm:text-3xl`}>Photographs</h1>
          <p
            className="max-w-4xl text-dark dark:text-white mt-4 font-light leading-8 tracking-[0.01em] text-base sm:text-lg"
            id="shooting"
          >
            {`I’m capturing the world with Sony A6400, starting off with the kit
            lens that came with it. Here are some vibe landscape shots if you
            will.`}
          </p>
          <ul className="flex flex-col my-8 gap-4 list-none">
            {landscapeImages.map((item) => (
              <li key={item.alt}>
                <Image
                  src={item.src}
                  alt={item.alt ?? "a picture"}
                  placeholder="blur"
                  width={1600}
                  height={1062}
                  style={{ color: "transparent", position: "relative" }}
                />
              </li>
            ))}
          </ul>
        </section>
      </MainLayout>
      <section className="w-full px-4 md:px-2">
        <div className="my-24">
          <div className="md:px-32 lg:self-center lg:px-0 lg:w-[50%] mx-auto">
            <h1 className={` font-semibold text-2xl sm:text-3xl`}>
              {`Some portraits for ya'll`}
            </h1>
            <p className="max-w-4xl text-dark dark:text-white mt-4 font-light leading-8 tracking-[0.01em] text-base sm:text-lg">
              Somewhere in the streets, just passing by.
            </p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] xl:grid-cols-[repeat(5,_1fr)] gap-4 md:gap-2 mt-8">
            {portraits.map((item) => (
              <li className="relative aspect-[3/4]" key={item.alt}>
                <Image
                  src={item.src}
                  alt={item.alt ?? "a picture"}
                  placeholder="blur"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    color: "transparent",
                  }}
                  fill
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PhotographsPage;
