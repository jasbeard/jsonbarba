import { HeaderAvatar } from '@/components/HeaderAvatar'; 
import { NextSeo } from 'next-seo';
import { AboutSection, GithubSection } from '@/components';
import { ContractSection, ProjectSection } from '@/components/ExperienceSection';

export default function Home() {
  return (
    <>
      <NextSeo
        title="Jason Barba"
        description="Website of Jason Barba, here is where you can see details of his commercial experience as a web engineer/developer"
      />
      <div className="flex flex-col m-4">
        <HeaderAvatar />
        <div className="md:px-32 lg:w-2/4 lg:self-center lg:px-0">
          <AboutSection />
          <GithubSection />
          <ContractSection />
          <ProjectSection />
        </div>
      </div>
    </>
  );
}
