import TaskCard from "@/components/TaskCard";
import prisma from "@/lib/prisma";
import Link from "next/link";

async function loadTasks() {
    const data = await prisma.task.findMany({
        orderBy:{
            createAt: 'asc',
        },
        // where:{
        //     title:"asd"
        // }
    });
    return data;
}

async function Tareas() {
    const taks = await loadTasks()
    return (
        <section className="container mx-auto">
            <div className="grid grid-cols-3 gap-3">
                {taks.map((x) => (
                   <TaskCard key={x.id} task={x} />
                ))}
            </div>
            <Link 
                href="/tareas/new" 
                className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Task
            </Link>
        </section>
    )
}

export default Tareas;