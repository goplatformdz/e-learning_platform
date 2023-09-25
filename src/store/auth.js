import { defineStore } from 'pinia';
import axios from 'axios';



export const useAuthStore = defineStore('auth', {
    state: () => ({
        isLoggedIn: false,
        user: null,
    }),

    getters: {
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
                const response = await axios.get('http://localhost:8000/api/users/checkLogin', { withCredentials: true });
                this.isLoggedIn = response.data.isLoggedIn;
                this.user = response.data.user;
            } catch (error) {
                console.error('Error checking login status:', error);
            }
        },
    },
});
