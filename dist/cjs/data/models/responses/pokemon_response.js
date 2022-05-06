"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonResponseConvert = void 0;
class PokemonResponseConvert {
    static fromJson(json) {
        return JSON.parse(json);
    }
    static toJson(value) {
        return JSON.stringify(value);
    }
}
exports.PokemonResponseConvert = PokemonResponseConvert;
//# sourceMappingURL=pokemon_response.js.map