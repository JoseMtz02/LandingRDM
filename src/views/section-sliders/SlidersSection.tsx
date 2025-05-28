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

  return (
      <div className="bg-gradient-to-r from-black via-gray-800 via-105% to-gray-500 top-10% to-black relative">
          <div className="absolute inset-y-0 left-0 w-200 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>
          
          <section className="mb-16 relative">
        <FadeSlider
          title="Festividades"
          images={sharedImages}
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
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      <section className="mb-16 relative">
        <FadeSlider
          title="Restaurantes"
          images={sharedImages}
          spaceBetween={60}
          slidesPerView={3}
          speed={600}
        />
      </section>

      <section className="relative">
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