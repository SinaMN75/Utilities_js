import { GenericResponse } from "./data";
import { FormCreateDto, FormFieldDto } from "./dto/form";
export declare class FormDataSource {
    baseUrl: string;
    constructor(baseUrl: string);
    createFormField(dto: FormFieldDto, categoryId: string, onResponse: (response: GenericResponse<FormFieldDto>) => any, onError: (response: Response) => any): Promise<void>;
    readFormFields(categoryId: string, onResponse: (response: GenericResponse<FormFieldDto>) => any, onError: (response: Response) => any): Promise<void>;
    createForm(dto: FormCreateDto, onResponse: (response: GenericResponse<FormFieldDto>) => any, onError: (response: Response) => any): Promise<void>;
}
