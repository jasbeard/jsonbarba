import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";
import {
  nearGym,
  oreCentral,
  fansipan,
  sapaHotel,
  cornerCat,
  highStreetCat,
  pedxing,
  tower,
  tree,
  cyberTruck,
  sapaStreets,
  sapaStation,
} from "@/components/pictorial/getPhotos";
import Image, { StaticImageData } from "next/image";

interface landscapeImagesProps {
  src: StaticImageData;
  alt?: string;
}

const PictorailPage = () => {
  const landscapeImages: landscapeImagesProps[] = [
    {
      src: oreCentral,
      alt: "ore central building",
    },
    {
      src: nearGym,
      alt: "this area is where my gym is located",
    },
    {
      src: fansipan,
      alt: "sapa",
    },
    {
      src: sapaHotel,
      alt: "hotel view at sapa",
    },
  ];

  const portraits: landscapeImagesProps[] = [
    {
      src: sapaStreets,
      alt: "sapa streets",
    },
    {
      src: cornerCat,
      alt: "corner cat",
    },
    {
      src: sapaStation,
      alt: "sapa station",
    },
    {
      src: highStreetCat,
      alt: "high street cat",
    },
    {
      src: pedxing,
      alt: "crossing",
    },
    {
      src: tower,
      alt: "construction",
    },
    {
      src: tree,
      alt: "a tree",
    },
    {
      src: cyberTruck,
      alt: "a cybertruck at noon",
    },
  ];
  return (
    <>
      <NextSeo title="Pictorial" />
      <MainLayout>
        <section className="mx-auto mt-20" aria-describedby="pictorial">
          <h1 className="text-3xl text-gray-950 font-[550]">Pictorial</h1>
          {/* <p className="max-w-4xl mt-4">
            {`I’m capturing the world with Sony A6400, starting off with the kit
            lens that came with it. Here are some vibe landscape shots if you
            will.`}
          </p> */}
          <ul className="flex flex-col my-8 gap-4 list-none">
            {landscapeImages.map((item) => (
              <li key={item.alt} className="rounded">
                <Image
                  src={item.src}
                  alt={item.alt ?? "a picture"}
                  placeholder="blur"
                  width={1800}
                  height={1062}
                  style={{ color: "transparent", position: "relative" }}
                  className="rounded aspect-video"
                />
              </li>
            ))}
          </ul>
        </section>
      </MainLayout>
      <section className="w-full px-4 md:px-4">
        <div className="my-24">
          <div className="md:px-32 lg:self-center lg:px-0 lg:w-[50%] mx-auto">
            <h1 className={`text-3xl`}>{`Some portraits for ya'll`}</h1>
            <p className="max-w-4xl text-dark dark:text-white mt-4 font-light leading-8 tracking-[0.01em] text-base sm:text-lg">
              {`Somewhere in the streets, just passing by. (this section will be
              updated periodically)`}
            </p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] xl:grid-cols-[repeat(4,_1fr)] gap-4 md:gap-4 mt-8">
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
                  className="rounded"
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

export default PictorailPage;
