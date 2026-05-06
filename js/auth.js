// js/auth.js
import { api } from './api.js';
import { ui } from './ui.js';

export const auth = {
    user: null,

    async checkSession() {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            ui.toggleView('login');
            return;
        }

        try {
            ui.toggleLoader(true);
            const data = await api.getCurrentUser(token);

            if (data.success) {
                this.user = data.data;
                ui.updateProfile(this.user);
                ui.toggleView('profile');
            } else {
                localStorage.removeItem('accessToken');
                ui.toggleView('login');
                ui.showToast('Session expired, please login again', 'error');
            }
        } catch (err) {
            console.error('Session check failed', err);
            ui.toggleView('login');
        } finally {
            ui.toggleLoader(false);
        }
    },

    async login(username, password) {
        if (!username || !password) {
            ui.showToast('Please fill in all fields', 'error');
            return;
        }

        try {
            ui.toggleLoader(true);
            const data = await api.login(username, password);

            if (data.success) {
                localStorage.setItem('accessToken', data.data.accessToken);
                this.user = data.data.user;
                ui.updateProfile(this.user);
                ui.showToast('Login successful! Welcome back.', 'success');
                ui.toggleView('profile');
            } else {
                ui.showToast(data.message || 'Login failed', 'error');
            }
        } catch (err) {
            ui.showToast('Connection error. Please try again.', 'error');
        } finally {
            ui.toggleLoader(false);
        }
    },

    async register(payload) {
        if (!payload.username || !payload.email || !payload.password) {
            ui.showToast('All fields are required', 'error');
            return;
        }

        try {
            ui.toggleLoader(true);
            const data = await api.register(payload);

            if (data.success) {
                ui.showToast('Registration successful! You can now login.', 'success');
                ui.toggleView('login');
                return true;
            } else {
                ui.showToast(data.message || 'Registration failed', 'error');
                return false;
            }
        } catch (err) {
            console.error('Registration error:', err);
            ui.showToast('Connection error. Please try again.', 'error');
            return false;
        } finally {
            ui.toggleLoader(false);
        }
    },

    async logout() {
        const token = localStorage.getItem('accessToken');
        try {
            ui.toggleLoader(true);
            await api.logout(token);
        } catch (err) {
            console.error('Logout error:', err);
        } finally {
            localStorage.removeItem('accessToken');
            this.user = null;
            ui.showToast('Logged out successfully', 'success');
            ui.toggleView('login');
            ui.toggleLoader(false);
        }
    }
};
