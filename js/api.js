// js/api.js
const API_BASE_URL = '/api/v1/users';

export const api = {
    async login(username, password) {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            },
            body: JSON.stringify({ username, password })
        });
        return await response.json();
    },

    async register(payload) {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json', 
                'Accept': 'application/json' 
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    },

    async getCurrentUser(token) {
        const response = await fetch(`${API_BASE_URL}/current-user`, {
            method: 'GET',
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Accept': 'application/json' 
            }
        });
        return await response.json();
    },

    async logout(token) {
        const response = await fetch(`${API_BASE_URL}/logout`, {
            method: 'POST',
            headers: { 
                'Authorization': `Bearer ${token}`, 
                'Accept': 'application/json' 
            }
        });
        return await response.json();
    }
};
