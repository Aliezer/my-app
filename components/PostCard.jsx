'use client'

import Link from "next/link";

// PostCard.jsx optimizado para fondo oscuro
function PostCard({ post }) { 
    return ( 
         <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg hover:shadow-green-500 hover:border-slate-700 transition-shadow backdrop-blur-sm">
            <div>
                <Link href={`/posts/${post.id}`}>
                    <span className="text-sm font-mono text-blue-400 hover:text-blue-300 hover:underline cursor-pointer transition-colors">
                        ID: {post.id}
                    </span>
                </Link>
                <h3 className="text-xl font-bold text-slate-100 mt-2 line-clamp-2">
                    {post.title}
                </h3>
            </div>

            <button 
                onClick={() => alert(`Gestionando ${post.title}`)}
                className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20"
            >
                Ver Detalles
            </button>
        </div>
     );
}

export default PostCard;