// main.js
import { auth } from './js/auth.js';
import { ui } from './js/ui.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Check if user is already logged in
    auth.checkSession();

    // 2. Setup Event Listeners
    setupEventListeners();
});

function setupEventListeners() {
    // Login Form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            auth.login(username, password);
        });
    }

    // Register Form
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const payload = {
                username: document.getElementById('reg-username').value,
                email: document.getElementById('reg-email').value,
                password: document.getElementById('reg-password').value,
                role: document.getElementById('reg-role').value
            };
            const success = await auth.register(payload);
            if (success) e.target.reset();
        });
    }

    // Navigation and Global Actions
    window.toggleView = (view) => ui.toggleView(view);
    window.handleLogout = () => auth.logout();
}
