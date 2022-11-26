export interface GenericResponse<T> {
    status?: number;
    message?: string;
    pageSize?: number;
    pageCount?: number;
    totalCount?: number;
    result?: T;
}
export interface Response {
    status?: number;
    message?: string;
}
export interface ResponseErr {
    status?: number;
    message?: string;
    response?: any;
}
