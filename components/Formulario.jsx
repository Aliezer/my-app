function Formulario({ onSubmit }) {
    return ( 
          <form className="bg-slate-800 p-10 w-3/4 rounded-lg" onSubmit={onSubmit}>
                <label htmlFor="title" className="text-white font-bold mb-2 block">
                    Crear Nueva Tarea
                </label>
                <input id="title" className="border border-gray-400 p-2 mb-4 w-full" type="text" name="title" placeholder="Título" />
                <label htmlFor="description" className="text-white font-bold mb-2 block">
                    Descripción
                </label>
                <textarea id="description" className="border border-gray-400 p-2 mb-4 w-full" name="description" placeholder="Descripción" rows={3}></textarea>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Crear Tarea</button>
            </form>
     );
}

export default Formulario;