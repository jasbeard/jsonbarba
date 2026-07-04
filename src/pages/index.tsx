import { NextSeo } from "next-seo";
import { MainLayout } from "@/components/MainLayout";
import { AboutSectionNew } from "@/components/home/AboutSectionNew";
import { buildPageSeo } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <NextSeo
        {...buildPageSeo({
          title:
            "Jason Barba — Software Engineer, Writer & Side Project Builder",
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
