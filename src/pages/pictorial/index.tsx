import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";
import { buildPageSeo } from "@/lib/seo";
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
      <NextSeo
        {...buildPageSeo({
          title: "Pictorial — Moments I wanted to remember",
          description:
            "A visual record of where I've been. Moments I wanted to remember. Scenes that caught my eye.",
          path: "/pictorial",
        })}
      />
      <MainLayout>
        <article
          className="mt-20 max-w-2xl animate-fade-in text-sm lg:text-base"
          style={{
            animationFillMode: "both",
          }}
        >
          <h1 className="text-2xl lg:text-3xl text-gray-950 font-[550]">
            Pictorial
          </h1>
          <p className="mt-4">
            A visual record of where I&apos;ve been. Moments I wanted to
            remember. Scenes that caught my eye.
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

          <h2 className="text-xl lg:text-2xl text-gray-950 font-[550] mt-16">
            Portraits
          </h2>
          <p className="mt-4 text-gray-600">
            Street moments, passing by.
          </p>
        </article>

        <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] xl:grid-cols-[repeat(4,1fr)] gap-4 mt-8 mb-4 w-full">
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
      </MainLayout>
    </>
  );
};

export default PictorailPage;
