import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signupUser } from '@/services/api';
import { Button } from '@/components/ui/button';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            const data = await signupUser({ username, email, password });
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            navigate('/users');
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#141414] text-white">
            <div className="w-full max-w-md p-8 bg-zinc-900 rounded-lg border border-zinc-800">
                <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>
                {error && <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4">{error}</div>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-zinc-400 mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-[#1A1A1A] border border-zinc-800 rounded p-2 text-white focus:outline-none focus:border-purple-500 transition-colors"
                            required
                        />
                    </div>
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
                        Sign Up
                    </Button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-zinc-400">
                        Already have an account? <Link to="/login" className="text-purple-500 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
