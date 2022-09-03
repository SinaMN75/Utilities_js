import { GenericResponse } from "./data";
import { TransactionReadDto } from "./dto/transaction";
export declare class TransactionDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    read(onResponse: (response: GenericResponse<TransactionReadDto[]>) => any, onError: (response: Response) => any): Promise<void>;
}
