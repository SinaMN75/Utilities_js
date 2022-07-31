import { MediaCreateUpdateDto } from "./data";
import { getData, UtilitiesConstants } from "../index";
import { httpDelete } from "../utils/http_interceptor";

const axios = require('axios');

export class MediaDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: MediaCreateUpdateDto,
        onResponse: (response: Response) => any,
        onError: (response: Response) => any) {
        let data = new FormData();

        dto.Files?.forEach(i => data.append('Files', i));
        dto.Links?.forEach(i => data.append('Links', i));

        if (dto.UserId != null) data.append('UserId', dto.UserId);
        if (dto.ProductId != null) data.append('ProductId', dto.ProductId);
        if (dto.UseCase != null) data.append('UseCase', dto.UseCase);

        axios.post(
            `${this.baseUrl}Media`,
            data,
            {
                headers: {
                    'Authorization': getData(UtilitiesConstants.TOKEN),
                    'Content-type': "multipart/form-data"
                }
            },
        )
            .then(function (response: any) {
                console.log('SUCCESS!!');
                onResponse(response.data);
            })
            .catch(function (response: any) {
                console.log('FAILURE!!');
                onError(response);
            });
    }

    async delete(id: string, onResponse: (response: Response) => any, onError: (response: Response) => any) {
        await httpDelete(
            `${this.baseUrl}Media/${id}`,
            response => onResponse(response),
            response => onError(response)
        );
    }

}