import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity6 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-07');
  if (!activity) return <div>Actividad no encontrada</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${activity.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Volver */}
        <div className="mb-6">
          <Link
            to="/actividades"
            className="inline-flex items-center gap-2 font-mono text-[#d4a574]/70 hover:text-[#cc6633] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice de actividades
          </Link>
        </div>

        {/* Título */}
        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {activity.title}
        </h1>

        {/* Botón PDF */}
        <div className="mb-6 flex items-center justify-between gap-4">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Descargar PDF
          </a>
        </div>

        {/* 1. Introducción */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">Introducción</h3>
          <div className="intro text-[#d4a574]/85 font-mono leading-relaxed">
            La actividad analiza el caso real de la captura de “Oxymonster”, 
            considerado uno de los mayores traficantes de drogas en la dark web.
            A través del estudio del video y la investigación presentada,
            se examinan los mecanismos operativos del mercado Dream Market,
            el uso de criptomonedas, el sistema escrow, el mixer y las técnicas
            de anonimato utilizadas en entornos clandestinos.
            <br /><br />
            El caso permite comprender cómo las fuerzas del orden lograron
            vincular actividad digital aparentemente anónima con una identidad
            real, evidenciando tanto las capacidades forenses actuales como
            los errores operativos del propio delincuente.
          </div>
        </div>

        {/* 2. Desarrollo técnico */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-3">2. Desarrollo técnico</h3>

          <div className="space-y-6">

            {[
              {
                title: 'Inicio de la investigación',
                content:
                  'La DEA fue la agencia que inició las investigaciones contra la red de tráfico en la dark web. La operación que permitió cerrar el mercado principal fue conocida como “Bayoneta”.'
              },
              {
                title: 'Mercado principal',
                content:
                  'Dream Market fue identificado como el principal mercado malicioso activo en ese momento, especializado en la venta de drogas. La reputación de los vendedores se basaba en un sistema de reseñas con estrellas otorgadas por los compradores.'
              },
              {
                title: 'Droga principal',
                content:
                  'La principal sustancia comercializada por Oxymonster era oxicodona.'
              },
              {
                title: 'Sistema Escrow',
                content:
                  'El sistema escrow consistía en un mecanismo donde el dinero del comprador se mantenía retenido por la plataforma hasta que la transacción era completada exitosamente.'
              },
              {
                title: 'Proceso “The Mixer”',
                content:
                  'El mixer permitía mezclar transacciones de criptomonedas para ocultar el rastro financiero y dificultar el seguimiento por parte de autoridades.'
              },
              {
                title: 'Actividad criminal',
                content:
                  'Oxymonster inició sus actividades alrededor de mayo de 2015. En aproximadamente siete meses logró obtener el rol de administrador del mercado.'
              },
              {
                title: 'Error operativo',
                content:
                  'Uno de sus principales errores fue reutilizar información vinculada a direcciones de Bitcoin asociadas con servicios donde utilizó su nombre real.'
              },
              {
                title: 'Identificación y captura',
                content:
                  'El nombre real del sospechoso era Gal Vallerius. Las autoridades utilizaron análisis lingüístico y evidencia digital para vincularlo con la identidad en línea.'
              },
              {
                title: 'Prueba definitiva',
                content:
                  'La prueba clave fue encontrar la llave PGP asociada a Oxymonster en la laptop incautada, lo que permitió establecer el vínculo técnico definitivo.'
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1a1a1a]/40 border border-[#d4a574]/20 p-5"
              >
                <h4 className="text-md font-bold text-[#d4a574] mb-2">
                  {item.title}
                </h4>
                <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* 3. Reflexión */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-[#cc6633] mb-2">3. Reflexión</h3>
          <p className="text-sm font-mono text-[#d4a574]/75 leading-relaxed">
            El caso demuestra que el anonimato en la dark web no es absoluto.
            Aunque herramientas como criptomonedas, mixers y cifrado PGP
            proporcionan una capa de protección, los errores humanos,
            la reutilización de datos y la correlación de patrones lingüísticos
            pueden romper esa supuesta invisibilidad.
            <br /><br />
            Desde una perspectiva de seguridad informática, el caso evidencia
            la importancia del análisis forense digital, la cooperación
            internacional y el uso de inteligencia técnica avanzada para
            combatir el crimen organizado en entornos digitales.
            <br /><br />
            También resalta que en ciberseguridad el factor humano sigue siendo
            el punto más vulnerable, incluso en operaciones altamente sofisticadas.
          </p>
        </div>
        {/* Navegación inferior */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link
            to="/actividades"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al índice
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Activity6;