import { db } from '../utils/db.server';
import {Expense} from "../types";

export const listExpenses = async (): Promise<Expense[]> => {
    return db.expense.findMany({
        select: {
            id: true,
            name: true,
            amount: true,
            date: true,
            userId: true
        }
    });
}