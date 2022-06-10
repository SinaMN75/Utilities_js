import {MediaCreateUpdateDto} from "./data";
import {getData, UtilitiesConstants} from "../index";

const axios = require('axios');

export class MediaDataSource {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async create(dto: MediaCreateUpdateDto,
                 onResponse: () => any,
                 onError: () => any) {
        let data = new FormData();

        dto.Files?.forEach(i => data.append('Files', i, Date.now().toString()));
        dto.Links?.forEach(i => data.append('Links', i));

        if (dto.UserId != null) data.append('UserId', dto.UserId);
        if (dto.AdId != null) data.append('AdId', dto.AdId);
        if (dto.EventId != null) data.append('EventId', dto.EventId);
        if (dto.CompanyId != null) data.append('CompanyId', dto.CompanyId);
        if (dto.MagazineId != null) data.append('MagazineId', dto.MagazineId);
        if (dto.PostId != null) data.append('PostId', dto.PostId);
        if (dto.ProductId != null) data.append('ProductId', dto.ProductId);
        if (dto.ProjectId != null) data.append('ProjectId', dto.ProjectId);
        if (dto.ServiceId != null) data.append('ServiceId', dto.ServiceId);
        if (dto.TutorialId != null) data.append('TutorialId', dto.TutorialId);
        if (dto.TenderId != null) data.append('TenderId', dto.TenderId);
       if(dto.UseCase != null)  data.append('UseCase', dto.UseCase);
       

        axios.post(
            `${this.baseUrl}Media`,
            data,
            {headers: {'Authorization': getData(UtilitiesConstants.TOKEN)}},
        )
             .then(function () {
                 console.log('SUCCESS!!');
                 onResponse();
             })
             .catch(function () {
                 console.log('FAILURE!!');
                 onError();
             });
    }

}