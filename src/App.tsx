import { NavBar } from "./shared/NavBar";

export const App = () => {
  return (
    <div className="bg-linear-to-tr from-slate-900 via-blue-950 to-black min-h-screen flex flex-col">
      <NavBar />
      <div className="flex justify-center items-center text-white flex-1 flex-col text-center px-6">
        <h1 className="text-5xl md:text-8xl font-extrabold mb-4">
          Hanzee
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
            Labs
          </span>
        </h1>
        <p className="text-xl md:text-3xl font-light text-gray-300 md:max-w-2xl">
          Damos vida a tus ideas con{" "}
          <span className="bg-clip-text font-bold text-transparent bg-linear-to-r from-blue-400 to-purple-600">
            Diseño e Impresión 3D
          </span>
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 text-slate-400 text-sm md:text-lg font-medium">
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Prototipado Rápido y Diseño a Medida
          </p>

          <span className="hidden md:block text-slate-600">|</span>

          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
            Acabados Profesionales
          </p>

          <span className="hidden md:block text-slate-600">|</span>

          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            Excelencia en Calidad
          </p>
        </div>
      </div>
    </div>
  );
};
