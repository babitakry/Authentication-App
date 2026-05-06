// js/ui.js

export const ui = {
    views: {
        login: document.getElementById('login-view'),
        register: document.getElementById('register-view'),
        profile: document.getElementById('profile-section'),
        auth: document.getElementById('auth-section')
    },

    toggleView(viewName) {
        // Hide everything first
        Object.values(this.views).forEach(view => view.classList.add('hidden'));

        if (viewName === 'login') {
            this.views.auth.classList.remove('hidden');
            this.views.login.classList.remove('hidden');
        } else if (viewName === 'register') {
            this.views.auth.classList.remove('hidden');
            this.views.register.classList.remove('hidden');
        } else if (viewName === 'profile') {
            this.views.profile.classList.remove('hidden');
        }
    },

    updateProfile(user) {
        if (!user) return;
        document.getElementById('profile-name').textContent = user.username;
        document.getElementById('profile-email').textContent = user.email;
        document.getElementById('profile-role').textContent = user.role;
        document.getElementById('profile-id').textContent = user._id;
        
        const avatar = document.getElementById('user-avatar');
        avatar.textContent = user.username.charAt(0).toUpperCase();
    },

    showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toast-message');
        const iconEl = document.getElementById('toast-icon');
        
        toast.className = `fixed top-6 right-6 z-50 transform transition-all duration-500 ${type}`;
        msgEl.textContent = message;
        
        iconEl.innerHTML = type === 'success' 
            ? '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>'
            : '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>';

        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
        
        setTimeout(() => {
            toast.style.transform = 'translateX(150%)';
            toast.style.opacity = '0';
        }, 4000);
    },

    toggleLoader(show) {
        const loader = document.getElementById('loader');
        if (show) {
            loader.classList.remove('hidden');
        } else {
            loader.classList.add('hidden');
        }
    }
};
