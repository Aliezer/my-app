'use client';
import Image from 'next/image';

export default function PostCardUser({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-xl transition-all">
      <div className="flex flex-col items-center">
        
        {/* Contenedor de la Imagen Optimizado */}
        <div className="relative w-24 h-24 mb-4">
          <Image
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            title={`${user.first_name} ${user.last_name}`}
            fill // Hace que la imagen llene el contenedor relativo
            sizes="96px"
            className="rounded-full object-cover border-4 border-white shadow-sm"
            priority={user.id <= 4} // Carga más rápido las primeras imágenes
          />
        </div>

        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-800">
            {user.first_name} {user.last_name}
          </h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
        
      </div>
    </div>
  );
}