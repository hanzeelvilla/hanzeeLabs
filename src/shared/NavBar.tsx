import { useState } from "react";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 p-4 text-white">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <a href="/">
            Hanzee
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-600">
              Labs
            </span>
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-8 h-8"
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
              className="w-8 h-8"
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

        <ul className="hidden md:flex gap-6 items-center">
          <li className="hover:text-blue-400 cursor-pointer transition">
            <a href="#servicios">Servicios</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition">
            <a href="#nosotros">Quienes somos</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition">
            <a href="#faq">Preguntas Frecuentes</a>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition">
            <a href="#contacto">Contacto</a>
          </li>
          <li className="bg-linear-to-r from-blue-500 to-purple-600 px-5 py-2 rounded hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-md">
            <a href="#cotizar">Solicitar Cotización</a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-slate-800 p-4 rounded-lg">
          <a
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Servicios
          </a>
          <a
            href="#nosotros"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Quienes somos
          </a>
          <a
            href="#faq"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Preguntas Frecuentes
          </a>
          <a
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Contacto
          </a>

          <div onClick={() => setIsOpen(false)}>
            <a
              href="#cotizar"
              className="block w-full text-center bg-linear-to-r from-blue-500 to-purple-600 py-2 rounded hover:from-blue-600 hover:to-purple-700 transition"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
