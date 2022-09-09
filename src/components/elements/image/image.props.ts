import {StaticImageData} from "next/dist/client/image";

interface StaticRequire {
  default: StaticImageData;
}

declare type StaticImport = StaticRequire | StaticImageData;

export interface ImageProps {
  alt?: string

  src: string | StaticImport

  className?: string

  width?: number | string

  height?: number | string

  layout?: 'fill' | 'intrinsic' | 'responsive' | 'fixed'

  objectFit?: 'contain' | 'cover' | 'fill' | 'inherit' | 'unset' | 'none' | 'scale-down' | 'initial' | 'revert' | '-moz-initial'
}
