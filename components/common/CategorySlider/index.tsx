"use client";

import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

interface ICategory {
  id: string;
  name: string;
  image: string;
}

const categories: ICategory[] = [
  { id: "1", name: "Şərflər", image: "https://mybrands.az/fit200x255/center/products/42691501/fcd01bee79cf385448b8a213e9c9130b.jpg" },
  { id: "2", name: "Papaqlar", image: "https://mybrands.az/fit200x255/center/products/42776758/ae5f41b4934e8932928d0053a78137d2.jpg" },
  { id: "3", name: "Qısaboğaz çəkmələr", image: "https://mybrands.az/fit200x255/center/products/42361239/dba97e9f8a46a49f8596c3290e3cdff8.jpeg" },
  { id: "4", name: "Əlcəklər", image: "https://mybrands.az/fit200x255/center/products/42653010/47d288bf7fb62504410ddabe38b3fd15.jpg" },
  { id: "5", name: "Bel çantası", image: "https://mybrands.az/fit200x255/center/products/42192385/e685f9aa7e4d73074dae89f3179686ba.jpeg" },
  { id: "6", name: "Kəmərlər", image: "https://mybrands.az/fit200x255/center/products/42192393/b0e229c15f3243ff2685948812f45495.jpeg" },
];

const CategorySlider: React.FC = () => {
  return (
    <div className="bg-[#0f172a] py-8">
      <h2 className="text-start text-white text-2xl font-bold mb-6 pl-72">KATEQORİYALAR ÜZRƏ</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        loop={true}
        className="w-4/5 mx-auto"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div className="flex flex-col items-center">
              <img
                src={category.image}
                alt={category.name}
                className="shadow-md w-[150px] h-[200px] object-cover"
              />
              <p className="mt-4 text-white text-lg font-medium">{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategorySlider;