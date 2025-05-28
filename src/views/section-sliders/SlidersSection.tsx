import React from 'react';
import FadeSlider from '../../components/shared/Slider';

const SlidersPage: React.FC = () => {
  const sharedImages = [
    { id: 1, src: '/images/RealMonte2.jpg', alt: 'Real Monte', label: 'Real del Monte' },
    { id: 2, src: '/images/BolillosDelMonte.jpg', alt: 'Bolillos', label: 'Bolillos del Monte' },
    { id: 3, src: '/images/PeñaZumate.jpeg', alt: 'Peña Zumate', label: 'Peña de Zumate' },
    { id: 4, src: '/images/minardm.jpg', alt: 'Mina', label: 'Mina del Monte' },
    { id: 6, src: '/images/ruedardm.jpg', alt: 'Rueda', label: 'Rueda' },
    { id: 7, src: '/images/UniversidadMonte.jpg', alt: 'Universidad Monte', label: 'Universidad del Monte' },
    { id: 8, src: '/images/Callejon.jpg', alt: 'Callejon', label: 'Callejon del Monte' },
    { id: 9, src: '/images/CascadaBandola.png', alt: 'Cascada de Bandola', label: 'Cascada de Bandola' },
    { id: 10, src: '/images/ArtesaniasMonte.jpg', alt: 'Artesianias Monte', label: 'Artesanias del Monte' },
  ];

  return (
      <div className=" bg-gradient-to-r from-black via-gray-800 via-105% to-gray-700 top-10% to-black">
          <section className="mb-16">
        <FadeSlider
          title="Festividades"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      {/* Sección Atractivos */}
      <section className="mb-16">
        <FadeSlider
          title="Atractivos"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      {/* Sección Hoteles (primera) */}
      <section className="mb-16">
        <FadeSlider
          title="Hoteles"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      {/* Sección Restaurantes */}
      <section className="mb-16">
        <FadeSlider
          title="Restaurantes"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      {/* Sección Hoteles (segunda) */}
      <section>
        <FadeSlider
          title="Hoteles"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>
    </div>
  );
};

export default SlidersPage;