// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden text-white px-6">
      {/* Звёздный фон */}
      <div className="absolute inset-0 bg-black">
        <div className="w-full h-full animate-pulse opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* Содержимое */}
      <div className="z-10 text-center max-w-xl">
        <h1 className="text-8xl font-extrabold text-white drop-shadow-[0_0_10px_#0ff] mb-4">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-purple-300 mb-2">
          Lost in Space
        </h2>
        <p className="text-gray-400 text-lg mb-8">
          The page you are looking for might be orbiting a different galaxy.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full font-semibold text-white shadow-lg hover:scale-105 hover:shadow-purple-500/50 transition transform duration-300"
        >
          🚀 Back to Earth
        </Link>
      </div>

      {/* Планета (пример стилизованного декора) */}
      <div className="absolute bottom-[-60px] right-[-60px] w-[200px] h-[200px] bg-gradient-to-br from-purple-800 to-indigo-600 rounded-full blur-3xl opacity-50"></div>
    </div>
  );
};
