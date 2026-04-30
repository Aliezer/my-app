"use client"

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function TaskCard({ task }) {
    const router = useRouter()

    return (
        <Card 
            className="bg-slate-900 border-slate-800 hover:bg-slate-800/80 hover:border-slate-700 cursor-pointer transition-colors"
            onClick={() => router.push('tareas/edit/' + task.id)}
        >
            <CardHeader className="pb-2">
                <CardTitle className="text-lg text-white">{task.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-slate-400 text-sm mb-2">{task.description}</p>
                <p className="text-slate-500 text-xs">{new Date(task.createAt).toLocaleDateString()}</p>
            </CardContent>
        </Card>
    );
}

export default TaskCard;