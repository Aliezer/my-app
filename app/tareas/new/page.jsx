"use client";
import { useParams, useRouter } from "next/navigation";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";
// Importa el modal (ajusta la ruta según dónde lo hayas guardado)
import ConfirmModal from "@/components/ConfirmModal";

function NewPage() {
  const router = useRouter();
  const params = useParams();

  // Estados para controlar los valores de los inputs
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Esta función ahora solo se encarga de abrir el modal
  const handleDelete = () => {
    setIsModalOpen(true);
  };

  // Esta función ejecuta la eliminación real en la base de datos
  const confirmDelete = async () => {
    const res = await fetch(`/api/tasks/${params.id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setIsModalOpen(false); // Cerramos el modal
      router.push("/tareas");
      router.refresh(); // Para limpiar el caché y ver la lista actualizada
    }
  };

  useEffect(() => {
    if (params.id) {
      fetch(`/api/tasks/${params.id}`)
        .then((res) => res.json())
        .then((data) => {
          // Cargamos la data en los estados
          setTitle(data.title);
          setDescription(data.description);
        });
    }
  }, [params.id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    // Si hay ID usamos PUT y la ruta con ID, si no POST y la ruta base
    const method = params.id ? "PUT" : "POST";
    const endpoint = params.id ? `/api/tasks/${params.id}` : "/api/tasks";

    const res = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      router.push("/tareas");
      router.refresh();
    }
  };

  return (
    <div className="h-screen flex justify-center items-center">
      {/* Pasamos los estados y los setters al formulario */}
      <Formulario
        onSubmit={onSubmit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        isEditing={!!params.id}
        onDelete={handleDelete} // Sigue llamando a handleDelete para abrir el modal
      />

      {/* Agregamos el Modal en la vista */}
      <ConfirmModal
        isOpen={isModalOpen}
        title="Eliminar tarea"
        message="¿Estás seguro de que quieres eliminar esta tarea? Esta acción no se puede deshacer."
        confirmText="Sí, eliminar"
        cancelText="Cancelar"
        confirmColor="red" 
        onConfirm={confirmDelete} // Ejecuta el fetch si el usuario confirma
        onCancel={() => setIsModalOpen(false)} // Cierra el modal si el usuario cancela
      />
    </div>
  );
}

export default NewPage;
