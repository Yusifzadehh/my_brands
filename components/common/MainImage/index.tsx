import { ImageProps } from "@/types/common";
import Image from "next/image";

const MainImage = ({ src, className, alt = "Image" }: ImageProps) => {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      width={1000}
      height={700}
      className={`h-auto align-middle ${className}`}
    />
  );
};

export default MainImage;
