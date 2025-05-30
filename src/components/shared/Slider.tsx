import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
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
    <div className="w-full relative pt-10">
      <h2 className="text-white text-4xl font-bold pl-30 pt-20 pb-20 text-center slider-title">{title}</h2>
      <div className="relative w-full pt-6 pb-40">
        <Swiper
          modules={[Navigation, EffectFade]}
          direction="horizontal"
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          speed={speed}
          grabCursor={true}
          loop={false} 
          resistance={true} 
          resistanceRatio={0.5} 
          initialSlide={0} 
          className="w-full"
          style={{ paddingBottom: '16px', paddingLeft: '340px' }} 
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="w-[230px] h-[200px] relative border-8 border-white rounded-3xl">
              <span className="absolute bottom-7 left-0 text-white px-3 font-sans text-sm uppercase">
                  REAL DEL MONTE
                </span>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                  onDragStart={(e) => e.preventDefault()}
                />
                <span className="absolute bottom-2 left-3 text-white px-2 font-semibold">
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
              width: 230px !important;
              height: 200px !important;
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
            .swiper-button-prev, .swiper-button-next {
              color: white;
              background: rgba(0, 0, 0, 0.5);
              border-radius: 50%;
              width: 40px;
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: center;
              z-index: 20;
            }
            .swiper-button-prev {
              left: 10px; 
            }
            .swiper-button-next {
              right: 10px;
            }
            .swiper-button-prev:after, .swiper-button-next:after {
              font-size: 20px;
            }
          `}
        </style>
      </div>
    </div>
  );
};

export default FadeSlider;