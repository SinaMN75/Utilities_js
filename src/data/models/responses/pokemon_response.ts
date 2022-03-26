export interface PokemonResponse {
    abilities?: PokemonAbilityResponse[];
    base_experience?: number;
    forms?: PokemonSpeciesResponse[];
    height?: number;
    id?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    name?: string;
    order?: number;
    past_types?: any[];
    species?: PokemonSpeciesResponse;
    weight?: number;
}

export interface PokemonAbilityResponse {
    ability?: PokemonSpeciesResponse;
    is_hidden?: boolean;
    slot?: number;
}

export interface PokemonSpeciesResponse {
    name?: string;
    url?: string;
}

export class PokemonResponseConvert {
    public static fromJson(json: string): PokemonResponse {
        return JSON.parse(json);
    }

    public static toJson(value: PokemonResponse): string {
        return JSON.stringify(value);
    }
}
