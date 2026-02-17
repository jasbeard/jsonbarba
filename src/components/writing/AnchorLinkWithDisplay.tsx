import { ComponentProps, useState } from "react";
import Link from "next/link";

const isInternalLink = (href?: string) =>
  href?.startsWith("/") && !href.startsWith("//");

export const AnchorWithLinkDisplay = (props: ComponentProps<"a">) => {
  const [hover, setHover] = useState(false);
  const { href, className, ...rest } = props;

  const hoverDisplay = (
    <>
      &nbsp;&nbsp;<span>🔗</span>
      <span className="absolute top-0 left-0 -ml-8 font-medium mt-0.5 text-gray-600">
        #
      </span>
    </>
  );

  if (isInternalLink(href)) {
    return (
      <span className="relative inline">
        <Link
          href={href ?? "/"}
          className={className}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        >
          {props.children}
        </Link>
        {hover && hoverDisplay}
      </span>
    );
  }

  return (
    <span className="relative inline">
      <a
        {...rest}
        href={href}
        className={className}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {props.children}
      </a>
      {hover && hoverDisplay}
    </span>
  );
}