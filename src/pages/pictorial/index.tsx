import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";
import {
  landscapeImages,
  portraits,
  type PictorialImage,
} from "@/components/pictorial/pictorialPhotos";
import { OptimizedPictorialImage } from "@/components/pictorial/OptimizedPictorialImage";

const getImageKey = (item: PictorialImage) => item.alt;

const PictorailPage = () => {
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
            {landscapeImages.map((item, index) => (
              <li key={getImageKey(item)} className="rounded relative">
                <OptimizedPictorialImage
                  src={item.src}
                  alt={item.alt}
                  layout="landscape"
                  priority={index === 0}
                />
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
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] xl:grid-cols-[repeat(4,1fr)] gap-4 mt-8">
            {portraits.map((item) => (
              <li className="relative aspect-[.662727]" key={getImageKey(item)}>
                <OptimizedPictorialImage
                  src={item.src}
                  alt={item.alt}
                  layout="portrait"
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
