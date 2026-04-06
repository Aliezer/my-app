import Link from "next/link";

function Navbar() {
    return ( 
        // Cambiamos bg-white por un fondo oscuro semi-transparente (bg-slate-950/80)
        // Añadimos backdrop-blur-md para el efecto de cristal esmerilado
        // Cambiamos border-slate-200 por border-slate-800
        <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
            <ul className="flex items-center gap-8 max-w-7xl mx-auto">
                
                {/* Logo con degradado */}
                <li className="mr-auto font-bold text-xl tracking-tight bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    <Link href="/">MiApp</Link>
                </li>

                {/* Enlaces con colores para fondo oscuro */}
                <li className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                    <Link href="/">Home</Link>
                </li>
                <li className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                    <Link href="/about">About</Link>
                </li>
                <li className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                    <Link href="/tienda">Tienda</Link>
                </li>
                <li className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                    <Link href="/posts">Posts</Link>
                </li>
                 <li className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                    <Link href="/usuarios">Usuarios</Link>
                </li>
                <li className="text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors">
                    <Link href="/trabajadores">Trabajadores</Link>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navbar;