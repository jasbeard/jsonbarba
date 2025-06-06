export const ContactLinks = ({ blur }: { blur: boolean }) => {
  return (
    <>
      I&#39;m on{" "}
      <a
        {...(blur && { href: "https://github.com/swoppy" })}
        rel="noopener noreferrer"
        target="_blank"
        className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
      >
        Github,
      </a>{" "}
      <a
        {...(blur && {
          href: "https://www.linkedin.com/in/jsonbarba/",
        })}
        rel="noopener noreferrer"
        target="_blank"
        className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
      >
        LinkedIn
      </a>{" "}
      and{" "}
      <a
        {...(blur && { href: "https://x.com/jsonbarba" })}
        rel="noopener noreferrer"
        target="_blank"
        className="inline underline decoration-dashed underline-offset-4 decoration-1 hover:decoration-indigo-400 focus:decoration-indigo-400"
      >
        X.
      </a>
    </>
  );
};
