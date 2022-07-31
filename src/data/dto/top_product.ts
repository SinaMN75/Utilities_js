import {ProductReadDto} from "./dto";

export interface TopProductReadDto {
    id?:      string;
    product?: ProductReadDto;
}

export interface TopProductCreateUpdateDto {
    productId?: string;
}

