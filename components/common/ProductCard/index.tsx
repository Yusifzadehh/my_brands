import { IClothes } from "@/services/api";
import MainImage from "../MainImage";
import Image from "next/image";

const ProductCard = ({ name, brand, categories, images, price }: IClothes) => {
  return (
    <>
      <div className="h-200">
        <MainImage className="h-200" src={images[0].image} alt={name} />
      </div>
      <div className="pt-[15px]">
        <h3 className="mb-3 text-[15px] text-[#000000cc]">
          {brand.name.toUpperCase()}, {categories.name}
        </h3>
        <div className="flex gap-3">
          <div className="flex gap-1">
            <Image
              width={10}
              height={10}
              src="https://mybrands.az/img/azn_red_icon.svg"
              className="text-[#DE163E]"
              alt="azn red"
            />
            <span className="font-bold text-[#DE163E]">{price}</span>
          </div>
          <div className="decoration-[ flex gap-1 text-[#999] line-through">
            <Image
              width={10}
              height={10}
              src="https://mybrands.az/img/azn_black_icon.svg"
              alt="azn black"
            />
            <span className="font-bold text-[#999]">
              {parseFloat(price) + 100}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
