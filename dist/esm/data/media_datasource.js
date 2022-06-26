var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getData, UtilitiesConstants } from "../index";
import { httpDelete } from "../utils/http_interceptor";
const axios = require('axios');
export class MediaDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    create(dto, onResponse, onError) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            //  onResponse: () => any,
            //  onError: () => any) {
            let data = new FormData();
            (_a = dto.Files) === null || _a === void 0 ? void 0 : _a.forEach(i => data.append('Files', i));
            (_b = dto.Links) === null || _b === void 0 ? void 0 : _b.forEach(i => data.append('Links', i));
            if (dto.UserId != null)
                data.append('UserId', dto.UserId);
            if (dto.ProductId != null)
                data.append('ProductId', dto.ProductId);
            if (dto.UseCase != null)
                data.append('UseCase', dto.UseCase);
            axios.post(`${this.baseUrl}Media`, data, { headers: { 'Authorization': getData(UtilitiesConstants.TOKEN),
                    'Content-type': "multipart/form-data" } })
                .then(function (response) {
                console.log('SUCCESS!!');
                onError(response.data);
            })
                .catch(function (response) {
                console.log('FAILURE!!');
                onError(response);
            });
        });
    }
    delete(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpDelete(`${this.baseUrl}Media/${id}`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=media_datasource.js.map