export default function LoadingSpinner({ text }) {
    return (
        // Contenedor de Centrado en el Contenido (Ocupa el ancho completo)
        <div className="flex flex-col items-center justify-center w-full min-h-[400px] p-10">

            {/* El Spinner Visual (Tu diseño original) */}
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-100 border-t-blue-600 shadow-inner"></div>

            {/* Texto de Carga (Opcional) */}
            {text && (
                <p className="mt-6 text-gray-500 font-medium text-sm tracking-wide animate-pulse">
                    {text}
                </p>
            )}

            <div className="flex items-center justify-center min-h-[200px]">
                <div className="relative w-12 h-12">
                    {[...Array(8)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                            style={{
                                top: `${50 + 35 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                                left: `${50 + 35 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                                animationDelay: `${i * 0.1}s`,
                                transform: 'translate(-50%, -50%)',
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="flex items-center justify-center space-x-2 min-h-25">
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-8 bg-blue-500 rounded-full animate-bounce"></div>
            </div>


            <div className="flex items-center justify-center min-h-50">
                <div className="relative h-20 w-20">
                    <div className="absolute h-full w-full rounded-full bg-blue-400 opacity-75 animate-ping"></div>
                    <div className="relative h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
