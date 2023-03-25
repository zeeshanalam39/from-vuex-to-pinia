import { defineStore } from 'pinia';

export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: 'Zeeshan Alam',
  }),

  getters: {
    firstName() {
      return this.user.split(' ')[0];
    },
  },
});
