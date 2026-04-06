import PostCard from '@/components/PostCard';
import axios from 'axios';
import https from 'https';
import PostPages from '../page';
import { Suspense } from 'react';

async function loadPost(id) { // Pasamos el ID como argumento
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            proxy: false,
            // Útil para tu futuro backend en C#/.NET local
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });
        return res.data;
    } catch (error) {
        console.error("Error cargando el post:", error.message);
        return null;
    }
}


async function Page({ params }) {


    const { id } = await params;
    const post = await loadPost(id);

    if (!post) return <div>Post no encontrado.</div>;
    return (
        <>
            <PostCard post={post} />

            <h3>Otras Publicaciones </h3>
            <Suspense fallback={<div>Cargando otras publicaciones...</div>}>
                <PostPages />
            </Suspense>

        </>

    );
}

export default Page;