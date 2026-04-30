'use client'

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function PostCard({ post }) {
    return (
        <Card className="bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 transition-all">
            <CardHeader className="pb-2">
                <Link href={`/posts/${post.id}`}>
                    <span className="text-sm font-mono text-blue-400 hover:text-blue-300 transition-colors">
                        ID: {post.id}
                    </span>
                </Link>
                <CardTitle className="text-xl text-slate-100 line-clamp-2 mt-2">
                    {post.title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Button 
                    onClick={() => alert(`Gestionando ${post.title}`)}
                    className="w-full mt-2"
                >
                    Ver Detalles
                </Button>
            </CardContent>
        </Card>
    );
}

export default PostCard;