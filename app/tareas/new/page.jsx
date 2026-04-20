"use client";

import { useRouter } from "next/navigation";
import Formulario from "@/components/Formulario";

function NewPage() {

    const router = useRouter();

    const onSubmit = async (e) => {
    e.preventDefault();
    
    const title = e.target.title.value;
    const description = e.target.description.value;

   const res = await fetch("/api/tasks", {
        method: "POST",
        headers: {  "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
    })    .then((res) => res.json())
        .then((data) => {
            console.log("Tarea creada:", data);
            // Aquí podrías agregar lógica para actualizar la UI o mostrar un mensaje de éxito
        })
        .catch((error) => {
            console.error("Error al crear la tarea:", error);
            // Aquí podrías agregar lógica para mostrar un mensaje de error
        }); 
        router.push("/");
};
    return (
        <div className="h-screen flex justify-center items-center">
          <Formulario onSubmit={onSubmit} />
        </div>
    );
}

export default NewPage;