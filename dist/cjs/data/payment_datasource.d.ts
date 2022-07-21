import { GenericResponse } from "./data";
export declare class PaymentDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    buyProduct(productId: string, onResponse: (response: GenericResponse<string>) => any, onError: (response: Response) => any): Promise<void>;
    increaseWalletBalance(amount: string, onResponse: (response: GenericResponse<string>) => any, onError: (response: Response) => any): Promise<void>;
}
