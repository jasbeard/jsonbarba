export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col m-4">
      <div className="md:px-32 lg:w-2/4 lg:self-center lg:px-0">
        {children}
      </div>
    </div>
  );
}