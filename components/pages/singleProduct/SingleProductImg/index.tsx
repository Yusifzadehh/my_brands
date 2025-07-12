"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { useCloSingle } from "@/services/queryes";
import MainButton from "@/components/ui/MainButton";
import "swiper/css";
import { useParams } from "next/navigation";

const SingleProductImg: React.FC = () => {
  const { id } = useParams();
  const productId = parseInt(id as string);
  const { data: product, isLoading, isError } = useCloSingle(productId);
  // console.log(product);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading product!</div>;
  if (!product) return <div>Product not found.</div>;

  const mainImage = product.images[0].image || "/test/benetton.jpg";
  const {
    categories: { name: cat_name },
    name,
    subcategories: { name: subcat },
    price,
    stock,
    brand: { name: brand },
    gender: { type: gender },
    size,
  } = product;
  return (
    <div className="container flex flex-col justify-evenly lg:flex-row">
      <div className="flex gap-11">
        <div className="thumbnails w-[10%] pr-4">
          <Swiper
            spaceBetween={10}
            slidesPerView={3}
            direction="vertical"
            className="thumbnail-swiper h-[80%] w-[80px]"
          >
            <SwiperSlide>
              <Image
                src={mainImage}
                width={200}
                height={200}
                alt={`Thumbnail`}
                className="cursor-pointer object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div>
          <div className="z-50 h-[400px] w-[400px]">
            <InnerImageZoom
              src={mainImage}
              zoomSrc={mainImage}
              zoomType="hover"
              alt="Main product image"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="mt-40 text-center lg:mt-0">
        <h2 className="text-2xl font-semibold leading-6">{name}</h2>
        <p className="px-0 pb-1 pt-0 text-base font-light text-gray-500">
          {cat_name} - {subcat}
        </p>
        <div className="price mb-2 flex items-center justify-center gap-2">
          <div className="new-price text-[22px] font-semibold text-red-500">
            ₼ {price}
          </div>

          <div className="old-price text-[15px] font-semibold line-through">
            ₼ {parseFloat(price) + 100}.00
          </div>
        </div>
        <div className="mb-7">
          <a href="#" className="text-sm underline">
            Çatdırılma və geri qaytarılma haqqında məlumat
          </a>
        </div>
        <MainButton
          type="submit"
          styles="uppercase w-full text-lg font-semibold"
        >
          SƏBƏTƏ ƏLAVƏ ET
        </MainButton>
        <p className="mt-4 text-gray-500">Brand: {brand}</p>
        <p className="text-gray-500">Gender: {gender}</p>
        <p className="text-gray-500">Size: {size}</p>
        <p className="text-gray-500">Stock: {stock}</p>
      </div>
    </div>
  );
};

export default SingleProductImg;
