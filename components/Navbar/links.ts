import { HTMLProps, ReactNode } from "react";
import { IconType } from "react-icons";
import { BiHomeAlt } from "react-icons/bi";

export interface LinkProps {
  Icon?: IconType;
  children?: ReactNode;
  href: string;
  label?: string;
  props?: HTMLProps<HTMLAnchorElement>;
  show?: "always" | "authenticated" | "unauthenticated";
  type?: "primary";
}

const top: LinkProps[] = [{ href: "/", Icon: BiHomeAlt, label: "dashboard" }];

const middle: LinkProps[] = [];

const bottom: LinkProps[] = [];

const links = {
  top,
  middle,
  bottom,
};
export default links;
