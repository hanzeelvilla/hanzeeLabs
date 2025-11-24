import { Link } from "react-router-dom";
import printerImg from "../assets/printer.png";
import keychainsImg from "../assets/compativeKeyChains.jpeg";
import handImg from "../assets/hand.jpeg";
import spotifyImg from "../assets/spotifyKeychain.jpeg";
import reactVideo from "../assets/reactKeychain.gif";

export const Services = () => {
  return (
    <div className="min-h-screen pb-12 text-white">
      <div className="relative mx-auto mb-24 max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="animate-fade-in-left z-10">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
              Soluciones Integrales en <br />
              <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Tecnología 3D
              </span>
            </h1>
            <p className="mb-8 text-lg text-slate-400">
              Desde la conceptualización de una idea hasta el producto final en
              tus manos. Ofrecemos servicios de impresión, diseño y acabados
              profesionales para hobbistas, ingenieros y empresas.
            </p>
            <Link
              to="/cotizar"
              className="inline-block w-full rounded-full bg-linear-to-r from-blue-500 to-purple-600 px-8 py-3 text-center font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 md:w-auto"
            >
              Cotizar Proyecto
            </Link>
          </div>

          <div className="animate-float relative flex justify-center">
            <div className="absolute inset-0 m-auto h-64 w-64 rounded-full bg-blue-600/20 blur-3xl filter md:h-96 md:w-96"></div>
            <img
              src={printerImg}
              alt=""
              className="relative z-10 w-full max-w-md drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-24 px-6">
        <section>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8 shadow-xl backdrop-blur-sm md:p-12">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Impresión 3D <span className="text-blue-500">Bajo Demanda</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-400">
              ¿Ya tienes tu archivo listo? Nosotros nos encargamos de
              materializarlo. Simplemente envíanos tu archivo{" "}
              <strong>.STL</strong> o <strong>.OBJ</strong> y nosotros
              configuramos la impresión con los parámetros óptimos para
              garantizar resistencia y calidad visual.
            </p>
            <p className="mb-8 text-slate-400">
              Contamos con una granja de impresoras calibradas para manejar
              diversos volúmenes de producción, desde prototipos únicos hasta
              series cortas de manufactura.
            </p>

            <div className="mt-8">
              <p className="mb-4 text-sm font-semibold tracking-wider text-slate-300 uppercase">
                Materiales y Colores Disponibles
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "PLA (Estándar)",
                  "PETG (Resistente)",
                  "TPU (Flexible)",
                  "ABS (Térmico)",
                  "Resina (Alto Detalle)",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-blue-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Cuéntanos tu idea",
                  desc: "Envíanos bocetos, fotos o medidas de referencia.",
                },
                {
                  step: "2",
                  title: "Modelado 3D",
                  desc: "Creamos la geometría digital utilizando software CAD profesional.",
                },
                {
                  step: "3",
                  title: "Validación",
                  desc: "Te enviamos renders y vistas previas para tu aprobación.",
                },
                {
                  step: "4",
                  title: "Entrega",
                  desc: "Recibes el archivo .STL listo para imprimir o la pieza física.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-purple-600/50 bg-purple-600/20 text-xl font-bold text-purple-400">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
              Diseño 3D y <span className="text-purple-500">Modelado</span>
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-slate-400">
              No necesitas ser un experto en tecnología para crear algo
              increíble. Nuestro servicio de diseño parte desde cero: tú pones
              la idea, nosotros la técnica.
            </p>
            <p className="mb-6 text-slate-400">
              Este servicio es ideal para <strong>emprendedores</strong> que
              necesitan prototipar un producto,
              <strong>cosplayers</strong> que buscan accesorios a medida, o
              cualquier persona que necesite reparar una pieza plástica rota que
              ya no se vende en tiendas (ingeniería inversa).
            </p>
          </div>
        </section>

        <section>
          <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 shadow-xl backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-center p-8 md:p-12">
                <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
                  Post-procesado y{" "}
                  <span className="text-green-400">Acabados</span>
                </h2>
                <p className="mb-6 text-lg text-slate-400">
                  La impresión 3D es solo el comienzo. Llevamos tus piezas al
                  siguiente nivel eliminando las líneas de capa y aplicando
                  tratamientos superficiales profesionales.
                </p>

                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-green-400" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Lijado y suavizado de capas
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Recubrimiento con Resina Epoxi (Efecto cristal)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Imprimación y preparación para pintura
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Pintura detallada (aerógrafo o a mano)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-400" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Ensamblaje de piezas múltiples
                  </li>
                </ul>
              </div>

              <div className="relative h-full min-h-[300px] bg-slate-800">
                <img
                  src={keychainsImg}
                  alt="Comparativa de llavero impreso: acabado con resina epoxi brillante vs acabado mate natural"
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity duration-500 hover:opacity-100"
                />
                <div className="absolute bottom-4 left-4 flex gap-4">
                  <div className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                    Con Resina Epoxi <span aria-hidden="true">✨</span>
                  </div>
                  <div className="rounded-full border border-white/20 bg-black/70 px-3 py-1 text-xs font-bold text-slate-300 backdrop-blur-md">
                    Acabado Natural
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECCIÓN 4: PRODUCTOS EN VENTA --- */}
        <section>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Nuestros <span className="text-pink-500">Productos</span>
            </h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Explora nuestra colección de diseños originales listos para
              enviar. Desde decoración hasta accesorios funcionales.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src={handImg}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt=""
                />
                <div className="absolute top-3 right-3 rounded border border-white/10 bg-black/60 px-2 py-1 text-xs font-bold text-white backdrop-blur-md">
                  Mejor Vendido
                </div>
              </div>
              <div className="p-6">
                <p className="mb-2 text-lg font-bold text-white">
                  Mano de la serie Wednesday
                </p>
                <p className="mb-4 text-sm text-slate-400">
                  Impreso en PLA de alta calidad y pintado a mano con detalles
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-pink-400">
                    $50 MXN
                  </span>
                  <button className="rounded-lg bg-white px-3 py-1 text-sm font-medium text-black transition hover:bg-pink-500 hover:text-white">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src={reactVideo}
                  className="absolute inset-0 h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  alt=""
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-lg font-bold text-white">
                  Llavero NFC React
                </p>
                <p className="mb-4 text-sm text-slate-400">
                  Accesorio ideal para desarrolladores con NFC incluido para
                  acceder a tu portafolio.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-400">
                    $65 MXN
                  </span>
                  <button className="rounded-lg bg-white px-3 py-1 text-sm font-medium text-black transition hover:bg-blue-500 hover:text-white">
                    Ver más
                  </button>
                </div>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10">
              <div className="relative h-64 w-full overflow-hidden bg-slate-800">
                <img
                  src={spotifyImg}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt=""
                />
              </div>
              <div className="p-6">
                <p className="mb-2 text-lg font-bold text-white">
                  Llaveros Spotify
                </p>
                <p className="mb-4 text-sm text-slate-400">
                  Personalizados con tu canción favorita. Escanea el código y
                  reproduce al instante.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-400">
                    $120 MXN
                  </span>
                  <button className="rounded-lg bg-white px-3 py-1 text-sm font-medium text-black transition hover:bg-green-500 hover:text-white">
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
