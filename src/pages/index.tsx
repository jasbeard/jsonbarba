import { NextSeo } from "next-seo";
import { MainLayout } from "@/components/MainLayout";
import { AboutSectionNew } from "@/components/home/AboutSectionNew";
import { buildPageSeo, SITE_NAME } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <NextSeo
        {...buildPageSeo({
          title: SITE_NAME,
          path: "/",
          fullTitle: true,
        })}
      />
      <MainLayout>
        <AboutSectionNew />
      </MainLayout>
    </>
  );
}
