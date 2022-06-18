import {MediaCreateUpdateDto} from "./data";
import {getData, UtilitiesConstants} from "../index";

const axios = require('axios');

export class MediaDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: MediaCreateUpdateDto,
        onResponse: (response: Response) => any,
	             onError: (response: Response) => any) {
                //  onResponse: () => any,
                //  onError: () => any) {
        let data = new FormData();

        dto.Files?.forEach(i => data.append('Files', i));
        dto.Links?.forEach(i => data.append('Links', i));

        if (dto.UserId != null) data.append('UserId', dto.UserId);
        if (dto.ProductId != null) data.append('ProductId', dto.ProductId);
       if(dto.UseCase != null)  data.append('UseCase', dto.UseCase);

        axios.post(
            `${this.baseUrl}Media`,
            data,
            {headers: {'Authorization': getData(UtilitiesConstants.TOKEN) ,
            'Content-type': "multipart/form-data"}},
        )
             .then(function (response: any) {
                 console.log('SUCCESS!!');
                 onError(response.data);
             })
             .catch(function (response: any)  {
                 console.log('FAILURE!!');
                 onError(response);
             });
    }

}