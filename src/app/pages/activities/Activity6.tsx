import React from 'react';
import { ACTIVITIES } from '@/app/data/activities';

const Activity6 = () => {
  const activity = ACTIVITIES.find((a) => a.id === 'act-06');
  if (!activity) return <div>Actividad no encontrada</div>;

  const pdfUrl = `${import.meta.env.BASE_URL}pdfs/${activity.pdfFile}`;

  return (
    <section className="pt-28 pb-16 bg-black/95 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-2xl sm:text-3xl font-mono text-[#d4a574] mb-6">
          {activity.title}
        </h1>

        {/* Botón PDF */}
        <div className="mb-6">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#cc6633]/20 border border-[#cc6633] text-[#cc6633] font-mono hover:bg-[#cc6633]/30 transition-all"
          >
            Descargar PDF
          </a>
        </div>

        {/* INTRODUCCIÓN */}
        <h3 className="text-lg font-bold text-[#cc6633] mb-2">Introducción</h3>
        <div className="intro text-[#d4a574] mb-8">
          En esta actividad se implementa una VPN IPSec sitio a sitio entre dos routers 
          simulando la interconexión segura de dos redes privadas a través de una red pública.
          El objetivo es garantizar confidencialidad, integridad y autenticación del tráfico
          mediante la configuración de Fase 1 (ISAKMP) y Fase 2 (IPSec).
        </div>

        {/* DESARROLLO TÉCNICO */}
        <div className="space-y-8">

          <h3 className="text-lg font-bold text-[#cc6633]">
            Desarrollo técnico
          </h3>

          {/* 1 Configuración inicial */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              1. Configuración inicial
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Se configuraron direcciones IP en cada router y se establecieron rutas estáticas 
              mediante el comando <span className="text-[#cc6633]">ip route</span> 
              para permitir comunicación entre redes remotas.
              (Ver topología y configuración inicial en el PDF página 2).
            </p>
          </div>

          {/* 2 Licencia */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              2. Habilitación de licencia Securityk9
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Se activó el paquete de seguridad mediante:
            </p>
            <pre className="bg-[#1a1a1a] p-4 text-[#cc6633] text-sm overflow-x-auto">
              license boot module c1900 technology-package securityk9<br />
              copy run start<br />
              reload
            </pre>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Esto habilita las funcionalidades necesarias para implementar IPSec.
            </p>
          </div>

          {/* 3 ACL */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              3. Implementación de ACL
            </h4>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Se creó una lista de acceso extendida para definir el tráfico interesante:
            </p>
            <pre className="bg-[#1a1a1a] p-4 text-[#cc6633] text-sm overflow-x-auto">
              access-list 100 permit ip 192.168.1.0 0.0.0.255 192.168.3.0 0.0.0.255
            </pre>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Esta ACL define qué tráfico activará el túnel IPSec.
            </p>
          </div>

          {/* FASE 1 */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              4. Fase 1 – ISAKMP Policy
            </h4>
            <pre className="bg-[#1a1a1a] p-4 text-[#cc6633] text-sm overflow-x-auto">
              crypto isakmp policy 10<br />
              encryption aes 256<br />
              authentication pre-share<br />
              group 5
            </pre>
            <p className="text-sm font-mono text-[#d4a574]/75">
              En esta fase se establecen los parámetros de negociación segura:
              cifrado AES-256, autenticación con clave compartida y grupo Diffie-Hellman 5.
            </p>
          </div>

          {/* FASE 2 */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              5. Fase 2 – IPSec Transform Set
            </h4>
            <pre className="bg-[#1a1a1a] p-4 text-[#cc6633] text-sm overflow-x-auto">
              crypto ipsec transform-set R1-R2 esp-aes 256 esp-sha-hmac
            </pre>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Se define cómo se protegerá el tráfico dentro del túnel: 
              cifrado AES-256 e integridad SHA-HMAC.
            </p>
          </div>

          {/* Crypto Map */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              6. Creación de Crypto Map
            </h4>
            <pre className="bg-[#1a1a1a] p-4 text-[#cc6633] text-sm overflow-x-auto">
              crypto map IPSEC-MAP 10 ipsec-isakmp<br />
              set peer 209.165.200.1<br />
              set transform-set R1-R2<br />
              match address 100
            </pre>
            <p className="text-sm font-mono text-[#d4a574]/75">
              El crypto map vincula peer, transform-set y ACL, 
              definiendo la política completa del túnel.
            </p>
          </div>

          {/* Aplicación */}
          <div>
            <h4 className="text-md font-bold text-[#d4a574]">
              7. Aplicación del mapa criptográfico
            </h4>
            <pre className="bg-[#1a1a1a] p-4 text-[#cc6633] text-sm overflow-x-auto">
              interface g0/0<br />
              crypto map IPSEC-MAP
            </pre>
            <p className="text-sm font-mono text-[#d4a574]/75">
              Finalmente, se aplica el mapa criptográfico a la interfaz,
              activando la VPN IPSec.
            </p>
          </div>

        </div>

        {/* REFLEXIÓN */}
        <div className="mt-10">
          <h3 className="text-lg font-bold text-[#cc6633]">
            Reflexión
          </h3>
          <p className="text-sm font-mono text-[#d4a574]/75">
            La implementación de IPSec demuestra cómo la seguridad en redes 
            no depende únicamente de cifrado, sino de una correcta configuración 
            estructurada por fases. La separación entre Fase 1 y Fase 2 permite 
            negociar parámetros criptográficos antes de establecer el túnel.
            Este modelo refleja cómo las organizaciones pueden proteger tráfico 
            sensible en entornos WAN o Internet, asegurando confidencialidad, 
            integridad y autenticación en comunicaciones críticas.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Activity6;