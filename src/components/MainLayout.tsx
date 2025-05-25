import { useRouter } from "next/router";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col mb-16 mx-4 md:my-16">
      <div className={`md:px-32 lg:self-center lg:px-0 ${router.asPath === '/' ? 'lg:w-[60%]' : 'lg:w-[50%]'}`}>
        {children}
      </div>
    </div>
  );
}