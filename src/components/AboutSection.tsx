export function AboutSection({ currentYear }: { currentYear: number }) {
  return (
    <section className="flex flex-col justify-center mt-8">
      <h1 className="leading-[50px] font-semibold tracking-wider text-dark text-2xl sm:text-3xl dark:text-white">About</h1>
      <p className="max-w-4xl text-dark dark:text-white font-medium leading-8 mt-4 tracking-[0.01em] text-base sm:text-lg">
        <span className="font-semibold">Jason Joseph Barba</span> is a software engineer mainly focuses on the web frontend development side of things to help build web-based software solutions and services.
          He spent over {currentYear - 2017} years working with various tech startups, mid-stage organizations and even some larger ones. He likes to work on projects
          that make our lives a bit better and easier.
      </p>
    </section>
  );
}