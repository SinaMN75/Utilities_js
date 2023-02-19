import {  httpGet} from "../utils/http_interceptor";
import { GenericResponse, payOrderStripeDto } from "./data";

export class PaymentDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }


    async buyProduct(productId: string,
        onResponse: (response: GenericResponse<string>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Payment/BuyProduct/${productId}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
    async increaseWalletBalance(amount: string,
        onResponse: (response: GenericResponse<string>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Payment/IncreaseWalletBalance/${amount}`,
            response => onResponse(response),
            response => onError(response)
        );
    }


    async payOrderStripe(dto:payOrderStripeDto,
        onResponse: (response: GenericResponse<string>) => any,
        onError: (response: Response) => any) {
        await httpGet(`${this.baseUrl}Payment/PayOrderStripe/${dto.orderId}?param=${dto.params}`,
            response => onResponse(response),
            response => onError(response)
        );
    }
}