type User = {
    id: number;
    name: string;
    email: string;
    role: string;
    banks: string[];
}

type BankAccount = {
    name: string;
    userId: number;
    cards: string[];
}

type Card = {
    name: string;
    bankAccountId: number;
}

type Expense = {
    id: number;
    name: string;
    amount: number;
    date: string;
    userId: number;
}

export { User, BankAccount, Card, Expense };