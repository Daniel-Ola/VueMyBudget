import { defineStore } from "pinia";
import type { ExpenseInterface } from "@/interfaces/expenseInterface";

export const useExpenseStore = defineStore("user", {
  state: () => {
    return {
      expense: null as ExpenseInterface | null,
      expenses: null as ExpenseInterface[] | null,
      categories: null as string[] | null,
    };
  },
  getters: {
    getAllCategories: (state) => state.categories,
    getAllExpenses: (state) => state.expenses,
  },
  actions: {
    saveExpense(expense: ExpenseInterface) {
      if (this.categories?.includes(expense.category) != true) {
        this.saveCategory(expense.category);
      }
      expense.id = expense.entryDate.getMilliseconds();
      this.expense = expense;
      this.addToExpenseList();
    },
    addToExpenseList() {
      if (this.expenses != null) {
        this.expenses.push(this.expense!);
        return;
      }
      this.expenses = [this.expense!];
    },
    saveCategory(category: string) {
      if (this.categories === null) {
        this.categories = [category];
        return;
      }

      if (!this.categories.includes(category)) {
        this.categories.push(category);
      }
      return;
    },
    getExpenseById(expenseId: number): ExpenseInterface | null {
      return this.expenses?.find((expense) => expense.id === expenseId) ?? null;
    },
    getExpensesInCategory(categoryName: string): ExpenseInterface[] | null {
      return (
        this.expenses?.filter((expense) => expense.category === categoryName) ??
        null
      );
    },
  },
  persist: true,
});
