"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function NavItem({ item, isOpen }) {
    const [isExpanded, setIsExpanded] = useState(false)
    const hasChildren = item.children && item.children.length > 0

    if (!hasChildren) {
        return (
            <Link 
                href={item.href}
                className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 transition-colors
                    ${isOpen ? '' : 'justify-center'}
                `}
            >
                <item.icon className="w-5 h-5 shrink-0" />
                {isOpen && <span>{item.label}</span>}
            </Link>
        )
    }

    return (
        <div>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 transition-colors
                    ${isOpen ? '' : 'justify-center'}
                `}
            >
                <item.icon className="w-5 h-5 shrink-0" />
                {isOpen && (
                    <>
                        <span className="flex-1 text-left">{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </>
                )}
            </button>
            
            {/* Submenú */}
            {isOpen && isExpanded && (
                <ul className="ml-6 mt-1 space-y-1 border-l border-slate-700 pl-2">
                    {item.children.map((child) => (
                        <li key={child.href}>
                            <Link 
                                href={child.href}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-500 hover:text-blue-400 hover:bg-slate-800/30 transition-colors"
                            >
                                {child.icon && <child.icon className="w-4 h-4" />}
                                <span>{child.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}