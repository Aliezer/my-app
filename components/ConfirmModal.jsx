import React, { useEffect, useRef } from 'react';

export default function ConfirmModal({
  isOpen,
  title = '¿Estás seguro?',
  message = 'Esta acción no se puede deshacer.',
  confirmText = 'Confirmar',
  cancelText = 'Cancelar',
  onConfirm,
  onCancel,
  confirmColor = 'red', // Opciones: 'red', 'blue', 'green'
  className = '',
}) {
  const modalRef = useRef(null);

  // Manejar el bloqueo de scroll y la tecla Escape
  useEffect(() => {
    if (!isOpen) return;

    // Función para cerrar con la tecla Escape
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && onCancel) {
        onCancel();
      }
    };

    // Bloquear el scroll del fondo
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = origOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onCancel]);

  if (!isOpen) return null;

  // Cerrar el modal si se hace clic fuera del contenedor principal
  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      if (onCancel) onCancel();
    }
  };

  // Clases dinámicas para el botón de confirmación según el color elegido
  const colorClasses = {
    red: 'bg-red-600 hover:bg-red-700 focus:ring-red-500',
    blue: 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500',
    green: 'bg-green-600 hover:bg-green-700 focus:ring-green-500',
  };
  
  const confirmButtonClass = colorClasses[confirmColor] || colorClasses.red;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity ${className}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        ref={modalRef}
        className="max-w-md w-full bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden transform transition-all"
      >
        <div className="px-6 py-5 border-b border-gray-100">
          <h3 id="modal-title" className="text-xl font-semibold text-gray-900">
            {title}
          </h3>
        </div>
        
        <div className="px-6 py-5">
          <p className="text-base text-gray-600">{message}</p>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 flex justify-end space-x-3 rounded-b-xl">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium rounded-lg text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors ${confirmButtonClass}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
