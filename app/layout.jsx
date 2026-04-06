import Navbar from "@/components/Navbar";
import './globals.css'

export const metadata = {
  title: "Mi tienda con next",
  description: "Está es la página principal de mi tienda"
}



export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <head>
        <title>SGSI - Gestión de Importaciones</title>
      </head>
      {/* bg-slate-950: El color base casi negro.
          text-slate-200: Texto gris muy claro para que no canse la vista.
          antialiased: Hace que las fuentes se vean más delgadas y limpias.
      */}
      <body className="bg-slate-950 text-slate-200 antialiased min-h-screen relative">
        
        {/* CAPA DE FONDO: Efecto de malla de puntos sutil (Grid Pattern) */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20">
        </div>

        {/* CAPA DE LUZ: Un resplandor azul sutil en la parte superior */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 [background:radial-gradient(125%_125%_at_50%_10%,#020617_40%,#1e3a8a_100%)] opacity-50">
        </div>

        <Navbar />
        
        {/* Contenedor principal con padding para que el contenido no pegue a los bordes */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
        </main>

      </body>
    </html>
  );
}
