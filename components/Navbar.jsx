"use client"

import { useState } from "react"
import Link from "next/link";
import { Home, User, ShoppingCart, FileText, Users, Briefcase, CheckSquare, Menu, X, LogIn, Monitor, Smartphone, Laptop } from "lucide-react";
import { NavItem } from "./NavItem";

function Navbar() {
    const [isOpen, setIsOpen] = useState(true)
    
    const navItems = [
        { href: "/", label: "Home", icon: Home },
        { href: "/about", label: "About", icon: User },
        { 
            href: "/tienda", 
            label: "Tienda", 
            icon: ShoppingCart,
            children: [
                { href: "/tienda/categorias/computadoras", label: "Computadoras", icon: Laptop },
                { href: "/tienda/categorias/celulares", label: "Celulares", icon: Smartphone },
                { href: "/tienda/categorias/monitores", label: "Monitores", icon: Monitor },
            ]
        },
        { href: "/posts", label: "Posts", icon: FileText },
        { href: "/usuarios", label: "Usuarios", icon: Users },
        { href: "/trabajadores", label: "Trabajadores", icon: Briefcase },
        { href: "/tareas", label: "Tareas", icon: CheckSquare },
    ];

    const authItem = { href: "/login", label: "Login", icon: LogIn };

    return ( 
        <>
            {/* Botón hamburguesa - siempre visible cuando está cerrado */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed top-4 left-4 z-50 p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors"
                >
                    <Menu className="w-5 h-5 text-white" />
                </button>
            )}
            
            <aside className={`
                bg-slate-900/50 border-r border-slate-800 backdrop-blur-md flex flex-col
                transition-all duration-300 ease-in-out
                ${isOpen ? 'w-64' : 'w-16'}
                fixed inset-y-0 left-0 z-40
            `}>
                {/* Header con botón cerrar */}
                <div className={`p-4 border-b border-slate-800 flex items-center ${isOpen ? 'justify-between' : 'justify-center'}`}>
                    {isOpen && (
                        <Link href="/" className="font-bold text-xl tracking-tight bg-linear-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            MiApp
                        </Link>
                    )}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 hover:bg-slate-800 rounded transition-colors"
                    >
                        <Menu className="w-5 h-5 text-slate-400" />
                    </button>
                </div>
                
                {/* Navegación */}
                <nav className="flex-1 p-2 overflow-y-auto">
                    <ul className="space-y-1">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <NavItem item={item} isOpen={isOpen} />
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* Auth/Login al final */}
                <div className="p-2 border-t border-slate-800">
                    <Link 
                        href={authItem.href}
                        className={`
                            flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 transition-colors
                            ${isOpen ? '' : 'justify-center'}
                        `}
                    >
                        <authItem.icon className="w-5 h-5 shrink-0" />
                        {isOpen && <span>{authItem.label}</span>}
                    </Link>
                </div>
            </aside>
            
            {/* Overlay cuando está abierto */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}

export default Navbar;