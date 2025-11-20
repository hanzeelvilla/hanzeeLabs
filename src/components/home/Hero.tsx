export const Hero = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 text-center text-white">
      <h1 className="mb-4 text-5xl font-extrabold md:text-8xl">
        Hanzee
        <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Labs
        </span>
      </h1>
      <p className="md:max-w text-xl font-light text-gray-300 md:text-3xl">
        Damos vida a tus ideas con{" "}
        <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text font-bold text-transparent">
          Diseño e Impresión 3D
        </span>
      </p>

      <div className="mt-4 flex flex-col items-center justify-center gap-4 text-sm font-medium text-slate-400 md:flex-row md:gap-8 md:text-lg">
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
        <button className="w-full cursor-pointer rounded-full border border-slate-600 px-8 py-3 font-semibold text-slate-300 transition-all duration-300 hover:bg-slate-800 hover:text-white hover:shadow-lg md:w-auto">
          Servicios
        </button>
        <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-blue-600 to-purple-600 px-8 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg md:w-auto">
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
};
