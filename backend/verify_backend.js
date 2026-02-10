const fetch = require('node-fetch');

const API_URL = 'http://localhost:5000/api';

const runTests = async () => {
    try {
        // 1. Signup
        console.log('Testing Signup...');
        const uniqueSuffix = Date.now();
        const signupRes = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: `testuser${uniqueSuffix}`,
                email: `test${uniqueSuffix}@example.com`,
                password: 'password123'
            })
        });

        if (!signupRes.ok) {
            const err = await signupRes.text();
            throw new Error(`Signup failed: ${err}`);
        }

        const signupData = await signupRes.json();
        console.log('Signup Successful:', signupData.token ? 'Token received' : 'No token');

        // 2. Login
        console.log('Testing Login...');
        const loginRes = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: `test${uniqueSuffix}@example.com`,
                password: 'password123'
            })
        });

        if (!loginRes.ok) {
            const err = await loginRes.text();
            throw new Error(`Login failed: ${err}`);
        }

        const loginData = await loginRes.json();
        console.log('Login Successful:', loginData.token ? 'Token received' : 'No token');

        // 3. Get Users (Protected)
        console.log('Testing Get Users...');
        const usersRes = await fetch(`${API_URL}/users`, {
            headers: { 'Authorization': `Bearer ${loginData.token}` }
        });

        if (!usersRes.ok) {
            const err = await usersRes.text();
            throw new Error(`Get Users failed: ${err}`);
        }

        const usersData = await usersRes.json();
        console.log('Get Users Successful:', Array.isArray(usersData) ? `Retrieved ${usersData.length} users` : 'Invalid format');

        console.log('ALL BACKEND TESTS PASSED');

    } catch (err) {
        console.error('TEST FAILED:', err.message);
        process.exit(1);
    }
};

runTests();
