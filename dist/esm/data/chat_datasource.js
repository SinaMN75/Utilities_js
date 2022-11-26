var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { httpGet, httpPost, httpPut } from "../utils/http_interceptor";
export class ChatDataSource {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    create(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Chat`, dto, response => onResponse(response), response => onError(response));
        });
    }
    CreateGroupChatMessage(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Chat/CreateGroupChatMessage`, dto, response => onResponse(response), response => onError(response));
        });
    }
    CreateGroupChat(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPost(`${this.baseUrl}Chat/CreateGroupChat`, dto, response => onResponse(response), response => onError(response));
        });
    }
    UpdateGroupChatMessage(dto, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpPut(`${this.baseUrl}Chat/UpdateGroupChat`, dto, response => onResponse(response), response => onError(response));
        });
    }
    read(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Chat`, response => onResponse(response), response => onError(response));
        });
    }
    readByUserId(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Chat/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readGroupChatMessages(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Chat/ReadGroupChatMessages/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readGroupChatById(id, onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Chat/ReadGroupChatById/${id}`, response => onResponse(response), response => onError(response));
        });
    }
    readMyGroupChats(onResponse, onError) {
        return __awaiter(this, void 0, void 0, function* () {
            yield httpGet(`${this.baseUrl}Chat/ReadMyGroupChats`, response => onResponse(response), response => onError(response));
        });
    }
}
//# sourceMappingURL=chat_datasource.js.map