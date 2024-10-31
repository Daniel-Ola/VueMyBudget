<script setup lang="ts">
import { useUserStore } from "@/stores/user";
import { useExpenseStore } from "@/stores/expense";
import { reactive } from "vue";
import type { ExpenseInterface } from "@/interfaces/expenseInterface";
import CategorySelector from "@/components/CategorySelector.vue";

const user = useUserStore();
const expenseInput = reactive<ExpenseInterface>({
  id: Date.now(),
  amount: 0,
  category: null,
  description: null,
  expenseDate: Date.now(),
  entryDate: Date.now(),
});

const expense = useExpenseStore();
</script>

<template>
  <div class="flex flex-col w-full p-5">
    <h3>Enter new expense</h3>
    <div class="flex gap-x-5">
      <div>
        <input
          type="text"
          id="name"
          autocomplete="name"
          placeholder="Enter your preferred name"
          class="h-12 w-2/3 p-3 rounded-md"
          v-model="expenseInput.category"
        />
        <CategorySelector
            v-model="expenseInput.category"
        />
      </div>
      <input
        type="text"
        id="name"
        autocomplete="name"
        placeholder="Enter your preferred name"
        class="h-12 w-2/3 p-3 rounded-md"
        v-model="expenseInput.description"
      />
      <input
        type="text"
        id="name"
        autocomplete="name"
        placeholder="Enter your preferred name"
        class="h-12 w-2/3 p-3 rounded-md"
        v-model="expenseInput.am"
      />
    </div>
    <button class="bg-blue-700 w-24 p-3 rounded-md mt-5 ml-auto" type="button">
      Sign in
    </button>
  </div>
</template>
