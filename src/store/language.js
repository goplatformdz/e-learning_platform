import { defineStore } from 'pinia';

export const useLanguageStore = defineStore({
    id: 'language',
    state: () => ({
        currentLanguage: 'en' // Default language is English
    }),
    actions: {
        changeLanguage(language) {
            this.currentLanguage = language;
        }
    }
});
