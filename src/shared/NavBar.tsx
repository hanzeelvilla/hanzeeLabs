import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 p-4 text-white">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-wide">
          <a href="/">
            Hanzee
            <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Labs
            </span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden"
          aria-label="Menu desplegable"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-8 w-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          <li className="cursor-pointer transition hover:text-blue-400">
            <a href="#servicios">Servicios</a>
          </li>
          <li className="cursor-pointer transition hover:text-blue-400">
            <a href="#nosotros">Quienes somos</a>
          </li>
          <li className="cursor-pointer transition hover:text-blue-400">
            <a href="#faq">Preguntas Frecuentes</a>
          </li>
          <li className="cursor-pointer transition hover:text-blue-400">
            <a href="#contactso">Contacto</a>
          </li>
          <li className="transform cursor-pointer rounded bg-linear-to-r from-blue-500 to-purple-600 px-5 py-2 shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700">
            <a href="#cotizar">Solicitar Cotización</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-4 rounded-lg bg-slate-800 p-4 md:hidden">
          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Servicios
          </a>
          <a
            href="#nosotros"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Quienes somos
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Contacto
          </a>

          <div onClick={() => setIsOpen(false)}>
            <a
              href="#cotizar"
              className="block w-full rounded bg-linear-to-r from-blue-500 to-purple-600 py-2 text-center transition hover:from-blue-600 hover:to-purple-700"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
