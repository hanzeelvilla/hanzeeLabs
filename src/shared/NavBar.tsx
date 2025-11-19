export const NavBar = () => {

  return (
    <nav className="bg-slate-900 p-4 text-white flex justify-between items-center">
      <div className="text-2xl font-bold tracking-wide">
        <a href="/">Hanzee<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Labs</span></a>
      </div>
      
      <ul className="flex gap-6 items-center">
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
        <li
          className="bg-linear-to-r from-blue-500 to-purple-600 px-5 py-2 rounded
                       hover:from-blue-600 hover:to-purple-700 
                       transform hover:scale-105 transition-all duration-300 
                       cursor-pointer shadow-md"
        >
          <a href="#cotizar">Solicitar Cotización</a>
        </li>
      </ul>
    </nav>
  );
};
