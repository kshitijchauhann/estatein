import type { AuthResponse } from "@/types";

const API_URL = 'http://localhost:5000/api';

export const fetchProperties = async () => {
    try {
        const response = await fetch(`${API_URL}/properties`);
        if (!response.ok) {
            throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return [];
    }
};

export const loginUser = async (credentials: { email: string; password: string }): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
    }

    return await response.json();
};

export const signupUser = async (userData: { username: string; email: string; password: string }): Promise<AuthResponse> => {
    const response = await fetch(`${API_URL}/auth/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Signup failed');
    }

    return await response.json();
};

export const fetchUsers = async (token: string) => {
    const response = await fetch(`${API_URL}/users`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }

    return await response.json();
};
