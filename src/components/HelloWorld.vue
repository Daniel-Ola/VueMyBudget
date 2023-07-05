<script setup lang="ts">
defineProps<{
  msg: string;
}>();
</script>

<template>
  <h1 class="text-4xl font-medium -top-2.5 text-center lg:text-left">
    {{ msg }}
  </h1>
  <h3 class="lg:text-left text-xl text-center">
    You can now conveniently
    <a href="https://vitejs.dev/" class="" target="_blank" rel="noopener"
      >Vue</a
    >
    +
    <a href="https://vuejs.org/" class="" target="_blank" rel="noopener"
      >Manage</a
    > your budget.
  </h3>
</template>
