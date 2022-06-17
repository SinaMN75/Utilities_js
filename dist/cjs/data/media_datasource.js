"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaDataSource = void 0;
const index_1 = require("../index");
const axios = require('axios');
class MediaDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    create(dto, onResponse, onError) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let data = new FormData();
            (_a = dto.Files) === null || _a === void 0 ? void 0 : _a.forEach(i => data.append('Files', i));
            (_b = dto.Links) === null || _b === void 0 ? void 0 : _b.forEach(i => data.append('Links', i));
            if (dto.UserId != null)
                data.append('UserId', dto.UserId);
            if (dto.AdsId != null)
                data.append('AdId', dto.AdsId);
            if (dto.EventId != null)
                data.append('EventId', dto.EventId);
            if (dto.CompanyId != null)
                data.append('CompanyId', dto.CompanyId);
            if (dto.MagazineId != null)
                data.append('MagazineId', dto.MagazineId);
            if (dto.PostId != null)
                data.append('PostId', dto.PostId);
            if (dto.ProductId != null)
                data.append('ProductId', dto.ProductId);
            if (dto.ProjectId != null)
                data.append('ProjectId', dto.ProjectId);
            if (dto.ServiceId != null)
                data.append('ServiceId', dto.ServiceId);
            if (dto.TutorialId != null)
                data.append('TutorialId', dto.TutorialId);
            if (dto.TenderId != null)
                data.append('TenderId', dto.TenderId);
            if (dto.DailyPriceId != null)
                data.append('DailyPriceId', dto.DailyPriceId);
            if (dto.UseCase != null)
                data.append('UseCase', dto.UseCase);
            axios.post(`${this.baseUrl}Media`, data, { headers: { 'Authorization': (0, index_1.getData)(index_1.UtilitiesConstants.TOKEN),
                    'Content-type': "multipart/form-data" } })
                .then(function () {
                console.log('SUCCESS!!');
                onResponse();
            })
                .catch(function () {
                console.log('FAILURE!!');
                onError();
            });
        });
    }
}
exports.MediaDataSource = MediaDataSource;
//# sourceMappingURL=media_datasource.js.map