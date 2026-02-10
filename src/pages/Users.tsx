import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUsers } from '@/services/api';
import type { User } from '@/types';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        const loadUsers = async () => {
            try {
                const data = await fetchUsers(token);
                setUsers(data);
            } catch (err: any) {
                setError(err.message);
                if (err.message === 'Failed to fetch users' || err.message.includes('401') || err.message.includes('403')) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            }
        };

        loadUsers();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <div className="min-h-screen flex flex-col bg-[#141414]">
            <Header />
            <main className="flex-grow p-6 md:p-12 lg:p-24">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-white">Registered Users</h1>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition-colors"
                    >
                        Logout
                    </button>
                </div>

                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4">{error}</div>}

                <div className="overflow-x-auto">
                    <table className="w-full text-left text-zinc-400 border border-zinc-800 rounded-lg overflow-hidden">
                        <thead className="bg-[#1A1A1A] text-white">
                            <tr>
                                <th className="p-4 border-b border-zinc-800">ID</th>
                                <th className="p-4 border-b border-zinc-800">Username</th>
                                <th className="p-4 border-b border-zinc-800">Email</th>
                                <th className="p-4 border-b border-zinc-800">Joined</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={user.id} className={index % 2 === 0 ? 'bg-[#141414]' : 'bg-[#181818]'}>
                                    <td className="p-4 border-b border-zinc-800">{user.id}</td>
                                    <td className="p-4 border-b border-zinc-800">{user.username}</td>
                                    <td className="p-4 border-b border-zinc-800">{user.email}</td>
                                    <td className="p-4 border-b border-zinc-800">{user.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {users.length === 0 && !error && (
                        <div className="text-center p-8 text-zinc-500">No users found.</div>
                    )}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Users;
