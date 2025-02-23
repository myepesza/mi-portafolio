export default function Projects() {
  return (
    <div className="p-6 bg-gray-800 text-white">
      <h1 className="text-3xl font-bold">🚀 Mis Proyectos</h1>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-semibold">
            Sistema de Gestión de Plantillas
          </h2>
          <p className="text-sm mt-2">
            App en Next.js con filtros dinámicos y manejo de plantillas.
          </p>
          <a
            href="https://github.com/myepesza/mi-proyecto"
            className="text-blue-400 mt-4 block"
          >
            Ver en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
