export interface OrderFilterDto {
    id?: string;
    showProducts?: boolean;
    showCategories?: boolean;
    showMedia?: boolean;
    description?: string;
    status?: number;
    totalPrice?: number;
    discountPrice?: number;
    discountPercent?: number;
    discountCode?: string;
    sendPrice?: number;
    sendType?: number;
    payType?: number;
    payDateTime?: Date;
    payNumber?: string;
    receivedDate?: Date;
    userId?: string;
    productOwnerId?: string;
    pageSize?: number;
    pageNumber?: number;
    productusecase?: string;
}
export interface OrderCreateSummaryDto {
    userId?: string;
    title?: string;
    price?: number;
    orderType?: number;
    sectionCount?: number;
    startDate?: Date;
    endDate?: Date;
}
export interface OrderReadSummaryDto {
    month?: number;
    year?: number;
    count?: number;
    total?: number;
    useCase?: string;
}
export interface OrderCreateUpdateDto {
    id?: string;
    description?: string;
    status?: number;
    receivedDate?: Date;
    totalPrice?: number;
    discountPercent?: number;
    discountCode?: string;
    discountPrice?: number;
    sendPrice?: number;
    payType?: number;
    sendType?: number;
    orderDetails?: OrderDetail[];
}
export interface OrderDetailsCreateUpdateDto {
    id?: string;
    orderId?: string;
    productId?: string;
    price?: number;
    count?: number;
    categories?: string[];
}
export interface OrderDetail {
    id?: string;
    productId?: string;
    count?: number;
    categories?: string[];
}
