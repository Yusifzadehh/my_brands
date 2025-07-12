import { FC, ReactNode } from "react";
// import { IconType } from "react-icons";

export interface IClassName {
  className?: string;
}

export interface ImageProps extends IClassName {
  src: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
}

export interface IChildren {
  children: ReactNode;
}
