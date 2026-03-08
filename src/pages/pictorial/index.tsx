import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";
import {
  nearGym,
  sapaHotel,
  cornerCat,
  tower,
  tree,
  sapaStreets,
  sapaStation,
  sapaHouse,
  fansipanStatues,
  sapaLeading,
  sapaTown,
  congcaphe,
  hoalo,
  incense,
  osakaCastle,
  katsuoji,
  umeda,
  tsutenkaku,
} from "@/components/pictorial/getPhotos";
import Image, { StaticImageData } from "next/image";

interface landscapeImagesProps {
  src: StaticImageData;
  alt?: string;
}

const PictorailPage = () => {
  const landscapeImages: landscapeImagesProps[] = [
    {
      src: osakaCastle,
      alt: "Osaka Castle, Japan",
    },
    {
      src: tsutenkaku,
      alt: "Tsutenkaku View Deck, Japan",
    },
    {
      src: katsuoji,
      alt: "Katsuo-ji Temple, Japan",
    },
    {
      src: umeda,
      alt: "Umeda Sky, Japan",
    },
    {
      src: nearGym,
      alt: "Somewhere in BGC, Philippines",
    },
    {
      src: sapaHotel,
      alt: "Hotel view at Sapa, Vietnam",
    },
  ];

  const portraits: landscapeImagesProps[] = [
    {
      src: sapaStreets,
      alt: "Sapa Random Streets",
    },
    {
      src: congcaphe,
      alt: "At Cộng Cà Phê",
    },
    {
      src: cornerCat,
      alt: "A Corner Cat",
    },
    {
      src: sapaStation,
      alt: "Sapa Station",
    },
    {
      src: sapaHouse,
      alt: "Sapa Station Midway",
    },
    {
      src: fansipanStatues,
      alt: "At Fansipan",
    },
    {
      src: incense,
      alt: "Incense Village",
    },
    {
      src: tower,
      alt: "Some Construction at BGC",
    },
    {
      src: tree,
      alt: "Cental Square",
    },
    {
      src: sapaLeading,
      alt: "Along Sapa Station",
    },
    {
      src: sapaTown,
      alt: "Sapa Town Center",
    },
    {
      src: hoalo,
      alt: "Outside Hoalo Prison Museum",
    },
  ];
  return (
    <>
      <NextSeo title="Pictorial" />
      <MainLayout>
        <section
          className="mx-auto mt-20 max-w-2xl animate-fade-in"
          aria-describedby="pictorial"
          style={{
            animationFillMode: "both",
          }}
        >
          <h1 className="text-3xl text-gray-950 font-[550]">Pictorial</h1>
          <p className="mt-4">
            {`A visual record of where I've been. Moments I wanted to remember. Scenes that caught my eye.`}
          </p>
          <ul className="flex flex-col my-8 gap-4 list-none">
            {landscapeImages.map((item) => (
              <li key={item.alt} className="rounded relative">
                <Image
                  src={item.src}
                  alt={item.alt ?? "a picture"}
                  placeholder="blur"
                  width={1800}
                  height={1061}
                  style={{ color: "transparent", position: "relative" }}
                  className="aspect-auto z-0"
                />
                <div className="absolute bg-white/60 ml-2 -mt-8 z-20 text-gray-950 backdrop-opacity-30 backdrop-blur-sm rounded-full">
                  <div className="text-xs py-1 px-2">
                    <span>{item.alt}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </MainLayout>
      <section
        className="w-full px-4 md:px-4 animate-fade-in"
        style={{
          animationFillMode: "both",
        }}
      >
        <div className="mt-4 md:mt-24 mb-4">
          <div className="md:px-32 lg:self-center lg:px-0 lg:w-[50%] mx-auto">
            <h1 className="text-3xl text-gray-950 font-[550]">{`Some portraits for ya'll`}</h1>
            <p className="max-w-4xl mt-4 text-gray-600">
              {`Somewhere in the streets, just passing by. (this section will be
              updated periodically)`}
            </p>
          </div>
          <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] xl:grid-cols-[repeat(4,_1fr)] gap-4 mt-8">
            {portraits.map((item) => (
              <li className="relative aspect-[.662727]" key={item.alt}>
                <Image
                  src={item.src}
                  alt={item.alt ?? "a picture"}
                  placeholder="blur"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center center",
                    color: "transparent",
                    display: "block",
                  }}
                  fill
                  className="relative"
                />
                <div className="absolute bottom-3 bg-white/60 ml-2 z-20 text-gray-950 backdrop-opacity-30 backdrop-blur-sm rounded-full">
                  <div className="text-xs py-1 px-2">
                    <span>{item.alt}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PictorailPage;
