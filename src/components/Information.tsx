import { forwardRef } from "react";
import FadeSlider from "./shared/Slider";

const Information = forwardRef<HTMLDivElement>((_, ref) => {
  console.log("Information renderizado, ref recibido:", ref);

  const sharedImages = [
    { id: 1, src: '/images/RealMonte2.jpg', alt: 'Real Monte', label: 'Descubre los rumbos' },
    { id: 2, src: '/images/BolillosDelMonte.jpg', alt: 'Bolillos', label: 'Elabora tu pastel' },
    { id: 3, src: '/images/PeñaZumate.jpeg', alt: 'Peña Zumate', label: 'La Peña del Zumate' },
    { id: 4, src: '/images/minardm.jpg', alt: 'Mina', label: 'Mina de Acosta' },
    { id: 6, src: '/images/ruedardm.jpg', alt: 'Rueda', label: 'Mina La Dificultad' },
    { id: 7, src: '/images/UniversidadMonte.jpg', alt: 'Universidad Monte', label: 'Museo Casa Grande' },
    { id: 8, src: '/images/Callejon.jpg', alt: 'Callejon', label: 'Callejon de los artistas' },
    { id: 9, src: '/images/CascadaBandola.png', alt: 'Cascada de Bandola', label: 'Cascada de Bandola' },
    { id: 10, src: '/images/ArtesaniasMonte.jpg', alt: 'Artesianias Monte', label: 'Compra artesanía' },
  ];


  return (
    <div
      ref={ref}
      className="bg-[radial-gradient(ellipse_at_center,_#1a1a1a_30%,_#000000_100%)] relative text-white ">

        <FadeSlider
        title="Atractivos"
       images={sharedImages}
       spaceBetween={60}
        slidesPerView={3}
       speed={600}
        />
      
      <h1 className="text-4xl pl-30 font-bold text-center mb-10">
        Vive su mágia
      </h1>
      <br />
      <br />
      <p className="max-w-5xl mx-auto text-gray-300 text-xl pl-50 leading-relaxed  mb-16">
        Muchas historias confluyen en este poblado de legado minero: sus casonas
        y <br /> construcciones de aire inglés se combinan con el olor a pastes
        y pan de pulque cocinados <br /> en sus hornos; mientras el frío y la
        neblina llegan por la tarde, cubriendo las chimeneas de <br /> las
        viejas minas y los altos pinos del panteón, donde reposan algunos de los
        mineros <br /> ingleses que aquí trabajaron y le dieron parte de la
        identidad a este poblado en la montaña <br /> de Hidalgo.
      </p>

      {/* Dos columnas */}
      <div className="max-w-6xl text-lg mx-auto grid md:grid-cols-2 gap-16 pl-67">
        {/* Columna izquierda */}
        <div>
          <h2 className=" font-bold mb-2">El motivo</h2>
          <p>Su pasado minero de Real del Monte</p>
          <p className="mb-2">
            En 1552 se descubrieron las primeras vetas de <br /> mineral en este
            pueblo.
          </p>
          <br />
          <p className="mb-2">
            Las minas son hoy museos históricos. <br /> Españoles, ingleses,
            mexicanos y <br /> norteamericanos las trabajaron en diferentes{" "}
            <br /> épocas.
          </p>
          <br />
          <p>
            El oro y la plata dieron gran riqueza a este <br /> lugar.
          </p>
        </div>

        {/* Columna derecha */}
        <div>
          <h2 className="text-lg font-bold mb-2">Autobús:</h2>
          <p className="mb-6">
            ADO, Flecha Roja y Futura <br /> llegan a Pachuca. De ahí, <br />{" "}
            dirígete al Mercado Benito <br /> Juárez donde salen los <br />{" "}
            colectivos a Real del Monte.
          </p>

          <h2 className="text-lg font-bold mb-2">Avión:</h2>
          <p>
            ADO conecta a Pachuca con el <br /> aeropuerto de CDMX.
          </p>
        </div>
      </div>
      <br />
      <br />
      <div className="mx-auto mt-12 max-w-4xl pl-35">
        <h2 className="text-4xl text-center font-bold mb-8">Imprescindibles</h2>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-30">
          <div className="flex items-center justify-center">
            <span className="text-5xl font-bold text-white mr-2 pb-10">1</span>
            <p className="text-lg">
              Recorrer el Museo <br /> de la Mina de la Dificultad.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-5xl font-bold text-white mr-2">2</span>
            <p className="text-lg">Probar <br /> pastes.</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-5xl font-bold text-white mr-2">3</span>
            <p className="text-lg">Conocer las tumbas <br /> del Panteón Inglés.</p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Information;
