function Formulario({ onSubmit, title, setTitle, description, setDescription, isEditing, onDelete }) {
    return (
        <form className="bg-slate-800 p-10 w-3/4 rounded-lg text-black" onSubmit={onSubmit}>
            <label htmlFor="title" className="text-white font-bold mb-2 block">
                {isEditing ? "Editar Tarea" : "Crear Nueva Tarea"}
            </label>
            <input
                id="title"
                className="border border-gray-400 p-2 mb-4 w-full text-white bg-slate-700 outline-none focus:border-blue-500"
                type="text"
                name="title"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="description" className="text-white font-bold mb-2 block">
                Descripción
            </label>
            <textarea
                id="description"
                className="border border-gray-400 p-2 mb-4 w-full text-white bg-slate-700 outline-none focus:border-blue-500"
                name="description"
                placeholder="Descripción"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <div className="flex justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                >
                    {isEditing ? "Actualizar Tarea" : "Crear Tarea"}
                </button>
                {isEditing && (
                    <button 
                        type="button" // IMPORTANTE: tipo button para que no dispare el submit del form
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        onClick={onDelete}
                    >
                        Eliminar
                    </button>
                )}
            </div>
        </form>
    );
}
export default Formulario;