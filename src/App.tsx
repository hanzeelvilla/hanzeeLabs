import { NavBar } from "./shared/NavBar";

export const App = () => {
  return (
    <div className="flex min-h-screen flex-col bg-linear-to-tr from-slate-900 via-blue-950 to-black">
      <NavBar />
      <div className="flex flex-1 flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="mb-4 text-5xl font-extrabold md:text-8xl">
          Hanzee
          <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Labs
          </span>
        </h1>
        <p className="text-xl font-light text-gray-300 md:max-w-2xl md:text-3xl">
          Damos vida a tus ideas con{" "}
          <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text font-bold text-transparent">
            Diseño e Impresión 3D
          </span>
        </p>

        <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium text-slate-400 md:flex-row md:gap-8 md:text-lg">
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Prototipado Rápido y Diseño a Medida
          </p>

          <span className="hidden text-slate-600 md:block">|</span>

          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            Acabados Profesionales
          </p>

          <span className="hidden text-slate-600 md:block">|</span>

          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
            Excelencia en Calidad
          </p>
        </div>

        <div className="mt-12 flex w-full flex-col gap-4 px-4 md:w-auto md:flex-row">
          <button className="w-full rounded-full border border-slate-600 px-8 py-3 font-semibold text-slate-300 transition hover:text-white hover:shadow-lg md:w-auto">
            Servicios
          </button>
          <button className="w-full rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:w-auto">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </div>
  );
};
