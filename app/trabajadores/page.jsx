import { Suspense } from 'react';
import reqresApi from '@/lib/apiClient';
import PostCardUser from '@/components/PostCardUser';
import LoadingSpinner from '@/components/LoadingSpinner';
import Link from 'next/link';

export default function UsersPageWrapper() {
    return (
        <Suspense fallback={<LoadingSpinner text="Cargando usuarios...(Mostrando ejemplo de espera de carga de usuarios)" />}>
            <UsersPage />
        </Suspense>
    );
}
async function loadUsers() {
    try {
        const res = await reqresApi.get('/users?page=2');
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return res.data.data;
    } catch (err) {
        await new Promise((resolve) => setTimeout(resolve, 6000));
        console.error("Error con la API Key:", err.response?.data || err.message);
        throw err;
    }

}
async function UsersPage() {
    const users = await loadUsers();
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
                {users.map(u =>
                    <Link key={u.id} href={`/trabajadores/${u.id}`}>
                        <PostCardUser user={u} />
                    </Link>
                )}
            </div>
            <button className="col-span-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Volver a la página principal
            </button>
        </section>

    );
}