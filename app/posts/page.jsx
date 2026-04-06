import axios from 'axios';
import https from 'https';
import PostCard from '@/components/PostCard';


async function loadPosts() {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            proxy: false,
            // Permite conectar a la API local aunque el certificado sea auto-firmado
            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });

        // Simulación de carga (16 segundos)
        await new Promise((resolve) => setTimeout(resolve, 3000));
        
        return res.data;
    } catch (error) {
        console.error("Error cargando categorías:", error.message);
        return [];
    }
}

async function PostPages() {

    const posts = await loadPosts();
    return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
        {
            posts.map(p => (
                <PostCard post={p} key={p.id}/>
            ))
        }
    </div>

}

export default PostPages;