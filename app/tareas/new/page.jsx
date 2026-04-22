"use client";

import { useParams, useRouter } from "next/navigation";
import Formulario from "@/components/Formulario";
import { useEffect, useState } from "react";

function NewPage() {
    const router = useRouter();
    const params = useParams();

    // Estados para controlar los valores de los inputs
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    const handleDelete = async () => {
        const confirmacion = confirm("¿Estás seguro de que quieres eliminar esta tarea?");

        if (confirmacion) {
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.push("/tareas");
                router.refresh(); // Para limpiar el caché y ver la lista actualizada
            }
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
            headers: { "Content-Type": "application/json" },
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
                onDelete={handleDelete}
            />
        </div>
    );
}

export default NewPage;