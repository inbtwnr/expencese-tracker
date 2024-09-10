
import { body, validationResult } from "express-validator";

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

import * as UserService from './user.service';

