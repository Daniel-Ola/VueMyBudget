import { defineStore } from "pinia";
import type { UserInfo } from "@/interfaces/userInterface";
import router from "@/router";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      email: null as string | null,
      name: null as string | null,
      isSignedIn: false as boolean,
    };
  },
  getters: {
    getUserStatus: (state) => state.isSignedIn,
  },
  actions: {
    saveUser(user: UserInfo) {
      this.email = user.email;
      this.name = user.name;
      this.isSignedIn = user.isSignedIn;

      if (user.isSignedIn) {
        router.push({ name: "home" });
      } else {
        router.push({ name: "login" });
      }
    },
  },
  persist: true,
});
