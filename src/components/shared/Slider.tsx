import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Image {
  id: number;
  src: string;
  alt: string;
  label: string;
}

interface FadeSliderProps {
  title: string;
  images: Image[];
  spaceBetween?: number;
  slidesPerView?: number;
  speed?: number;
}

const FadeSlider: React.FC<FadeSliderProps> = ({
  title,
  images,
  spaceBetween = 60, 
  slidesPerView = 3, 
  speed = 600, 
}) => {
  return (
    <div className="w-full bg-gradient-to-bl ">
      <h2 className="text-white text-4xl font-bold mb-6 text-center">{title}</h2>
      <div className="relative w-full">
        <Swiper
          modules={[Navigation]}
          direction="horizontal"
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={speed}
          grabCursor={true}
          loop={false}
          className="w-full"
          style={{ paddingBottom: '16px' }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-[220px] h-[220px] bg-gray-800 flex-shrink-0 snap-center relative border-8 border-white rounded-3xl shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                  onDragStart={(e) => e.preventDefault()}
                />
                <span className="absolute bottom-3 left-3 text-white text-sm font-medium px-2 py-1 rounded">
                  {image.label}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>
          {`
            .swiper {
              display: flex;
              flex-direction: row;
              -webkit-overflow-scrolling: touch;
              touch-action: pan-x;
            }
            .swiper-slide {
              width: 220px !important;
              height: 220px !important;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            img {
              user-drag: none;
              -webkit-user-drag: none;
              user-select: none;
              -webkit-user-select: none;
            }
          `}
        </style>
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default FadeSlider;