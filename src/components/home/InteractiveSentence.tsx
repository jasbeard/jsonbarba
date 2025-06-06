import { serif } from "@/font/fonts";

interface InteractiveSentenceProps {
  id: string;
  blur: boolean;
  toggle?: () => void;
  onMouse: {
    over: () => void;
    out: () => void;
  };
  hover: boolean;
  buttonContent: string;
  blurContent: string;
  buttonClassName?: string;
}

export const InteractiveSentence = ({
  id,
  blur,
  toggle,
  onMouse,
  buttonContent,
  hover,
  blurContent,
  buttonClassName,
}: InteractiveSentenceProps) => {
  return (
    <>
      <button
        id={id}
        className={`px-2 font-medium dark:text-dark outline-offset-2 ${serif.className} ${buttonClassName}`}
        {...(toggle && { onClick: toggle })}
        onMouseOver={onMouse.over}
        onMouseOut={onMouse.out}
      >
        <span>{buttonContent}</span>
      </button>{" "}
      <span
        className={`tracking-tight inline transition-all duration-400 ${
          blur
            ? "blur select-none ease-out"
            : `blur-0 select-auto ease-out ${hover && "text-indigo-300"}`
        }`}
      >
        {blurContent}
      </span>
    </>
  );
};

type InteractiveSentenceWithLinkProps = Omit<
  InteractiveSentenceProps,
  "blurContent"
> & { children: React.ReactNode };

export const InteractiveSentenceWithLink = ({
  id,
  blur,
  toggle,
  onMouse,
  buttonContent,
  hover,
  children,
  buttonClassName,
}: InteractiveSentenceWithLinkProps) => {
  return (
    <>
      <button
        id={id}
        className={`relative px-2 font-medium bg-indigo-400 dark:text-dark ${serif.className} ${buttonClassName}`}
        {...(toggle && { onClick: toggle })}
        onMouseOver={onMouse.over}
        onMouseOut={onMouse.out}
      >
        <span>{buttonContent}</span>
      </button>{" "}
      <span
        className={`tracking-tight inline transition-all duration-400 ${
          blur
            ? "blur select-none ease-out"
            : `blur-0 select-auto ease-out ${hover && "text-indigo-300"}`
        }`}
      >
        {children}
      </span>
    </>
  );
};
