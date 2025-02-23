import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">¡Hola, soy Maycol! 👋</h1>
      <p className="mt-4 text-lg">
        Desarrollador Full Stack | React | Next.js | Python
      </p>
      <Link href="/projects">
        <button className="mt-6 px-4 py-2 bg-blue-500 rounded-lg">
          Ver Proyectos
        </button>
      </Link>
    </div>
  );
}
