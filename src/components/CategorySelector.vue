<script setup lang="ts">
import {useExpenseStore} from "@/stores/expense";
const props = defineProps(["modelValue"]);
const expense = useExpenseStore();
const categories = expense.getAllCategories;
</script>

<template>

  <ul>
    <li v-for="category in categories" :key="category">{{ category }}</li>
  </ul>

</template>

<style scoped lang="scss">

</style>