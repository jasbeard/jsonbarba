import { useRouter } from "next/router";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col mb-16 mt-8 mx-4 md:my-16 text-gray-600">
      <div className="md:px-32 lg:self-center lg:px-0">{children}</div>
    </div>
  );
};
