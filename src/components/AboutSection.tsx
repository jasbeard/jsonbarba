export function AboutSection() {
  const currentYear = new Date().getFullYear();
  return (
    <section className="flex flex-col justify-center mt-8">
      <h1 className="text-4xl leading-[50px] font-semibold tracking-wider text-[#2c3136] dark:text-white">About</h1>
      <p className="max-w-4xl text-lg text-[#2c3136] dark:text-white font-medium leading-8 mt-4 tracking-[0.01em]">
        <span className="font-semibold">
          Jason Joseph Barba</span> is a software engineer mainly focuses on the web frontend development side of things to help build web-based software solutions and services.
          He spent over {currentYear - 2017} years working with various tech startups, mid-stage organizations and even some larger ones. He likes to work on projects
          that make our lives a bit better and easier.
      </p>
    </section>
  );
}