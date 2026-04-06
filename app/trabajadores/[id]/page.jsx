import PostCardUser from "@/components/PostCardUser";
import reqresApi from '@/lib/apiClient';

async function loadTrabajadores(id) {

    try {
        const res = await reqresApi.get(`/users/${id}`);
        return res.data.data;
    } catch (err) {
        console.error("Error con la API Key:", err.response?.data || err.message);
        throw err;
    }
}

async function TrabajadorPage({ params }) {
    const { id } = await params;
    const trabajador = await loadTrabajadores(id);
    return (
        <div>
            <PostCardUser user={trabajador} />
        </div>
    );
}

export default TrabajadorPage;