import React from 'react';
import FadeSlider from '../../components/shared/Slider';

const SlidersPage: React.FC = () => {
  const festsImages = [
    { id: 1, src: '/images/fests/Carnaval.jpg', alt: 'Carnaval', label: 'Carnaval de la Montaña' },
    { id: 2, src: '/images/fests/Fuegos.jpg', alt: 'Fuegos', label: 'Fuegos Artificiales' },
    { id: 3, src: '/images/fests/Hiloche.jpg', alt: 'Hiloche', label: 'Hiloche bailable' },
    { id: 4, src: '/images/fests/Informacion.jpg', alt: 'Festividad', label: 'Santo Patrono' },
    { id: 5, src: '/images/fests/Paisaje.jpg', alt: 'Pueblo', label: 'Pueblo Mágico' },
    { id: 6, src: '/images/fests/Paste.jpg', alt: 'Paste', label: 'Festival Paste' },
    { id: 7, src: '/images/fests/Plata.jpg', alt: 'Joyeria', label: 'Exposición Joyeria Plata' },
    { id: 8, src: '/images/fests/Plata2.jpg', alt: 'Plata', label: 'Exposición Plata' },
    { id: 9, src: '/images/fests/SSanta.jpg', alt: 'Semana', label: 'Semana Santa' },
    { id: 10, src: '/images/fests/Zelontla.jpeg', alt: 'Zelontla', label: 'Zelontla' },
  ];

  const hotelesImages = [
    { id: 1, src: '/images/hoteles/Cabañas.jpg', alt: 'Cabañas', label: 'Cabañas' },
    { id: 2, src: '/images/hoteles/Camas.jpg', alt: 'Camas', label: 'Camas' },
    { id: 3, src: '/images/hoteles/HotelBoutique.jpg', alt: 'Hotel Boutique', label: 'Hotel Boutique' },
    { id: 4, src: '/images/hoteles/HotelParaisoReal.jpg', alt: 'Hotel Paraiso Real', label: 'Hotel Paraíso Real' },
    { id: 5, src: '/images/hoteles/HotelPosadaInterior.jpg', alt: 'Hotel Posada Interior', label: 'Hotel Posada Interior' },
    { id: 6, src: '/images/hoteles/HotelPosadaReal.jpg', alt: 'Hotel Posada Real', label: 'Hotel Posada Real' },
    { id: 7, src: '/images/hoteles/MineraldelMonte.jpg', alt: 'Mineral del Monte', label: 'Mineral del Monte' },
    { id: 8, src: '/images/hoteles/MineralMonteInterior.jpg', alt: 'Mineral Monte Interior', label: 'Mineral Monte Interior' },
    { id: 9, src: '/images/hoteles/PanoramicaRM.jpg', alt: 'Panorámica RM', label: 'Panorámica Real del Monte' },
    { id: 10, src: '/images/hoteles/SpaHolistico.jpg', alt: 'Spa Holístico', label: 'Spa Holístico' },
  ];

  const restaurantsImages = [
    { id: 1, src: '/images/restaurants/Restaurante01.jpg', alt: 'Restaurante 01', label: 'Restaurante 01' },
    { id: 2, src: '/images/restaurants/02.jpg', alt: 'Restaurante 02', label: 'Restaurante 02' },
    { id: 3, src: '/images/restaurants/03.jpg', alt: 'Restaurante 03', label: 'Restaurante 03' },
    { id: 4, src: '/images/restaurants/04.jpg', alt: 'Restaurante 04', label: 'Restaurante 04' },
    { id: 5, src: '/images/restaurants/05.jpg', alt: 'Restaurante 05', label: 'Restaurante 05' },
    { id: 6, src: '/images/restaurants/06.jpg', alt: 'Restaurante 06', label: 'Restaurante 06' },
    { id: 7, src: '/images/restaurants/07.jpg', alt: 'Restaurante 07', label: 'Restaurante 07' },
    { id: 8, src: '/images/restaurants/08.jpg', alt: 'Restaurante 08', label: 'Restaurante 08' },
    { id: 9, src: '/images/restaurants/09.jpg', alt: 'Restaurante 09', label: 'Restaurante 09' },
    { id: 10, src: '/images/restaurants/10.jpg', alt: 'Restaurante 10', label: 'Restaurante 10' },
  ];

  const toursImages = [
    { id: 1, src: '/images/tours/1primas_basalticos.jpg', alt: 'Prismas Basálticos', label: 'Prismas Basálticos' },
    { id: 2, src: '/images/tours/caption.jpg', alt: 'Caption', label: 'Caption' },
    { id: 3, src: '/images/tours/panteon-ingles.jpg', alt: 'Panteón Inglés', label: 'Panteón Inglés' },
    { id: 4, src: '/images/tours/prismas-cascada.jpg', alt: 'Prismas Cascada', label: 'Prismas Cascada' },
    { id: 5, src: '/images/tours/prismas1.jpg', alt: 'Prismas 1', label: 'Prismas 1' },
    { id: 6, src: '/images/tours/real-del-monte2.jpg', alt: 'Real del Monte 2', label: 'Real del Monte 2' },
    { id: 7, src: '/images/tours/real-del-monte.jpg', alt: 'Real del Monte', label: 'Real del Monte' },
    { id: 8, src: '/images/tours/tm_museos.jpg', alt: 'Museos', label: 'Museos' },
    { id: 9, src: '/images/tours/tranvia-real.jpg', alt: 'Tranvía Real', label: 'Tranvía Real' },
    { id: 10, src: '/images/tours/turibus-realdelmonte.jpg', alt: 'Turibus Real del Monte', label: 'Turibus Real del Monte' },
  ];

  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_#1a1a1a_30%,_#000000_100%)] relative">
      <section className="relative sliders-container pt-[100px]">
        <FadeSlider
          title="Festividades"
          images={festsImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
        <FadeSlider
          title="Hoteles"
          images={hotelesImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
        <FadeSlider
          title="Restaurantes"
          images={restaurantsImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
        <FadeSlider
          title="Tours"
          images={toursImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>
    </div>
  );
};

export default SlidersPage;