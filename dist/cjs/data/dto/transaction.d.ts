import { ProductReadDto } from "./product";
import { UserReadDto } from "./user";
export interface TransactionReadDto {
    id?: string;
    userId?: string;
    amount?: number;
    descriptions?: string;
    statusId?: number;
    paymentId?: string;
    user?: UserReadDto;
    ad?: ProductReadDto;
    product?: ProductReadDto;
    tutorial?: ProductReadDto;
    tender?: ProductReadDto;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
