"use client";
import { Navigation, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

interface ISlide {
  id: string;
  image: string;
}

const mockSlides: ISlide[] = [
  {
    id: "1",
    image: "https://mybrands.az/img/b19-az.jpeg",
  },
  {
    id: "2",
    image: "https://mybrands.az/img/b18-az.jpeg",
  },
];

const MainSlider: React.FC = () => {
  const [slides, setSlides] = useState<ISlide[]>([]);

  useEffect(() => {
    setSlides(mockSlides);
  }, []);

  if (slides.length === 0) return <p>Yüklənir...</p>;

  return (
    <Swiper
      modules={[Navigation, A11y, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="w-3/5 h-[50vh] relative"
    >
      {slides.map(({ id, image}) => (
        <SwiperSlide key={id}>
          <div className="relative w-full h-full">
            <img
              src={image}
              className="object-cover w-full h-full"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MainSlider;