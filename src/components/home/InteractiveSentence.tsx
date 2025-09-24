import { serif } from "@/font/fonts";
import { composeEventHandlers } from "@radix-ui/primitive";

interface InteractiveSentenceProps {
  id: string;
  blur: boolean;
  toggle?: () => void;
  onMouse: {
    over: () => void;
    out: () => void;
  };
  hover: boolean;
  disableShine?: boolean;
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
  disableShine = true,
}: InteractiveSentenceProps) => {
  return (
    <>
      <button
        id={id}
        data-analytics-id={id}
        className={`px-2 font-medium dark:text-dark outline-offset-2 ${serif.className} ${buttonClassName}`}
        onClick={composeEventHandlers(toggle, () => onMouse.over())}
        onBlur={onMouse.out}
        onFocus={onMouse.over}
        onMouseOver={onMouse.over}
        onMouseOut={onMouse.out}
      >
        <Shiny
          text={buttonContent}
          speed={1.5}
          className="text-gray-200/70"
          disabled={disableShine}
        />
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
  disableShine,
}: InteractiveSentenceWithLinkProps) => {
  return (
    <>
      <button
        id={id}
        data-analytics-id={id}
        className={`relative px-2 font-medium dark:text-dark ${serif.className} ${buttonClassName}`}
        {...(toggle && { onClick: toggle })}
        onMouseOver={onMouse.over}
        onMouseOut={onMouse.out}
      >
        <Shiny
          text={buttonContent}
          speed={1.5}
          className="text-gray-200/70"
          disabled={disableShine}
        />
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

interface ShinyProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
}

export const Shiny = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: ShinyProps) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-[#b5b5b5a4] bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};
