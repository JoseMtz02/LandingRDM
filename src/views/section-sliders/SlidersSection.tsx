import React from 'react';
import FadeSlider from '../../components/shared/Slider';

const SlidersPage: React.FC = () => {
  const sharedImages = [
    { id: 1, src: '/images/RealMonte2.jpg', alt: 'Real Monte', label: 'Descubre los rumbos del centro' },
    { id: 2, src: '/images/BolillosDelMonte.jpg', alt: 'Bolillos', label: 'Elabora tu pastel' },
    { id: 3, src: '/images/PeñaZumate.jpeg', alt: 'Peña Zumate', label: 'La Peña del Zumate' },
    { id: 4, src: '/images/minardm.jpg', alt: 'Mina', label: 'Mina de Acosta' },
    { id: 6, src: '/images/ruedardm.jpg', alt: 'Rueda', label: 'Mina La Dificultad' },
    { id: 7, src: '/images/UniversidadMonte.jpg', alt: 'Universidad Monte', label: 'Museo Casa Grande' },
    { id: 8, src: '/images/Callejon.jpg', alt: 'Callejon', label: 'Callejon de los artistas' },
    { id: 9, src: '/images/CascadaBandola.png', alt: 'Cascada de Bandola', label: 'Cascada de Bandola' },
    { id: 10, src: '/images/ArtesaniasMonte.jpg', alt: 'Artesianias Monte', label: 'Compra artesanía y productos regionales' },
  ];

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
    { id: 1, src: '/images/hoteles/Cabañas.jpg', alt: 'Carnaval', label: 'Carnaval de la Montaña' },
    { id: 2, src: '/images/hoteles/Camas.jpg', alt: 'Fuegos', label: 'Fuegos Artificiales' },
    { id: 3, src: '/images/hoteles/HotelBoutique.jpg', alt: 'Hiloche', label: 'Hiloche bailable' },
    { id: 4, src: '/images/hoteles/HotelParaisoReal.jpg', alt: 'Festividad', label: 'Santo Patrono' },
    { id: 5, src: '/images/hoteles/HotelPosadaInterior.jpg', alt: 'Pueblo', label: 'Pueblo Mágico' },
    { id: 6, src: '/images/hoteles/HotelPosadaReal.jpg', alt: 'Paste', label: 'Festival Paste' },
    { id: 7, src: '/images/hoteles/MineraldelMonte.jpg', alt: 'Joyeria', label: 'Exposición Joyeria Plata' },
    { id: 8, src: '/images/hoteles/MineralMonteInterior.jpg', alt: 'Plata', label: 'Exposición Plata' },
    { id: 9, src: '/images/hoteles/PanoramicaRM.jpg', alt: 'Semana', label: 'Semana Santa' },
    { id: 10, src: '/images/hoteles/SpaHolistico.jpg', alt: 'Zelontla', label: 'Zelontla' },
  ];

  const restaurantsImages = [
    { id: 1, src: '/images/restaurants/Restaurante01.jpg', alt: 'Carnaval', label: 'Carnaval de la Montaña' },
    { id: 2, src: '/images/restaurants/02.jpg', alt: 'Fuegos', label: 'Fuegos Artificiales' },
    { id: 3, src: '/images/restaurants/03.jpg', alt: 'Hiloche', label: 'Hiloche bailable' },
    { id: 4, src: '/images/restaurants/04.jpg', alt: 'Festividad', label: 'Santo Patrono' },
    { id: 5, src: '/images/restaurants/05.jpg', alt: 'Pueblo', label: 'Pueblo Mágico' },
    { id: 6, src: '/images/restaurants/06.jpg', alt: 'Paste', label: 'Festival Paste' },
    { id: 7, src: '/images/restaurants/07.jpg', alt: 'Joyeria', label: 'Exposición Joyeria Plata' },
    { id: 8, src: '/images/restaurants/08.jpg', alt: 'Plata', label: 'Exposición Plata' },
    { id: 9, src: '/images/restaurants/09.jpg', alt: 'Semana', label: 'Semana Santa' },
    { id: 10, src: '/images/restaurants/10.jpg', alt: 'Zelontla', label: 'Zelontla' },
  ];

  const toursImages = [
    { id: 1, src: '/images/tours/1primasmas_basalticos.jpg', alt: 'Carnaval', label: 'Carnaval de la Montaña' },
    { id: 2, src: '/images/tours/caption.jpg', alt: 'Fuegos', label: 'Fuegos Artificiales' },
    { id: 3, src: '/images/tours/panteon-ingles.jpg', alt: 'Hiloche', label: 'Hiloche bailable' },
    { id: 4, src: '/images/tours/prismas-cascada.jpg', alt: 'Festividad', label: 'Santo Patrono' },
    { id: 5, src: '/images/tours/prismas1.jpg', alt: 'Pueblo', label: 'Pueblo Mágico' },
    { id: 6, src: '/images/tours/real-del-monte2.jpg', alt: 'Paste', label: 'Festival Paste' },
    { id: 7, src: '/images/tours/real-del-monte.jpg', alt: 'Joyeria', label: 'Exposición Joyeria Plata' },
    { id: 8, src: '/images/tours/tm_museos.jpg', alt: 'Plata', label: 'Exposición Plata' },
    { id: 9, src: '/images/tours/tranvia-real.jpg', alt: 'Semana', label: 'Semana Santa' },
    { id: 10, src: '/images/tours/turibus-realdelmonte.jpg', alt: 'Zelontla', label: 'Zelontla' },
  ];

  return (
      <div className="bg-gradient-to-r from-black via-black-900 via-105% to-black-500 top-10% to-black relative">
          <div className="absolute inset-y-0 left-0 w-200 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <section className="mb-16 relative">
        <FadeSlider
          title="Festividades"
          images={festsImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      <section className="mb-16 relative">
        <FadeSlider
          title="Atractivos"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      <section className="mb-16 relative">
        <FadeSlider
          title="Hoteles"
          images={hotelesImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      <section className="mb-16 relative">
        <FadeSlider
          title="Restaurantes"
          images={restaurantsImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      <section className="relative">
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