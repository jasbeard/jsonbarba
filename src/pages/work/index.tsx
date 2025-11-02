import { ContractSection } from "@/components/ExperienceSection";
import { MainLayout } from "@/components/MainLayout";
import { NextSeo } from "next-seo";

const WorkPage = () => {
  return (
    <>
      <NextSeo title="Work" />
      <MainLayout>
        <ContractSection />
      </MainLayout>
    </>
  );
};

export default WorkPage;
