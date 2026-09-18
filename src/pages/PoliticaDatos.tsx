import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PoliticaDatos = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm tracking-wide">Volver al inicio</span>
          </Link>
          <div className="text-right">
            <h2 className="text-lg font-bold tracking-wider">SABINE</h2>
            <p className="text-xs opacity-70 tracking-wide">BISTRÓ &amp; LOUNGE</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <article className="space-y-6 leading-relaxed">
          <header className="mb-10 pb-6 border-b border-border">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Política de Tratamiento de Datos Personales
            </h1>
            <p className="text-sm opacity-70">
              <strong>Fecha de última actualización:</strong> 18 de septiembre de 2026
            </p>
            <p className="text-sm opacity-70">
              <strong>Vigencia:</strong> desde la fecha de publicación
            </p>
          </header>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Identificación del Responsable del Tratamiento</h2>
            <ul className="space-y-1 list-none pl-0">
              <li><strong>Razón social:</strong> HOTELES DE LA ANTIGUA S.A.S (en adelante, "Sabine").</li>
              <li><strong>NIT:</strong> 900.698.474-8</li>
              <li><strong>Domicilio:</strong> Centro Comercial La Serrezuela, Cartagena de Indias, Bolívar, Colombia.</li>
              <li><strong>Representante legal:</strong> Viviana Margarita Pallares, mayor de edad, identificada con cédula de ciudadanía No. 45.552.321, domiciliada en Cartagena, quien actúa en calidad de Apoderada General.</li>
              <li><strong>Correo electrónico de contacto:</strong> daniela.riveros@ghlhoteles.com</li>
              <li><strong>Teléfono / WhatsApp:</strong> +57 318 353 4907</li>
              <li><strong>Sitio web:</strong> https://sabinebistro.com</li>
            </ul>
            <p className="mt-4">
              Sabine Bistró &amp; Lounge es un restaurante ubicado en Cartagena de Indias que ofrece propuestas de cocina bistró americana y experiencias de bar en un ambiente contemporáneo. Su operación está a cargo de HOTELES DE LA ANTIGUA S.A.S.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Marco legal</h2>
            <p>
              Esta política se rige por la <strong>Ley 1581 de 2012</strong>, el <strong>Decreto Reglamentario 1377 de 2013</strong>, la <strong>Circular Externa 002 de 2015 de la Superintendencia de Industria y Comercio</strong> y demás normas concordantes que regulen la protección de datos personales en Colombia.
            </p>
            <p className="mt-3">
              Al utilizar los canales digitales de Sabine (sitio web, sistema de reservas, WhatsApp, redes sociales, correo electrónico) o al visitar nuestras instalaciones y proporcionar datos personales, el Titular declara conocer y aceptar los términos de esta política.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Definiciones</h2>
            <p>Para efectos de esta política se entiende por:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Titular:</strong> persona natural cuyos datos personales son objeto de tratamiento.</li>
              <li><strong>Responsable del Tratamiento:</strong> Sabine, quien decide sobre la base de datos y su tratamiento.</li>
              <li><strong>Encargado del Tratamiento:</strong> persona natural o jurídica que realiza el tratamiento de datos por cuenta del Responsable (por ejemplo, proveedores tecnológicos).</li>
              <li><strong>Dato personal:</strong> cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
              <li><strong>Dato sensible:</strong> aquel que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación (salud, orientación sexual, datos biométricos, entre otros).</li>
              <li><strong>Tratamiento:</strong> cualquier operación sobre datos personales (recolección, almacenamiento, uso, circulación, supresión).</li>
              <li><strong>Autorización:</strong> consentimiento previo, expreso e informado del Titular para el tratamiento de sus datos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Datos personales que recolectamos</h2>
            <p>Dependiendo del canal y del tipo de interacción, Sabine puede recolectar los siguientes datos:</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4.1. Datos de identificación y contacto</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Nombre y apellidos.</li>
              <li>Número de teléfono / WhatsApp.</li>
              <li>Correo electrónico.</li>
              <li>País y ciudad de residencia (opcional).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">4.2. Datos asociados a reservas</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Fecha, hora y número de personas de la reserva.</li>
              <li>Preferencias o solicitudes especiales (ubicación en salón, alergias alimentarias, celebraciones).</li>
              <li>Historial de reservas y comportamiento (asistencia, cancelaciones, no-shows).</li>
              <li>Comentarios adicionales que el cliente incluya en el formulario.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">4.3. Datos de navegación y dispositivo</h3>
            <p>Recolectados de forma automática al visitar el sitio web:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Dirección IP.</li>
              <li>Tipo de navegador y dispositivo.</li>
              <li>Sistema operativo.</li>
              <li>Páginas visitadas, tiempo de permanencia y clics.</li>
              <li>Fuente de tráfico (origen de la visita: buscador, red social, anuncio pagado, enlace directo).</li>
              <li>Identificadores publicitarios y de sesión (cookies, píxeles, <code>gclid</code>, <code>fbclid</code>, parámetros <code>utm_*</code>, entre otros).</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">4.4. Datos de comunicación</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Contenido de mensajes intercambiados por WhatsApp, correo electrónico o formularios de contacto.</li>
              <li>Reseñas, calificaciones y comentarios públicos publicados en Google Business Profile, redes sociales u otras plataformas de opinión.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">4.5. Datos sensibles</h3>
            <p>
              Sabine <strong>no solicita ni recolecta datos sensibles</strong> de forma deliberada. Si el Titular voluntariamente comparte información sensible (por ejemplo, alergias alimentarias o condiciones médicas al momento de reservar), esta se trata con estrictas medidas de seguridad y únicamente con la finalidad de garantizar su experiencia y seguridad durante la visita.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">4.6. Datos de menores de edad</h3>
            <p>
              El tratamiento de datos personales de menores de edad se realiza únicamente cuando existe autorización expresa de sus padres o representantes legales, en cumplimiento del artículo 12 del Decreto 1377 de 2013.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Finalidades del tratamiento</h2>
            <p>Los datos personales recolectados serán tratados con las siguientes finalidades:</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">5.1. Operación del servicio</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Gestionar reservas y confirmar disponibilidad.</li>
              <li>Enviar recordatorios y confirmaciones de reserva por WhatsApp, correo electrónico o SMS.</li>
              <li>Atender solicitudes especiales, preferencias alimentarias y coordinaciones logísticas.</li>
              <li>Contactar al Titular en caso de novedades relacionadas con su reserva.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">5.2. Atención al cliente</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Responder consultas, sugerencias, quejas y reclamos.</li>
              <li>Realizar seguimiento a la experiencia del cliente.</li>
              <li>Gestionar respuestas a reseñas públicas.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">5.3. Mejora del servicio y análisis estadístico</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Analizar el uso del sitio web y de nuestros canales digitales.</li>
              <li>Medir la efectividad de nuestras campañas de comunicación y marketing.</li>
              <li>Generar reportes agregados y estadísticas anónimas para la toma de decisiones de negocio.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">5.4. Publicidad digital y segmentación</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Crear y gestionar audiencias publicitarias en plataformas de terceros (Google Ads, Meta Ads) mediante el envío de correos electrónicos y números de teléfono en formato <strong>hash SHA-256</strong>, técnica que impide la recuperación de los datos originales por parte de dichas plataformas.</li>
              <li>Generar audiencias similares o de comportamiento equivalente ("lookalike") para llegar a personas con perfiles afines a los clientes actuales.</li>
              <li>Medir la efectividad de campañas y atribuir conversiones publicitarias.</li>
              <li>Excluir a clientes existentes de determinadas campañas cuando corresponda.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">5.5. Comunicaciones comerciales</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Enviar información sobre nuevos platos, propuestas gastronómicas, eventos, promociones y experiencias especiales, siempre que el Titular haya autorizado expresamente estas comunicaciones.</li>
              <li>El Titular podrá solicitar en cualquier momento la exclusión de bases de datos de marketing.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">5.6. Cumplimiento legal</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Cumplir obligaciones tributarias, contables y regulatorias aplicables al establecimiento.</li>
              <li>Atender requerimientos de autoridades administrativas o judiciales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Derechos del Titular</h2>
            <p>De acuerdo con el artículo 8 de la Ley 1581 de 2012, el Titular de los datos personales tiene los siguientes derechos:</p>
            <ol className="list-decimal pl-6 mt-3 space-y-2">
              <li><strong>Conocer, actualizar y rectificar</strong> sus datos personales cuando sean incompletos, inexactos, fraccionados o induzcan a error.</li>
              <li><strong>Solicitar prueba de la autorización</strong> otorgada a Sabine, salvo cuando la ley disponga que no es necesaria.</li>
              <li><strong>Ser informado</strong>, previa solicitud, sobre el uso que se ha dado a sus datos personales.</li>
              <li><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC) por infracciones a la normativa vigente.</li>
              <li><strong>Revocar la autorización</strong> y/o solicitar la <strong>supresión</strong> de sus datos cuando no exista un deber legal o contractual que obligue a conservarlos.</li>
              <li><strong>Acceder gratuitamente</strong> a los datos personales que hayan sido objeto de tratamiento.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Procedimiento para el ejercicio de los derechos</h2>
            <p>El Titular podrá ejercer sus derechos a través de los siguientes canales:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Correo electrónico:</strong> daniela.riveros@ghlhoteles.com</li>
              <li><strong>WhatsApp:</strong> +57 318 353 4907</li>
              <li><strong>Presencial:</strong> Centro Comercial La Serrezuela, Cartagena de Indias.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-2">Requisitos mínimos de la solicitud</h3>
            <ol className="list-decimal pl-6 space-y-1">
              <li>Nombre completo del Titular y datos de contacto.</li>
              <li>Copia del documento de identidad (o el número, si la solicitud es por WhatsApp/correo).</li>
              <li>Descripción clara y precisa de los datos personales sobre los cuales busca ejercer el derecho.</li>
              <li>Hechos que dan lugar al reclamo, si aplica.</li>
              <li>Documentos que soporten la solicitud, si es del caso.</li>
            </ol>

            <h3 className="text-xl font-semibold mt-6 mb-2">Plazos de respuesta (conforme a la Ley 1581)</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consultas:</strong> máximo <strong>diez (10) días hábiles</strong> contados desde la recepción. Si no fuera posible atenderla en ese término, se informará al interesado los motivos y la nueva fecha, que no superará <strong>cinco (5) días hábiles adicionales</strong>.</li>
              <li><strong>Reclamos:</strong> máximo <strong>quince (15) días hábiles</strong> contados desde el día siguiente a su recepción. Si no fuera posible atender el reclamo en ese término, se informará al interesado los motivos y la fecha en que se atenderá, que no superará <strong>ocho (8) días hábiles adicionales</strong>.</li>
            </ul>
            <p className="mt-3">
              Si el reclamo resulta incompleto, se requerirá al interesado dentro de los cinco (5) días siguientes a su recepción para que subsane las fallas. Transcurridos dos (2) meses sin respuesta del solicitante, se entenderá desistido el reclamo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Autorización</h2>
            <p>
              Al proporcionar sus datos personales a través de nuestros canales, el Titular autoriza de manera libre, previa, expresa e informada a Sabine para tratar sus datos personales conforme a las finalidades descritas en esta política.
            </p>
            <p className="mt-3">
              En el caso del formulario de reservas, la autorización se otorga al aceptar la casilla correspondiente antes de enviar el formulario. En canales presenciales o telefónicos, la autorización puede otorgarse de forma verbal, verificable o mediante conductas inequívocas del Titular que permitan concluir de manera razonable que otorgó su consentimiento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Encargados del Tratamiento y transferencia de datos</h2>
            <p>
              Para la operación del sitio web, el sistema de reservas y las herramientas de comunicación y análisis, Sabine se apoya en proveedores tecnológicos que actúan como <strong>Encargados del Tratamiento</strong>. Estos proveedores acceden a datos personales estrictamente para prestar el servicio contratado y están obligados contractualmente a cumplir con estándares de seguridad y confidencialidad equivalentes a los descritos en esta política.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-2">Principales Encargados y transferencias internacionales</h3>
            <div className="overflow-x-auto mt-3">
              <table className="min-w-full text-sm border border-border">
                <thead className="bg-muted">
                  <tr>
                    <th className="border border-border px-3 py-2 text-left">Proveedor</th>
                    <th className="border border-border px-3 py-2 text-left">Finalidad</th>
                    <th className="border border-border px-3 py-2 text-left">País</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-3 py-2">Precompro</td>
                    <td className="border border-border px-3 py-2">Sistema de reservas (widget web)</td>
                    <td className="border border-border px-3 py-2">Colombia</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Google LLC (Google Analytics, Google Ads, Google Business Profile)</td>
                    <td className="border border-border px-3 py-2">Analítica web, publicidad, gestión de reseñas</td>
                    <td className="border border-border px-3 py-2">Estados Unidos</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Meta Platforms, Inc. (Facebook, Instagram, WhatsApp Business)</td>
                    <td className="border border-border px-3 py-2">Publicidad, redes sociales y comunicación</td>
                    <td className="border border-border px-3 py-2">Estados Unidos</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Vercel Inc.</td>
                    <td className="border border-border px-3 py-2">Alojamiento del sitio web</td>
                    <td className="border border-border px-3 py-2">Estados Unidos</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Supabase Inc.</td>
                    <td className="border border-border px-3 py-2">Base de datos operativa de reservas y trazabilidad</td>
                    <td className="border border-border px-3 py-2">Estados Unidos</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-3 py-2">Google LLC (Google Workspace)</td>
                    <td className="border border-border px-3 py-2">Correo electrónico corporativo y ofimática</td>
                    <td className="border border-border px-3 py-2">Estados Unidos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Cuando exista <strong>transferencia internacional</strong> de datos personales hacia países que no cuenten con niveles adecuados de protección según los estándares fijados por la SIC, Sabine garantizará que dichas transferencias se realicen bajo cláusulas contractuales que aseguren un tratamiento conforme a la ley colombiana o bajo cualquiera de las excepciones previstas en el artículo 26 de la Ley 1581 de 2012 (por ejemplo, ejecución de un contrato con el Titular o autorización expresa e inequívoca del Titular).
            </p>
            <p className="mt-3">
              Sabine <strong>no vende, alquila ni comercializa</strong> bases de datos personales con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Cookies y tecnologías similares</h2>
            <p>
              El sitio web de Sabine utiliza <strong>cookies</strong> y tecnologías similares (píxeles de seguimiento, <code>localStorage</code>, identificadores publicitarios) con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Cookies estrictamente necesarias:</strong> permiten el funcionamiento del sitio (por ejemplo, mantener la sesión activa durante una reserva).</li>
              <li><strong>Cookies analíticas:</strong> Google Analytics 4 (GA4) para entender cómo se usa el sitio de forma agregada y anónima.</li>
              <li><strong>Cookies publicitarias:</strong> Meta Pixel y Google Ads para medir la efectividad de nuestras campañas y mostrar publicidad relevante en plataformas de terceros. Estas cookies pueden almacenar identificadores como <code>gclid</code>, <code>fbclid</code> y parámetros <code>utm_*</code>.</li>
              <li><strong>Cookies de terceros:</strong> proveedores como Precompro, YouTube o Instagram pueden establecer cookies propias cuando se cargan sus contenidos.</li>
            </ul>
            <p className="mt-3">
              El Titular puede configurar su navegador para bloquear o eliminar cookies en cualquier momento. Deshabilitar ciertas cookies puede limitar la funcionalidad del sitio (por ejemplo, la capacidad de completar una reserva).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Seguridad de la información</h2>
            <p>
              Sabine implementa medidas técnicas, humanas y administrativas razonables para proteger los datos personales contra adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento. Estas medidas incluyen, entre otras:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li>Transmisión de datos cifrada mediante HTTPS/TLS.</li>
              <li>Almacenamiento en bases de datos con acceso restringido y controlado por credenciales.</li>
              <li>Anonimización o seudonimización de datos utilizados para publicidad digital (por ejemplo, envío de correo y teléfono en formato <strong>hash SHA-256</strong> a plataformas publicitarias).</li>
              <li>Acuerdos de confidencialidad con empleados y proveedores.</li>
              <li>Revisión periódica de accesos y logs de actividad.</li>
            </ul>
            <p className="mt-3">
              Ningún sistema de transmisión o almacenamiento de información en internet es completamente seguro; por lo tanto, aunque Sabine se compromete a proteger los datos con las mejores prácticas del sector, no puede garantizar la seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Vigencia de la base de datos</h2>
            <p>
              Los datos personales del Titular serán conservados durante el tiempo necesario para cumplir con las finalidades para las cuales fueron recolectados y con las obligaciones legales aplicables. Una vez cumplida la finalidad y salvo obligación legal en contrario, los datos serán eliminados o anonimizados de forma segura.
            </p>
            <p className="mt-3">Como referencia general:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Datos de reservas: hasta <strong>cinco (5) años</strong> para efectos de análisis operativo, atención al cliente y cumplimiento fiscal.</li>
              <li>Datos de facturación: los plazos exigidos por la normativa tributaria colombiana.</li>
              <li>Datos de marketing (si aplica autorización): hasta que el Titular solicite la exclusión de la base.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">13. Autoridad de control</h2>
            <p>
              El Titular podrá presentar quejas o denuncias por infracciones a la normativa de protección de datos personales ante la <strong>Superintendencia de Industria y Comercio (SIC)</strong>:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1">
              <li><strong>Dirección:</strong> Carrera 13 No. 27-00, Pisos 1, 3, 4, 5, 6, 7 y 10, Bogotá D.C.</li>
              <li><strong>Sitio web:</strong> <a href="https://www.sic.gov.co" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">https://www.sic.gov.co</a></li>
              <li><strong>Correo:</strong> contactenos@sic.gov.co</li>
            </ul>
            <p className="mt-3">
              Es requisito previo agotar el trámite de consulta o reclamo directamente ante Sabine antes de acudir a la SIC.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">14. Modificaciones a la política</h2>
            <p>
              Sabine podrá modificar esta política en cualquier momento para adaptarla a cambios normativos, operativos o tecnológicos. Las modificaciones se publicarán en esta misma página, indicando la fecha de la última actualización. Cuando el cambio sea sustancial en relación con la identificación del Responsable o con las finalidades del tratamiento, se comunicará al Titular por los canales habituales antes de su entrada en vigor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-8 mb-4">15. Contacto</h2>
            <p>
              Para cualquier consulta, solicitud o inquietud relacionada con esta política o con el tratamiento de sus datos personales, puede escribirnos a:
            </p>
            <div className="mt-4 p-4 bg-muted rounded border border-border">
              <p><strong>HOTELES DE LA ANTIGUA S.A.S</strong> — Sabine Bistró &amp; Lounge</p>
              <p>NIT 900.698.474-8</p>
              <p>Centro Comercial La Serrezuela, Cartagena de Indias, Bolívar, Colombia</p>
              <p>Correo: daniela.riveros@ghlhoteles.com</p>
              <p>WhatsApp: +57 318 353 4907</p>
              <p>Web: https://sabinebistro.com</p>
            </div>
          </section>

          <footer className="mt-12 pt-6 border-t border-border text-sm opacity-70 italic">
            Documento elaborado en cumplimiento de la Ley 1581 de 2012, el Decreto 1377 de 2013 y la Circular Externa 002 de 2015 de la Superintendencia de Industria y Comercio de Colombia.
          </footer>
        </article>
      </main>

      {/* Simple footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2025 Sabine Bistró &amp; Lounge. Todos los derechos reservados.
          </p>
          <Link to="/" className="text-sm mt-2 inline-block hover:opacity-80 transition-opacity underline">
            Volver al inicio
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default PoliticaDatos;
