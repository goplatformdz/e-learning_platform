import { defineStore } from 'pinia';
import axios from 'axios';
import { API_BASE_URL } from '../config';



export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        user: null,
    }),

    getters: {
        isPending() {
            return this.user && this.user.status === 'pending';
        },

        isActive() {
            return this.user && this.user.status === 'active';
        },

        // Getter to check if the user is an admin
        isAdmin() {
            return this.user && this.user.role === 'admin';
        },

        // Getter to check if the user is a student
        isStudent() {
            return this.user && this.user.role === 'student';
        },

        // Getter to get the user's full name
        fullName() {
            if (this.user) {
                return `${this.user.firstname} ${this.user.lastname}`;
            }
            return '';
        },
    },

    actions: {
        async checkLoginStatus() {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/users/checkLogin`, { withCredentials: true });
                this.isLoggedIn = response.data.isLoggedIn;
                this.user = response.data.user;
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        },
    },
});
