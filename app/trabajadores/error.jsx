'use client';
import { useState } from 'react';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Error({ error }) {
    const [loading, setLoading] = useState(false);

    const handleRetry = () => {
        // 1. Activamos el spinner de puntos que creamos
        setLoading(true);

        // 2. Redigirimos al mismo path de forma "dura"
        // Esto limpia el caché de Next.js y fuerza el fetch de nuevo
        window.location.href = '/trabajadores';
    };

    if (loading) {
        return <LoadingSpinner text="Reiniciando conexión con el servidor..." />;
    }

    return (
        <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
            <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-lg text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-2">Error de Carga</h2>
                <p className="text-gray-500 mb-6">
                    No se pudieron obtener los datos. Contacte al Administrador.
                </p>
                
                <button
                    onClick={handleRetry}
                    className="px-8 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all active:scale-95"
                >
                    Intentar de nuevo
                </button>
            </div>
        </div>
    );
}