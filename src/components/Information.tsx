// src/components/RealDelMonteInfo.tsx
import React from "react";

const Information: React.FC = () => {
  return (
    <div className="bg-black text-white px-8 py-20 md:pl-24 md:pr-16 min-h-screen">
      {/* Título centrado */}
      <h1 className="text-4xl md:text-3xl pl-30 font-bold text-center mb-10">
        Vive su mágia
      </h1>
      <br />
      <br />
      {/* Párrafo introductorio centrado */}
      <p className="max-w-5xl mx-auto text-gray-300 text-lg pl-50 leading-relaxed  mb-16">
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
};

export default Information;
