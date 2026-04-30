"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function Formulario({ onSubmit, title, setTitle, description, setDescription, isEditing, onDelete }) {
    return (
        <Card className="w-full max-w-lg bg-slate-900 border-slate-800">
            <CardHeader>
                <CardTitle className="text-white">
                    {isEditing ? "Editar Tarea" : "Crear Nueva Tarea"}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="text-sm font-medium text-slate-300 mb-2 block">
                            Título
                        </label>
                        <Input
                            id="title"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="text-sm font-medium text-slate-300 mb-2 block">
                            Descripción
                        </label>
                        <Textarea
                            id="description"
                            placeholder="Descripción"
                            rows={3}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                        />
                    </div>

                    <div className="flex gap-3 pt-2">
                        <Button type="submit" className="flex-1">
                            {isEditing ? "Actualizar Tarea" : "Crear Tarea"}
                        </Button>
                        {isEditing && (
                            <Button 
                                type="button"
                                variant="destructive"
                                onClick={onDelete}
                            >
                                Eliminar
                            </Button>
                        )}
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}
export default Formulario;