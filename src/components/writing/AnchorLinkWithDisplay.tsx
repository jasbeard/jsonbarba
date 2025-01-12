import { ComponentProps, useState } from "react";

export const AnchorWithLinkDisplay = (props: ComponentProps<'a'>) => {
  const [hover, setHover] = useState(false);
  return (
    <div className="relative">
      <a
        {...props}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />&nbsp;&nbsp;
     {hover && <span>🔗</span>}
     {hover && <div className="absolute top-0 left-0 -ml-8 font-medium mt-0.5 text-gray-600">#</div>}
    </div>
  );
}