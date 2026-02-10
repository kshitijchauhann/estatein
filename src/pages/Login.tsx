import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Assuming Input component exists or will need to check/create
// If Input doesn't exist, I'll use standard input or create it. Let's assume standard for now to be safe or check UI folder.
// Checking UI folder earlier showed button, drawer. I'll use standard HTML input with tailwind classes if Input component not sure.
// Wait, I saw Button in ui folder. I haven't seen Input. I'll use standard input to avoid errors.

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const data = await loginUser({ email, password });
            localStorage.setItem('token', data.token);
            // Also store user info if needed
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/users');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#141414] text-white">
            <div className="w-full max-w-md p-8 bg-zinc-900 rounded-lg border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-zinc-400 mb-1">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-zinc-800 rounded p-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-zinc-400 mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-zinc-800 rounded p-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
                        Login
                    </Button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-zinc-400">
                        Add new user? <Link to="/signup" className="text-purple-500 hover:underline">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
