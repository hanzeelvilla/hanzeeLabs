import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex flex-wrap items-center bg-slate-900 p-4 text-white">
      <div className="mr-auto text-2xl font-bold tracking-wide">
        <Link to="/">
          Hanzee
          <span className="bg-linear-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Labs
          </span>
        </Link>
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

      <nav>
        <ul className="hidden items-center gap-6 md:flex">
          <li className="cursor-pointer transition hover:text-blue-400">
            <Link to="/servicios">Servicios</Link>
          </li>
          <li className="cursor-pointer transition hover:text-blue-400">
            <Link to="/nosotros">Quienes somos</Link>
          </li>
          <li className="cursor-pointer transition hover:text-blue-400">
            <Link to="/faq">Preguntas Frecuentes</Link>
          </li>
          <li className="cursor-pointer transition hover:text-blue-400">
            <Link to="/contacto">Contacto</Link>
          </li>
          <li className="transform cursor-pointer rounded bg-linear-to-r from-blue-500 to-purple-600 px-5 py-2 shadow-md transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-purple-700">
            <Link to="/cotizar">Solicitar Cotización</Link>
          </li>
        </ul>
      </nav>

      {isOpen && (
        <nav className="mt-4 w-full space-y-4 rounded-lg bg-slate-800 p-4 md:hidden">
          <Link
            to="/servicios"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Servicios
          </Link>
          <Link
            to="/nosotros"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Quienes somos
          </Link>
          <Link
            to="/faq"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Preguntas Frecuentes
          </Link>
          <Link
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="block transition hover:text-blue-400"
          >
            Contacto
          </Link>

          <div onClick={() => setIsOpen(false)}>
            <Link
              to="/cotizar"
              className="block w-full rounded bg-linear-to-r from-blue-500 to-purple-600 py-2 text-center transition hover:from-blue-600 hover:to-purple-700"
            >
              Solicitar Cotización
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};
