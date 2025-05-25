import { ComponentProps } from "react";

export const ExternalLink = (props: ComponentProps<'a'>) => {
  return (
    <a {...props} target="_blank" referrerPolicy="no-referrer-when-downgrade">{props.children}</a>
  );
}