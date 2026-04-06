import prisma from "@/lib/prisma"; // Asegúrate de tener tu instancia de Prisma aquí
import { revalidatePath } from "next/cache";

export default async function UsuariosPage() {
  // 1. Obtener usuarios (Equivalente a un ToList() en Entity Framework)
  const usuarios = await prisma.user.findMany({
    include: { posts: true },
    orderBy: { id: 'desc' }
  });

  // 2. Server Action para insertar (El "Método Rápido")
  async function crearUsuario(formData) {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");

    if (!name || !email) return;

    await prisma.user.create({
      data: { name, email },
    });

    // Esto refresca la página para mostrar el nuevo usuario al instante
    revalidatePath("/usuarios");
  }

  return (
    <div className="p-8 max-w-2xl mx-auto text-slate-200">
      <h1 className="text-2xl font-bold mb-6 text-blue-400">Gestión de Usuarios</h1>

      {/* Formulario de Inserción */}
      <form action={crearUsuario} className="mb-10 bg-slate-900/50 p-6 rounded-xl border border-slate-800 backdrop-blur-sm">
        <div className="flex flex-col gap-4">
          <input 
            name="name" 
            placeholder="Nombre completo" 
            className="bg-slate-950 border border-slate-700 p-2 rounded text-white focus:border-blue-500 outline-none"
          />
          <input 
            name="email" 
            type="email"
            placeholder="correo@ejemplo.com" 
            className="bg-slate-950 border border-slate-700 p-2 rounded text-white focus:border-blue-500 outline-none"
          />
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 py-2 rounded font-bold transition-colors">
            Crear Usuario
          </button>
        </div>
      </form>

      {/* Lista de Usuarios */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Usuarios Registrados</h2>
        {usuarios.map((u) => (
          <div key={u.id} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-bold text-white">{u.name}</p>
              <p className="text-sm text-slate-400">{u.email}</p>
            </div>
            <span className="text-xs bg-slate-700 px-2 py-1 rounded text-slate-300">
              Posts: {u.posts.length}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}