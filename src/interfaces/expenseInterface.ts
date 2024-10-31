import type { NullableString } from "@/interfaces/index";

export interface ExpenseInterface {
  id: number | null;
  amount: number;
  category: NullableString;
  description: NullableString;
  expenseDate: number;
  entryDate: number;
}
