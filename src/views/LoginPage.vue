<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { reactive } from "vue";
import type { UserInfo } from "@/interfaces/userInterface";

const user = useUserStore();

const userInfo = reactive<UserInfo>({
  name: null,
  email: null,
  isSignedIn: true,
});

const saveUserInfo = () => {
  user.saveUser(userInfo);
};
</script>

<template>
  <form class="flex flex-col gap-y-5">
    <div class="flex flex-col gap-y-2">
      <label for="email">Name</label>
      <input
        type="text"
        id="name"
        autocomplete="name"
        placeholder="Enter your preferred name"
        class="h-12 w-2/3 p-3 rounded-md"
        v-model="userInfo.name"
      />
    </div>
    {{ userInfo.name }}
    <div class="flex flex-col gap-y-2">
      <label for="email">Email address</label>
      <input
        type="email"
        id="email"
        placeholder="Enter your valid email address"
        class="h-12 w-2/3 p-3 rounded-md"
        v-model="userInfo.email"
      />
    </div>

    <button
      class="bg-blue-700 w-24 p-3 rounded-md mt-5"
      type="button"
      @click="saveUserInfo"
    >
      Sign in
    </button>
  </form>
</template>

<style scoped lang="scss"></style>
